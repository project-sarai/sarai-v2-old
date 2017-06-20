import { Reports } from '/imports/api/reports/reports.js'
import { Meteor } from 'meteor/meteor'
import './reports.html'

<<<<<<< fc866c71da126fb795a248d87bfe2c42966e41d9
=======
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

>>>>>>> Added reports
Template.Reports.onCreated(function() {
  Meteor.subscribe('reports');
});

Template.Reports.helpers({
  reports: function() {
    return Reports.find({});
  }
});
<<<<<<< fc866c71da126fb795a248d87bfe2c42966e41d9

Template.Reports.events({
  'click .more-reports': function(e){
    e.preventDefault();
    FlowRouter.go('/reports');
  }
});
=======
>>>>>>> Added reports
