// All story-related publications

import { Meteor } from 'meteor/meteor';
import { Story } from '../story.js';

Meteor.publish('story.all', function() {
  return Story.find();
});
