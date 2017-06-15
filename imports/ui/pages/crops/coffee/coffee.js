import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './coffee.html';

import '../../../components/crops/coffee/coffee-links.js';

Template.Coffee.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Coffee.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
