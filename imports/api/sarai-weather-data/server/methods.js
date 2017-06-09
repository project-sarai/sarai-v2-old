Meteor.methods({

  'get30DayCumulativeRainfall': (id) => {
    console.log(this)

    const records = WeatherData.find({id})

    console.log(records)
  },



})