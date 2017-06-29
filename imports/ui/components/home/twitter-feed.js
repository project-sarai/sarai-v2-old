import { Meteor } from 'meteor/meteor';
import './twitter-feed.html';

Template.TwitterFeed.events({
  'click #twitter-button': function(event, template){
    var div = $(event.target);
    if ( div.parent().hasClass( "max" ) || div.parent().parent().hasClass( "max" ) ) {
      div.closest('#twitter-feed')
        .removeClass('max')
        .addClass('min');
      $('#toggle-visibility')
        .removeClass('glyphicon-chevron-down')
        .addClass('glyphicon-chevron-up');      
      $('#twitter-label').text('Twitter Feed').fadeIn();
    } else {
      div.closest('#twitter-feed')
        .removeClass('min')
        .addClass('max');
      $('#toggle-visibility')
        .removeClass('glyphicon-chevron-up')
        .addClass('glyphicon-chevron-down'); 
      $('#twitter-label').text('').fadeOut();
    }
  },
})
