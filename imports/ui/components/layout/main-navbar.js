import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './main-navbar.html';

Template.MainNavbar.onCreated(function() {
  Meteor.subscribe('links.all');
});

Template.MainNavbar.helpers({
  links: function() {
    return Links.find({});
  },
});
