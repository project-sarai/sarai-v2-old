Template.Serviceslist.helpers({
  servicesMain: function() {
    var obj = Main.findOne({'name': 'services'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  services: function() {
   //  var names = [
   //    'alerts-and-advisories',
   //    'crop-monitoring-and-forecasting',
   //    'integrated-crop-management',
   //    'multispectral-camera-imaging',
   //    'integrated-pest-management',
   //    'real-time-data',
   //    'sarai-eskwela',
   //    'suitability',
   //    'vulnerability'
   //  ];
  	// var obj = Services.find({name: {$in: names}}, {sort: {sort: 1}}).fetch();
   //  if(typeof obj !== 'undefined'){
   //    return obj;
   //  }

   const services = Services.find({}).fetch()

   return services
  },

  hasAppLink: (link) => {
    if (link && link != '') {
      return true
    }
  }
});