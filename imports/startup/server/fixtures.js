// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';
import { Logos } from '../../api/logos/logos.js';
import { Story } from '../../api/story/story.js';
import { Projects } from '../../api/projects/projects.js';
import { Services } from '../../api/services/services.js';
import { Crops } from '../../api/crops/crops.js';
<<<<<<< ef220a475a38be4e9f912781362e5344577d6ffb
import { About } from '../../api/about/about.js';
import { Reports } from '../../api/reports/reports.js';
import { Advisories } from '../../api/advisories/advisories.js';
import { Main } from '../../api/main/main.js';
import { DSSSettings } from '../../api/weather/sarai-dss-settings.js';
import { WeatherStations } from '../../api/weather/sarai-weather-stations.js';
=======
import { Reports } from '../../api/reports/reports.js';
>>>>>>> Added reports

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = 
      {
        title: 'mainHeader',
        links: [
            {
              title: 'SARAi',
              url: '/about',
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
                  url: '/crops/rice',
                  rank: '1',
                  createdAt: new Date(),
                },
                {
                  title: 'Corn',
                  url: '/crops/corn',
                  rank: '2',
                  createdAt: new Date(),
                },
                {
                  title: 'Banana',
                  url: '/crops/banana',
                  rank: '3',
                  createdAt: new Date(),
                },
                {
                  title: 'Coconut',
                  url: '/crops/coconut',
                  rank: '4',
                  createdAt: new Date(),
                },
                {
                  title: 'Coffee',
                  url: '/crops/coffee',
                  rank: '5',
                  createdAt: new Date(),
                },
                {
                  title: 'Cacao',
                  url: '/crops/cacao',
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
          buttonEnabled: true,
        };
    Links.insert(data);
  }

  if (WeatherStations.find().count() === 0) {
    WeatherStations.insert({ id : 'IBICOLGU2', label : 'SARAI BUCAF Guinobatan Albay (UPLB)', coords : [ 13.193, 123.595 ], group : 'SARAI', enabled: true, region: 'V' })
    WeatherStations.insert({ id : 'IWESTERN596', label : 'SARAI La Granja La Carlota City, Negros Occidental (UPLB), La Carlota City', coords : [ 10.404931, 122.978889 ], group : 'SARAI', enabled: true, region: 'IV-A' })
    WeatherStations.insert({ id : 'ICALABAR25', label : 'SARAI DA-QAES Tiaong, Quezon (UPLB), Tiaong', coords : [ 13.944949, 121.369759 ], group : 'SARAI', enabled: true, region: 'IV-A' })
    WeatherStations.insert({ id : 'ICENTRAL91', label : 'SARAI CLSU Science City of Munoz, Nueva Ecija, Science City Of Muñoz', coords : [ 15.738162, 120.928391   ], group : 'SARAI', enabled: true, region: 'III' })
    WeatherStations.insert({ id : 'IWESTERN635', label : 'SARAI WVSU Lambunao, Iloilo (UPLB)', coords : [ 11.102, 122.415 ], group : 'SARAI', enabled: true, region: 'VI' })
    WeatherStations.insert({ id : 'ICALABAR18', label : 'SARAI IPB, Laguna (UPLB), Los Baños', coords : [ 14.156224, 121.262199 ], group : 'SARAI', enabled: true, region: 'IV-A' })
    WeatherStations.insert({ id : 'IMIMAROP6', label : 'SARAI WPU Aborlan Palawan (UPLB)', coords : [ 9.45, 118.554 ], group : 'SARAI', enabled: true, region: 'IV-B' })
    WeatherStations.insert({ id : 'ICAGAYAN3', label : 'SARAI ISU Cabagan, Isabela (UPLB), Cabagan', coords : [ 17.410467, 121.813698 ], group : 'SARAI', enabled: true, region: 'II' })
    WeatherStations.insert({ id : 'ICAGAYAN2', label : 'SARAI ISU Echague, Isabela (UPLB) ', coords : [ 16.726, 121.699 ], group : 'SARAI', enabled: true, region: 'II' })
    WeatherStations.insert({ id : 'ICENTRAL94', label : 'SARAI CTU Barili Cebu (UPLB)', coords : [ 10.133, 123.547 ], group : 'SARAI', enabled: true, region: 'III' })
  }

  if (!DSSSettings.findOne({name: 'wunderground-api-key'})) {
    DSSSettings.insert({
      name: 'wunderground-api-key',
      value: '9470644e92f975d3'
    });
  }

  if (Main.find().count() === 0) {
    const data = 
      [
        {
          name: 'mainHeader',
          img: '/header_green.png',
          links: [
            {
              name: 'Home',
              href: '/',
              links: [],
              id: 'home-link',
              withsublinks: false,
              rank: 1
            },
            {
              name: 'About Us',
              href: '/about-us',
              links: [],
              id: 'about-us-link',
              withsublinks: false,
              rank: 2
            },
            {
              name: 'Explore',
              href: '',
              links: [
                {
                  name: 'Suitability Maps',
                  href: 'http://sarai.ph:8080/',
                  rank: 1
                },
                {
                  name: 'Weather Monitoring',
                  href: '/weather-monitoring',
                  rank: 2
                },
                {
                  name: 'Accumulated Rainfall',
                  href: '/accumulated-rainfall',
                  rank: 2
                },
                {
                  name: 'Crop Production Area',
                  href: '/crop-production-area',
                  rank: 3
                },
                {
                  name: 'Normalized Difference Vegetation Index (NDVI)',
                  href: '/ndvi',
                  rank: 4
                },
                {
                  name: 'Rainfall',
                  href: '/rainfall',
                  rank: 5
                },
                {
                  name: 'Open Data',
                  href: 'opendata.sarai.ph',
                  rank: 6
                }
              ],
              id: 'explore-link',
              withsublinks: true,
              rank: 3
            },
            {
              name: 'Planning Dates',
              href: '',
              links: [],
              id: 'planning-dates-link',
              withsublinks: false,
              rank: 4
            },
            {
              name: 'DSS',
              href: '',
              links: [
                {
                  name: 'Corn Nutrient Expert',
                  href: '/dss/corn-nutrient-expert',
                  rank: 1
                }
              ],
              id: 'dss-link',
              withsublinks: true,
              rank: 5
            },
            {
              name: 'Get Involved',
              href: '',
              links: [
                {
                  name: 'Contact Us',
                  href: '/get-involved/contact',
                  rank: 1
                },
                {
                  name: 'Submit a Story',
                  href: '/get-involved/contact',
                  rank: 2
                },
                {
                  name: 'Join the Discussion',
                  href: 'https://groups.google.com/forum/#!forum/project-sarai-knowledge-hub',
                  rank: 3
                }
              ],
              id: 'get-involved-link',
              withsublinks: true,
              rank: 6
            }
          ],
          buttonText: 'BETA',
          buttonEnabled: true,
          enabled: true
        },
        {
          name: 'topHeader',
          message: 'ENSO-Neutral Condition',
          href: 'http://www.pagasa.dost.gov.ph/index.php/climate/climate-advisories',
          searchText: 'How can we help you?',
          enabled: true
        },
        {
          name: 'banner',
          slides: [
            {
              image: '/img/homepage-slider/Project-SARAI.png',
              textPosition: 'left',
              title: 'PROJECT SARAI',
              subTitle: 'Smarter Farmers, Smarter Agriculture.',
              text: 'Search through the different SARAI technologies and systems to what, when, and where to plant',
              buttonText: 'MORE',
              buttonLink: ''
            },
            {
              image : '/img/homepage-slider/Knowledge-Portal.png',
              textPosition : 'left',
              title : 'SARAi KNOWLEDGE PORTAL',
              subTitle : 'One-stop-shop for crop monitoring and forecasting',
              text : 'Get comprehensive national, regional, and municipal data to know what, where, and, when to plant.',
              buttonText : 'EXPLORE',
              buttonLink : '#main-preview',
              rank : ''
            },
            {
              image: '/img/homepage-slider/Real-Time-Monitoring.jpg',
              textPosition: 'right',
              title: 'REAL-TIME WEATHER MONITORING',
              subTitle: 'Guide your farming practices with weather data',
              text: 'Get information on previous weather patterns and current weather conditions through historical and current weather data.',
              buttonText: 'EXPLORE',
              buttonLink: ''
            },
            {
              image: '/img/homepage-slider/Crop-Monitoring-and-Forecasting.jpg',
              textPosition: 'right',
              title: 'CROP MONITORING AND FORECASTING',
              subTitle: 'Plan your planting practices wisely for optimum yield',
              text: 'View the 30-day cumulative rainfall data and 10-day weather forecast in your area to know the right time to plant.',
              buttonText: 'EXPLORE',
              buttonLink: ''
            },
            {
              image: '/img/homepage-slider/Smarter-Crop-Management.jpg',
              textPosition: 'right',
              title: 'SMARTER CROP MANAGEMENT',
              subTitle: 'Helping farmers to produce more with less',
              text: 'Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.',
              buttonText: 'KNOW MORE',
              buttonLink: ''
            },
            {
              image: '/img/homepage-slider/MOBILE-APP.png',
              textPosition: 'right',
              title: 'SARAI MOBILE APP',
              subTitle: 'Agriculture alerts on-the-go',
              text: 'A mobile app where users can receive alerts via push notifications to mobile devices.',
              buttonText: 'CLICK HERE TO DOWNLOAD',
              buttonLink: 'https://build.phonegap.com/apps/1850892/install/HNYZJ_mtp4V4uSLkgvCK'
            },
            {
              image: '/img/homepage-slider/eskwela.png',
              textPosition: 'right',
              title: 'SARAI ESKWELA',
              subTitle: 'Knowledge sharing for smarter agriculture',
              text: 'Explore the training modules and information, education, and communication materials to guide you in your farming practice.',
              buttonText: 'CLICK HERE',
              buttonLink: ''
            }
          ],
          enabled: true
        }
      ];

      data.forEach(entry => Main.insert(entry));
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
      name: 'suitability-maps',
      title: 'Suitability Maps',
      tagline: 'Maximize your yield by knowing what and where to plant.',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
      info: {
        crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
        experts: ['Prof. Vic Bato, UPLB'],
        ura: ['Roel Fucio'],
        projectLeaders: ['Project 1, Dr. Felino Lansigan, Project Leader']
      },
      media: {
        link: '',
        type: '',
        subtitle: 'Suitability Maps Application',
        subtitleLink: 'http://159.203.253.31/suitability-maps/rice'
      },
      col1: {
        title: '',
        content: '<p>Knowing what and where to plant are important considerations if you want to maximize your productivity and yield. It is also important to identify the parts of the country which are feasible to plant so that the policy makers and the local government unit can be guided on the agricultural programs that they will plan.</p>'
      },
      col2: {
        title: '',
        content: '<p>The SARAi Suitability Maps can be used to identify the different locations of the country which are highly suitable, moderately suitable, and marginally suitable for its initial six crops. By identifying these areas, resources will not be put to waste and farmers can attain more yield.</p>'
      },
      sort: 2
    },
    {
      name: 'real-time-data',
      title: 'Real-Time Weather Monitoring',
      tagline: 'View real-time weather data from the Automatic Weather Stations installed throughout the country.',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
      info: {
        crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
        experts: ['Prof. Nel Altoveros, CAS, UPLB'],
        ura: ['Janah Monsanto'],
        projectLeaders: ['Project 2, Dr. Art Salazar, Project Leader']
      },
      media: {
        link: 'https://www.youtube.com/embed/LgyYBLmmJkA?feature=oembed',
        type: 'youtube-video',
        subtitle: '',
        subtitleLink: '/weather-monitoring'
      },
      col1: {
        title: '',
        content: '<p>Weather data is vital for managing the right planting schedule for one’s vegetation. Different crops require different levels of rainfall, temperature, humidity and other weather parameters. Farmers and agriculturists alike should be regularly informed about these important weather conditions in order for them to maximize their crop production and profit, use their time and land more efficiently and minimize crop damages caused by the weather.</p>'
      },
      col2: {
        title: '',
        content: '<p>Weather stations are being set up in various sites all around the country where major crop plantations are found. These stations, along with the satellite data, will be used to inform farmers and agriculturists on previous weather patterns and current weather conditions through our outputs of historical and current weather data. Later on, weather prediction will be available to serve as a guiding tool for future planting.</p>'
      },
      sort: 1
    },
    {
      name: 'alerts-and-advisories',
      title: 'Alerts and Advisories',
      tagline: 'Receive crop alerts and advisories to help you increase your yield and your profit.',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
      info: {
        crops: 'Rice, Corn, Banana, Coconut, Coffee, Cacao',
        experts: ['Dr. Felino A. Lansigan, CAS, UPLB'],
        ura: ['Roinand Aguila', 'Monina Gazelle Charina Carandang', 'Jeyneth Ann Mariano'],
        projectLeaders: []
      },
      media: {
        link: '',
        type: 'image',
        subtitle: 'The application is still under development.',
        subtitleLink: 'http://159.203.253.36:81/'
      },
      col1: {
        title: '',
        content: ''
      },
      col2: {
        title: '',
        content: ''
      },
      sort: 8
    },
  ];
    data.forEach(services => Services.insert(services));
  }

  if (Logos.find().count() === 0) {
    const data = [
      {
        name: 'SARAi',
        value: '/img/logos/sarai.png',
        url: '/',
      },
      {
        name: 'DOST',
        value: '/img/logos/dost.png',
        url: 'http://www.dost.gov.ph/',
      },
      {
        name: 'PCAARRD',
        value: '/img/logos/pcaarrd.png',
        url: 'http://www.pcaarrd.dost.gov.ph/home/portal/',
      },
      {
        name: 'UPLB',
        value: '/img/logos/uplb.png',
        url: 'http://www.uplb.edu.ph/',
      },
    ];
    data.forEach(logo => Logos.insert(logo));
  }
  if (Story.find().count() === 0) {
    const data = [
      {
        name: 'origin',
        title: 'Our Story',
        content: 'So here’s a story of how the team came up with SARAi. It did not come easy, just as how other ideas did not come over night, the team had to go through to numerous discussions and brainstorming sessions before they reach the eureka moment. Sarai was Abraham’s wife, and she was the first character in the Bible who was said to be barren. But then later on, God chose them to be the forefathers of the nation of Israel.\nIt was a miracle, of how Sarai was able to conceive. So the team thought it apt to adopt the name, thus the name Project SARAi came about. Project SARAi hopes to bring about development in our agriculture sector by providing our farmers with smarter options. Also, Project SARAi hopes to help in making a more resilient and a more proactive agriculture sector by using state-of-the-art technologies, and providing near real-time crop advisories.\nIt is a long work in progress, but with the sustained partnership with different State Universities and Colleges (SUCs) nationwide, different government agencies, and other institutions, the solutions are well along the way to reaching the farmers and other stakeholders.',
      },
    ];

    data.forEach(logo => Story.insert(logo));
  }

  if (Advisories.find().count() === 0){
    const data = [
      {
        title: 'General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management',
        body: 'Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao. There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable. For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.',
        date: 'April 16, 2017'
      }
    ];

    data.forEach(entry => Advisories.insert(entry));
  }

  if (About.find().count() === 0) {
    const data = [
      {
        name: 'title',
        text: 'About Us',
      },
      {
        name: 'leaders',
        title: 'Project Leaders',
        list: [
          {
            leaderName: 'Dr. Ma. Victoria O. Espaldon',
            position: 'Program Leader'
          },
          {
            leaderName: 'Dr. Felino P. Lansigan',
            position: 'Project 1 Leader'
          },
          {
            leaderName: 'Dr. Artemio M. Salazar',
            position: 'Project 2 Leader'
          },
          {
            leaderName: 'Prof. Concepcion L. Khan',
            position: 'Project 3 Leader'
          },
          {
            leaderName: 'Dr. Decibel V. Faustino-Eslava',
            position: 'Project 4 Leader'
          }
        ]
      },
      {
        name: 'partners',
        title1: 'Partner Institutions',
        text11: 'Academic Institutions',
        subtext11: ' The program has partnered with the following academic institutions for the setting up of experiments, installation of equipment, and gathering of real-time field data. Moreover, the program envisions each SUC as an active member of the consortium which will carry out the system and continue releasing the advisories in their respective regions.',
        description11: '– Isabela State University (ISU)<br> – Central Luzon State University (CLSU)<br>– Bicol University (BU)<br>– Mindoro State College of Agriculture and Technology (MinSCAT)<br>– Western Philippines University (WPU)<br>– West Visayas State University (WVSU)<br>– Cebu Technological University (CTU)<br>– Central Mindanao University (CMU)<br>– Southern Philippines Agri-Business and Marine and Aquatic School of Technology (SPAMAST)<br>– Cavite State University (CavSU)<br>– Misamis Oriental State College of Agriculture and Technology (MOSCAT)<br>– University of the Philippines Diliman',
        text22: 'Government Agencies',
        subtext22: ' The mandated government agencies provide the necessary data, and networks for the program. They also help in directing the program in terms of what agencies to tap for the easier spread and adoption of the system.',
        description22: '– Philippine Coconut Authority (PCA) – DA-Quezon Agricultural Experimentation Station (DA-QAES)<br>– PhilRICE<br>– Philippine Atmospheric, Geophysical, & Astronomical Services Administration (PAGASA)<br>– Bureau of Soils and Water Management (BSWM)<br>– Advanced Science Technology Institute (ASTI)<br>– LGU – Dumangas, Iloilo<br>–  LGU – Wao, Lanao Del Sur',
        text33: 'Private Institutions',
        subtext33: ' Some of these private institutions such as SMART, IBM, and IPNI have provided some services for the program for app development, and use of existing technologies. The other institutions serve as the program’s collaborators for experimental set up, and data gathering.',
        description33: '– PPhilMAIZE<br>– International Plant Nutrition Institute (IPNI)<br>– SMART Communications, Inc. (SMART)<br>– IBM Philippines, Inc. (IBM)<br>– Nestle Lipa Integrated Coffee Research Station (Nestle) (NLICC)<br>– World Agroforestry Center (ICRAF)<br>– Puentespina Farms',
        text44: 'Cooperative',
        subtext44: 'TAMCO is one of the program’s partner for the research activities on coffee.',
        description44: '– Talaorani Multipurpose Cooperative (TAMCO)',
      },
      {
        name: 'projects',
        title: '<h5><b>The Projects</b></h5>',
        text1: '<b>Project 1. Model Development and Crop Forecasting</b>',
        subtext1: ' <p>Project 1 aims to develop and evaluate crop models to launch a crop forecasting platform available for the entire country for the six priority crops. In order to achieve these, the project is composed of the following research areas:</p>',
        description1: '<p>– Climate risk assessment in key production areas<br>– Validated crop models for priority crops<br>– Integrated Crop Management System (ICMS)<br>– Optimal nutrient management<br>– Crop advisories on crop protection and crop forecasts<br>– Crop early warning systems (EWS)<br>– Adaptive planting calendar<br>– Database, validated crop models and forecasts per crop</p>',
        text2: '<b>Project 2: Environmental Characterization and Development of Integrated Crop Management</b>',
        subtext2: '<p>Project 2 aims to provide the near real-time, empirical field data as inputs to the crop models simulated by Project 1. It also aims to provide site-specific nutrient management advisories for the perennials.</p>',
        description2: '<br>– Updated land use and crop suitability maps<br>– Real time and edaphic data from Automatic Weather Stations (AWS) and sensors<br>– Integrated Crop Management System (ICMS)<br>– Vulnerability Studies</p>',
        text3: '<b>Project 3: SARAi Knowledge Portal</b>',
        subtext3: '<p>Project 3 is the online infrastructure of Project SARAi which serves as the database, and the online go-to site of various stakeholders.</p>',
        description3: '<p>– Database platform for Project SARAi outputs<br>– Crop advisories, crop forecasts, crop EWS<br>– Information/learning tools<br>– Planting calendar, ICM, and integrated water management IPM<p>',
        text4: '<b>Project 4: Capacity and Knowledge-Building</b>',
        subtext4: '<p>Project 4 makes sure that the system and the outputs of the research program are shared with the stakeholders through conducting technical trainings, seminars, workshops; developing training modules; and designing various IEC materials.</p>',
        description4: '<p>– Analyzed training needs<br>– New and complementary training tools and activities<br>– Conduct of trainings, IEC ad joint learning activities on smarter farming techniques, ICM, DSS, AWS/Sensors</p>',
        text5: '<b>Project 5: SARAi Mainstreaming</b>',
        subtext5: 'Project 5 is in charge of the formulation of science-based recommendations for the agricultural sector. It also makes sure that the partner SUCs are committed into contributing to the consortium, and that the relevant government agencies will take part in building and improving the system.',
        description5: '<p>– Identification of policy issues and formulation of policy papers<br>– Publication of research results<br>– Organization of planning and scientific meetings<br>– Establish: Crop-climate forecasting and modelling laboratory<br>– Build consortium to ensure sustainability</p>',
      },
      {
        name: 'banner',
        banners:
        [
          {
            img: '/img/about-banner.jpg',
            subtext: 'We are on a Mission >>',
            subtext1: 'Giving farmers access to real-time knowledge for a new edge on making smarter decisions.'
          }
        ],
      },
    ];

    data.forEach(logo => About.insert(logo));
  }

  if (Projects.find().count() === 0) {
    const data = [
      {
        title: 'Project 1. Model Development and Crop Forecasting',
        description: 'Project 1 aims to develop and evaluate crop models to launch a crop forecasting platform available for the entire country for the six priority crops. In order to achieve these, the project is composed of the following research areas:',
        body: '<p><br>– Climate risk assessment in key production areas<br>– Validated crop models for priority crops<br>– Integrated Crop Management System (ICMS)<br>– Optimal nutrient management<br>– Crop advisories on crop protection and crop forecasts<br>– Crop early warning systems (EWS)<br>– Adaptive planting calendar<br>– Database, validated crop models and forecasts per crop</p>',
      },
      {
        title: 'Project 2. Environmental Characterization and Development of Integrated Crop Management',
        description: 'Project 2 aims to provide the near real-time, empirical field data as inputs to the crop models simulated by Project 1. It also aims to provide site-specific nutrient management advisories for the perennials.',
        body: '<p><br>– Updated land use and crop suitability maps<br>– Real time and edaphic data from Automatic Weather Stations (AWS) and sensors<br>– Integrated Crop Management System (ICMS)<br>– Vulnerability Studies<p></p></p>',
      },
      {
        title: 'Project 3. SARAi Knowledge Portal',
        description: 'Project 3 is the online infrastructure of Project SARAi which serves as the database, and the online go-to site of various stakeholders.',
        body: '<p><br>– Updated land use and crop suitability maps<br>– Real time and edaphic data from Automatic Weather Stations (AWS) and sensors<br>– Integrated Crop Management System (ICMS)<br>– Vulnerability Studies<p></p></p>',
      },
      {
        title: 'Project 4: Capacity and Knowledge-Building',
        description: 'Project 4 makes sure that the system and the outputs of the research program are shared with the stakeholders through conducting technical trainings, seminars, workshops; developing training modules; and designing various IEC materials.',
        body: '<p><p>– Analyzed training needs<br>– New and complementary training tools and activities<br>– Conduct of trainings, IEC ad joint learning activities on smarter farming techniques, ICM, DSS, AWS/Sensors</p></p>',
      },
      {
        title: 'Project 5: SARAi Mainstreaming',
        description: 'Project 5 is in charge of the formulation of science-based recommendations for the agricultural sector. It also makes sure that the partner SUCs are committed into contributing to the consortium, and that the relevant government agencies will take part in building and improving the system.',
        body: '<p><p>– Identification of policy issues and formulation of policy papers<br>– Publication of research results<br>– Organization of planning and scientific meetings<br>– Establish: Crop-climate forecasting and modelling laboratory<br>– Build consortium to ensure sustainability</p></p>',
      },
    ];

    data.forEach(project => Projects.insert(project));
  }

  if (Reports.find().count() === 0) {
    const data = [
      {
        title: 'Sample Report #1',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Assessment_basis_Project-SARAI.pdf',
        date: '2017,06,20',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',
      },
      {
        title: 'Sample Report #2',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        date: '2017,06,21',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',      
      },
      {
        title: 'Sample Report #3',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        date: '2017,06,19',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',      
      },
      {
        title: 'Sample Report #4',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        date: '2018,03,19',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',      
      },
      {
        title: 'Sample Report #3',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        date: '2017,06,19',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',      
      },
      {
        title: 'Sample Report #4',
        file: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        date: '2018,03,19',
        thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg',      
      },
    ];
      
    data.forEach(report => Reports.insert(report));
  }

  if (Crops.find().count() === 0) {
    const data = [
      {
        name: 'rice',
        about: '<h2>About Rice</h2><h3>Introduction</h3><p>A need to increase rice production by 26% by 2035 in order to meet the demand of increasing population [ CITATION FAO09 l 1033 ]. Decreasing agricultural lands, limited water and fertilizer and environmental threats are some of the challenges agriculture industry. Closing existing yield gaps is one key strategy in meeting food demand [ CITATION Fol11 l 1033 ]. </p><p>Yield gap refers to the difference between the average farmers’ (actual) yield and attainable yield (without nutrient and water limitations) [ CITATION Lab12 l 1033 ]. Some reasons, but not limited to, include farmers’ characteristics, farm site characteristics, and technology available within the area. Analysis of yield gap can aid in determining expected increase in yield by alleviating observed constraints [ CITATION Bol11 l 1033 ].  Knowledge on yield gaps can help in (i) prioritizing locations and needs for agricultural research and development; (ii) assessing the effectiveness and impact of introduced technologies; or (iii) evaluate the impact of future scenarios, such as climate change [ CITATION Als09 l 1033 ].</p><h3>Objectives</h3><ul><li>To determine the gap between attainable and actual rice yields in 8 major lowland-rice producing areas (Isabela, Nueva Ecija, Laguna, Oriental Mindoro, Iloilo, Bukidnon, North Cotabato and Davao del Sur).</li><li>To identify the yield-limiting constraints within the areas.</li><li>To develop decision-support system on rice integrated crop management (R-ICM) for the selected areas.</li></ul><h3>Activities</h3><ul><li>Nutrient  management study</li><li>Baseline survey</li></ul><h3>Expected Outputs</h3>  <ul><li>Yield-limiting factors in 8 major lowland-rice producing sites identified.</li><li>Decision-support system for rice developed.</li>       </ul><h3>Methodology</h3><p>The study make use of the data generated from the Variety x Nutrient Interaction experiment under Project 1 – Study 2. Variety x environment interaction was analyzed using the Additive Main Effects and Multiplicative Interaction (AMMI) model. The AMMI model analysis was performed using the SAS University Edition (SAS Institute Inc., 2014) software program. </p><p>Analysis of variance was done between locations and seasons for the effect of temperature. Comparison of treatment means was performed based on Tukey’s Honest Significant Difference (HSD) Test. Pearson correlation analysis was also done to determine the association between GDD and yield. The same procedures were done in water-use efficiency. </p><p>Characterization of farmers’ field production practices and productivity was done by baseline survey. Results from experiment and baseline survey will be used in the development of decision-support system. Identification of farmer respondents were done. Respondents are from the adjacent areas near the experiment sites.</p><p>Baseline survey has two main factors; socio-economic and crop management and practices. Socio-economic factors include household size, farm assets, access to credit and risk aversion. Crop management and production practices include land preparation, variety, crop establishment, planting time, water availability, nutrient management, crop protection, harvest management, and post-harvest management. </p>',
        bannerImg: '/img/crops_banner.jpg',
      },
      {
        name: 'corn',
        about: '<h2>Tungkol sa Mais</h2><p>Mais ang pangalawa sa pangunahing pananim sa ating bansa. 60% ng mais na itinatanim sa Pilipinas ay ginagamit para maging pakain sa mga hayop at 40% naman ay ginagamit na pagkain o panghalili sa kanin. Ayon sa Kagawaran ng Pagsasaka, mahigit kumulang sa 600,000 ng mga magsasaka ang nakadepende sa mais bilang pangunahing hanapbuhay. Bukod sa mga magsasaka, kumikita rin ang iba’t ibang sektor ng lipunan tulad ng transportasyon sa pagpoproseso at pagbebenta ng mais.</p><p>Subalit noong 2011, ayon sa National Corn Program ng Kagawaran ng Pagsasaka, hindi sapat ang suplay ng mais sa ating bansa. Kung ikukumpara sa mga bansang Thailand, Argentina, Estados Unidos, at iba pang mga bansang nagtatanim ng mais, nahuhuli ang Pilipinas sa average corn productivity na 3.21 metric tons/hectare (mt/ha). Sa kasalukyan, ayon kay Dr. Art Salazar ay sapat na ang suplay ng mais sa ating bansa.</p><p>Isa sa mga tinuturing na dahilan ng pagbaba ng produksyon ng mais sa ating bansa ay ang pababago-bagong klima na nagdudulot ng mga kalamidad tulad ng bagyo at tagtuyot. Ang pamumugad din ng mga insekto ay isa rin sa mga dahilan ng pagbaba ng produksyon ng mais at ng mas madalas na paggamit ng pestisidyo. Ang corn borer at corn plant hopper ang mga halimbawa ng insekto na namumugad sa mga taniman ng mais. Bukod dito, ang pagkakaroon ng sakit ng mga halaman tulad ng corn rust, corn downy mildew, at corn leaf spot at ang regular na paggamit ng kemikal ng mga magsasaka ay nakaka-apekto rin sa produksyon ng mais sa ating bansa.</p><p>Sources:</p><p><strong>Agri-pinoy corn program. (n.d.). Retrieved September 26, 2015, from <a href="http://www.da.gov.ph/index.php/2012-03-27-12-03-56/2012-04-13-12-38-36">http://www.da.gov.ph/index.php/2012-03-27-12-03-56/2012-04-13-12-38-36</a></strong></p><p><strong>Padilla, L. (2011). CORN: Optimizing productivity and competency. <em>BAR Research and Development Digest,13</em>(4). Retrieved September 26, 2015, from <a href="http://www.bar.gov.ph/digest-home/digest-archives/364-2011-4th-quarter/2045-corn-optimizing-productivity-and-competency">http://www.bar.gov.ph/digest-home/digest-archives/364-2011-4th-quarter/2045-corn-optimizing-productivity-and-competency</a></strong></p><h2>Useful Links:</h2><ol><li><a href="https://drive.google.com/open?id=0B6qPjZ40HrlaRTZUT1ZsX1JGTTA">Corn ICM</a></li><li><a href="http://159.203.253.31/suitability-maps/corn-dry">Suitability Map for Corn</a></li></ol>',
        bannerImg: '/img/crops_banner.jpg',
      },
      {
        name: 'banana',
        about: '<h2>Tungkol sa Saging</h2><p>Ang saging ay pang-apat sa pinakamalaking industriya ng prutas sa mundo. Mahigit 120 bansang tropical at <i> sub-tropical </i> and nagtatanim nito (Valmayor et al., 2002). Sa mga prutas sa Pilipinas, ang saging ang may pinakamalaking kontribusyon sa ekonomiya. Noong taong 2009, umabot milyong metriko tonelada ang produksiyon ng saging sa Pilipinas (BAS, 2010). Ang bansa ay pang-apat sa may pinakamalaking produksiyon ng saging sa buong mundo; pangalawa sa pagluluwas ng Cavendish, at una sa banana chips sa pandaigdigang pamilihan.</p><p>  Ang saging ay isa sa iilang prutas na mabibili anumang panahon. Mabuti ito sa kalusugan, masarap at abot-kaya ang halaga. Ang saging ay mayaman sa enerhiya, <i>dietary fiber</i>, <i>potassium</i>, <i>phosphorous</i>, <i>Vitamin A, B, C</i> at iba pang mahahalagang mineral. Wala itong taba, <i>cholesterol</i> o <i>sodium</i> na maaaring makasama sa kalusugan. Subalit sa kabila ng malalaking potensiyal na kontribusyon ng saging sa nutrisyon at seguridad sa pagkain ng mga Pilipino, mababa pa rin ang konsumo natin sa saging kumpara sa pang araw-araw na pangangailangan ng ating katawan. Sa 400 gramo na rekomendadong pagkain ng prutas at gulay, bumaba ang konsumo ng Pilipino mula 104 gramo noong 1978 sa 54 gramo noong 2003 (Pedro et al., 2003). Sa isang pandaigdigang pag-aaral, tinatayang mahigit sa 75% ng mga Pilipino ang nasa ibaba ng rekomendadong konsumo ng prutas at gulay (Hall et al., 2009).</p><p>Makikita ang saging saan mang sulok ng bansa. Ito ay itinatanim sa mga kapatagan—tubigan man o linang, burol at bulubunduking lugar. Ito ay itinatanim bilang <i> monocrop </i> at popular ding kasama ng ibang puno at halaman. Ang saging ang pinakapopular na salit-tanim sa mga niyugan.</p><p>Halos 75% ng mga magsasaging ay maliliit ang taniman o nasa likod-bahay lamang. Ang mga ito ang karaniwang tinatamnan ng mga lokal na uri ng saging gaya ng Saba, Lakatan at Latundan. Kadalasan, ang mga tanim na saging ay pulu-pulutong, kalat at halos hindi inaalagaan. Tinatawag ngang “kundiman” ang pangangalaga nito—kundi man gamasan, kundi man diligan, kundi man abonohan.</p><p>Mahigit 40% ng taniman ng saging sa Pilipinas (180,000 ektarya) anf may produksiyong mababa sa 10 tonelada kada ektarya bawat taon. Lubhang mababa ito kung ikukumpara sa mga lugar sa Mindanao na may mga plantasyon ng Cavendish na umaani ng hanggang 50 tonelada kada ektarya bawat taon (BAS, 2009).</p><p>Patunay ang mga plantasyon sa Mindanao na ang sagingang inaalagaa ng wasto ay magbibigay ng magandang ani at malaking kita. Ang tamang pangangalaga na sinimulan sa tamang pagpili ng lugar, uri ng pananim. Maagap na pagsugpo ng mga peste at sakit, pagkontrol ng bilang ng suwi, pagpapanatiling malinis ng taniman, tamang pag-aabono, patubig at pagbabalot ng bunga, ay maaaring magbigay ng malaki at magandang kalidad ng bunga (Van den Bergh at Molina, 2007).</p><p>Maganda ang potensiyal ng ating mga lokal na saging para pagkakitaan ng ating maliliit na magsasaka. Marami rin itong ibang gamit bukod sa pagkain. Tulad ng puno ng niyog, bawat parte ng puno ng saging ay kapaki-pakinabang. Ngunit sa dami ng sakit at pesteng umaatake rito, kailangan nang mabago ang sistema ng pagtatanim at pangangalaga nito. May mga teknolohiyan napatunayan nang makapagpapataas ng produksiyon ng lokal na klase ng saging.</p>',
        bannerImg: '/img/crops_banner.jpg',
      },
      {
        name: 'coconut',
        about: '<h2>Technology</h2><p>In response to need of the farmers, different farm technologies associated with coconut production were developed by the Philippine Coconut Authorities, the partner agency of Project SARAI for coconut commodity. These technologies include pocket of information that will help in the productivity of coconut through integrated crop management and these are:</p><h3>Coconut-Based Farming Technologies</h3><p>Coconut intercropping is a recommended type of coconut-based farming system wherein there is a simultaneous growing of different crops (annual or perennial) in a coconut plantation. This farming technology has numerous advantages that includes increased land utilization, increased productivity per unit area due to yield of intercrops and increased coconut production, more efficient use of farm labor and increase in overall farm income. </p><p>Examples of crops suitable for intercropping are sweet potato, cassava, ginger, upland rice, mungbean, corn, taro (gabi), peanut, sweet pepper, ramie, hot pepper, sunflower, bush sitao (string beans), eggplant, arrowroot, banana, pineapple, coffee, cacao, black pepper, vanilla, lanzones, rambutan, durian, mangosteen, abaca and papaya. </p><p>Here are some techno-guides that may help coconut farmer when intercropping developed by PCA:</p><p></p><ol><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig1.pdf">Coconut-Cereal (Corn) Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig2.pdf">Coconut-Fruit Crop (Banana) Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig3.pdf">Coconut-Papaya-Pineapple-Peanut Multi-Storey Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig4.pdf">Coconut-Vegetable Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig5.pdf">Coconut-Root Crops Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig6.pdf">Coconut-Coffee (Robusta/Excelsa/Arabica) Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig7.pdf">Coconut-Cacao (Cocoa) Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cig8.pdf">Coconut-Lanzones Cropping Model</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cfs11.pdf">Coconut-Corn Intercropping</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cfs12.pdf">Coconut-Banana Intercropping</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cfs14.pdf">Coconut + Gmelina Intercropping System</a></li><li><a href="">Coconut-Coffee Intercropping</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cfs15.pdf">Vegetable Intercropping under Coconut Palms</a></li><li><a href="http://www.pca.da.gov.ph/coconutrde/images/cigp.pdf">Simple Production Economics (Indicative Cost and Benefit/Returns) of Selected Common Coconut Intercropping Systems in the Philippines</a></li></ol><p></p><h3>Varieties of Coconut</h3><p>Before any anything else, choosing the right varieties of coconut that suits your area is an important aspect in the farm establishment. There are two distinct types of coconut variety according to size and stature --- the dwarf variety and tall variety. Below are the list of some of the coconut varieties and PCA-recommended hybrids.</p><table><caption>List of some coconut varieties</caption><tbody><tr><th>           Tall Variety            </th><th>Dwarf Variety          </th></tr><tr><td>Bago Oshiro Tall (BAO)</td><td>Catigan Green Dwarf (CAT)</td></tr><tr><td>Baybay Tall (BAY)</td><td>Tacunan Green Dwarf (TAC</td></tr><tr><td>Laguna Tall (LAG)</td><td>Kinabalan Green Dwarf (KIN)</td></tr><tr><td>Macapuno (MAC)</td><td>Aromatic Green Dwarf (ARO)</td></tr><tr><td>San Ramon Tall (SNR)</td><td></td></tr><tr><td>Tagnanan (TAG)</td><td></td></tr><tr><td>Hijo (HJT)</td><td></td></tr></tbody></table><table><caption>PCA-Recommended Local Hybrids</caption><tbody><tr><th>Name of Hybrids</th><th>Hybrid Cross</th><th>Description</th></tr><tr><td><strong>PCA 15-1</strong></td><td>CAT x LAG</td><td>less precocious than the MAWA-Y hybrid; has bigger nuts and higher tolerance to bud rot disease; brown and green seedlings</td></tr><tr><td><bold>PCA 15-2</bold></td><td>MRD x TAG</td><td>pure hybrid seedling has brown petioles; nuts resembles the TAG tall in shape and proximate composition</td></tr><tr><td><bold>PCA 15-3</bold></td><td>MRD x BAY</td><td>nuts with excellent composition; seedling with brown petioles</td></tr></tbody></table><h3>Sources of Seed Nuts</h3><p>A farmer can plant either any of the PCA-recommended variety hybrids or any of the local varieties recommended. PCA-recommended hybrids and some local varieties are produced at the PCA research centers in Davao and Zamboanga. PCA obtained other seed nut varieties from accredited farmers. Farmers can avail of these seed nuts through the Small Coconut Farmers Organizations (SCFOs) organized by PCA to systematize distribution and nursery management.</p><p>For more information, contact the nearest PCA office.</p><h2>Useful Links:</h2><ol><li><a href="https://drive.google.com/open?id=0B6qPjZ40HrlaT2pLa3dHV0R0VHM">Coconut Infopackages</a></li><li><a href="http://159.203.253.31/suitability-maps/coconut">Suitability Map for Coconut</a></li></ol>',
        bannerImg: '/img/crops_banner.jpg',
      },
      {
        name: 'coffee',
        about: '<h2>Tungkol sa Kape</h2><p>Mahigit kumulang sa 25 milyon ang nagtatanim ng kape sa buong mundo. Dahil dito, pangalawa ang kape sa produkto na madalas ikinakalakal. Sa Pilipinas, mayroong apat na klase ng kape na maaring itanim: Arabica, Liberica (Barako), Excelsa at Robusta. Ayon sa Bureau of Agricultural Research(BAR), dalawa dito ang pinaka-madalas na matatagpuan sa ating bansa: ang Arabica at Robusta. 75% ng kabuuang ani ng kape sa buong bansa ay Robusta, 5-10% ay Robusta at ang natitirang 15-20% naman ay Liberica at Excelsa. Sa Lipa, Batangas itinanim ang unang puno ng kape sa buong bansa noong 1740 at mula doon sumunod na rin na nagtanim ang mga bayan ng Ibaan, Lemery, San Jose, Taal, at Tanauan. Lipa. Batangas din ang tinuturing na coffee capital ng bansa mula noon. Makalipas ang ilang taon, nagsimula na rin magtanim ng kape ang bayan ng Amadeo sa Cavite noong 1876.</p> <p>Sa pagsusuri ng BAR noong 2001, humigit kumulang sa 300,000 na Pilipino ang naka-depende sa kape bilang pangunahing hanap-buhay. Noong mga panahong iyon, ang karaniwang naaani na kape sa buong bansa ay 400kg/ha. Ito ay mababa sa 2,000kg/ha na ani ng Brazil at sa naitalang pinaka-mainam na ani na 1500 kg/ha.</p> <p>Sources:</p> <p style="font-weight:bold;">Anenias, L. (2001). The Philippine coffee industry: A profile. BAR Research and Development Digest, 3(3). Retrieved September 26, 2015, from <a href="http://www.bar.gov.ph/digest-home/digest-archives/100-2001-3rd-quarter/3368-july-sep01-the-philippine-coffee-industry-a-profile"> http://www.bar.gov.ph/digest-home/digest-archives/100-2001-3rd-quarter/3368-july-sep01-the-philippine-coffee-industry-a-profile </a></p> <p style="font-weight:bold;">OUR COFFEE HERITAGE: Coffee’s Rich History in the Philippines. (n.d.). Retrieved September 26, 2015, from <a href="http://philcoffeeboard.com/philippine-coffee/"> http://philcoffeeboard.com/philippine-coffee/ </a></p><h2>Useful Links: </h2><ol><li><a href="https://drive.google.com/open?id=0B6qPjZ40Hrlaekt1eVJzbkFWazQ">Coffee ICM</a></li><li><a href="http://159.203.253.31/suitability-maps/coffee-arabica">Suitability Map for Coffee</a></li></ol>',
        bannerImg: '/img/crops_banner.jpg',
      },
      {
        name: 'cacao',
        about: '<h2>Tungkol sa Cacao</h2><p>Malaki ang potensyal ng Pilipinas sa pag-pproduce ng cocoa o cacao. Ang klima at lupa sa ating bansa ay angkop para sa pagtatanim ng cacao. Maituturing din na equatorial crop o pananim na angkop sa mga lugar nasa equator ang cacao at kabilang dito ang Pilipinas. Sa katunayan, sa Pilipinas matatagpuan ang cacao bean na may pinakamataas na kalidad sa buong mundo, and Mesoamerican Criollo. Ang buto ng cacao ay pangunahing ginagamit sa paggawa ng cocoa powder at ng tsokolate.</p> <p>Ayon sa statistics, ang suplay ng cacao sa bansa ay naitalang umabot sa kakulangan na 44,349 metric tons kada taon (2005) kung ikukumpara sa ginagamit o kinakain ng mga Pilipino na umabot sa 50,000 metric tons. Sa ating bansa, 9 na klase ng cacao ang inaprubahan ng National Seed Industry Council. Ito ay ang: BR 25, K 1, K 2, UIT 1, ICS 40, UF 18, S 5, K 4, at K 9.</p> <p>Sources:</p> <p style="font-weight:bold;">Cacao. (n.d.). Retrieved September 26, 2015, from <a href="http://www.bar.gov.ph/agfishtech-home/crops/206-plantation-crops/1277-cacao"> http://www.bar.gov.ph/agfishtech-home/crops/206-plantation-crops/1277-cacao </a></p> <p style="font-weight:bold;">Revitalizing the Philippine cacao industry. (2015, March 30). The Philippine Star. Retrieved September 26, 2015, from <a href="http://www.philstar.com/business-usual/2015/03/30/1438845/revitalizing-philippine-cacao-industry"> http://www.philstar.com/business-usual/2015/03/30/1438845/revitalizing-philippine-cacao-industry </a></p><h2>Useful Links:</h2><ol><li><a href="https://drive.google.com/open?id=0B6qPjZ40HrlaRVlGLWtzTkJyMDA">Cacao ICM</a></li><li><a href="http://159.203.253.31/suitability-maps/cacao">Suitability Map for Cacao</a></li></ol>',
        bannerImg: '/img/crops_banner.jpg',
      },
    ];

    data.forEach(crop => Crops.insert(crop));
  }

  if (Advisories.find().count() === 0) {
    const data = [
      {
        date: '2017,03,02',
        title: 'General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2016,03,08',
        title: 'Situation and Outlook',
        subtitle: '<h6>Philippine Statistics Authority Rice and Corn Situation and Outlook Report, January 2017</h6><h6>Philippine Statistics Authority Performance of Philippine Agriculture, October-December 2016</h6>',
        body: '<p>Palay and corn production for January-December 2016 were lower than their 2015 levels. The first two quarters decrements in outputs were attributed to dry spell and drought and effects of typhoons Lando and Nona which hit the Philippines in the last quarter of 2015. The last two quarters decrements, on the other hand, were due to the movement of harvest of harvest to the third quarter 2016 and first quarter 2017 and effects of typhoons Karen and Lawin in Luzon regions.</p><div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"><h5>Advisory</h5><p style="font-size: 1.29em; margin-top: -0.5em;">Rice</p><p style=" margin-top: -1em;">Palay production for January-December 2016 is lower than their 2015 level by 2.88%.</p><p style="font-size: 1.29em; margin-top: -0.5em;">Corn</p><p style=" margin-top: -1em;">Corn production for January-December 2016 is lower than their 2015 level by 3.99%.</p><p style="font-size: 1.29em; margin-top: -0.5em;">Other crops</p><p style=" margin-top: -1em;">In October-December 2016, production gains were noted in banana which grew by 1.57%. Output losses, on the other hand, were recorded in coconut and coffee. Coconut output decreased by 5.22% while coffee production dropped by 3.25%</p></div><div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"><h5>Outlook</h5><p style="font-size: 1.29em; margin-top: -0.5em;">Rice</p><p style=" margin-top: -1em;">Probable production of palay crops for January-June may surpass its 2016 level by 11.68%.</p><p style="font-size: 1.29em; margin-top: -0.5em;">Corn</p><p style=" margin-top: -1em;">Probable production of corn crops for January-June may surpass its 2016 level by 29.92%.</p></div>',
      },
      {
        date: '2013,03,02',
        title: '13General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2017,03,02',
        title: 'General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2017,03,02',
        title: 'General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2014,03,02',
        title: '14General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2016,03,02',
        title: '16General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
      {
        date: '2017,03,02',
        title: 'General Advisory based on Weather Forecast',
        subtitle: 'Dr. Artemio Salazar, SARAI Project Leader - Environmental Characterization and Development of Integrated Crop Management, April 16, 2017',
        body: '<ul><li>Mindanao and Eastern Visayas, rainfall beyond 100mm is already expected in later part of April or early May and it will mostly happen in CARAGA, Davao and Eastern Visayas.</li><li>Corn, and other upland crops including rainfed upland rice, is therefore expected to be planted earlier in these regions. Other regions will experience more rains in June and planting will ensue. Earliest corn harvest (in July) is therefore expected from Mindanao.</li><li>There will be slight drop in rainfall in June but the moistened soil in May and further rain (though less in June) should be enough to sustain the corn/upland crop</li><li>Rainfall is expected to be heavy in July and August. Drying could be a concern here if corn harvesting happens in these months (wet grains have less market price). Early planting or use of early maturing varieties (of corn and other suitable crops) is therefore advisable.</li><li>For lowland rice, irrigated and rainfed, soil saturation is expected to happen in July-August. Generally, there is heavier rainfall during these months for Luzon and Visayas. Mindanao has more even rainfall Expect wet season rice harvest to come in earliest by October mostly coming from Mindanao.</li></ul>',
      },
    ];

    data.forEach(advisory => Advisories.insert(advisory));
  }  
});
