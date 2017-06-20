// All advisories-related publications

import { Meteor } from 'meteor/meteor';
import { Advisories } from '../advisories.js';

Meteor.publish('advisories', function() {
  return Advisories.find();
});
