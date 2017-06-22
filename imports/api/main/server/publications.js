import { Meteor } from 'meteor/meteor';
import { Main } from '../main.js';

Meteor.publish('main', function() {
  return Main.find();
});
