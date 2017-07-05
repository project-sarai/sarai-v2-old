Meteor.YearWeather = {

  constructSeries: (records) => {
    const rain = []
    const temp = []



    records.forEach((element, index) => {
      if (!element.dummy) {
        const rainEntry = []
        const tempEntry = []

        const date = Date.UTC(element.year, element.month - 1, element.day, 0)

        rainEntry.push(date)
        rainEntry.push(element.rain)

        tempEntry.push(date)
        tempEntry.push(element.tempAvg)

        rain.push(rainEntry)
        temp.push(tempEntry)
      }
    })

    rain.sort((a, b) => {
      return new Date(a[0]) - new Date(b[0])
    })

    temp.sort((a, b) => {
      return new Date(a[0]) - new Date(b[0])
    })

    return [rain, temp]
  },

  constructChart: (rain, temp) => {

    return {
      // chart: {
      //   marginLeft: 20
      // },

      rangeSelector: {
        selected: 4
      },

      yAxis: [
        {
          lineWidth: 1,
          title: {
            text: 'Rainfall',
            style: {
              color: '#0853a8'
            }
          },
          labels: {
            format: '{value} mm',
            style: {
              color: '#0853a8'
            }
          }
        },
        {
          lineWidth: 1,
          labels: {
            format: '{value}°C',
            style: {
              color: '#ea7c0e'
            }
          },
          title: {
            text: 'Average Temperature',
            style: {
              color: '#ea7c0e'
            }
          },
          opposite: false
        }
      ],

      tooltip: {
        xDateFormat: '%Y-%b-%d',
        split: true
      },

      series: [
        {
          name: 'Rainfall',
          // type: 'scatter',
          // lineWidth: 1,
          type: 'line',
          data: rain,
          color: '#0853a8',
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> mm<br/>'
          }
        },
        {
          name: 'Average Temperature',
          // type: 'scatter',
          // lineWidth: 1,
          type: 'line',
          data: temp,
          color: '#ea7c0e',
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> °C<br/>'
          }
        }
      ]

    }
  },
}