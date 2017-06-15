import { Links } from '/imports/api/links/links.js';
import { Logos } from '/imports/api/logos/logos.js';
import { Meteor } from 'meteor/meteor';
import './main-navbar.html';

Template.MainNavbar.onCreated(function() {
  Meteor.subscribe('links');
  Meteor.subscribe('logos');
});

Template.MainNavbar.helpers({
  links: function() {
    return Links.findOne({title:'mainHeader'});
  },
  logos: function() {
    return Logos.find({});
  },
  isMainLogo: function() {
    return (this.name == 'SARAi') ? true:false;
  }
});
