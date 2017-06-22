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
  'cms-service-add': (title, tagline, thumbnail, info, media, col1, col2) => {

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
  },

  'cms-service-update': (_id, title, tagline, ura, projectLeaders, crops, experts, challenge, solution, thumbnail) => {

    Services.update(
      { _id },
      {
        $set : {
          url,
          title,
          tagline,
          ura,
          projectLeaders,
          crops,
          experts,
          challenge,
          solution,
          thumbnail,
        }
      },
      { upsert: true }
    );
  },

  'cms-service-update': (_id, title, tagline, thumbnail, info, media, col1, col2) => {

    Services.update(
      { _id },
      {
        $set : {
          title,
          tagline,
          thumbnail,
          info,
          media,
          col1,
          col2
        }
      },
      { upsert: true }
    );
  },
});
