Template.ForecastView.onCreated(() => {
  Meteor.subscribe('sarai-weather-stations')
  Meteor.subscribe('weather-data-30')

  //default is ICALABAR18
  Session.set('stationID', 'ICALABAR18')
  Meteor.subscribe('dss-settings', () => {
    getForecast('ICALABAR18')
  })
})

Template.ForecastView.onRendered(() => {
  const stationID = Session.get('stationID')
  $('#preview-select-station').val(stationID)
})

Template.ForecastView.events({
  'change #preview-select-station': (e) => {
    const stationID = e.currentTarget.value
    Session.set('stationID', stationID)

    const forecast = getForecast(stationID)
  },

  'click .forecast-grid': (e) => {
    const stationID = Session.get('stationID')
    FlowRouter.go(`/accumulated-rainfall/${stationID}`)
  },

  'click .preview-more button': () => {
    // const stationID = Session.get('stationID')
    // FlowRouter.go(`/accumulated-rainfall/${stationID}`)
    FlowRouter.go(`/weather-monitoring`)
  },

  'click .download': (e) => {
    //Add (temporary) spinner
    $('<div class="download-div download-stub"><div class="mdl-spinner mdl-js-spinner is-active"></div><br/>The download may take a few minutes. <br/> Please wait until finished before clicking anything.<br/></div>').appendTo('#download-container')

    const download = downloadForecast()
  },

  'click #view-weather-monitoring': (e) => {
    Session.set('stationID', $('#preview-select-station').val())
  },

  'click #view-accumulated-rainfall': (e) => {
    Session.set('stationID', $('#preview-select-station').val())
    const stationID = Session.get('stationID')
    FlowRouter.go(`/accumulated-rainfall/${stationID}`)
  },
})

Template.ForecastView.helpers({
  stationID: () => {
    const stationID = Session.get('stationID')
    return stationID
  },

  dateToday: () => {
    const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const dateToday = weekdays[(new Date()).getDay()]

    return dateToday
  },

  forecastToday: () => {
      const stationID = Session.get('stationID')
      const forecast = Session.get('forecast')
      const weatherData = WeatherData.find({id: stationID})

      if (forecast && weatherData) {
        let forecastToday = forecast[0]
        const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())

        forecastToday.head = 'Today'
        forecastToday.today = true
        forecastToday['cumulative'] = rainfall

        return forecastToday
      }
  },

  forecastFirst3: () => {
    //quantitative preciptation forecast
    //probability of precipitation
    const forecast = Session.get('forecast')

    if (forecast) {
      return forecast.splice(1, 3)
    }
  },

  forecastNext4: () => {
    const forecast = Session.get('forecast')

    if (forecast) {
      return forecast.splice(4, 4)
    }
  },

  weatherStations: () => {
    const stations = WeatherStations.find({}).fetch()

    const processedStations = Meteor.previewHelpers.formatStationList(stations)

    return processedStations
  },

  currentlySelected: (curr) => {
    const stationID = Session.get('stationID')
    $('#preview-select-station').val(stationID)
  }
})

const getForecast = (stationID) => {

  const apiKey = DSSSettings.findOne({name: 'wunderground-api-key'}).value

  $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {
    // const result = Meteor.PreviewSampleData.sampleData()

    const completeTxtForecast = result.forecast.txt_forecast.forecastday

    const simpleForecast = result.forecast.simpleforecast.forecastday
    let txtForecast = []
    let forecast = []

    for (let a = 0; a < completeTxtForecast.length; a+=2) {
      txtForecast.push(completeTxtForecast[a])
    }

    simpleForecast.forEach((element, index) => {
      const date = `${element.date.day} ${element.date.monthname_short}`

      forecast.push({
        head: txtForecast[index].title.substring(0, 3),
        date,
        icon: txtForecast[index].icon_url,
        qpf: element.qpf_allday.mm,
        pop: element.pop })
    })

    Session.set('forecast', forecast)

  })

}

function sleep(milliseconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds);
}

const downloadForecast = () => {
  const stations = WeatherStations.find({}).fetch()
  stations.forEach((element, index) => {
    element.label = element.label.replace('SARAI', '')
    element.label = element.label.replace('(UPLB)', '')
    element.label = element.label.replace('WFP', '')
    element.label = element.label.replace('WPU', '')
    element.label = element.label.replace('APN', '')
    element.label.trim()
  })

  stations.sort((a, b) => {
    return a.label.charCodeAt(0) - b.label.charCodeAt(0)
  })

  let weatherforecast = []
  let loc_insert, date_insert, highTemp_insert, chanceRain_insert, rainfallToday_insert, numStations = stations.length

  stations.forEach((element, index) => {
    const location = element.label
    const stationID = element.id
    const past30Days = Meteor.previewHelpers.get30DayRainfall(WeatherData.find({id: stationID}).fetch())

    let nextSevenDays = 0
    let dateToday, highTemp, chanceRain, rainfallToday

    const apiKey = DSSSettings.findOne({name: 'wunderground-api-key'}).value
    
    
    $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {
      console.log('Fetching real-time data....')
      // console.log('location: '+location+' stationID: '+stationID+' past30Days: '+past30Days)
      const completeTxtForecast = result.forecast.txt_forecast.forecastday

      const simpleForecast = result.forecast.simpleforecast.forecastday
      let txtForecast = []
      // let forecast = []

      for (let a = 0; a < completeTxtForecast.length; a+=2) {
        txtForecast.push(completeTxtForecast[a])
      }

      simpleForecast.forEach((element, index) => {
        const date = `${element.date.month}/${element.date.day}`

        // forecast.push({
        //   head: txtForecast[index].title.substring(0, 3),
        //   date,
        //   high: element.high.celsius,
        //   icon: txtForecast[index].icon_url,
        //   qpf: element.qpf_allday.mm,
        //   pop: element.pop })

          if(element.period < 9){
            if((1 < element.period) && (element.period < 9)){
              nextSevenDays += element.qpf_allday.mm
            }
            if(element.period == 1){
              dateToday = date
              highTemp = element.high.celsius
              chanceRain = element.pop
              if(element.qpf_allday.mm == 0 || element.qpf_allday.mm == null){
                rainfallToday = '<1'
              }else{
                rainfallToday = element.qpf_allday.mm
              }
              loc_insert = location
              date_insert = date
              highTemp_insert = element.high.celsius
              chanceRain_insert = element.pop
              rainfallToday_insert = rainfallToday
            }
          }
          console.log('location: '+location+' date: '+date+' high temp: '+element.high.celsius+' % chance: '+element.pop+' rainfall: '+element.qpf_allday.mm+' nextSevenDays: '+nextSevenDays+' past30Days: '+past30Days+' date stamp: '+new Date())
      })

      if(nextSevenDays == 0 || nextSevenDays == null){
        nextSevenDays = '<1'
      }else{
        nextSevenDays = nextSevenDays
      }

      weatherforecast.push({
        location: loc_insert,
        dateToday: date_insert,
        highTemp: highTemp_insert,
        chanceRain: chanceRain_insert,
        rainfallToday: rainfallToday_insert,
        nextSevenDays: nextSevenDays,
        past30Days: past30Days,
        dateGenerated: new Date()
      })

      console.log('location: '+location+' date: '+dateToday+' high temp: '+highTemp+' % chance: '+chanceRain+' rainfall: '+rainfallToday+' nextSevenDays: '+nextSevenDays+' past30Days: '+past30Days+' date stamp: '+new Date())

      console.log('weatherforecast: '+weatherforecast)

      console.log('index: '+index)
      // if(index == (stations.length - 1)){
      if(--numStations == 0){
        const csvContent = CSV.unparse(weatherforecast)
        // window.open('data:text/csv;charset=utf-8,' + escape(csvContent), '_self', $('div.download-div').remove())

        const uri = 'data:application/csv;charset=utf-8,' + escape(csvContent);
        const link = document.createElement("a");
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = "weatherforecast - "+new Date()+".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        $('div.download-div').remove()
      }
      console.log('Sleeping for 6 seconds....')
      sleep(6000)
      console.log('Resuming activity....')
    })
  })  // end of stations for each
} 


/********* PREVIEW COL ***********/
Template.PreviewCol.helpers({
  formatQPF: (qpf) => {
    if (qpf < 1) {
      return "< 1"
    }
    else {
      return qpf
    }
  }
})