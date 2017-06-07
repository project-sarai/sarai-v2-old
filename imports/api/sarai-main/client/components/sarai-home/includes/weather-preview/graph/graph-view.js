Template.GraphView.onCreated(() => {
  Meteor.subscribe('sarai-weather-stations', () => {
    const WSCount = WeatherStations.find({}).count()

    this.WSCount = WSCount
  })
  Meteor.subscribe('weather-data-30')
})

Template.GraphView.onRendered(() => {
  displayRainData()
})


const displayRainData = () => {
  //remove any existing chart first
  $('div.graph-view').remove()

  //Add (temporary) spinner
  $('<div class="graph-view graph-view-stub"><div class="mdl-spinner mdl-js-spinner is-active"></div></div>').appendTo('#graph-view-container')

  let past30DayRainfall = []
  let provinces = []

  const stations = WeatherStations.find({}, {sort: {label: 1}}).fetch()
  const cleanStations = Meteor.previewHelpers.sortStations(stations)

  for (let entry of cleanStations){
    // const label = Meteor.previewHelpers.formatLabel(entry.label)
    const weatherData = WeatherData.find({id: entry.id})

    if (weatherData) {
      const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())

      past30DayRainfall.push({y: rainfall})
      provinces.push(entry.label)
    }
  }

  //remove any existing chart first
  $('div.graph-view').remove()

  $('<div class="graph-view">').appendTo('#graph-view-container').highcharts(Meteor.previewHelpers.constructChart(provinces, past30DayRainfall))
}