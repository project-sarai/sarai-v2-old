// Methods related to advisories

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Advisories } from './advisories.js';

Meteor.methods({
  'advisories.insert'(date, title, subtitle, body) {
    check(date, String);
    check(title, String);
    check(subtitle, String);
    check(body, String);

    return Advisories.insert({
      date,
      title,
      subtitle,
      body,
      createdAt: new Date(),
    });
  },
  'advisories.delete'(_id) {
    Advisories.remove({_id});
  },
  'advisories.edit' (_id, title, subtitle, body, date) {

    Advisories.update(
      { _id },
      {
        $set : {
          title,
          subtitle,
          body,
          date
        }
      },
      { upsert: true }
    );
  },
});
