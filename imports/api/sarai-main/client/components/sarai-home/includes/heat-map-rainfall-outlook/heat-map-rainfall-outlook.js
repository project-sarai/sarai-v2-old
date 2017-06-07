Template.HeatMapRainfallOutlook.onCreated(() => {
  Meteor.subscribe('regions')
  Meteor.subscribe('provinces')
  Meteor.subscribe('weather-outlook')

  //default is Region IV-A: CALABARZON, Laguna
  Session.set('region', 'Region IV-A: CALABARZON')
  Session.set('province', 'Laguna')
})

Template.HeatMapRainfallOutlook.onRendered(() => {
  const region = Session.get('region')
  $('#heat-map-select-region').val(region)

  const province = Session.get('province')
  $('#heat-map-select-province').val(province)

  Tracker.autorun(() => {
      displayRainfallHeatMap(region, province)
  })

})

Template.HeatMapRainfallOutlook.events({
  'change #heat-map-select-region': (e) => {
    const region = e.currentTarget.value
    Session.set('region', region)

    const province = Regions.findOne({region:region}).province[1]

    // sets province to first province in the chosen region 
    Session.set('province',Regions.findOne({region:region}).province[1])    // if all municipalities except "All" option which is the first element (weatherOutlook[0])

    displayRainfallHeatMap(region, province)
  },
  
  'change #heat-map-select-province': (e) => {
    const province = e.currentTarget.value
    Session.set('province', province)

    const region = Session.get('region')

    displayRainfallHeatMap(region, province)
  },

})

Template.HeatMapRainfallOutlook.helpers({

  regions: () => {
    const regions = Regions.find({id:{$gt:1}}, {sort: {id: 1}}).fetch()     // all regions except "All" option which is the first element at index 0

    return regions
  },

  currentlySelectedRegion: (curr) => {
    const region = Session.get('region')
    $('#heat-map-select-region').val(region)
  },

  provinces: () => {
    const region = Session.get('region')
    const provinces = Regions.findOne({region:region})
    // let provinces = []
    // for(let i=1; i<Regions.findOne({region:region}).province.length; i++){
    //   provinces.push(Regions.findOne({region:region}).province[i]);
    // } 
    return provinces && provinces.province
  },

  currentlySelectedProvince: (curr) => {
    const province = Session.get('province')
    $('#heat-map-select-province').val(province)
  },

})

const displayRainfallHeatMap = (region, province) => {
  $('#heat-map-rainfall-outlook-preview-title').html(`5-month rainfall forecast for ` + province)

  Meteor.subscribe('provinces', () => {
    const totalMunicipalities = Provinces.findOne({province:province}).municipality.length
    const rainfallOutlook = WeatherOutlook.find({region: region, province: province}).fetch()

    const rainfall = Meteor.RainfallHeatMap.getRainfall(rainfallOutlook, totalMunicipalities)
    const municipalities = Meteor.RainfallHeatMap.getCoordinates(rainfall, totalMunicipalities).municipalities
    const rain = Meteor.RainfallHeatMap.getCoordinates(rainfall, totalMunicipalities).coordinates

    $('div.rainfall-heat-map').remove()    //remove any existing chart first
    $('<div class="rainfall-heat-map">').appendTo('#heat-map-rainfall-container').highcharts(Meteor.RainfallHeatMap.constructHeatMap(municipalities, rain))
  })
}