import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './corn-about.html';

Template.CornAbout.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.CornAbout.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
