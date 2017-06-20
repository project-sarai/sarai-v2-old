import { Reports } from '/imports/api/reports/reports.js'
import { Meteor } from 'meteor/meteor'
import './reports.html'

/*Template.Reports.helpers({
  reportsMain: function(){
    var obj = Main.findOne({'name': 'reports'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  reports: function(){
  	var obj = Main.findOne({'name': 'reports'});
    if(typeof obj !== 'undefined'){
      return obj.reports;
    }
  }
});

*/

Template.Reports.onCreated(function() {
  Meteor.subscribe('reports');
});

Template.Reports.helpers({
  reports: function() {
    return Reports.find({});
  }
});
