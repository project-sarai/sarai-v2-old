// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';
import { Projects } from '../../api/projects/projects.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'SARAi',
        url: '/about-us',
        links: [],
        createdAt: new Date()
      },
      {
        title: 'Crops',
        url: '/',
        links: [
          {
            title: 'Rice',
            url: '/icm-rice',
            createdAt: new Date()
          },
          {
            title: 'Corn',
            url: '/icm-corn',
            createdAt: new Date()
          },
          {
            title: 'Banana',
            url: '/icm-banana',
            createdAt: new Date()
          },
          {
            title: 'Coconut',
            url: '/icm-coconut',
            createdAt: new Date()
          },
          {
            title: 'Coffee',
            url: '/icm-coffee',
            createdAt: new Date()
          },
          {
            title: 'Cacao',
            url: '/icm-cacao',
            createdAt: new Date()
          }
        ],
        createdAt: new Date()
      },
      {
        title: 'Maps',
        url: '/',
        links: [
          {
            title: 'Suitability Maps',
            url: 'http://maps.sarai.ph/suitability-maps',
            createdAt: new Date()
          },
          {
            title: 'Crop Production Area',
            url: 'http://maps.sarai.ph/crop-production-area',
            createdAt: new Date()
          },
          {
            title: 'Normalized Difference Vegetation Index (NDVI)',
            url: 'http://maps.sarai.ph/ndvi',
            createdAt: new Date()
          },
          {
            title: 'Rainfall Map',
            url: 'http://maps.sarai.ph/rainfall-maps',
            createdAt: new Date()
          }
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
            createdAt: new Date()
          },
          {
            title: 'Monitoring',
            url: 'http://sarai.ph/weather-monitoring',
            createdAt: new Date()
          },
          {
            title: 'Planting Guide',
            url: 'http://sarai.ph/rainfall-distribution',
            createdAt: new Date()
          },
          {
            title: 'SPIDTech',
            url: 'http://pests.sarai.ph/',
            createdAt: new Date()
          },
          {
            title: 'Open Data',
            url: 'http://opendata.sarai.ph/',
            createdAt: new Date()
          },
          {
            title: 'SARAi Eskwela',
            url: 'http://portal.sarai.ph/index.php?option=com_content&view=article&id=38&Itemid=319',
            createdAt: new Date()
          }
        ],
        createdAt: new Date()
      },
      {
        title: 'Contact Us',
        url: '/',
        links: [
          {
            title: 'Subscribe',
            url: 'https://goo.gl/forms/i4jW7LshCSQpuyZ23',
            createdAt: new Date()
          }
        ],
        createdAt: new Date()
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Slides.find().count() == 0) {
  const data = [
    {
      title: 'Smarter Crop Management # 1',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',  
      buttonText: 'More',
      buttonURL: '#',
      rank: 1,
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      title: 'Smarter Crop Management # 2',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',  
      buttonText: 'More',
      buttonURL: '#',
      rank: 2,
      image: 'https://geneticliteracyproject.org/wp-content/uploads/2016/07/n-fix-crops.jpg'
    },
    {
      title: 'Smarter Crop Management # 3',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',  
      buttonText: 'More',
      buttonURL: '#',
      rank: 3,
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      title: 'Smarter Crop Management # 4',
      subtitle: 'Helping farmers to produce with less',
      text: 'Know the right amount of nutrient...',  
      buttonText: 'More',
      buttonURL: '#',
      rank: 4,
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
  ]

    data.forEach(slide => Slides.insert(slide));
  }

  if (Projects.find().count() == 0) {
  const data = [
    {
      url: '#',
      title: 'Integrated Crop Management',
      subtitle: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      text1: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',  
      text2: 'Nutrient Management is a vital process in farming. It pertains...',
      text3: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 2',
      subtitle: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      text1: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',  
      text2: 'Nutrient Management is a vital process in farming. It pertains...',
      text3: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 3',
      subtitle: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      text1: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',  
      text2: 'Nutrient Management is a vital process in farming. It pertains...',
      text3: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      image: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    }
  ]

    data.forEach(project => Projects.insert(project));
  }
});
