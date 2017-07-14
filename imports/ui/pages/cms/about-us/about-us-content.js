import './about-us-content.html';

import { Meteor } from 'meteor/meteor';
import { Story } from '../../../../api/story/story.js';

Template.CMSAboutUsContent.onCreated(() => {
  Meteor.subscribe('story');
});

Template.CMSAboutUsContent.onRendered(() => {
  $("#cms-about-us-content-title-div").addClass("is-dirty");
  $("#cms-about-us-content-text-div").addClass("is-dirty");
})

Template.CMSAboutUsContent.events({
  'click #cms-about-us-content-save': () => {
    const title = $("#cms-about-us-content-title").val()
    const content = $("#cms-about-us-content-text").val()

    Meteor.call('cms-about-us-content-update', title, content, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Content'
      }
      showToast(toast)
    })
  }
})

Template.CMSAboutUsContent.helpers({

  title: () => {
    const record = Story.findOne({name: 'origin'});
    return record && record.title;
  },

  content: () => {
    const record = Story.findOne({name: 'origin'});
    return record && record.content
  },
  
  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-content-title").val()
    const content = $("#cms-about-us-content-text").val()

    Meteor.call('cms-about-us-content-update', title, content)
  }
})