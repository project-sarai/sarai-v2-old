import './weather-outlook-data.html'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { WeatherOutlook } from '../../../../api/weather/sarai-weather-outlook.js';

Template.CMSWeatherOutlookData.onCreated(() => {
  Meteor.subscribe('weather-outlook');
});

Template.CMSWeatherOutlookData.onRendered(() => {
  const dialog = document.querySelector('#weather-outlook-province-dialog')

  dialog.querySelector('.save').addEventListener('click', () => {
    const provinceName = Session.get('provinceName');
    const region = FlowRouter.current().params.region
    const newName = $('#weather-province-input').val();

    Meteor.call('weather-outlook-province-edit', region, provinceName, newName, (error, result) => {
      let toast = 'Province Name Saved!'
      if (error) {
        toast = 'Unable to save name!'
      }
      showToast(toast)
    })
  })
});

Template.CMSWeatherOutlookData.events({
  'click .weather-province-edit': (e) => {
    const name = e.currentTarget.id.split('_')[3]
    const region = FlowRouter.current().params.region

    Session.set('provinceName', name);
    const dialog = document.querySelector('#weather-outlook-province-dialog');
    const record = WeatherOutlook.find({region: name});

    if (record) {
      $('#weather-province-input').val(name)
    }
  },
  'click .weather-province-view': (e) => {
    const name = e.currentTarget.id.split('_')[3]
    const region = FlowRouter.current().params.region
    FlowRouter.go('/admin/main-weather-outlook/'+region+'/'+name);
  },
});

Template.CMSWeatherOutlookData.helpers({
  provinces: () => {
    const region = FlowRouter.current().params.region
    const record = _.uniq(WeatherOutlook.find({region: region}, {
      sort: {province: 1}, fields: {province: true}
    }).fetch().map(function(x){
      return x.province;
    }), true);
    if(record){
      return record;
    }
  },
  regionName: () => {
    const name = FlowRouter.current().params.region
    return name;
  },
  provinceName: () => {
    const name = Session.get('provinceName');
    return name;
  },
  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  },
});