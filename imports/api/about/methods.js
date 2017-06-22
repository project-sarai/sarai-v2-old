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
  'cms-about-us-partners-update': (title1, text11, subtext11, description11, text22, subtext22, description22, text33, subtext33, description33, text44, subtext44, description44) => {
    About.update(
      { name: 'partners' },
      {
        $set : {
          title1,
          text11,
          subtext11,
          description11,
          text22,
          subtext22,
          description22,
          text33,
          subtext33,
          description33,
          text44,
          subtext44,
          description44
        }
      },
      { upsert: true }
    );
  },
  'cms-about-us-projects-update': (title, text1, subtext1, description1, text2, subtext2, description2, text3, subtext3, description3, text4, subtext4, description4, text5, subtext5, description5) => {
    About.update(
      { name: 'projects' },
      {
        $set : {
          title,
          text1,
          subtext1,
          description1,
          text2,
          subtext2,
          description2,
          text3,
          subtext3,
          description3,
          text4,
          subtext4,
          description4,
          text5,
          subtext5,
          description5
        }
      },
      { upsert: true }
    );
  },
  'cms-aboutbanner-slider-edit': (_id,title, subTitle) => {
    console.log(title + " " + subTitle);

    let banners = About.findOne({name: 'banner'}).banners

    if (banners) {

      banners[0].subtext = title//banner array only contains 1 object because it is not a carousel in the about page
      banners[0].subtext1 = subTitle

      console.log(banners)
       About.update(
         { name: 'banner'},
         {
           $set: {
             banners
           }
         },
         { upsert: true }
       )
    }

    else {
      return new Error('Couldn\'t find banners array')
    }
  },

  'cms-aboutbanner-slider-delete': (_id) => {
    const record = About.findOne({name: 'banner'})

    if (record) {

      const banners = record.banners
      banners.splice(0, 1)

      About.update(
        { name: 'banner'},
        {
          $set: {
            banners
          }
        },
        { upsert: true }
      )
    }
  },
});
