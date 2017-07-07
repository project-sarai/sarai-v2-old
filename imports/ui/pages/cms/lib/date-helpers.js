Meteor.Date = {
  formatSimpleDate: (UTCDate) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    return `${UTCDate.getDate()} ${months[UTCDate.getMonth()]}`
  }
}