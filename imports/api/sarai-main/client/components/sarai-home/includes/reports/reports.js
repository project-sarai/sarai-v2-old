Template.Reports.helpers({
  reportsMain: function(){
    var obj = Main.findOne({'name': 'reports'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  reports: function(){
  	var obj = Main.findOne({'name': 'reports'});
    if(typeof obj !== 'undefined'){
      return obj.reports;
    }
  }
});