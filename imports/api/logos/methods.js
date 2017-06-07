// Methods related to logos

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Logos } from './logos.js';

Meteor.methods({
  'logos.insert'(name, value, url) {
    check(name, String);
    check(value, String);
    check(url, String);

    return Logos.insert({
      name,
      value,
      url,
      createdAt: new Date(),
    });
  },
});
