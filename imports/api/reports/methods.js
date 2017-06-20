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
  /*'cms-service-add': (title, tagline, thumbnail, info, media, col1, col2) => {

    Services.insert({
      title,
      tagline,
      thumbnail,
      info,
      media,
      col1,
      col2
    })
  },
  
  'cms-service-delete': (_id) => {
    Services.remove({_id})
  }*/
});