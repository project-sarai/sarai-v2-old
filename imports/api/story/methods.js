// Methods related to story

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Story } from './story.js';

Meteor.methods({
  'story.insert': (content) => {
    check(content, String);

    return Story.insert({
      content,
      createdAt: new Date(),
    });
  },

  'cms-about-us-content-update': (title, content) => {
    Story.update(
      { name: 'origin' },
      {
        $set : {
          title,
          content
        }
      },
      { upsert: true }
    )
  }
});
