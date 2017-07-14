import './about-us-leaders.html'

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { About } from '../../../../api/about/about.js';

Template.CMSAboutUsLeaders.onCreated(() => {
  Meteor.subscribe('about')
});

Template.CMSAboutUsLeaders.onRendered(() => {
  const dialog = document.querySelector('#cms-about-us-title-dialog');

  dialog.querySelector('.save').addEventListener('click', () => {
    const record = About.findOne({name: 'leaders'});
    const index = Session.get('id');
    if(record){
      const leaderName = $('#cms-about-us-leader-name-input').val();
      const position = $('#cms-about-us-leader-position-input').val();
    
      const newLink = { leaderName, position };

      record.list[index].leaderName = newLink.leaderName;
      record.list[index].position = newLink.position;

      Meteor.call('cms-about-us-leaders-update', record.list, (error, result) => {
        let toast = 'Saved Link'
        if (error) {
          toast = 'Unable to save changes'
        }
        showToast(toast)
      });
    }
  });
  $("#cms-about-us-leaders-title-div").addClass("is-dirty");
})

Template.CMSAboutUsLeaders.events({
  'click .cms-about-us-leaders-edit': (e) => {

    const id = e.currentTarget.id
    Session.set('id', id)

    const index = id;
    const record = About.findOne({name: 'leaders'})
    let leaderName = ''
    let position = ''

    if (record) {
      leaderName = record.list[index].leaderName;
      position = record.list[index].position;
    }

    // const dialog = document.querySelector('#cms-header-dialog');;

    $('#cms-about-us-leader-name').addClass('is-dirty')
    $('#cms-banner-link-href').addClass('is-dirty')

    $('#cms-about-us-leader-name-input').val(leaderName)
    $('#cms-about-us-leader-position-input').val(position)
  },
  'click #cms-about-us-leaders-save': () => {
    const title = $("#cms-about-us-leaders-title").val()

    Meteor.call('cms-about-us-leaders-title-update', title, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Project Leaders'
      }
      showToast(toast)
    })
  }
})

Template.CMSAboutUsLeaders.helpers({

  leaders: () => {
    const record = About.findOne({name: 'leaders'});
    if(record){
      return record;
    }
  },

  title: () => {
    const record = About.findOne({name: 'leaders'});
    if(record){
      return record.title;
    }
  },

  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-leaders-title").val()

    Meteor.call('cms-about-us-leaders-title-update', title)
  }
})