import './weather-data.html'
import './weather-data-row.html'
import { Meteor } from 'meteor/meteor';

Template.WeatherDataCMS.onCreated(() => {
  this.stationID = FlowRouter.current().params.stationID
  Meteor.subscribe('weather-data-30-by-id', this.stationID )
  Meteor.subscribe('weather-station', this.stationID)
})

Template.WeatherDataCMS.onRendered(() => {
  initWeatherDataDialog('cms-weather-data-dialog')

})

Template.WeatherDataCMS.helpers({
  stationID: () => {
    return this.stationID
  },

  label: () => {
    const record = WeatherStations.findOne({})

    return record && record.label
  },

  records: () => {
    const records = WeatherData.find({}).fetch()

    return records.reverse()
  }
})

Template.WeatherDataCMS.events({

})

const initWeatherDataDialog = (dialogID) => {
  const dialog = document.querySelector(`#${dialogID}`)

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close()
  })

  dialog.querySelector('.save').addEventListener('click', () => {
    const tempAve = $('#cms-wd-temp-ave-input').val()
    const tempMin = $('#cms-wd-temp-min-input').val()
    const tempMax = $('#cms-wd-temp-max-input').val()

    const humAve = $('#cms-wd-hum-ave-input').val()
    const humMin = $('#cms-wd-hum-min-input').val()
    const humMax = $('#cms-wd-hum-max-input').val()

    const windAve = $('#cms-wd-wind-ave-input').val()
    const windMax = $('#cms-wd-wind-max-input').val()

    const preMin = $('#cms-wd-pre-min-input').val()
    const preMax = $('#cms-wd-pre-max-input').val()

    const rain = $('#cms-wd-rain-input').val()

    const _id = Session.get('weather-data-_id')

    Meteor.call('cms-weather-data-edit', _id, tempAve, tempMin, tempMax, humAve, humMin, humMax, windAve, windMax, preMin, preMax, rain, (error, result) => {
      let toast = 'Entry saved'
      if (error) {
        toast = 'Unable to save entry'
      }
      showToast(toast)
    })

    dialog.close()
  })
}