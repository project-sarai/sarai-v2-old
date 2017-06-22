import './about-us-projects.html'
import './sarai-cms.js'
import { Meteor } from 'meteor/meteor';
import { About } from '../../../../api/about/about.js';

Template.CMSAboutUsProjects.onCreated(() => {
  Meteor.subscribe('about');
});

Template.CMSAboutUsProjects.onRendered(() => {

  $("#cms-about-us-projects-title-div").addClass("is-dirty");

  $("#cms-about-us-project1-title-div").addClass("is-dirty");
  $("#cms-about-us-project1-text-div").addClass("is-dirty");
  $("#cms-about-us-project1-description-div").addClass("is-dirty");

  $("#cms-about-us-project2-title-div").addClass("is-dirty");
  $("#cms-about-us-project2-text-div").addClass("is-dirty");
  $("#cms-about-us-project2-description-div").addClass("is-dirty");

  $("#cms-about-us-project3-title-div").addClass("is-dirty");
  $("#cms-about-us-project3-text-div").addClass("is-dirty");
  $("#cms-about-us-project3-description-div").addClass("is-dirty");

  $("#cms-about-us-project4-title-div").addClass("is-dirty");
  $("#cms-about-us-project4-text-div").addClass("is-dirty");
  $("#cms-about-us-project4-description-div").addClass("is-dirty");

  $("#cms-about-us-project5-title-div").addClass("is-dirty");
  $("#cms-about-us-project5-text-div").addClass("is-dirty");
  $("#cms-about-us-project5-description-div").addClass("is-dirty");
})

Template.CMSAboutUsProjects.events({
  'click #cms-about-us-projects-save': () => {
    const title = $("#cms-about-us-projects-title").val()

    const text1 = $("#cms-about-us-project1-title").val()
    const subtext1 = $("#cms-about-us-project1-text").val()
    const description1 = $("#cms-about-us-project1-description").val()

    const text2 = $("#cms-about-us-project2-title").val()
    const subtext2 = $("#cms-about-us-project2-text").val()
    const description2 = $("#cms-about-us-project2-description").val()

    const text3 = $("#cms-about-us-project3-title").val()
    const subtext3 = $("#cms-about-us-project3-text").val()
    const description3 = $("#cms-about-us-project3-description").val()

    const text4 = $("#cms-about-us-project4-title").val()
    const subtext4 = $("#cms-about-us-project4-text").val()
    const description4 = $("#cms-about-us-project4-description").val()

    const text5 = $("#cms-about-us-project5-title").val()
    const subtext5 = $("#cms-about-us-project5-text").val()
    const description5 = $("#cms-about-us-project5-description").val()

    Meteor.call('cms-about-us-projects-update', title, text1, subtext1, description1, text2, subtext2, description2, text3, subtext3, description3, text4, subtext4, description4, text5, subtext5, description5, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Projects'
      }

      showToast(toast)
    })
  }
})

Template.CMSAboutUsProjects.helpers({

  projects: () => {
    const record = About.findOne({name: 'projects'})
    if(record){
      return record;
    }
  },
  
  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-projects-title").val()

    const text1 = $("#cms-about-us-project1-title").val()
    const subtext1 = $("#cms-about-us-project1-text").val()
    const description1 = $("#cms-about-us-project1-description").val()

    const text2 = $("#cms-about-us-project2-title").val()
    const subtext2 = $("#cms-about-us-project2-text").val()
    const description2 = $("#cms-about-us-project2-description").val()

    const text3 = $("#cms-about-us-project3-title").val()
    const subtext3 = $("#cms-about-us-project3-text").val()
    const description3 = $("#cms-about-us-project3-description").val()

    const text4 = $("#cms-about-us-project4-title").val()
    const subtext4 = $("#cms-about-us-project4-text").val()
    const description4 = $("#cms-about-us-project4-description").val()

    const text5 = $("#cms-about-us-project5-title").val()
    const subtext5 = $("#cms-about-us-project5-text").val()
    const description5 = $("#cms-about-us-project5-description").val()

    Meteor.call('cms-about-us-projects-update', title, text1, subtext1, description1, text2, subtext2, description2, text3, subtext3, description3, text4, subtext4, description4, text5, subtext5, description5)
  }
});

