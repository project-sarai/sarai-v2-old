import { Meteor } from 'meteor/meteor';
import { Main } from './main.js';

Meteor.methods({
  'cms-top-header-update': (message, searchText) => {
    Main.update(
      { name: 'topHeader' },
      {
        $set : {
          message,
          searchText
        }
      },
      { upsert: true }
    );
  },

  'cms-top-header-toggle': () => {
    const c = Main.findOne({name: 'topHeader'}).enabled
    let n = true
    if (c) {
      n = false
    }

    Main.update(
      { name: 'topHeader' },
      {
        $set : {
          enabled: n
        }
      },
      { upsert: true }
    );

  },
});