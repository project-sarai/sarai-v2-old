import './weather-data-row.html'
import { Meteor } from 'meteor/meteor';

Template.WeatherDataRow.onCreated(() => {
})

Template.WeatherDataRow.onRendered(() => {

})

Template.WeatherDataRow.helpers({
  formatDate: (dateUTC) => {
    return Meteor.Date.formatSimpleDate(dateUTC)
  },
})

Template.WeatherDataRow.events({
  'click #edit-weather-data': function() {
    Session.set('weather-data-_id', this._id)

    const dialog = document.querySelector(`#cms-weather-data-dialog`)

    fillWeatherDataDialog(this._id, this.dateUTC)

    dialog.showModal()
  }
})

const fillWeatherDataDialog = (stationID, dateUTC) => {
  $('#cms-weather-data-dialog-title').html(`Edit Data for ${Meteor.Date.formatSimpleDate(dateUTC)}`)

  $('#cms-wd-temp-ave').addClass('is-dirty')
  $('#cms-wd-temp-min').addClass('is-dirty')
  $('#cms-wd-temp-max').addClass('is-dirty')

  $('#cms-wd-hum-ave').addClass('is-dirty')
  $('#cms-wd-hum-min').addClass('is-dirty')
  $('#cms-wd-hum-max').addClass('is-dirty')

  $('#cms-wd-wind-ave').addClass('is-dirty')
  $('#cms-wd-wind-max').addClass('is-dirty')

  $('#cms-wd-pre-min').addClass('is-dirty')
  $('#cms-wd-pre-max').addClass('is-dirty')

  $('#cms-wd-rain').addClass('is-dirty')

  Meteor.subscribe('weather-data-30-by-id', stationID, () => {
    const record = WeatherData.findOne({dateUTC})
    const data = record.data

    $('#cms-wd-temp-ave-input').val(data.temp.ave)
    $('#cms-wd-temp-min-input').val(data.temp.min)
    $('#cms-wd-temp-max-input').val(data.temp.max)

    $('#cms-wd-hum-ave-input').val(data.humidity.ave)
    $('#cms-wd-hum-min-input').val(data.humidity.min)
    $('#cms-wd-hum-max-input').val(data.humidity.max)

    $('#cms-wd-wind-ave-input').val(data.wind.aveSpd)
    $('#cms-wd-wind-max-input').val(data.wind.maxSpd)

    $('#cms-wd-pre-min-input').val(data.pressure.min)
    $('#cms-wd-pre-max-input').val(data.pressure.max)

    $('#cms-wd-rain-input').val(data.rainfall)
  })
}