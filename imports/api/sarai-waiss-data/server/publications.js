Meteor.publish('farm', function(userId) {
    if(userId) {
        return Farm.find({
            'userId': userId
        });
    } else {
        return Farm.find({
            'public': true
        });
    }
});

Meteor.publish('crop', function() {
    return CropData.find();
});

Meteor.publish('water-management-tips', function() {
    return WaterManagementTips.find();
});

// Meteor.publish('dss-settings', function() {
//     return DSSSettings.find();
// })