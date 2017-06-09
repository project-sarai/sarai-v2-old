FlowRouter.route("/heat-map-rainfall-outlook", {
  action: function() {
    BlazeLayout.render("MonitoringLayout", {main: "HeatMapRainfallOutlook"})
  }
})