// Import client startup through a single index entry point

import { Accounts } from 'meteor/accounts-base';

import './routes.js';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

// Meteor.startup(function() {
//   Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
// });
