import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './coconut.html';

import '../../../components/crops/coconut/coconut-links.js';

Template.Coconut.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Coconut.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
