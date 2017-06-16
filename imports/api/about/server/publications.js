// All story-related publications

import { Meteor } from 'meteor/meteor';
import { About } from '../about.js';

Meteor.publish('about', function() {
  return About.find();
});
