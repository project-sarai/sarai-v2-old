import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './banana.html';

import '../../../components/crops/banana/banana-links.js';
import '../../../components/crops/banana/banana-trivia.js';

Template.Banana.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Banana.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
