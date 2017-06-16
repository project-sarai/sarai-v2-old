import { Services } from '/imports/api/services/services.js';
import { Meteor } from 'meteor/meteor';
import './services.html';

Template.Services.onCreated(function() {
  Meteor.subscribe('services');
});

Template.Services.helpers({
  services: function() {
    return Services.find({});
  }
});

Template.Services.events({
  'click .servicessection': (event, template) => {
    var id = event.currentTarget.id;
    FlowRouter.go('/services/'+id);
  }
});
