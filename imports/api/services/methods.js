// Methods related to services

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Services } from './services.js';

Meteor.methods({
  'services.insert'(url, title, subtitle, text, text2, text3, image) {
    check(url, String);
    check(title, String);
    check(subtitle, String);
    check(text1, String);
    check(text2, String);
    check(text3, String);
    check(image, String);

    return Services.insert({
      url,
      title,
      subtitle,
      text1,
      text2,
      text3,
      image,
      createdAt: new Date(),
    });
  },
});