import { Links } from '/imports/api/links/links.js';
import { Logos } from '/imports/api/logos/logos.js';
import { Meteor } from 'meteor/meteor';
import './main-navbar.html';

Template.MainNavbar.onCreated(function() {
  Meteor.subscribe('links.all');
  Meteor.subscribe('logos.all');
});

Template.MainNavbar.helpers({
  links: function() {
    return Links.find({});
  },
  logos: function() {
    return Logos.find({});
  },
  isMainLogo: function() {
    return (this.name == 'SARAi') ? true:false;
  }
});
