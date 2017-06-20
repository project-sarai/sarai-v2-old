import { Projects } from '/imports/api/projects/projects.js';
import { Meteor } from 'meteor/meteor';
import './projects.html';

Template.Projects.onCreated(function() {
  Meteor.subscribe('projects');
});

Template.Projects.helpers({
  projects: function() {
    return Projects.find({});
  },
});