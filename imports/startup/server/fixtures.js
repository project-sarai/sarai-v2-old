// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';
import { Logos } from '../../api/logos/logos.js';
import { Story } from '../../api/story/story.js';
import { Projects } from '../../api/projects/projects.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'SARAi',
        url: '/about',
        links: [],
        createdAt: new Date(),
      },
      {
        title: 'Crops',
        url: '/',
        links: [
          {
            title: 'Rice',
            url: '/icm-rice',
            createdAt: new Date(),
          },
          {
            title: 'Corn',
            url: '/icm-corn',
            createdAt: new Date(),
          },
          {
            title: 'Banana',
            url: '/icm-banana',
            createdAt: new Date(),
          },
          {
            title: 'Coconut',
            url: '/icm-coconut',
            createdAt: new Date(),
          },
          {
            title: 'Coffee',
            url: '/icm-coffee',
            createdAt: new Date(),
          },
          {
            title: 'Cacao',
            url: '/icm-cacao',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        title: 'Maps',
        url: '/',
        links: [
          {
            title: 'Suitability Maps',
            url: 'http://maps.sarai.ph/suitability-maps',
            createdAt: new Date(),
          },
          {
            title: 'Crop Production Area',
            url: 'http://maps.sarai.ph/crop-production-area',
            createdAt: new Date(),
          },
          {
            title: 'Normalized Difference Vegetation Index (NDVI)',
            url: 'http://maps.sarai.ph/ndvi',
            createdAt: new Date(),
          },
          {
            title: 'Rainfall Map',
            url: 'http://maps.sarai.ph/rainfall-maps',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        title: 'Services',
        url: '/',
        links: [
          {
            title: 'Alerts and Advisories',
            url: 'http://sarai.ph/advisories',
            createdAt: new Date(),
          },
          {
            title: 'Monitoring',
            url: 'http://sarai.ph/weather-monitoring',
            createdAt: new Date(),
          },
          {
            title: 'Planting Guide',
            url: 'http://sarai.ph/rainfall-distribution',
            createdAt: new Date(),
          },
          {
            title: 'SPIDTech',
            url: 'http://pests.sarai.ph/',
            createdAt: new Date(),
          },
          {
            title: 'Open Data',
            url: 'http://opendata.sarai.ph/',
            createdAt: new Date(),
          },
          {
            title: 'SARAi Eskwela',
            url: 'http://portal.sarai.ph/index.php?option=com_content&view=article&id=38&Itemid=319',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        title: 'Contact Us',
        url: '/',
        links: [
          {
            title: 'Subscribe',
            url: 'https://goo.gl/forms/i4jW7LshCSQpuyZ23',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Slides.find().count() === 0) {
  const data = [
    {
      title: 'Smarter Crop Management # 1',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',
      buttonText: 'More',
      buttonURL: '#',
      rank: 1,
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
    },
    {
      title: 'Smarter Crop Management # 2',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',
      buttonText: 'More',
      buttonURL: '#',
      rank: 2,
      image: 'https://geneticliteracyproject.org/wp-content/uploads/2016/07/n-fix-crops.jpg',
    },
    {
      title: 'Smarter Crop Management # 3',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',
      buttonText: 'More',
      buttonURL: '#',
      rank: 3,
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
    },
    {
      title: 'Smarter Crop Management # 4',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',
      buttonText: 'More',
      buttonURL: '#',
      rank: 4,
      image: 'https://geneticliteracyproject.org/wp-content/uploads/2016/07/n-fix-crops.jpg',
    },
  ];

    data.forEach(slide => Slides.insert(slide));
  }

  if (Logos.find().count() === 0) {
    const data = [
      {
        name: 'SARAi',
        value: 'img/sarai.png',
        url: '/',
      },
      {
        name: 'DOST',
        value: 'img/dost.png',
        url: 'http://www.dost.gov.ph/',
      },
      {
        name: 'PCAARRD',
        value: 'img/pcaarrd.png',
        url: 'http://www.pcaarrd.dost.gov.ph/home/portal/',
      },
      {
        name: 'UPLB',
        value: 'img/uplb.png',
        url: 'http://www.uplb.edu.ph/',
      },
    ];

    data.forEach(logo => Logos.insert(logo));
  }

  if (Story.find().count() === 0) {
    const data = [
      {
        content: 'So here’s a story of how the team came up with SARAi. It did not come easy, just as how other ideas did not come over night, the team had to go through to numerous discussions and brainstorming sessions before they reach the eureka moment. Sarai was Abraham’s wife, and she was the first character in the Bible who was said to be barren. But then later on, God chose them to be the forefathers of the nation of Israel.\nIt was a miracle, of how Sarai was able to conceive. So the team thought it apt to adopt the name, thus the name Project SARAi came about. Project SARAi hopes to bring about development in our agriculture sector by providing our farmers with smarter options. Also, Project SARAi hopes to help in making a more resilient and a more proactive agriculture sector by using state-of-the-art technologies, and providing near real-time crop advisories.\nIt is a long work in progress, but with the sustained partnership with different State Universities and Colleges (SUCs) nationwide, different government agencies, and other institutions, the solutions are well along the way to reaching the farmers and other stakeholders.',
      },
    ];

    data.forEach(logo => Story.insert(logo));
  }

  if (Projects.find().count() === 0) {
    const data = [
      {
        title: 'Project 1. Model Development and Crop Forecasting',
        description: 'Project 1 aims to develop and evaluate crop models to launch a crop forecasting platform available for the entire country for the six priority crops. In order to achieve these, the project is composed of the following research areas:\n\n– Climate risk assessment in key production areas\n– Validated crop models for priority crops\n– Integrated Crop Management System (ICMS)\n– Optimal nutrient management\n– Crop advisories on crop protection and crop forecasts\n– Crop early warning systems (EWS)\n– Adaptive planting calendar\n– Database, validated crop models and forecasts per crop',
      },
      {
        title: 'Project 2. Environmental Characterization and Development of Integrated Crop Management',
        description: 'Project 2 aims to provide the near real-time, empirical field data as inputs to the crop models simulated by Project 1. It also aims to provide site-specific nutrient management advisories for the perennials.\n\n– Updated land use and crop suitability maps\n– Real time and edaphic data from Automatic Weather Stations (AWS) and sensors\n– Integrated Crop Management System (ICMS)\n– Vulnerability Studies',
      },
      {
        title: 'Project 3. SARAi Knowledge Portal',
        description: 'Project 3 is the online infrastructure of Project SARAi which serves as the database, and the online go-to site of various stakeholders.\n\n– Database platform for Project SARAi outputs\n– Crop advisories, crop forecasts, crop EWS\n– Information/learning tools\n– Planting calendar, ICM, and integrated water management IPM',
      },
    ];

    data.forEach(projects => Projects.insert(projects));
  }
});
