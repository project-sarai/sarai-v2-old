import './reports.html';
import { Meteor }  from 'meteor/meteor';
import { Reports } from '../../../../api/reports/reports.js';
import { Random } from 'meteor/random';

Template.CMSReports.onCreated(() => {
  Meteor.subscribe('reports');
  this.uploadedFile = '';
  this.uploadedThumbnail = '';
});

Template.CMSReports.onRendered(() => {
  const dialog = document.querySelector('#cms-report-dialog');

  dialog.querySelector('.save').addEventListener('click', () => {
    let action = this.action

    const file = this.uploadedFile
    const image = this.uploadedThumbnail
    const title = $('#cms-report-title-input').val()
    const date = $('#cms-report-date-input').val()

    if (action == 'add') {
      Meteor.call('reports.insert', title, file, date, image, (error, result) => {
        let toast = 'Report saved'
        if (error) {
          toast = 'Unable to save report'
        }
        showToast(toast)
      })
    }

    else if (action == 'edit') {
      const _id = this.actionID

      Meteor.call('reports.update', _id, image, file, title, date, (error, result) => {
        let toast = 'Report saved'
        if (error) {
          toasts = 'Unable to save report'
        }
        showToast(toast)
      })
    }
  });
});

Template.CMSReports.helpers({
  reports: () => {
    const record = Reports.find({}).fetch();
    if(record){
      return record;
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
  myCallback1: () => {
    return {
      formData: () => {
        return {
          filename: `report-media-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedThumbnail = `${uploadDirPrefix()}${fileInfo.path}`

        $('#cms-report-thumb-img').attr('src', `${uploadDirPrefix()}${fileInfo.path}`)
      }
    }
  },

  myCallback2: () => {
    return {
      formData: () => {
        return {
          filename: `report-media-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        $('#cms-report-file-obj').attr('data', `${uploadDirPrefix()}${fileInfo.path}`)
      }
    }
  },

});

Template.CMSReports.events({
  'click #cms-report-add': () => {
    this.action = 'add';
    const dialog = document.querySelector('#cms-report-dialog');
    setBannerDialogContents('Add Slide', '', '', '', '');
  },

  'click .cms-report-edit': (e) => {
    this.action = 'edit';
    const index = e.currentTarget.id.split('-')[2];
    this.actionID = index;

    const dialog = document.querySelector('#cms-report-dialog');
    const record = Reports.findOne({_id: index});

    if (record) {
      setBannerDialogContents('Edit Slide', record.thumbnail, record.file, record.title, record.date)
    }
  },

  'click .cms-report-delete': (e) => {
    const id = e.currentTarget.id.split('-')[2]

    Meteor.call('reports.delete', id, (error, result) => {
      let toast = 'Deleted slide'
      if (error) {
        toast = 'Unable to delete slide'
      }
      showToast(toast)
    })
  },

});

const setBannerDialogContents = (dialogTitle, image, file, title, date) => {
  $('#cms-report-dialog-title').html(dialogTitle)

  $('#cms-report-thumb-img').attr('src', image);
  $('#cms-report-file-obj').attr('src', file);
  $('#cms-report-title-input').val(title);
  $('#cms-report-date-input').val(date);

  if (this.action == 'edit') {
    $('#cms-report-title').addClass('is-dirty');
    $('#cms-report-date').addClass('is-dirty')
  }
}