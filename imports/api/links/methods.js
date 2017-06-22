// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert': (title, url) => {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  'cms-header-links-update': (links) => {
    Links.update(
      { title: 'mainHeader'},
      {
        $set: {
          links
        }
      },
      { upsert: true }
    )
  },

  'cms-header-button-toggle': () => {
    let buttonEnabled = Links.findOne({title: 'mainHeader'}).buttonEnabled

    buttonEnabled = buttonEnabled ? false : true

    Links.update(
      { title: 'mainHeader'},
      {
        $set: {
          buttonEnabled
        }
      },
      { upsert: true }
    )
  },
  'cms-header-icon-update': (link) => {
    Links.update(
      { title: 'mainHeader' },
      {
        $set : {
          img: link
        }
      },
      { upsert: true }
    );
  }
});
