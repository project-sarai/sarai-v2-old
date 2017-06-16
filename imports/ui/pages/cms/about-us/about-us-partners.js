import './about-us-partners.html';

Template.CMSAboutUsPartners.onRendered(() => {

  $("#cms-about-us-partners-title-div").addClass("is-dirty");

  $("#cms-about-us-partners1-name-div").addClass("is-dirty");
  $("#cms-about-us-partners1-text-div").addClass("is-dirty");
  $("#cms-about-us-partners1-description-div").addClass("is-dirty");

  $("#cms-about-us-partners2-name-div").addClass("is-dirty");
  $("#cms-about-us-partners2-text-div").addClass("is-dirty");
  $("#cms-about-us-partners2-description-div").addClass("is-dirty");

  $("#cms-about-us-partners3-name-div").addClass("is-dirty");
  $("#cms-about-us-partners3-text-div").addClass("is-dirty");
  $("#cms-about-us-partners3-description-div").addClass("is-dirty");

  $("#cms-about-us-partners4-name-div").addClass("is-dirty");
  $("#cms-about-us-partners4-text-div").addClass("is-dirty");
  $("#cms-about-us-partners4-description-div").addClass("is-dirty");
})

Template.CMSAboutUsPartners.events({
  'click #cms-about-us-partners-save': () => {
    const title1 = $("#cms-about-us-partners-title").val()

    const text11 = $("#cms-about-us-partners1-name").val()
    const subtext11 = $("#cms-about-us-partners1-text").val()
    const description11 = $("#cms-about-us-partners1-description").val()

    const text22 = $("#cms-about-us-partners2-name").val()
    const subtext22 = $("#cms-about-us-partners2-text").val()
    const description22 = $("#cms-about-us-partners2-description").val()

    const text33 = $("#cms-about-us-partners3-name").val()
    const subtext33 = $("#cms-about-us-partners3-text").val()
    const description33 = $("#cms-about-us-partners3-description").val()

    const text44 = $("#cms-about-us-partners4-name").val()
    const subtext44 = $("#cms-about-us-partners4-text").val()
    const description44 = $("#cms-about-us-partners4-description").val()


    Meteor.call('cms-about-us-partners-update', title1, text11, subtext11, description11, text22, subtext22, description22, text33, subtext33, description33, text44, subtext44, description44, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Partner Institutions'
      }

      showToast(toast)
    })
  }
})

Template.CMSAboutUsPartners.helpers({

  partners: () => {
    const record = About.findOne({name: 'partners'})
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
    const title1 = $("#cms-about-us-partners-title").val()

    const text11 = $("#cms-about-us-partners1-name").val()
    const subtext11 = $("#cms-about-us-partners1-text").val()
    const description11 = $("#cms-about-us-partners1-description").val()

    const text22 = $("#cms-about-us-partners2-name").val()
    const subtext22 = $("#cms-about-us-partners2-text").val()
    const description22 = $("#cms-about-us-partners2-description").val()

    const text33 = $("#cms-about-us-partners3-name").val()
    const subtext33 = $("#cms-about-us-partners3-text").val()
    const description33 = $("#cms-about-us-partners3-description").val()

    const text44 = $("#cms-about-us-partners4-name").val()
    const subtext44 = $("#cms-about-us-partners4-text").val()
    const description44 = $("#cms-about-us-partners4-description").val()

    Meteor.call('cms-about-us-partners-update', title1, text11, subtext11, description11, text22, subtext22, description22, text33, subtext33, description33, text44, subtext44, description44)
  }
})