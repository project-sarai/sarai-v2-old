Meteor.pastRain = {
  get30DayRainfall: (records) => {
    let total = 0

    for (let record of records) {
      total += record.data.rainfall
    }

    // records.forEach((element, index) => {
    //   total += element.data.rainfall
    // })

    return (Math.round(total * 10) / 10)
  },
}