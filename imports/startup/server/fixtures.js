// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
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
      image: 'https://geneticliteracyproject.org/wp-content/uploads/2016/07/n-fix-crops.jpg'
    }
    
  ]

    data.forEach(slide => Slides.insert(slide));
  }
});
