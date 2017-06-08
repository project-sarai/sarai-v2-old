import { Logos } from '/imports/api/logos/logos.js';
import { Meteor } from 'meteor/meteor';
import './main-footer.html';

Template.MainFooter.onCreated(function MainFooterOnCreated() {
	Meteor.subscribe('logos.all');
});

Template.MainFooter.helpers({
  logos: function() {
    return Logos.find({});
  },
  isMainLogo: function() {
    return (this.name == 'SARAi') ? true:false;
  }
});

Template.MainFooter.events({

});
