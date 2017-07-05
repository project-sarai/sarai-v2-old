import './header-options.html';
import '../common/cms-upload/cms-upload.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Links } from '../../../../api/links/links.js';
import { Random } from 'meteor/random';

Template.HeaderOptions.onCreated(() => {
  Meteor.subscribe('links')
});

Template.HeaderOptions.onRendered(() => {
  const dialog = document.querySelector('#cms-header-dialog');

  dialog.querySelector('.save').addEventListener('click', () => {

    const record = Links.findOne({title: 'mainHeader'})

    if (record) {
      const title = $('#cms-banner-link-name-input').val()
      const url = $('#cms-banner-link-href-input').val()
      const rank = parseInt($('#cms-banner-link-rank-input').val())

      const newLink = { title, url, rank }

      const linkAction = Session.get('linkAction')

      if (linkAction == 'Add Top Level Link') {

        const newLinkEntry = {
          title, url, rank,
          links: [],
          id: title.replace(/ /g , "-").toLowerCase()
        }

        record.links.push(newLinkEntry)
      } else if (linkAction == 'Add Sub Link') {
        const indices = Session.get('id').split('-')

        if (record.links[parseInt(indices[1])].links) {
          record.links[parseInt(indices[1])].links.push(newLink)
        } else {
          record.links[parseInt(indices[1])].links = [newLink]
        }

      } else if (linkAction == 'Edit Link') {
        const indices = Session.get('id').split('-')

        if (indices.length == 1) {
          //Top level link
          record.links[parseInt(indices[0])].title = newLink.title
          record.links[parseInt(indices[0])].url = newLink.url
          record.links[parseInt(indices[0])].rank = newLink.rank
        }

        else {
          //Sub link
          record.links[parseInt(indices[0])].links[parseInt(indices[1])] = newLink
        }
      }


      Meteor.call('cms-header-links-update', record.links, (error, result) => {
        let toast = 'Saved Link'
        if (error) {
          toast = 'Unable to save changes'
        }

        //dialog.close();
        //showToast(toast)
      })
    }

  })
});

Template.HeaderOptions.events({
  'click .cms-header-link-edit': (e) => {

    const id = e.currentTarget.id
    Session.set('linkAction', 'Edit Link')
    Session.set('id', id)

    const indices = id.split('-')
    const record = Links.findOne({title: 'mainHeader'})
    let title = ''
    let url = ''
    let rank = ''

    if (record) {
      if (indices.length == 1) {
        //Top level link
        title = record.links[parseInt(indices[0])].title
        url = record.links[parseInt(indices[0])].url
        rank = record.links[parseInt(indices[0])].rank
      } else {
        //Sub link
        title = record.links[parseInt(indices[0])].links[parseInt(indices[1])].title
        url = record.links[parseInt(indices[0])].links[parseInt(indices[1])].url
        rank = record.links[parseInt(indices[0])].links[parseInt(indices[1])].rank
      }
    }

    const dialog = document.querySelector('#cms-header-dialog');;

    $('#cms-banner-link-name').addClass('is-dirty')
    $('#cms-banner-link-href').addClass('is-dirty')
    $('#cms-banner-link-rank').addClass('is-dirty')

    $('#cms-banner-link-name-input').val(title)
    $('#cms-banner-link-href-input').val(url)
    $('#cms-banner-link-rank-input').val(rank)
  },
  'click .cms-header-link-delete': (e) => {
    const id = e.currentTarget.id
    const indices = id.split('-')
    const record = Links.findOne({title: 'mainHeader'})

    if (record) {
      if (indices.length == 1) {
        //Top level link
        if (record.links[parseInt(indices[0])].links && record.links[parseInt(indices[0])].links.length > 0) {
          showToast('Can\'t delete link with sublinks')
          return
        }
        record.links.splice(parseInt(indices[0]), 1)
      } else {
        //Sub link
        record.links[parseInt(indices[0])].links.splice(parseInt(indices[1]), 1)
      }
    }

    Meteor.call('cms-header-links-update', record.links, (error, result) => {
      let toast = 'Deleted link'
      if (error) {
        toast = 'Unable to delete link'
      }
      //showToast(toast)
    })
  },
  'click .cms-header-link-add': (e) => {
    const id = e.currentTarget.id

    if (id == 'add-top-level-link') {
      Session.set('linkAction', 'Add Top Level Link')
    } else {
      Session.set('id', id)
      Session.set('linkAction', 'Add Sub Link')
    }

    const dialog = document.querySelector('#cms-header-dialog');

    $('#cms-banner-link-name-input').val("")
    $('#cms-banner-link-href-input').val("")
    $('#cms-banner-link-rank-input').val("")
  },

  'click #cms-header-button-toggle': () => {
    const message = $("#cms-header-button-toggle").html()

    let toast = 'Enabled BETA Label'
    if (message.trim() == 'Disable') {
      toast = 'Disabled BETA Label'
    }
    Meteor.call('cms-header-button-toggle', (error, result) => {
      if (error) {
        toast = `Unable to ${message} BETA Label`
      }

      showToast(toast)
    })
  }
});

Template.HeaderOptions.helpers({

  icon: () => {
    const record = Links.findOne({title: 'mainHeader'})

    return record && record.img
  },

  links: () => {
    const record = Links.findOne({title: 'mainHeader'})
  
    return record && record.links
  },

  buttonEnabled: () => {
    const record = Links.findOne({title: 'mainHeader'})

    return record && record.buttonEnabled
  },

  linkAction: () => {
    return Session.get('linkAction')
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: `head-logo-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        Meteor.call('cms-header-icon-update', `${uploadDirPrefix()}${fileInfo.path}`, (error, result) => {
          let toast = 'File uploaded successfully'
          if (error) {
            toast = 'Unable to upload file'
          }
          showToast(toast)
        })
      }
    }
  }
});