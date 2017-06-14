// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Slides } from '../../api/slides/slides.js';
import { Logos } from '../../api/logos/logos.js';
import { Story } from '../../api/story/story.js';
import { Projects } from '../../api/projects/projects.js';
import { Services } from '../../api/services/services.js';
import { Crops } from '../../api/crops/crops.js';
import { About } from '../../api/about/about.js';

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
      ura: ['Ivy Rose Marajas', 'Kim Nyka Pedeguerra', 'Marck Ferdie Eusebio', 'Yaminah Mochica Pinca'],
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: ['Dr. Pompe Sta. Cruz, CA, UPLB', 'Dr. Ronaldo Saludes, CEAT, UPLB'],
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 2',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: ['Ivy Rose Marajas', 'Kim Nyka Pedeguerra', 'Marck Ferdie Eusebio', 'Yaminah Mochica Pinca'],
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: ['Dr. Pompe Sta. Cruz, CA, UPLB', 'Dr. Ronaldo Saludes, CEAT, UPLB'],
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 3',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: ['Ivy Rose Marajas', 'Kim Nyka Pedeguerra', 'Marck Ferdie Eusebio', 'Yaminah Mochica Pinca'],
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: ['Dr. Pompe Sta. Cruz, CA, UPLB', 'Dr. Ronaldo Saludes, CEAT, UPLB'],
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 4',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: ['Ivy Rose Marajas', 'Kim Nyka Pedeguerra', 'Marck Ferdie Eusebio', 'Yaminah Mochica Pinca'],
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: ['Dr. Pompe Sta. Cruz, CA, UPLB', 'Dr. Ronaldo Saludes, CEAT, UPLB'],
      challenge: 'Nutrient Management is a vital process in farming. It pertains...',
      solution: 'Using the SARAi Nutrient Manager, registered farmers can get recommendation...',
      thumbnail: 'http://proptera.com/application/files/2314/2420/9499/iStock_000012551695_Lettuce_Large.jpg'
    },
    {
      url: '#',
      title: 'Integrated Crop Management # 5',
      tagline: 'Enhance your adaptibility by using SARAi’s integrated crop support system.',
      ura: ['Ivy Rose Marajas', 'Kim Nyka Pedeguerra', 'Marck Ferdie Eusebio', 'Yaminah Mochica Pinca'],
      projectLeaders: 'Project 2, Dr. Art Salazar, Project Leader',
      crops: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao',
      experts: ['Dr. Pompe Sta. Cruz, CA, UPLB', 'Dr. Ronaldo Saludes, CEAT, UPLB'],
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
    ];

    data.forEach(logo => About.insert(logo));
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

    data.forEach(project => Projects.insert(project));
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

    data.forEach(project => Projects.insert(project));
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
    ];

    data.forEach(crop => Crops.insert(crop));
  }

});
