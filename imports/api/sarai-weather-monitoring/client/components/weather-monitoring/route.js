FlowRouter.route("/weather-monitoring", {
  action: () => {
    BlazeLayout.render("MapLayout", {main: "WeatherMonitoring"})
  }
})