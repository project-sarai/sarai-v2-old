import { Reports } from '/imports/api/reports/reports.js';
import { Meteor } from 'meteor/meteor';
import './reports-page.html';

Template.Reports.onCreated(function() {
	Meteor.subscribe('reports');
})