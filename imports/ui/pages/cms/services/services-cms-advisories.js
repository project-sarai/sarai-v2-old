import './services-cms-advisories.html'
import { Meteor } from 'meteor/meteor';
import { Advisories } from '../../../../api/advisories/advisories.js';

Template.CMSAdvisories.onCreated(() => {
  Meteor.subscribe('advisories');
});

Template.CMSAdvisories.onRendered(() => {
  const dialog = document.querySelector('#cms-advisory-dialog')

  dialog.querySelector('.save').addEventListener('click', () => {
    let action = this.action

    const title = $('#cms-advisory-title-input').val();
    const subtitle = $('#cms-advisory-subtitle-input').val();
    const body = $('#cms-advisory-body-input').val();
    const date = $('#cms-advisory-date-input').val();

    if (action == 'add') {
      Meteor.call('advisories.insert', date, title, subtitle, body, (error, result) => {
        let toast = 'Advisory saved'
        if (error) {
          toast = 'Unable to save advisory'
        }
        showToast(toast)
      })
    }

    else if (action == 'edit') {
      const _id = this.actionID

      Meteor.call('advisories.edit', _id, title, subtitle, body, date, (error, result) => {
        let toast = 'Advisory saved'
        if (error) {
          toasts = 'Unable to save advisory'
        }
        showToast(toast)
      })
    }
  })
})

Template.CMSAdvisories.helpers({
  advisories: () => {
    const records = Advisories.find({}).fetch()

    if (records) {
      return records
    }
  },

  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  },
  truncateTableEntry: (text) => {
    if(typeof text != 'undefined'){
      
      if (text.length > 20) {
        return `${text.substring(0, 20)}...`
      } else {
        return text
      }
    }
  },
});

Template.CMSAdvisories.events({
  'click #cms-advisory-add': () => {
    this.action = 'add'

    const dialog = document.querySelector('#cms-advisory-dialog');
    setBannerDialogContents('Add Advisory', '', '', '', '');
  },

  'click .cms-advisory-edit': (e) => {
    const index = e.currentTarget.id.split('-')[2]

    this.action = 'edit'
    this.actionID = index


    const dialog = document.querySelector('#cms-advisory-dialog');

    const record = Advisories.findOne({_id: this.actionID});

    if (record) {
      const title = record.title;
      const subtitle = record.subtitle;
      const body = record.body;
      const date = record.date;

      setBannerDialogContents('Edit Advisory', title, subtitle, body, date);
    }
  },

  'click .cms-advisory-delete': (e) => {
    const id = e.currentTarget.id.split('-')[2]

    Meteor.call('advisories.delete', id, (error, result) => {
      let toast = 'Deleted slide'
      if (error) {
        toast = 'Unable to delete slide'
      }
      showToast(toast)
    })
  },
});

const setBannerDialogContents = (dialogTitle, title, subtitle, body, date) => {
  $('#cms-advisory-title').html(dialogTitle)

  $('#cms-advisory-title-input').val(title)
  $('#cms-advisory-subtitle-input').val(subtitle)
  $('#cms-advisory-body-input').val(body)
  $('#cms-advisory-date-input').val(date)

  if (this.action == 'edit') {
    $('#cms-advisory-title').addClass('is-dirty')
    $('#cms-advisory-subtitle').addClass('is-dirty')
    $('#cms-advisory-body').addClass('is-dirty')
    $('#cms-advisory-date').addClass('is-dirty')
  }
}
