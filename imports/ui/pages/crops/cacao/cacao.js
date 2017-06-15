import { Crops } from '/imports/api/crops/crops.js';
import { Meteor } from 'meteor/meteor';
import './cacao.html';

import '../../../components/crops/cacao/cacao-links.js';

Template.Cacao.onCreated(function() {
  Meteor.subscribe('crops.all');
});

Template.Cacao.helpers({
  crops: function() {
    return Crops.find({});
  },
  getCrop: function(crop) {
    return Crops.find({"name":crop});
  }
});
