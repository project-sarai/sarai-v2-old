import { Meteor } from 'meteor/meteor';
import { Weather } from '../weather.js';
import { DSSSettings } from '../sarai-dss-settings.js';
import { WeatherData } from '../sarai-weather-data.js';
import { HeatMapData } from '../sarai-heat-map-data.js';
import { WeatherStations } from '../sarai-weather-stations.js';

Meteor.publish('weather_stations', function() {
  return WeatherStations.find();
});
Meteor.publish('weather', function() {
  return Weather.find();
});

Meteor.publish('weather_data', function() {
  return WeatherData.find();
});

Meteor.publish('dss_settings', function() {
  return DSSSettings.find();
});

Meteor.publish('heat_map_data', function() {
  return HeatMapData.find();
});
