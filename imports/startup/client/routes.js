import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
// import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';

// MAIN LAYOUT
import '../../ui/layouts/main/main-layout.js';

// PAGES
import '../../ui/pages/home/home.js';
import '../../ui/pages/about/about.js';
import '../../ui/pages/cms/cms.js';
import '../../ui/pages/crops/rice/rice.js';
import '../../ui/pages/crops/corn/corn.js';
import '../../ui/pages/crops/banana/banana.js';

// Set up all routes in the app
// HOMEPAGE
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  },
});

// ABOUT
FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('MainLayout', { main: 'About' });
  },
});

// RICE
FlowRouter.route('/crops/rice', {
  name: 'rice',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Rice' });
  },
});

// CORN
FlowRouter.route('/crops/corn', {
  name: 'corn',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Corn' });
  },
});

// BANANA
FlowRouter.route('/crops/banana', {
  name: 'banana',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Banana' });
  },
});

FlowRouter.route('/admin', {
  name: 'admin.dashboard',
  action() {
    BlazeLayout.render('MainLayout', { main: 'CMS' });
  },
});
// 404
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
