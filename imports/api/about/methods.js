// Methods related to story

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { About } from './about.js';

Meteor.methods({
  'about.insert': (content) => {
    check(content, String);

    return About.insert({
      name,
      text,
      createdAt: new Date(),
    });
  },

  'cms-about-us-title-update': (text) => {
    About.update(
      { name: 'title' },
      {
        $set : {
          text
        }
      },
      { upsert: true }
    )
  },
  'cms-about-us-leaders-update': (list) => {
    About.update(
      { name: 'leaders' },
      {
        $set : {
          list
        }
      },
      { upsert: true }
    );
  },
  'cms-about-us-leaders-title-update': (title) => {
    About.update(
      { name: 'leaders' },
      {
        $set : {
          title: title
        }
      },
      { upsert: true }
    );
  },
});
