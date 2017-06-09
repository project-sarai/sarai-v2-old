// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';
import { Logos } from '../../api/logos/logos.js';
import { Story } from '../../api/story/story.js';
import { Projects } from '../../api/projects/projects.js';
import { Services } from '../../api/services/services.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = 
      {
        title: 'mainHeader',
        links: [
            {
              title: 'SARAi',
              url: '/about-us',
              links: [],
              rank: '1',
              createdAt: new Date(),
            },
            {
              title: 'Crops',
              url: '',
              rank: '2',
              links: [
                {
                  title: 'Rice',
                  url: '/icm-rice',
                  rank: '1',
                  createdAt: new Date(),
                },
                {
                  title: 'Corn',
                  url: '/icm-corn',
                  rank: '2',
                  createdAt: new Date(),
                },
                {
                  title: 'Banana',
                  url: '/icm-banana',
                  rank: '3',
                  createdAt: new Date(),
                },
                {
                  title: 'Coconut',
                  url: '/icm-coconut',
                  rank: '4',
                  createdAt: new Date(),
                },
                {
                  title: 'Coffee',
                  url: '/icm-coffee',
                  rank: '5',
                  createdAt: new Date(),
                },
                {
                  title: 'Cacao',
                  url: '/icm-cacao',
                  rank: '6',
                  createdAt: new Date(),
                },
              ],
              createdAt: new Date(),
            },
            {
              title: 'Maps',
              url: '',
              rank: '3',
              links: [
                {
                  title: 'Suitability Maps',
                  url: 'http://maps.sarai.ph/suitability-maps',
                  rank: '1',
                  createdAt: new Date(),
                },
                {
                  title: 'Crop Production Area',
                  url: 'http://maps.sarai.ph/crop-production-area',
                  rank: '2',
                  createdAt: new Date(),
                },
                {
                  title: 'Normalized Difference Vegetation Index (NDVI)',
                  url: 'http://maps.sarai.ph/ndvi',
                  rank: '3',
                  createdAt: new Date(),
                },
                {
                  title: 'Rainfall Map',
                  url: 'http://maps.sarai.ph/rainfall-maps',
                  rank: '4',
                  createdAt: new Date(),
                },
              ],
              createdAt: new Date(),
            },
            {
              title: 'Services',
              url: '',
              rank: '4',
              links: [
                {
                  title: 'Alerts and Advisories',
                  url: 'http://sarai.ph/advisories',
                  rank: '1',
                  createdAt: new Date(),
                },
                {
                  title: 'Monitoring',
                  url: 'http://sarai.ph/weather-monitoring',
                  rank: '2',
                  createdAt: new Date(),
                },
                {
                  title: 'Planting Guide',
                  url: 'http://sarai.ph/rainfall-distribution',
                  rank: '3',
                  createdAt: new Date(),
                },
                {
                  title: 'SPIDTech',
                  url: 'http://pests.sarai.ph/',
                  rank: '4',
                  createdAt: new Date(),
                },
                {
                  title: 'Open Data',
                  url: 'http://opendata.sarai.ph/',
                  rank: '5',
                  createdAt: new Date(),
                },
                {
                  title: 'SARAi Eskwela',
                  url: 'http://portal.sarai.ph/index.php?option=com_content&view=article&id=38&Itemid=319',
                  rank: '6',
                  createdAt: new Date(),
                },
              ],
              createdAt: new Date(),
            },
            {
              title: 'Contact Us',
              url: '',
              rank: '5',
              links: [
                {
                  title: 'Subscribe',
                  url: 'https://goo.gl/forms/i4jW7LshCSQpuyZ23',
                  rank: '1',
                  createdAt: new Date(),
                },
              ],
              createdAt: new Date(),
            },
          ],
        };

    Links.insert(data);
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

  if (Services.find().count() == 0) {
  const data = [
    {
      url: '#',
      title: 'Integrated Crop Management',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: 'Ivy Rose Marajas; Kim Nyka Pedeguerra; Marck Ferdie Eusebio; Yaminah Mochica Pinca',
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: 'Dr. Pompe Sta. Cruz, CA, UPLB; Dr. Ronaldo Saludes, CEAT, UPLB',
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 2',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: 'Ivy Rose Marajas; Kim Nyka Pedeguerra; Marck Ferdie Eusebio; Yaminah Mochica Pinca',
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: 'Dr. Pompe Sta. Cruz, CA, UPLB; Dr. Ronaldo Saludes, CEAT, UPLB',
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 3',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: 'Ivy Rose Marajas; Kim Nyka Pedeguerra; Marck Ferdie Eusebio; Yaminah Mochica Pinca',
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: 'Dr. Pompe Sta. Cruz, CA, UPLB; Dr. Ronaldo Saludes, CEAT, UPLB',
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 4',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: 'Ivy Rose Marajas; Kim Nyka Pedeguerra; Marck Ferdie Eusebio; Yaminah Mochica Pinca',
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: 'Dr. Pompe Sta. Cruz, CA, UPLB; Dr. Ronaldo Saludes, CEAT, UPLB',
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 5',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: 'Ivy Rose Marajas; Kim Nyka Pedeguerra; Marck Ferdie Eusebio; Yaminah Mochica Pinca',
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: 'Dr. Pompe Sta. Cruz, CA, UPLB; Dr. Ronaldo Saludes, CEAT, UPLB',
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    }
  ];
    data.forEach(services => Services.insert(services));
  }

  if (Logos.find().count() === 0) {
    const data = [
      {
        name: 'SARAi',
        value: 'img/logos/sarai.png',
        url: '/',
      },
      {
        name: 'DOST',
        value: 'img/logos/dost.png',
        url: 'http://www.dost.gov.ph/',
      },
      {
        name: 'PCAARRD',
        value: 'img/logos/pcaarrd.png',
        url: 'http://www.pcaarrd.dost.gov.ph/home/portal/',
      },
      {
        name: 'UPLB',
        value: 'img/logos/uplb.png',
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
        description: 'Project 1 aims to develop and evaluate crop models to launch a crop forecasting platform available for the entire country for the six priority crops. In order to achieve these, the project is composed of the following research areas:',
        subDescription: [
          'Climate risk assessment in key production areas',
          'Validated crop models for priority crops',
          'Integrated Crop Management System (ICMS)',
          'Optimal nutrient management',
          'Crop advisories on crop protection and crop forecasts',
          'Crop early warning systems (EWS)',
          'Adaptive planting calendar',
          'Database, validated crop models and forecasts per crop',
        ],
      },
      {
        title: 'Project 2. Environmental Characterization and Development of Integrated Crop Management',
        description: 'Project 2 aims to provide the near real-time, empirical field data as inputs to the crop models simulated by Project 1. It also aims to provide site-specific nutrient management advisories for the perennials.',
        subDescription: [
          'Updated land use and crop suitability maps',
          'Real time and edaphic data from Automatic Weather Stations (AWS) and sensors',
          'Integrated Crop Management System (ICMS)',
          'Vulnerability Studies',
        ],
      },
      {
        title: 'Project 3. SARAi Knowledge Portal',
        description: 'Project 3 is the online infrastructure of Project SARAi which serves as the database, and the online go-to site of various stakeholders.',
        subDescription: [
          'Database platform for Project SARAi outputs',
          'Crop advisories, crop forecasts, crop EWS',
          'Information/learning tools',
          'Planting calendar, ICM, and integrated water management IPM',
        ],
      },
      {
        title: 'Project 4: Capacity and Knowledge-Building',
        description: 'Project 4 makes sure that the system and the outputs of the research program are shared with the stakeholders through conducting technical trainings, seminars, workshops; developing training modules; and designing various IEC materials.',
        subDescription: [
          'Analyzed training needs',
          'New and complementary training tools and activities',
          'Conduct of trainings, IEC ad joint learning activities on smarter farming techniques, ICM, DSS, AWS/Sensors',
        ],
      },
      {
        title: 'Project 5: SARAi Mainstreaming',
        description: 'Project 5 is in charge of the formulation of science-based recommendations for the agricultural sector. It also makes sure that the partner SUCs are committed into contributing to the consortium, and that the relevant government agencies will take part in building and improving the system.',
        subDescription: [
          'Identification of policy issues and formulation of policy papers',
          'Publication of research results',
          'Organization of planning and scientific meetings',
          'Establish: Crop-climate forecasting and modelling laboratory',
          'Build consortium to ensure sustainability',
        ],
      },
    ];

    data.forEach(projects => Projects.insert(projects));
  }
});
