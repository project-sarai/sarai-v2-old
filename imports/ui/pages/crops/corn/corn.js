import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './corn.html';

import '../../../components/crops/corn/corn-links.js';
import '../../../components/crops/corn/corn-trivia.js';
import '../../../components/crops/corn/corn-nutrient.js';

Template.Corn.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Corn.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
