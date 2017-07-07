import './download-forecast.html'
import '../lib/past-rain-helpers.js'
import { Meteor } from 'meteor/meteor'
import { WeatherStations } from '../../../../api/weather/sarai-weather-stations.js';
import { WeatherData } from '../../../../api/weather/sarai-weather-data.js';
import { DSSSettings } from '../../../../api/weather/sarai-dss-settings.js'

Template.DownloadForecast.onCreated(function() {
  Meteor.subscribe('main', 'topHeader');
  Meteor.subscribe('weather_stations');
  Meteor.subscribe('weather_data');
  Meteor.subscribe('dss_settings');
})

Template.DownloadForecast.events({
  'click .cms-download-rainfall': (e) => {
    // Add (temporary) spinner
    $('<div class="cms-download-div cms-download-stub"><div class="mdl-spinner mdl-js-spinner is-active"></div><br/>Fetching real-time data....<br/>This may take a few minutes. <br/> Please wait until finished before clicking anything.<br/></div>').appendTo('#cms-download-container')

    const download = downloadRainForecast()
  }
})

function sleep(milliseconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds);
}

const downloadRainForecast = () => {
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
    const past30Days = Meteor.pastRain.get30DayRainfall(WeatherData.find({id: stationID}).fetch())

    let nextSevenDays = 0
    let dateToday, highTemp, chanceRain, rainfallToday

    const apiKey = DSSSettings.findOne({name: 'wunderground-api-key'}).value
    
    // $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`, (result) => {
    
    $.ajax({
      url: `http:\/\/api.wunderground.com/api/${apiKey}/forecast10day/q/pws:${stationID}.json`,
      dataType: 'json',
      async: false,
      success: getResult=(result) => {

      // console.log('Sleeping for 6 seconds....')
      sleep(6000)
      // console.log('Resuming activity....')

      // console.log('Fetching real-time data....')
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
          // console.log('location: '+location+' date: '+date+' high temp: '+element.high.celsius+' % chance: '+element.pop+' rainfall: '+element.qpf_allday.mm+' nextSevenDays: '+nextSevenDays+' past30Days: '+past30Days+' date stamp: '+new Date())
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

      // console.log('location: '+location+' date: '+dateToday+' high temp: '+highTemp+' % chance: '+chanceRain+' rainfall: '+rainfallToday+' nextSevenDays: '+nextSevenDays+' past30Days: '+past30Days+' date stamp: '+new Date())
      // console.log('weatherforecast: '+weatherforecast)
      // console.log('index: '+index)
      // if(index == (stations.length - 1)){
      if(--numStations == 0){
        const csvContent = CSV.unparse(weatherforecast)
        // window.open('data:text/csv;charset=utf-8,' + escape(csvContent), '_self', $('div.cms-download-div').remove())

        const uri = 'data:application/csv;charset=utf-8,' + escape(csvContent);
        const link = document.createElement("a");
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = "weatherforecast - "+new Date()+".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        $('div.cms-download-div').remove()
      }
    }
    })
  })  // end of stations for each
} 