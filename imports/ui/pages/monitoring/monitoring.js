import { WeatherStations } from '/imports/api/weather/sarai-weather-stations.js';
import { HeatMapData } from '/imports/api/weather/sarai-heat-map-data.js';
import { DSSSettings } from '/imports/api/weather/sarai-dss-settings.js';
import { WeatherData } from '/imports/api/weather/sarai-weather-data.js';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import './monitoring.html';
import './helpers/chart-helpers.js';
import './helpers/year-chart-helpers.js';
import './helpers/accumulated-rain-helpers.js';
import '../../components/advisories/advisories-subheader.js';

Template.Monitoring.onCreated(function() {
  Meteor.subscribe('weather_stations')
  Meteor.subscribe('weather_data')
  Meteor.subscribe('dss_settings', () => {
    const record = DSSSettings.findOne({name: 'wunderground-api-key'})
    this.apiKey = record.value

    //display default station
    Session.set('stationID', 'ICALABAR18')
    Session.set('apiKey', this.apiKey)

    this.visibleChart = 'forecast'
    $('#forecast button').addClass('active')
    displayWeatherData(Session.get('stationID'), Session.get('apiKey'))

  })

  Highcharts.setOptions({
  // This is for all plots, change Date axis to local timezone
      global : {
          useUTC : true,

      }
  });
});

Template.Monitoring.onRendered(function() {
  
  /****MAP****/

  // Settings Bounds of map
  const northEast = L.latLng(21.924058, 115.342984);
  const southWest = L.latLng(4.566972, 128.614468);
  const bounds = L.latLngBounds(southWest, northEast);

  //Create group
  group = L.layerGroup()

  //Create map
  const weatherMap = L.map('weather-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 5,
      minZoom: 1
  });
  //var marker = L.marker([14.155, 121.248]).addTo(weatherMap);
  weatherMap.zoomControl.setPosition('bottomleft');

  L.tileLayer('https://api.mapbox.com/styles/v1/mcarandang/cj1jd9bo2000a2speyi8o7cle/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg',{
    maxZoom: 20,
    id: 'mapbox://styles/mcarandang/cj1jd9bo2000a2speyi8o7cle',
    accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
  }).addTo(weatherMap);

  const showWeatherData = (stationID, label, event) => {
    Session.set('stationID', stationID)
    displayWeatherData(stationID, Session.get('apiKey'))
  }

  Meteor.subscribe('weather_stations', () => {
    Meteor.autorun(() => {
      const stations = WeatherStations.find().fetch()
      let defaultStation = null

      for (let a = 0; a < stations.length; a++) {
        const station = stations[a]
        const x = station.lat
        const y = station.long
        const label = stripTitle(station.label)
        const stationID = station.stationID

        const marker = new L.marker([x, y])
        .bindPopup(`<h5>${label}</h5>`)
        .on('click', L.bind(showWeatherData, null, stationID, label))

        group.addLayer(marker)

        stations[a]['markerID'] = group.getLayerId(marker)

        //save option value, pan to marker, and open popup
        if (stationID == 'ICALABAR18') {
          defaultStation = group.getLayerId(marker)
          weatherMap.setView(marker.getLatLng(), 10)
          marker.openPopup()
        }
      }

      group.addTo(weatherMap)

      //Add stations to dropdown
      const stationsDropdown = $('#monitoring-station-select')

      //Add stations to dropdown
      stations.forEach((element, index) => {
        const option = document.createElement('option')

        option.innerHTML = `${stripTitle(element.label)}`
        option.setAttribute('value', element.markerID)

        stationsDropdown.append(option)
      })

      //Set default station in dropdown
      stationsDropdown.val(defaultStation)

      Session.set('stations', stations)
      this.stations = stations;
      this.weatherMap = weatherMap;
      this.group = group
    })
  })
});

Template.Monitoring.events({
  'click #forecast': () => {
    this.visibleChart = 'forecast'
    activateButton('forecast')
    displayWeatherData(Session.get('stationID'), Template.instance().apiKey)
  },

  'click #accumulated': () => {
    this.visibleChart = 'accumulated'
    activateButton('accumulated')

    displayWeatherData(Session.get('stationID'), Template.instance().apiKey)
  },

  'click #year': () => {
    this.visibleChart =  'year'
    activateButton('year')

    displayWeatherData(Session.get('stationID'), Template.instance().apiKey)
  },

  'change #monitoring-station-select': () => {
    const markerID = $('#monitoring-station-select').val()
    const station = Template.instance().stations.find((element) => {
      return element.markerID == markerID
    })

    const marker = Template.instance().group.getLayer(markerID)
    Template.instance().weatherMap.setView(marker.getLatLng(), 10)
    marker.openPopup()
    displayWeatherData(station.stationID, Template.instance().apiKey)
  }
});

Template.Monitoring.helpers({
  forecastIsSelected: () => {
    if (this.visibleChart == 'forecast' ) {
      return true
    } else {
      return false
    }
  },

  stationsRainfall: () => {
    const stationsRainfall = WeatherStations.find({}, {fields: {id: 1}}).fetch()

    stationsRainfall.forEach((element, index) => {
      const weatherData = WeatherData.find({id: element.id}).fetch()

      const rainfallTotals = Meteor.AccumulatedRainfall.getTotal(weatherData)

      element['rainfall10'] = rainfallTotals[0]
      element['rainfall30'] = rainfallTotals[1]
    })

    return stationsRainfall
  },

  stations: () => {
    const stations = WeatherStations.find({}).fetch()

    stations.forEach((element, index) => {
      element.label = stripTitle(element.label)
    })

    return stations
  }
});

const displayWeatherData = (stationID, apiKey) => {

  //Remove any existing chart
  $('div.meteogram').remove()

  //Display temporary spinner
  $('<div class="meteogram meteogram-stub"><i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i></div>').appendTo('#meteogram-container')
  if (this.visibleChart == 'forecast' || this.visibleChart == undefined) {
    displayForecast(stationID, apiKey)
  } else if (this.visibleChart == 'accumulated') {
    displayAccumulatedRain(stationID, apiKey)
  } else {
    displayYear(stationID)
  }
}

const displayForecast = (stationID, apiKey) => {

  if (apiKey) { //Make sure key is available
    const dataFeatures = [ 'conditions', 'hourly10day', 'forecast10day']

    $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}${Meteor.chartHelpers.featureURI(dataFeatures)}/q/pws:${stationID}.json`, (result) => {
      console.log(stationID)
      const dailySeries = Meteor.chartHelpers.getDailySeries(result)
      const hourlySeries = Meteor.chartHelpers.getHourlySeries(result)
      //common data
      const tickPositions = Meteor.chartHelpers.getTickPositions(result)
      const altTickPositions = Meteor.chartHelpers.getAltTickPositions(result)

      const plotLines = Meteor.chartHelpers.getPlotLines(tickPositions)

      const tickQPFMap = Meteor.chartHelpers.getTickQPFMap(altTickPositions, dailySeries.qpf)
      const tickTempMap = Meteor.chartHelpers.getTickTempMap(altTickPositions, dailySeries.hlTemp)

      const charts = [
        {
          element: '#temp-meteogram',
          title: 'Temperature',
          name: 'Temp',
          id: 'temp',
          data: hourlySeries.temp,
          unit: '°C',
          tickPositions: tickPositions,
          altTickPositions: altTickPositions,
          color: '#ff8c1a',
          dateTicksEnabled: true,
          plotLines,
          altTickLabels: tickTempMap,
        },
        {
          element: '#rain-meteogram',
          title: 'Chance of Rain',
          name: 'Chance of Rain',
          id: 'pop',
          data: hourlySeries.pop,
          unit: '%',
          tickPositions: tickPositions,
          altTickPositions: altTickPositions,
          color: '#0073e6',
          dateTicksEnabled: false,
          plotLines,
          altTickLabels: tickQPFMap
        }
      ]

      //remove any existing charts first
      $('div.meteogram').remove()

      //add new charts
      var chartDiv = document.createElement('div');
      var tempDiv = document.createElement('div');
      var rainDiv = document.createElement('div');
      $(chartDiv).addClass('meteogram');
      $(tempDiv).attr('id','temp-meteogram');
      $(rainDiv).attr('id','rain-meteogram');
      $(tempDiv).appendTo(chartDiv);
      $(rainDiv).appendTo(chartDiv);
      
      $('#meteogram-container').append(chartDiv);

      //add new charts
      // charts.forEach((chart, index) => {
      //   $('<div class="meteogram">')
      //     .appendTo('#meteogram-container')
      //     .highcharts(constructChart(chart))
      // })


      Highcharts.chart(tempDiv, Meteor.chartHelpers.constructChart(charts[0]));
      Highcharts.chart(rainDiv, Meteor.chartHelpers.constructChart(charts[1]));
    })
  }

}

const displayYear = (stationID) => {
  //remove any existing chart first
  $('div.meteogram').remove()
  Meteor.subscribe('heat_map_data', stationID, () => {
    const records = HeatMapData.find({stationID: stationID})
    const data = Meteor.YearWeather.constructSeries(records.fetch());
    var chartDiv = document.createElement('div');
    var yearDiv = document.createElement('div');
    $(chartDiv).addClass('meteogram');
    $(yearDiv).attr('id','year-meteogram');
    $(yearDiv).appendTo(chartDiv);

    $('#meteogram-container').append(chartDiv);
    Highcharts.chart(yearDiv, Meteor.YearWeather.constructChart(data[0], data[1]));
  })

}

const displayAccumulatedRain = (stationID, apiKey) => {
  const weatherData = WeatherData.find({id: stationID}).fetch()
  //have to reconcile missing entries
  if (weatherData) {
    const fixedData = Meteor.AccumulatedRainfall.fillMissingEntries(weatherData.reverse())

    const pastRainfall = Meteor.AccumulatedRainfall.getPastRainfall(fixedData)

    if (apiKey) {

      $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {

        // const result = Meteor.RainfallSampleData.sampleData()

        //remove any existing chart first
        $('div.meteogram').remove()

        const runningTotal = pastRainfall.pastAccRainfall[29].y

        const forecast = Meteor.AccumulatedRainfall.getForecast(result, runningTotal)

        const completeData = Meteor.AccumulatedRainfall.assembleRainfallData(pastRainfall.pastRainfall, pastRainfall.pastAccRainfall, forecast.forecastRainfall, forecast.forecastAccumulated)

        console.log(completeData)

        var chartDiv = document.createElement('div');
        var rainfallDiv = document.createElement('div');
        $(chartDiv).addClass('meteogram');
        $(rainfallDiv).attr('id','rainfall-meteogram');
        $(rainfallDiv).appendTo(chartDiv);

        $('#meteogram-container').append(chartDiv);
        Highcharts.chart(rainfallDiv, Meteor.AccumulatedRainfall.constructChart(completeData.completeRainfall, completeData.completeAccumulatedRainfall, forecast.plotBandStart, forecast.plotBandEnd));

      })
    }
  }
}

const activateButton = (id) => {
  $(`#${id} > button`).addClass('active')

  const charts = ['forecast', 'accumulated', 'year']

  charts.forEach((element) => {
    if (element != id) {
      $(`#${element} > button`).removeClass('active')
    }
  })
}

const stripTitle = (title) => {
  let result = title

  result = result.replace('SARAI', '')
  result = result.replace('(UPLB)', '')
  result = result.replace('WFP', '')
  result = result.replace('WPU', '')
  result = result.replace('APN', '')

  return result
}
