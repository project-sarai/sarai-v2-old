Template.Homebanner.helpers({
  banner: function(){
  	var obj = Main.findOne({'name': 'banner'});
    if(typeof obj !== 'undefined'){
      return obj.banners[0];
    }
  },

  isEnabled: function(){
  	var obj = Main.findOne({'name': 'banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});