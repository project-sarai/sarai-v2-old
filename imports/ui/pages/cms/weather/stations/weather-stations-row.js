import './weather-stations-row.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { WeatherStations } from '../../../../../api/weather/sarai-weather-stations.js';

Template.WeatherStationRow.events({
  'click #edit-weather-station': function() {
    Session.set('weather-station-id', this.stationID)
    Session.set('ws-id', this._id)
    Session.set('weather-station-action', 'edit');
    
    const dialog = document.querySelector('#cms-weather-station-dialog')

    fillWeatherStationDialog(this._id)

  },
  'click #delete-weather-station': function() {
    Session.set('ws-id', this._id)
  }
})

const fillWeatherStationDialog = (stationID) => {
  $('#cms-ws-label').addClass('is-dirty')
  $('#cms-ws-lat').addClass('is-dirty')
  $('#cms-ws-long').addClass('is-dirty')

  Meteor.subscribe('weather_stations', stationID, () => {
    const record = WeatherStations.findOne({_id: stationID})
    const id = Session.get('weather-station-id');

    $('#cms-weather-station-dialog-title').html('Edit '+id);
    $('#cms-ws-id').attr('style','display:none;');
    $('#cms-ws-region').attr('style','display:none;');
    $('#cms-ws-enabled').attr('style','display:none;');
    $('#cms-ws-label-input').val(record.label)
    $('#cms-ws-lat-input').val(record.lat)
    $('#cms-ws-long-input').val(record.long)
  })
}