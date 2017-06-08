// All logos-related publications

import { Meteor } from 'meteor/meteor';
import { Logos } from '../logos.js';

Meteor.publish('logos.all', function() {
  return Logos.find();
});
