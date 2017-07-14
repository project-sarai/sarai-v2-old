import './about-us-title.html'
import { Meteor } from 'meteor/meteor';
import { About } from '../../../../api/about/about.js';

Template.CMSAboutUsTitle.onCreated(() => {
  Meteor.subscribe('about');
});

Template.CMSAboutUsTitle.onRendered(() => {
  $("#cms-about-us-title-div").addClass("is-dirty");
})

Template.CMSAboutUsTitle.events({
  'click #cms-about-us-title-save': () => {
    const text = $("#cms-about-us-title").val()

    Meteor.call('cms-about-us-title-update', text, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Title'
      }

      showToast(toast)
    })
  }
})

Template.CMSAboutUsTitle.helpers({

  title: () => {
    const record = About.findOne({name: 'title'});
    if(record){
      return record.text;
    }
  },
  
  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-title").val()

    Meteor.call('cms-about-us-title-update', text)
  }
})