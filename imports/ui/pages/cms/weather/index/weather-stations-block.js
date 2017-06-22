import './weather-stations-block.html';
import { Meteor } from 'meteor/meteor';
import { WeatherStations } from '../../../../../api/weather/sarai-weather-stations.js';

Template.WeatherStationsBlock.onCreated(() => {
  Meteor.subscribe('record-counts', 'weather-stations')
  Meteor.subscribe('record-counts', 'sarai-weather-stations')

  Meteor.subscribe('quick-weather-stations')
})

Template.WeatherStationsBlock.helpers({
  stationCount: () => {
    const record = RecordCounts.findOne({name: 'weather-stations'})

    return record && record.value
  },

  saraiStationCount: () => {
    const record = RecordCounts.findOne({name: 'sarai-weather-stations'})

    return record && record.value
  },

  aFewStations: () => {
    const stations = WeatherStations.find({}).fetch()

    return stations
  }
})