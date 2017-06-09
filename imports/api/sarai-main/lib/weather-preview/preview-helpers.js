Meteor.previewHelpers = {
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

  get7DayForecast: () => {

  },

  sortStations: (stations) => {
    stations.forEach((element, index) => {
      element.label = element.label.replace('SARAI', '')
      element.label = element.label.replace('(UPLB)', '')
      element.label = element.label.replace('WFP', '')
      element.label = element.label.replace('WPU', '')
      element.label = element.label.replace('APN', '')
      element.label.trim()
    })

    stations.sort((a, b) => {
      return a.label.charCodeAt(0) - b.label.charCodeAt(0)
    })

    return stations
  },

  formatStationList: (stations) => {

    stations.forEach((element, index) => {
      element.label = element.label.replace('SARAI', '')
      element.lable = element.label.replace('(UPLB)', '')
      element.label = element.label.replace('WFP', '')
      element.label = element.label.replace('WPU', '')
      element.label = element.label.replace('APN', '')
      element.label.trim()
    })

    // stations.sort((a, b) => {
    //   return a.label.charCodeAt(0) - b.label.charCodeAt(0)
    // })

    // stations.sort((a, b) => {
    //   sortA = Meteor.WeatherConstants.getRegionSort(a.region)
    //   sortB = Meteor.WeatherConstants.getRegionSort(b.region)

    //   return sortA - sortB
    // })

    const grouped = {
      'I': {
        'options': []
      },
      'II': {
        'options': []
      },
      'III': {
        'options': []
      },
      'IV-A': {
        'options': []
      },
      'IV-B': {
        'options': []
      },
      'V': {
        'options': []
      },
      'VI': {
        'options': []
      },
      'VII': {
        'options': []
      },
      'VIII': {
        'options': []
      },
      'IX': {
        'options': []
      },
      'X': {
        'options': []
      },
      'XI': {
        'options': []
      },
      'XII': {
        'options': []
      },
      'XIII': {
        'options': []
      },
      'ARMM': {
        'options': []
      },
      'CAR': {
        'options': []
      },
      'NCR': {
        'options': []
      },
    }

    //Sort the stations into their regions
    stations.forEach((element, index) => {
      const region = element.region

      grouped[region]['options'].push({
        'label': element.label,
        'id': element.id
      })
    })

    //Convert object into array
    const groupedArray = []

    for (const key of Object.keys(grouped)) {
      groupedArray.push({
        'region': key,
        'options': grouped[key].options
      })
    }

    //Weed out regions with no stations
    const filtered = groupedArray.filter((element) => {
      return element.options.length
    })

    //Add 'Region' where applicable
    filtered.forEach((element, index) => {
      if (!['ARMM', 'CAR', 'NCR'].includes(element.region)) {
        element.region = `Region ${element.region}`
      }
    })

    return filtered
  },

  formatLabel: (label) => {
    const length = 15
    let result = label

    if (label.length > 20) {
      result = `${result.substring(0, length)}...`
    } else {
      const labelLength = result.length

      while (result.length < length) {
        result += ' '
      }
    }

    return result
  },

  constructChart: (provinces, past30DayRainfall) => {
    return {
        title: {
            text: ''
        },
        plotOptions: {
          line: {
            marker: {
              enabled: false
            }
          },
        },
        credits: {
          enabled: false
        },
        yAxis: [
          {
            title: {
              text: 'Millimeters of Rain',
              style: {
                fontWeight: 'bold'
              }
            },
            labels: {
              format: '{value}',
              style: {
                color: '#0066cc',
                fontWeight: 'bold'
              }
            }
          }
        ],
        xAxis: [
          {categories: provinces}
        ],
        series: [{
          type: 'column',
          name: 'Past 30-day rainfall',
          data: past30DayRainfall
          }
        ],

        tooltip: {
          borderColor: '#cccccc',
          formatter: function( ) {
            var s = '<b>' + this.points[0].x + '<br/>' + this.points[0].series.name + ': ' + this.points[0].y + ' mm';

            return s;
          },
          shared: true
        }
    }
  }
}