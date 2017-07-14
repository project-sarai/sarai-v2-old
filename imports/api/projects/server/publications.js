// All projects-related publications

import { Meteor } from 'meteor/meteor';
import { Projects } from '../projects.js';

Meteor.publish('projects', function() {
  return Projects.find();
});
