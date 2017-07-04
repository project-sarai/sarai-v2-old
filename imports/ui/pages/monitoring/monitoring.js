import { Tracker } from 'meteor/tracker'
import './monitoring.html';

Template.Monitoring.onCreated(function() {
  Meteor.subscribe('weather_stations')

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
  //var marker = L.marker([14.155, 121.248]).addTo(weatherMap);
  weatherMap.zoomControl.setPosition('bottomleft');

  L.tileLayer('https://api.mapbox.com/styles/v1/mcarandang/cj1jd9bo2000a2speyi8o7cle/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg',{
    maxZoom: 20,
    id: 'mapbox://styles/mcarandang/cj1jd9bo2000a2speyi8o7cle',
    accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
  }).addTo(weatherMap);

  Meteor.subscribe('weather_stations', () => {
    Tracker.autorun(() => {
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

      this.stations = stations
      this.weatherMap = weatherMap
      this.group = group
    })
  })

  var s = $('#meteogram-container');
  console.log(s);

  // NOTE THAT THIS IS JUST A SAMPLE FROM THE HIGHCHARTS SITE
  Highcharts.chart('meteogram-container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]

  });

});

Template.Monitoring.helpers({
  stations: () => {
    const stations = WeatherStations.find({}).fetch()

    stations.forEach((element, index) => {
      element.label = stripTitle(element.label)
    })

  return stations
  }
});

Template.Monitoring.events({
  'change #monitoring-station-select': () => {
    const markerID = $('#monitoring-station-select').val()

    const station = this.stations.find((element) => {
      return element.markerID == markerID
    })

    const marker = this.group.getLayer(markerID)

    this.weatherMap.setView(marker.getLatLng(), 10)
    marker.openPopup()
  }
})

const stripTitle = (title) => {
  let result = title

  result = result.replace('SARAI', '')
  result = result.replace('(UPLB)', '')
  result = result.replace('WFP', '')
  result = result.replace('WPU', '')
  result = result.replace('APN', '')

  return result
}
