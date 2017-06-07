Meteor.WeatherConstants = {
  getRegionSort: (regionString) => {

    const regionSort = {
      'I': 1,
      '1': 1,
      'II': 2,
      '2': 2,
      'III': 3,
      '3': 3,
      'IV-A': 4,
      '4A': 4,
      'IVA': 4,
      'IV-B': 5,
      '4B': 5,
      'IVB': 5,
      'V': 6,
      '5': 6,
      'VI': 7,
      '6': 7,
      'VII': 8,
      '7': 8,
      'VIII': 9,
      '8': 9,
      'IX': 10,
      '9': 10,
      'X': 11,
      '10': 11,
      'XI': 12,
      '11': 12,
      'XII': 13,
      '12': 13,
      'XIII': 14,
      '13': 14,
      'ARMM': 15,
      'CAR': 16,
      'NCR': 17
    }

    return regionSort[regionString]
  }
}