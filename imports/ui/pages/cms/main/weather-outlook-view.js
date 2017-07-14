import './weather-outlook-view.html'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { WeatherOutlook } from '../../../../api/weather/sarai-weather-outlook.js';

Template.CMSWeatherOutlookView.onCreated(() => {
  Meteor.subscribe('weather-outlook');
});

Template.CMSWeatherOutlookView.onRendered(() => {
  const dialog = document.querySelector('#weather-outlook-municipality-dialog')
  const addDialog = document.querySelector('#weather-outlook-add-dialog')

  dialog.querySelector('.save').addEventListener('click', () => {
    const id = Session.get('municipalityID');
    const region = $('#weather-region-input').val();
    const province = $('#weather-province-input').val();
    const municipality = $('#weather-municipality-input').val();
    var len = $('.outlook-rainfall-data-months').length
    var months = {}

    for(var i=0; i<len; i++){
      var ind = i.toString()
      var m = $('#month-'+ind).val()
      var v = $('#value-'+ind).val()
      months[m] = parseFloat(v)
    }
    console.log(months);

    console.log(months);
    Meteor.call('weather-outlook-municipality-edit', id, region, province, municipality, months, (error, result) => {
      let toast = 'Changes Saved!'
      if (error) {
        toast = 'Unable to save changes!'
      }
      showToast(toast)
    })
  }),

  addDialog.querySelector('.save').addEventListener('click', () => {
    const id = Session.get('municipalityID');
    const newMonth = $('#new-month-input').val();
    const newValue = $('#new-value-input').val();
    var months = {}

    $(".outlook-rainfall-data-entry").each(function() {
      var temp = $(this).attr('id');
      const m = temp.split('-')[1];
      const v = temp.split('-')[2];
      months[m] = parseFloat(v)
    });
    months[newMonth] = parseFloat(newValue);

    Meteor.call('weather-outlook-municipality-update', id, months, (error, result) => {
      let toast = 'Changes Saved!'
      if (error) {
        toast = 'Unable to save changes!'
      }
      showToast(toast)
    })
  })
});

Template.CMSWeatherOutlookView.events({
  'click .weather-data-edit': (e) => {
    const id = Session.get('municipalityID')
    const dialog = document.querySelector('weather')
  },
  'click .weather-municipality-edit': (e) => {
    const id = e.currentTarget.id.split('_')[3]
    const region = FlowRouter.current().params.region

    Session.set('municipalityID',id)
    Session.set('provinceName', name);
    const dialog = document.querySelector('#weather-outlook-municipality-dialog');
    const record = WeatherOutlook.findOne({_id: id});
    setDialogContents(record);
  },
  'click .weather-municipality-delete': (e) => {
    const id = e.currentTarget.id.split('_')[3]
    Session.set('municipalityID',id)
  },
  'click .weather-municipality-add': (e) => {
    const id = e.currentTarget.id.split('_')[3]
    Session.set('municipalityID',id)
  },
  'click .data-row-delete': (e) => {
    const mDel = e.currentTarget.id.split('-')[2]
    const vDel = e.currentTarget.id.split('-')[3]
    // $('#'+id).remove();

    const id = Session.get('municipalityID');
    var months = {}

    $(".outlook-rainfall-data-entry").each(function() {
      var temp = $(this).attr('id');
      const m = temp.split('-')[1];
      const v = temp.split('-')[2];
      if((m == mDel) && (v == vDel)){
        
      }else{
        months[m] = parseFloat(v)
      }
    });

    Meteor.call('weather-outlook-municipality-update', id, months, (error, result) => {
      let toast = 'Changes Saved!'
      if (error) {
        toast = 'Unable to save changes!'
      }
      showToast(toast)
    })
  },
});

Template.CMSWeatherOutlookView.helpers({
  municipalities: () => {
    const province = FlowRouter.current().params.province
    const region = FlowRouter.current().params.region
    const record = WeatherOutlook.find({region: region, province: province}).fetch();
    if(record){
      return record;
    }
  },
  regionName: () => {
    const name = FlowRouter.current().params.region
    return name;
  },
  provinceName: () => {
    const name = FlowRouter.current().params.province
    return name;
  },
  data: () => {
    const id = Session.get('municipalityID');
    const record = WeatherOutlook.findOne({_id: id})
    if(record){
      const months = record.data.month
      var arr = []
      
      var ind = 0;
      for (var i in months){
        arr[ind] = {
          month: i,
          value: months[i]
        }
        ind++
      }

      if(arr){
        return arr
      }
    }
  },
  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  },
});

const setDialogContents = (record) => {
  $('#weather-region-input').val(record.region)
  $('#weather-province-input').val(record.province)
  $('#weather-municipality-input').val(record.municipality)
  const months = record.data.month
  var ind = 0;
  for (var i in months){
    $('#month-'+ind.toString()).val(i)
    $('#value-'+ind.toString()).val(months[i])
    ind++
  }
}