import { Services } from '/imports/api/services/services.js';
import { Meteor } from 'meteor/meteor';
import './services.html';

Template.Services.onCreated(function() {
  Meteor.subscribe('services.all');
});

Template.Services.helpers({
  services: function() {
    return Services.find({});
  }
});
