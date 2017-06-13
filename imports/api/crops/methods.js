// Methods related to crops

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Crops } from './crops.js';

Meteor.methods({
  'crops.insert'(name, about, bannerImg) {
    check(name, String);
    check(about, String);
    check(bannerImg, String);

    return Crops.insert({
      name,
      about,
      bannerImg,
      createdAt: new Date(),
    });
  },
});
