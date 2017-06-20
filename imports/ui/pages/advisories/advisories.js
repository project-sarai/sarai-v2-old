import { Advisories } from '/imports/api/advisories/advisories.js';
import { Meteor } from 'meteor/meteor';
import './advisories.html';

Template.Advisories.onCreated(function() {
  Meteor.subscribe('advisories');
});

Template.Advisories.helpers({
  advisories: function() {
    var data = [];
    result = Advisories.find({},{sort: {'date': 1}}).forEach(function(item){
      data.push(item);
    })
    return data;
  },
});
