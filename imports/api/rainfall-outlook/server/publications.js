import { Meteor } from 'meteor/meteor';
//import { WeatherOutlook } from '../weather-outlook.js';
//import { Regions } from '../regions.js';
//import { Provinces } from '../provinces.js';

Meteor.publish('provinces', function () {
  return Provinces.find();
});

Meteor.publish('regions', function () {
  return Regions.find();
});

Meteor.publish('weather-outlook', function () {
  return WeatherOutlook.find();
});