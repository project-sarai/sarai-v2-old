Template.SaraiHome.onCreated(function() {
  Meteor.subscribe('main');
  Meteor.subscribe('services');
  Meteor.subscribe('blog');
})