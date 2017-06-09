import { Projects } from '/imports/api/projects/projects.js';
import { Meteor } from 'meteor/meteor';
import './project.html';

Template.Project.onCreated(function() {
  Meteor.subscribe('projects.all');
});

Template.Project.helpers({
  projects: function() {
    return Projects.find({});
  }
});
