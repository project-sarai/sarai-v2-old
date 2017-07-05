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
  },
  'reports.update'(id, image, file, title, date) {
    Reports.update(
      {_id: id},
      {
        $set: {
          title: title,
          thumbnail: image,
          file: file,
          date: date
        }
      }
    )
  },
  'reports.delete'(id) {
    Reports.remove({_id: id});
  }
  // 'cms-banner-slide-edit': (_id, image, textPosition, title, subTitle, text, buttonText, buttonLink, rank) => {

  //   let slides = Main.findOne({name: 'banner'}).slides

  //   if (slides) {
  //     let index = ''

  //     const slide = slides.find((element, i) => {
  //       if (element._id == _id) {
  //         index = i
  //         return true
  //       }
  //     })

  //     slides[index].image = image
  //     slides[index].title = title
  //     slides[index].textPosition = textPosition
  //     slides[index].subTitle = subTitle
  //     slides[index].text = text
  //     slides[index].buttonText = buttonText
  //     slides[index].buttonLink = buttonLink
  //     slides[index].rank = rank

  //     // console.log(slides)
  //     Main.update(
  //       { name: 'banner'},
  //       {
  //         $set: {
  //           slides
  //         }
  //       },
  //       { upsert: true }
  //     )
  //   }

  //   else {
  //     return new Error('Couldn\'t find slides array')
  //   }
  // },

  // 'cms-banner-slide-delete': (_id) => {
  //   const record = Main.findOne({name: 'banner'})

  //   if (record) {
  //     let index = _id;

  //     const slides = record.slides
  //     slides.splice(index, 1);

  //     Main.update(
  //       { name: 'banner'},
  //       {
  //         $set: {
  //           slides
  //         }
  //       },
  //       { upsert: true }
  //     )
  //   }
  // }
});
