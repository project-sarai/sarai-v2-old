import { Story } from '/imports/api/story/story.js';
import { Meteor } from 'meteor/meteor';
import './our-story.html';

Template.OurStory.onCreated(function() {
  Meteor.subscribe('story');
});

Template.OurStory.helpers({
  story: function() {
    return Story.find({});
  },
});

