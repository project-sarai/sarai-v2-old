// Methods related to slides

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Slides } from './slides.js';

Meteor.methods({
  'slides.insert'(title, subtitle, text, buttonText, buttonURL, rank , image) {
    check(url, String);
    check(title, String);
    check(text, String);
    check(buttonText, String);
    check(button, String);
    check(image, String);

    return Slides.insert({
      title,
      subtitle,
      text,
      buttonText,
      buttonURL,
      rank,
      image,
      createdAt: new Date(),
    });
  },
});
