Farm = new Mongo.Collection('farm')

Farm.deny({
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

