import { WeatherStations } from '/imports/api/weather/sarai-weather-stations.js';
import { HeatMapData } from '/imports/api/weather/sarai-heat-map-data.js';
import { DSSSettings } from '/imports/api/weather/sarai-dss-settings.js';
import { WeatherData } from '/imports/api/weather/sarai-weather-data.js';
import { Meteor } from 'meteor/meteor';
import './monitoring.html';
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
          useUTC : false
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
  const group = L.layerGroup()

  //Create map
  const weatherMap = L.map('weather-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 5,
      minZoom: 1
  });

  weatherMap.zoomControl.setPosition('bottomleft');

  L.tileLayer('https://api.mapbox.com/styles/v1/mcarandang/cj1jd9bo2000a2speyi8o7cle/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg',{
    maxZoom: 20,
    id: 'mapbox://styles/mcarandang/cj1jd9bo2000a2speyi8o7cle',
    accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
  }).addTo(weatherMap);

  var s = $('#meteogram-container');
  console.log(s);

  const showWeatherData = (stationID, label, event) => {
    Session.set('stationID', stationID)
    console.log(Session.get('apiKey'))
    displayWeatherData(stationID, Session.get('apiKey'))
  }

  Meteor.subscribe('weather_stations', () => {
    Meteor.autorun(() => {
      const stations = WeatherStations.find().fetch()
      let defaultStation = null

      for (let a = 0; a < stations.length; a++) {
        const station = stations[a]
        const x = station.coords[0]
        const y = station.coords[1]
        const label = stripTitle(station.label)
        const stationID = station.id

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

      this.stations = stations
      this.weatherMap = weatherMap
      this.group = group
    })
  })
});


Template.Monitoring.events({
  'click #forecast': () => {
    this.visibleChart = 'forecast'
    console.log(Session.get('apiKey'))
    activateButton('forecast')
    displayWeatherData(Session.get('stationID'), Session.get('apiKey'))
  },

  'click #accumulated': () => {
    this.visibleChart = 'accumulated'
    activateButton('accumulated')

    displayWeatherData(Session.get('stationID'), Session.get('apiKey'))
  },

  'click #year': () => {
    this.visibleChart =  'year'
    activateButton('year')

    displayWeatherData(Session.get('stationID'), Session.get('apiKey'))
  },
});

Template.Monitoring.helpers({
  
});

const getPlotLines = (ticks) => {
  let plotLines = []

  ticks.forEach((element, index) => {
    plotLines.push({
      color: '#bfbfbf',
      width: 1,
      value: element
    })
  })

  return plotLines
}

const featureURI = (features) => {
  let result = ''

  features.forEach((element, index) => {
    result += '/'
    result += element
  })

  return result
}

const getDailySeries = (data) => {
  let qpf = []
  let hlTemp = []

  for (let entry of data.forecast.simpleforecast.forecastday) {
    qpf.push(entry.qpf_allday.mm)
    hlTemp.push([entry.low.celsius, entry.high.celsius])
  }

  const dailySeries = {
    qpf,
    hlTemp
  }

  return dailySeries
}

const getHourlySeries = (data) => {
  let temp = []
  let pop = []
  let windSpd = []

  const forecast = data.hourly_forecast


  for (let entry of forecast) {

    const ftc = entry.FCTTIME;
    const utcDate = Date.UTC(ftc.year, ftc.mon-1, ftc.mday, ftc.hour);

    temp.push([utcDate, parseInt(entry.temp.metric)])
    pop.push([utcDate, parseInt(entry.pop)])
    windSpd.push([utcDate, parseInt(entry.wspd.metric)])
  }

  const result = {
    temp,
    pop,
    windSpd
  }

  return result
}

const getTickPositions = (data) => {
  const df = data.forecast.simpleforecast.forecastday

  const tickPositions = [];
  let year = 0;
  let month = 0;
  let day = 0;

  for (let entry of df) {
    const date = entry.date;
    year = date.year;
    month = date.month - 1;
    day = date.day;

    tickPositions.push(Date.UTC(year, month, day, 0))
  }

  const nextDay = day < 31 ? day + 1 : 1
  tickPositions.push(Date.UTC(year, month, nextDay, 0));

  return tickPositions;
}

const getAltTickPositions = (data) => {
  const df = data.forecast.simpleforecast.forecastday
  const altTickPositions = [];
  let year = 0;
  let month = 0;
  let day = 0;

  for (let entry of df) {
    const date = entry.date;
    year = date.year;
    month = date.month - 1;
    day = date.day;

    altTickPositions.push(Date.UTC(year, month, day, 12))
  }

  const nextDay = day < 31 ? day + 1 : 1
  altTickPositions.push(Date.UTC(year, month, nextDay, 12));

  return altTickPositions;
}

const getTickQPFMap = (ticks, qpf) => {
  let tickQPFMap = {}

  for (let a = 0; a < ticks.length - 1; a++) {
    tickQPFMap[ticks[a]] = qpf[a] + ' mm'
  }

  return tickQPFMap
}

const getTickTempMap = (ticks, temp) => {
  let tickTempMap = {}

  for (let a = 0; a < ticks.length - 1; a++) {
    tickTempMap[ticks[a]] = '<span style="color: #0853a8;">' + temp[a][0] + '°</span> | <span style="color: #ea7c0e;">' + temp[a][1] + '°</span>'
  }

  return tickTempMap
}

const forecast_constructChart = (chart) => {
  let chartOptions = {
    chart: {
      marginLeft: 50,
      marginRight: 30,
      // marginTop: 25,
      height: 200
    },

    legend: {
      enabled: false
    },

    title: {
      text: chart.title,
      align: 'left',
      margin: 0,
      x: 30
    },

    xAxis: [
      {

        crosshair: true,
        tickPositions: chart.tickPositions,
        tickPosition: 'inside',
        // opposite: true,
        events: {
          setExtremes: function syncExtremes(e) {
            var thisChart = this.chart
            if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
              Highcharts.each(Highcharts.charts, function (chart) {
                if (chart !== thisChart) {
                  if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
                  }
                }
              });
            }
          }
        },
        labels: {
          enabled: false
        },
        plotLines: chart.plotLines
      },

      {
        tickPositions: chart.altTickPositions, //chart.atpEnabled ? altTickPositions : null,
        opposite: true,
        tickWidth: 0,
        labels: {
          formatter: function () {
            var altTickLabels = chart.altTickLabels[this.value.toString()]
            altTickLabels = (altTickLabels == undefined) ? '' : altTickLabels

            var d = chart.dateTicksEnabled ? Highcharts.dateFormat('%e %b', new Date(this.value)) : ''

            var label =  d + '<br/>' + altTickLabels

            return label
          }
        },
        linkedTo: 0
      }

    ],

    yAxis: {
      labels: {
        format: '{value}' + chart.unit,
        style: {
            // color: '#ff1a1a',
            fontWeight: 'bold'
        }
      },
    },

    series: [{
      name: chart.name,
      id: chart.id,
      data: chart.data,
      type: 'spline',
      color: chart.color,
      tooltip: {
          valueDecimals: 0
      }
    }],

    tooltip: {
      formatter: function () {
        let s = '<b>' + Highcharts.dateFormat('%e %b - %H:00', new Date(this.x)) + '</b>';

        s += '<br />' + this.series.name + ': ' + this.y + chart.unit;
        return s;
      }
    }

  }

  // if (chart.atpEnabled) {

  //   chartOptions.xAxis[1][tickPositions] = altTickPositions
  // }

  return chartOptions
}

const displayWeatherData = (stationID, apiKey) => {

  //Remove any existing chart
  $('div.meteogram').remove()

  //Display temporary spinner
  $('<div class="meteogram meteogram-stub"><i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i></div>').appendTo('#meteogram-container')
  console.log(this.visibleChart)
  if (this.visibleChart == 'forecast' || this.visibleChart == undefined) {
    displayForecast(stationID, apiKey)
  } else if (this.visibleChart == 'accumulated') {
    displayAccumulatedRain(stationID, apiKey)
  } else {
    displayYear(stationID)
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

const displayForecast = (stationID, apiKey) => {
  console.log(apiKey)
  console.log(stationID)
  if (apiKey) { //Make sure key is available
    const dataFeatures = [ 'conditions', 'hourly10day', 'forecast10day']

    $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}${featureURI(dataFeatures)}/q/pws:${stationID}.json`, (result) => {

      const dailySeries = getDailySeries(result)
      const hourlySeries = getHourlySeries(result)
      //common data
      const tickPositions = getTickPositions(result)
      const altTickPositions = getAltTickPositions(result)

      const plotLines = getPlotLines(tickPositions)

      const tickQPFMap = getTickQPFMap(altTickPositions, dailySeries.qpf)
      const tickTempMap = getTickTempMap(altTickPositions, dailySeries.hlTemp)

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


      Highcharts.chart(tempDiv, forecast_constructChart(charts[0]));
      Highcharts.chart(rainDiv, forecast_constructChart(charts[1]));
    })
  }

}

const displayYear = (stationID) => {
  //remove any existing chart first
  $('div.meteogram').remove()
  Meteor.subscribe('heat_map_data', stationID, () => {
    const records = HeatMapData.find({stationID: stationID})

    console.log(records.fetch());
    const data = constructSeries(records.fetch());
    var chartDiv = document.createElement('div');
    var yearDiv = document.createElement('div');
    $(chartDiv).addClass('meteogram');
    $(yearDiv).attr('id','year-meteogram');
    $(yearDiv).appendTo(chartDiv);

    $('#meteogram-container').append(chartDiv);
    Highcharts.chart(yearDiv, yearly_constructChart(data[0], data[1]));
  })

}

const displayAccumulatedRain = (stationID, apiKey) => {
  const weatherData = WeatherData.find({id: stationID}).fetch()

  //have to reconcile missing entries
  if (weatherData) {
    const fixedData = fillMissingEntries(weatherData.reverse())

    const pastRainfall = getPastRainfall(fixedData)

    if (apiKey) {
      $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {

        // const result = Meteor.RainfallSampleData.sampleData()

        //remove any existing chart first
        $('div.meteogram').remove()

        const runningTotal = pastRainfall.pastAccRainfall[29].y

        const forecast = getForecast(result, runningTotal)

        const completeData = assembleRainfallData(pastRainfall.pastRainfall, pastRainfall.pastAccRainfall, forecast.forecastRainfall, forecast.forecastAccumulated)

        var chartDiv = document.createElement('div');
        var rainfallDiv = document.createElement('div');
        $(chartDiv).addClass('meteogram');
        $(rainfallDiv).attr('id','rainfall-meteogram');
        $(rainfallDiv).appendTo(chartDiv);

        $('#meteogram-container').append(chartDiv);
        Highcharts.chart(rainfallDiv, rainfall_constructChart(completeData.completeRainfall, completeData.completeAccumulatedRainfall, forecast.plotBandStart, forecast.plotBandEnd));

      })
    }
  }
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

//Year chart helpers

const constructSeries = (records) => {
  const rain = []
  const temp = []



  records.forEach((element, index) => {
    if (!element.dummy) {
      const rainEntry = []
      const tempEntry = []

      const date = Date.UTC(element.year, element.month - 1, element.day, 0)

      rainEntry.push(date)
      rainEntry.push(element.rain)

      tempEntry.push(date)
      tempEntry.push(element.tempAvg)

      rain.push(rainEntry)
      temp.push(tempEntry)
    }
  })

  rain.sort((a, b) => {
    return new Date(a[0]) - new Date(b[0])
  })

  temp.sort((a, b) => {
    return new Date(a[0]) - new Date(b[0])
  })

  return [rain, temp]
}

const yearly_constructChart = (rain, temp) => {

  return {
    // chart: {
    //   marginLeft: 20
    // },

    rangeSelector: {
      selected: 4
    },

    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: 'Rainfall',
          style: {
            color: '#0853a8'
          }
        },
        labels: {
          format: '{value} mm',
          style: {
            color: '#0853a8'
          }
        }
      },
      {
        lineWidth: 1,
        labels: {
          format: '{value}°C',
          style: {
            color: '#ea7c0e'
          }
        },
        title: {
          text: 'Average Temperature',
          style: {
            color: '#ea7c0e'
          }
        },
        opposite: false
      }
    ],

    tooltip: {
      xDateFormat: '%Y-%b-%d',
      split: true
    },

    series: [
      {
        name: 'Rainfall',
        // type: 'scatter',
        // lineWidth: 1,
        type: 'line',
        data: rain,
        color: '#0853a8',
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> mm<br/>'
        }
      },
      {
        name: 'Average Temperature',
        // type: 'scatter',
        // lineWidth: 1,
        type: 'line',
        data: temp,
        color: '#ea7c0e',
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> °C<br/>'
        }
      }
    ]

  }
}

// Accumulated rain helpers

const fillMissingEntries = (weatherData) => {
  let oneMonthAgo = new Date()
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
  oneMonthAgo.setHours(0,0,0,0)

  //Create array to hold the fixed data (full of empty entries first)
  let fixedData = []

  for (let a = 0; a < 30; a++) {
    let d = new Date()
    d.setDate(d.getDate() - (30 - a))
    d.setHours(0,0,0,0)
    const entry = {
      data: {
        rainfall: 0
      },
      dateUTC: d
    }

    fixedData.push(entry)
  }


  let b = 0 //counter for existing data in weatherData array

  for (let a = 0; a < 30; a++) {
    if (weatherData[b] && fixedData[a].dateUTC.getTime() == weatherData[b].dateUTC.getTime()) {
      //found date match in retrieved weather data

      fixedData[a].data.rainfall = weatherData[b].data.rainfall

      b+=1
    }
  }

  return fixedData
}

const getPastRainfall = (weatherData) => {
  let pastRainfall = []
  let pastAccRainfall = []
  let totalRainfall = 0

  for (let entry of weatherData) {
    totalRainfall += entry.data.rainfall

    pastRainfall.push({ x: entry.dateUTC, y: entry.data.rainfall})
    pastAccRainfall.push({ x: entry.dateUTC, y: Math.round(totalRainfall * 10) / 10})
  }

  return {
    pastRainfall,
    pastAccRainfall
  }
}

const getForecast = (forecast, runningTotal) => {
  const dailyRecords = forecast.forecast.simpleforecast.forecastday

  let forecastRainfall = []
  let forecastAccumulated = []
  let total = runningTotal

  for (let entry of dailyRecords) {
    const utcDate = Date.UTC(entry.date.year, entry.date.month - 1, entry.date.day);
    total += entry.qpf_allday.mm,

    forecastRainfall.push({ x: utcDate, y: entry.qpf_allday.mm})
    forecastAccumulated.push({ x: utcDate, y: total})
  }

  const firstEntry = dailyRecords[0]
  const lastEntry = dailyRecords[9]
  const plotBandStart = Date.UTC(firstEntry.date.year, firstEntry.date.month - 1, firstEntry.date.day)
  const plotBandEnd = Date.UTC(lastEntry.date.year, lastEntry.date.month - 1, lastEntry.date.day)

  return {
    forecastRainfall,
    forecastAccumulated,
    plotBandStart,
    plotBandEnd
  }
}

const assembleRainfallData = (pastRain, pastAcc, forecastRain, forecastAcc) => {

  const completeRainfall = pastRain.concat(forecastRain)
  const completeAccumulatedRainfall = pastAcc.concat(forecastAcc)

  return {
    completeRainfall,
    completeAccumulatedRainfall
  }
}

const rainfall_constructChart = (completeRainfall, completeAccumulatedRainfall, plotBandStart, plotBandEnd) => {
  return {
      title: {
          text: '30-day rainfall + 10-day forecast'
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function(e) {
                console.log(Highcharts.dateFormat('%e %b', new Date(e.target.x)))
              }
            }
          }
        }
      },
      yAxis: [
        {
          title: {
            text: 'Millimeters of Rain',
            style: {
              fontWeight: 'bold'
            }
          },
          labels: {
            format: '{value}',
            style: {
              color: '#0066cc',
              fontWeight: 'bold'
            }
          }
        }
      ],
      xAxis: [
        {
          labels: {
            formatter: function () {
              var s = Highcharts.dateFormat('%e %b', new Date(this.value + (new Date).getTimezoneOffset()));

              return s;
            }
          },

          plotBands: [{
            color: '#FCFFC5',
            from: plotBandStart,
            to: plotBandEnd,
            label: {
              text: '10-Day Forecast',
              align: 'center',
              style: {
                fontWeight: 'bold',
                color: '#707070'
              }
            }
          }],
        }
      ],
      series: [{
          type: 'column',
          name: 'Rainfall',
          data: completeRainfall
      }, {
          type: 'line',
          name: 'Accumulated Rainfall',
          data: completeAccumulatedRainfall
      }],

      tooltip: {
        borderColor: '#cccccc',
        formatter: function( ) {
          var s = '<b>' + Highcharts.dateFormat('%e %b', new Date(this.x)) + '</b>';

          s += '<br />' + this.points[0].series.name + ': ' + this.points[0].y + ' mm';
          s += '<br />' + this.points[1].series.name + ': ' + this.points[1].y + ' mm';


          // $.each(this.points, function () {
          //     s += '<br/>' + this.series.name + ': ' + this.y + 'm';
          // });

          return s;
        },
        shared: true
      }
  }
}

const getTotal = (data) => {
  let total30 = 0
  let total10 = 0

  let counter = 0

  data.forEach(function(element, index) {
    total30 += element.data.rainfall

    if (counter < 10) { // 10 Days
      total10 += element.data.rainfall

      counter++
    }
  })

  total10 = Math.round(total10 * 10) / 10
  total30 = Math.round(total30 * 10) / 10

  return [total10, total30]
}
