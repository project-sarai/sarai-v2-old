import { Reports } from '/imports/api/reports/reports.js'
import { Meteor } from 'meteor/meteor'
import './reports.html'

Template.Reports.onCreated(function() {
  Meteor.subscribe('reports');
});

Template.Reports.helpers({
  reports: function() {
    return Reports.find({});
  }
});

Template.Reports.events({
  'click .more-reports': function(e){
    e.preventDefault();
    FlowRouter.go('/reports');
  }
});