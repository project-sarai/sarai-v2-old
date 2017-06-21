import { Reports } from '/imports/api/reports/reports.js';
import { Meteor } from 'meteor/meteor';
import './reports-page.html';

Template.ReportsPage.onCreated(function() {
	Meteor.subscribe('reports');
});

Template.ReportsPage.helpers({
  reports: function() {
    var data = [];
    result = Reports.find({},{sort: {'date': 1}}).forEach(function(item){
      data.push(item);
    })
    return data;
  },
 	dateFormat: function(date) {
 		return moment(date).format('MM-DD-YYYY');
 	},
});
