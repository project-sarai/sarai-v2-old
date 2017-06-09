Template.Preview.onCreated(() => {
  Session.set('preview', 'forecast')
})

Template.Preview.onRendered(() => {

})

Template.Preview.helpers({
  forecastViewSelected: () => {
    const preview = Session.get('preview')

    if (preview == "forecast") {
      return true
    } else {
      return false
    }
  },

  conciseViewSelected: () => {
    const preview = Session.get('preview')

    if (preview == "concise") {
      return true
    } else {
      return false
    }
  }
})

Template.Preview.events({
  'click #forecast-view': (e) => {
    Session.set('preview', 'forecast')
  },

  'click #concise-view': (e) => {
    Session.set('preview', 'concise')
  }
})