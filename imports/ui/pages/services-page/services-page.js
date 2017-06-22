import { Services } from '/imports/api/services/services.js';
import { Meteor } from 'meteor/meteor';
import './services-page.html'

Template.ServicesPage.onCreated(function() {
  Meteor.subscribe('services');

})

Template.ServicesPage.onRendered(function(){
  $("main").scrollTop(0);
})

Template.ServicesPage.events({
  'click #nextbutton': function(e){
    e.preventDefault();
    var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
    if(typeof currentservice!='undefined'){
      var nextsort = currentservice.sort + 1;
      var nextservice;
      if(nextsort<=Services.find().count()){
        nextservice = Services.findOne({'sort': nextsort});
      }
      FlowRouter.go('/services/'+nextservice._id);
      BlazeLayout.reset();
      BlazeLayout.render("MainLayout", {main: "ServicesPage"});
    }
  },
  'click #prevbutton': function(e){
    e.preventDefault();
    var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
    if(typeof currentservice!='undefined'){
      var prevsort = currentservice.sort - 1;
      var prevservice;
      if(prevsort>0){
        prevservice = Services.findOne({'sort': prevsort});
      }
      FlowRouter.go('/services/'+prevservice._id);
      BlazeLayout.reset();
      BlazeLayout.render("MainLayout", {main: "ServicesPage"});
    }
  },
  'click #dat': function(e) {
    const service = Services.findOne({_id: FlowRouter.current().params._id});
    console.log("service: " + FlowRouter.current().params._id);
  }
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.ServicesPage.helpers({
  service: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id});
    return service && service
  },

  title: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id});

    return service && service.title
  },

  tagline: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id});

    return service && service.tagline
  },

  thumbnail: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id});
    return service && service.thumbnail
  },

  crops: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.info.crops
  },

  experts: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.info.experts
  },

  ura: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.info.ura
  },

  projectLeaders: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.info.projectLeaders
  },

  mediaLink: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.media.link
  },

  mediaType: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.media.type
  },

  mediaSubtitle: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.media.subtitle
  },

  mediaSubtitleLink: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.media.subtitleLink
  },

  col1: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.col1.content
  },

  col2: function() {
    const service = Services.findOne({_id: FlowRouter.current().params._id})

    return service && service.col2.content
  },

  nextservice: function() {
    const currentservice = Services.findOne({_id: FlowRouter.current().params._id});

    if(currentservice){
      var nextsort = currentservice.sort + 1;
      if(nextsort<=Services.find().count()){
        return Services.findOne({'sort': nextsort});
      }
    }
  },

  prevservice: function() {
    const currentservice = Services.findOne({_id: FlowRouter.current().params._id});

    if(currentservice){
      var prevsort = currentservice.sort - 1;
      if(prevsort>0){
        return Services.findOne({'sort': prevsort});
      }
    }
  },

  mediaIsYoutubeVideo: function() {
    const currentservice = Services.findOne({_id: FlowRouter.current().params._id})

    if (currentservice) {
      if (currentservice.mediaType == 'youtube-video') {
        return true
      }

      else {
        return false
      }
    }
  },

  notEmpty: (array) => {
    if (array.length > 0) {
      return true
    }

    else {
      return false
    }
  },
});
