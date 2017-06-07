CropData = new Mongo.Collection('crop');

CropData.deny({
	insert: function(){
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})