import { Advisories } from '/imports/api/advisories/advisories.js';
import { Meteor } from 'meteor/meteor';
import './advisories-content.html';

Template.AdvisoriesContent.onCreated(function() {
  Meteor.subscribe('advisories');
});

Template.AdvisoriesContent.helpers({
  advisories: function() {
    var data = [];
    result = Advisories.find({},{sort: {'date': 1}}).forEach(function(item){
      data.push(item);
    })
    return data;
  },
});
