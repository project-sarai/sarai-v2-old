import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
// import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';

// MAIN LAYOUT
import '../../ui/layouts/main/main-layout.js';

//CMS LAYOUT
import '../../ui/layouts/cms/cms-layout.js';

// PAGES
import '../../ui/pages/home/home.js';
import '../../ui/pages/about/about.js';

import '../../ui/pages/cms/cms.js';
import '../../ui/pages/cms/cms-home/cms-home.js';
import '../../ui/pages/cms/about-us/about-us-content.js';
import '../../ui/pages/cms/about-us/about-us-title.js';
import '../../ui/pages/cms/about-us/about-us-partners.js';
import '../../ui/pages/cms/about-us/about-us-leaders.js';
import '../../ui/pages/cms/about-us/about-us-projects.js';
import '../../ui/pages/cms/about-us/about-us-banner.js';
import '../../ui/pages/cms/services/services-cms-advisories.js';
import '../../ui/pages/cms/services/services.js';
import '../../ui/pages/cms/main/main.js';
import '../../ui/pages/cms/main/banner-options.js';
import '../../ui/pages/cms/main/download-forecast.js';
import '../../ui/pages/cms/main/top-header-options.js';
import '../../ui/pages/cms/common/cms-upload/cms-upload.js';
import '../../ui/pages/cms/weather/weather.js';
import '../../ui/pages/cms/weather/weather-settings.js';
import '../../ui/pages/cms/weather/data/weather-data.js'
import '../../ui/pages/cms/weather/data/weather-data-row.js'
import '../../ui/pages/cms/weather/index/weather-settings-block.js'
import '../../ui/pages/cms/weather/index/weather-stations-block.js'
import '../../ui/pages/cms/weather/stations/weather-stations.js'
import '../../ui/pages/cms/weather/stations/weather-stations-row.js'
import '../../ui/pages/cms/main/header-options.js';
import '../../ui/pages/cms/services/services-cms-form.js';
import '../../ui/pages/cms/services/services-cms-edit-form.js';
import '../../ui/pages/cms/services/services-cms-edit-button.js';
import '../../ui/pages/cms/services/services-cms-delete-button.js';
import '../../ui/pages/crops/rice/rice.js';

import '../../ui/pages/crops/rice/rice.js';
import '../../ui/pages/crops/corn/corn.js';
import '../../ui/pages/crops/banana/banana.js';
import '../../ui/pages/crops/coconut/coconut.js';
import '../../ui/pages/crops/coffee/coffee.js';
import '../../ui/pages/crops/cacao/cacao.js';


import '../../ui/pages/services-page/services-page.js';
import '../../ui/pages/monitoring/monitoring.js';

import '../../ui/pages/reports/reports-page.js';
import '../../ui/components/home/reports.js';

import '../../ui/pages/reports/reports-page.js';
import '../../ui/components/home/reports.js';

import '../../ui/pages/advisories/advisories.js';

import '../../ui/pages/reports/reports-page.js';
import '../../ui/components/home/reports.js';



import '../../ui/pages/reports/reports-page.js';
import '../../ui/components/home/reports.js';

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

// COCONUT
FlowRouter.route('/crops/coconut', {
  name: 'coconut',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Coconut' });
  },
});

// COFFEE
FlowRouter.route('/crops/coffee', {
  name: 'coffee',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Coffee' });
  },
});

// CACAO
FlowRouter.route('/crops/cacao', {
  name: 'cacao',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Cacao' });
  },
});

// ADVISORIES
FlowRouter.route('/advisories', {
  name: 'advisories',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Advisories' });
  },
});

FlowRouter.route('/admin', {
  name: 'admin.home',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSHome' });
  },
});

FlowRouter.route('/admin/main', {
  name: 'admin.main',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSMain' });
  },
});
FlowRouter.route('/admin/main-header', {
  name: 'admin.main-header',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'HeaderOptions' });
  },
});

FlowRouter.route('/admin/main-banner', {
  name: 'admin.main-banner',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSBannerOptions' });
  },
});
FlowRouter.route('/admin/main-download-forecast', {
  name: 'admin.main-download-forecast',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'DownloadForecast' });
  },
});
FlowRouter.route('/admin/main-top-header', {
  name: 'admin.main-top-header',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'TopHeaderOptions' });
  },
});
FlowRouter.route('/admin/about-us-content', {
  name: 'admin.about-us-content',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsContent' });
  },
});
FlowRouter.route('/admin/about-us-title', {
  name: 'admin.about-us-title',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsTitle' });
  },
});
FlowRouter.route('/admin/about-us-partners', {
  name: 'admin.about-us-partners',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsPartners' });
  },
});
FlowRouter.route('/admin/about-us-leaders', {
  name: 'admin.about-us-leaders',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsLeaders' });
  },
});

FlowRouter.route('/admin/about-us-projects', {
  name: 'admin.about-us-projects',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsProjects' });
  },
});
FlowRouter.route('/admin/about-us-banner', {
  name: 'admin.about-us-banner',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUsBanner' });
  },
});
FlowRouter.route('/admin/services-settings', {
  name: 'admin.services',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSServices' });
  },
});
FlowRouter.route('/admin/services-advisories', {
  name: 'admin.advisories',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAdvisories' });
  },
});
FlowRouter.route('/admin/services/add', {
  name: 'admin.services-add',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSServicesForm' });
  },
});
FlowRouter.route("/admin/services/:_id", {
  name: 'services',
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.reset();
    BlazeLayout.render("CMSLayout", {main: "CMSServicesForm"});
  },
});
FlowRouter.route('/admin/weather', {
  name: 'admin.weather',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'WeatherCMS' });
  },
});
FlowRouter.route('/admin/weather-settings', {
  name: 'admin.weather-settings',
  triggersEnter: [ isAdminRedirect ],
  action() {
    BlazeLayout.render('CMSLayout', { main: 'WeatherSettingsCMS' });
  },
});
FlowRouter.route("/admin/weather/stations", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayout", {main: "WeatherStationsCMS"})
  }
});
FlowRouter.route("/admin/weather/stations/:stationID", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayout", {main: "WeatherDataCMS"})
  }
});
// 404
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route("/services/:_id", {
  name: 'servicespage',
  action: (params, queryParams) => {
    BlazeLayout.reset();
    BlazeLayout.render('MainLayout', {main: 'ServicesPage'});
  },
});

FlowRouter.route("/reports", {
  name: 'reports',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ReportsPage'});
  },
});

FlowRouter.route("/monitoring", {
  name: 'monitoring',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Monitoring'});
  },
});
