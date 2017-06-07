if(!DSSSettings.findOne({'name': 'weather-last-updated'})) {
    DSSSettings.insert({
        'name': 'weather-last-updated',
        'value': {
            'year': 2016,
            'month': 5,
            'day': 26
        }
    });
}

if(CropData.find().count() === 0) {
    CropData.insert({
        'name': 'corn',
        'mad': 0.5,
        'cutoff': [25, 50, 88],
        'cropCoefficient': [0.3, 1.15, 1.05],
        'depthOfRootZone': 1,
        'gddAtMaturity': 1800,
        'variety': ['100-day variety']
    });
}

if(WaterManagementTips.find().count() === 0) {
    WaterManagementTips.insert({
        'title': 'Control Phreatophytes',
        'text': 'Phreatophytes are plants such as the Russian Olive, tamarisk, willows, and cottonwood. According to Colorado State University’s website: “phreatophytes can consume significant quantities of water through evapotranspiration, reducing the availability of water to a cropping syste and its users.” These plants can be reduced or removed through a variety of methods including chemical or mechanical.'
    });

    WaterManagementTips.insert({
        'title': 'Low-Energy Spray Irrigation',
        'text': 'The US Geological Survey suggests using a Low Energy Precision Application (LEPA) center-pivot system to gently spray water very close to the ground. This method can increase irrigation efficiency from 60% (for traditional spray irrigation) to over 90%.'
    });

    WaterManagementTips.insert({
        'title': 'Irrigation Scheduling',
        'text': 'Scheduling irrigation based on soil-plant or atmosphere measurements can decrease water use while improving yields. Software programs can collect weather data including local temperature, rainfall, humidity, and crop evapotransporation to provide recommendations for optimal irrigation scheduling. The University of Minnesota provides an extensive guide on irrigation scheduling using the checkbook method.'
    });

    WaterManagementTips.insert({
        'title': 'Drip Irrigation',
        'text': 'According to Big Picture Agriculture, “drip irrigation conserves 50 to 70 percent more water than traditional methods while increasing crop production by 20 to 90 percent.” Colorado State University‘s website explains that drip irrigation provides a desirable balance of water and air in the soil that promotes plant growth while minimizing runoff and evaporation.'
    });

    WaterManagementTips.insert({
        'title': 'Black Polyethylene Plastic Film',
        'text': 'Laying black polyethylene plastic film around certain crops will prevent surface evaporation, control weeds, and keep the soil warm at night. This can save 25 percent in water requirements. Black polyethylene film of 1 to 1.5 millimeters in thickness is adequate although it may need to be replaced after one season.'
    });
}