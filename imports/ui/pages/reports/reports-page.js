import { Reports } from '/imports/api/reports/reports.js';
import { Meteor } from 'meteor/meteor';
import './reports-page.html';

Template.ReportsPage.onCreated(function() {
	Meteor.subscribe('reports');
});

Template.ReportsPage.helpers({
<<<<<<< 5ec7109a3710ee5f33582d41d77d34ec980b1ae8
	reports: function() {
    	var data = [];
=======
  reports: function() {
    var data = [];
>>>>>>> Added reports page
    result = Reports.find({},{sort: {'date': 1}}).forEach(function(item){
      data.push(item);
    })
    return data;
  },
<<<<<<< 5ec7109a3710ee5f33582d41d77d34ec980b1ae8
 	dateFormat: function(date) {
 		return moment(date).format('MM-DD-YYYY');
 	},
});
=======
});
>>>>>>> Added reports page
