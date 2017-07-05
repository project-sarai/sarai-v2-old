import './weather-stations.html';
import './weather-stations-row.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { WeatherStations } from '../../../../../api/weather/sarai-weather-stations.js';

Template.WeatherStationsCMS.onCreated(() => {
  Meteor.subscribe('sarai_weather_stations')
})

Template.WeatherStationsCMS.onRendered(() => {
  initWeatherStationDialog('cms-weather-station-dialog')
})

Template.WeatherStationsCMS.helpers({
  stations: () => {
    const stations = WeatherStations.find({}).fetch()

    return stations
  },

  stationID: () => {
    const stationID = Session.get('weather-station-id')

    return stationID
  }
})

Template.WeatherStationsCMS.events({
  'click #cms-weather-station-add': () => {
    this.action = 'add';
    const dialog = document.querySelector('#cms-weather-station-dialog')

    fillWeatherStationDialog('Add Weather Station');
  }
})

const initWeatherStationDialog = (dialogID) => {
  const dialog = document.querySelector(`#${dialogID}`)

  dialog.querySelector('.save').addEventListener('click', () => {

    let enabled = '';
    const action = this.action;
    const label = $('#cms-ws-label-input').val()
    const lat = parseFloat($('#cms-ws-lat-input').val())
    const long = parseFloat($('#cms-ws-long-input').val())
    const region = $('#cms-ws-region-input').val()
    let stationID = Session.get('weather-station-id')

    if(document.getElementById('enabledTrue').checked){
      enabled = true;
    }else{
      enabled = false;
    };

    if(action == 'add'){
      stationID = $('#cms-ws-id-input').val();
      Meteor.call('cms-weather-station-add', stationID, label, lat, long, region, enabled, (error, result) => {
        let toast = 'Saved changes to weather station'
        if (error) {
          toast = 'Unable to save changes'
        }
        showToast(toast)
      });
    }else{
      Meteor.call('cms-weather-station-edit', stationID, label, lat, long, (error, result) => {
        let toast = 'Saved changes to weather station'
        if (error) {
          toast = 'Unable to save changes'
        }
        showToast(toast)
      });
    }
  });
};

const fillWeatherStationDialog = (dialogTitle) => {
    const label = '';
    const lat = '';
    const long = '';

    $('#cms-weather-station-dialog-title').html(dialogTitle);
    $('#cms-ws-id').attr('style','display:inline;');
    $('#cms-ws-region').attr('style','display:inline;');
    $('#cms-ws-enabled').attr('style','display:inline;');
    $('#cms-ws-label-input').val(label);
    $('#cms-ws-lat-input').val(lat);
    $('#cms-ws-long-input').val(long);
};