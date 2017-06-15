import { Slides } from '/imports/api/slides/slides.js';
import { Meteor } from 'meteor/meteor';
import './carousel.html';

Template.Carousel.onCreated(function() {
  Meteor.subscribe('slides');
});

Template.Carousel.helpers({
  slides: function() {
    return Slides.find({});
  },
  isActive: function () {
    return (this.rank === 1) ? 'active': '';
  }
});
