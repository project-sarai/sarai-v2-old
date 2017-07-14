import { Meteor } from 'meteor/meteor'

Meteor.Date = {
  formatSimpleDate: (UTCDate) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    console.log(UTCDate)
    // UTCDate = new Date(UTCDate)
    // console.log(UTCDate)
    return `${UTCDate.getDate()} ${months[UTCDate.getMonth()]}`
  }
}