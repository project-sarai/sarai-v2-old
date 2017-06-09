FlowRouter.route("/weather-monitoring", {
  action: () => {
    BlazeLayout.render("MonitoringLayout", {main: "WeatherMonitoringV2"})
  }
})