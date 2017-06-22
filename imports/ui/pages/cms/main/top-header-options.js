import './top-header-options.html';
import { Meteor } from 'meteor/meteor';
import { Main } from '../../../../api/main/main.js';

Template.TopHeaderOptions.onCreated(() => {
  Meteor.subscribe('main');
});

Template.TopHeaderOptions.onRendered(() => {
  $("#cms-top-header-message-div").addClass("is-dirty");
  $("#cms-top-header-search-text-div").addClass("is-dirty");
})

Template.TopHeaderOptions.events({
  'click #cms-top-header-save': () => {
    const message = $("#cms-top-header-message").val()
    const searchText = $("#cms-top-header-search-text").val()

    Meteor.call('cms-top-header-update', message, searchText, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to Top Header'
      }

      showToast(toast)
    })
  },

  'click #cms-top-header-enable': () => {
    const message = $("#cms-top-header-enable").html()

    let toast = 'Enabled Top Header'
    if (message.trim() == 'Disable') {
      toast = 'Disabled Top Header'
    }

    Meteor.call('cms-top-header-toggle', (error, result) => {
      if (error) {
        toast = `Unable to ${message} Top Header`
      }

      showToast(toast)

    })
  }
})

Template.TopHeaderOptions.helpers({

  message: () => {
    const record = Main.findOne({name: 'topHeader'})
    return record && record.message;
  },

  searchText: () => {
    const record = Main.findOne({name: 'topHeader'})
    return record && record.searchText
  },

  enabled: () => {
    const record = Main.findOne({name: 'topHeader'})

    if (record) {
      return record.enabled
    }
  },

  isChecked: () => {
    const record = Main.findOne({name: 'topHeader'})

    if (record) {
      return record.enabled ? { checked: 'checked' } : ''
    }
  },

  enabledStatus: () => {
    const record = Main.findOne({name: 'topHeader'})

    if (record) {
      return record.enabled ? '' : 'Disabled'
    }
  },

  disabled: () => {
    const record = Main.findOne({name: 'topHeader'})

    if (record) {
      return record.enabled ? '' : {disabled: 'true'}
    }
  },

  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const message = $("#cms-top-header-message").val()
    const searchText = $("#cms-top-header-search-text").val()

    Meteor.call('cms-top-header-update', message, searchText)
  }
})