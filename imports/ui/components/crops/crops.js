import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import '../../pages/crops/rice/rice.html';

Template.Rice.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Rice.helpers({
  crops: function() {
    return Crops.find({});
  },
});