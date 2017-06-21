// All reports-related publications

import { Meteor } from 'meteor/meteor';
import { Reports } from '../reports.js';

Meteor.publish('reports', function(limit) {
	var dl = limit || 2;
  return Reports.find({}, {limit: dl});
});
