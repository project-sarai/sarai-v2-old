import './weather-outlook.html'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { WeatherOutlook } from '../../../../api/weather/sarai-weather-outlook.js';

Template.CMSWeatherOutlook.onCreated(() => {
  Meteor.subscribe('weather-outlook');
});

Template.CMSWeatherOutlook.onRendered(() => {
  const dialog = document.querySelector('#weather-outlook-dialog')

  dialog.querySelector('.save').addEventListener('click', () => {
    const regionName = Session.get('regionName');
    const newName = $('#weather-region-input').val();

    Meteor.call('weather-outlook-region-edit', regionName, newName, (error, result) => {
      let toast = 'Region Name Saved!'
      if (error) {
        toast = 'Unable to save name!'
      }
      showToast(toast)
    })
  })
});

Template.CMSWeatherOutlook.events({
  'click .weather-region-edit': (e) => {
    const name = e.currentTarget.id.split('_')[3]

    Session.set('regionName', name);
    const dialog = document.querySelector('#weather-outlook-dialog');

    const record = WeatherOutlook.find({region: name});

    if (record) {
      $('#weather-region-input').val(name)
    }
  },
  'click .weather-region-view': (e) => {
    const name = e.currentTarget.id.split('_')[3]

    FlowRouter.go('/admin/main-weather-outlook/'+name);
  },
});

Template.CMSWeatherOutlook.helpers({
  regions: () => {
    const record = _.uniq(WeatherOutlook.find({}, {
      sort: {region: 1}, fields: {region: true}
    }).fetch().map(function(x){
      return x.region;
    }), true);
    if(record){
      return record;
    }
  },

  regionName: () => {
    const name = Session.get('regionName');
    return name;
  },
  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  },
});
