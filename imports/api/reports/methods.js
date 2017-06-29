// Methods related to reports

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reports } from './reports.js';

Meteor.methods({
  'reports.insert'(title, file, date, thumbnail) {
    check(title, String);
    check(file, String);
    check(date, String);
    check(thumbnail, String);

    return Reports.insert({
      title,
      file,
      date,
      thumbnail,
      createdAt: new Date(),
    });
  }
});
