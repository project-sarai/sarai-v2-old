// All services-related publications

import { Meteor } from 'meteor/meteor';
import { Services } from '../services.js';

Meteor.publish('services', function() {
  return Services.find();
});
