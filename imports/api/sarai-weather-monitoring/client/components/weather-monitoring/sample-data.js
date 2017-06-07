sampleData = () => {
  return {

  "response": {
    "version":"0.1",
    "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "conditions": 1
      ,
      "hourly10day": 1
      ,
      "forecast10day": 1
    }
  },

  "current_observation": {
    "image": {
    "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
    "title":"Weather Underground",
    "link":"http://www.wunderground.com"
    },
    "display_location": {
    "full":"Los Banos, Philippines",
    "city":"Los Banos",
    "state":"",
    "state_name":"Philippines",
    "country":"PH",
    "country_iso3166":"PH",
    "zip":"00000",
    "magic":"57",
    "wmo":"98432",
    "latitude":"14.165845",
    "longitude":"121.241158",
    "elevation":"27.00000000"
    },
    "observation_location": {
    "full":"WFP NCAS UP Los Banos Laguna (UPLB), Los BaÃ±os, CALABARZON",
    "city":"WFP NCAS UP Los Banos Laguna (UPLB), Los BaÃ±os",
    "state":"CALABARZON",
    "country":"",
    "country_iso3166":"PH",
    "latitude":"14.165845",
    "longitude":"121.241158",
    "elevation":"860 ft"
    },
    "estimated": {
    "estimated": 1,
    "description": "These are estimated conditions. There are no weather stations nearby."
    },
    "station_id":"ICALABAR6",
    "observation_time":"Last Updated on September 23, 11:18 AM PHT",
    "observation_time_rfc822":"Fri, 23 Sep 2016 11:18:44 +0800",
    "observation_epoch":"1474600724",
    "local_time_rfc822":"Sun, 25 Sep 2016 21:01:44 +0800",
    "local_epoch":"1474808504",
    "local_tz_short":"PHT",
    "local_tz_long":"Asia/Manila",
    "local_tz_offset":"+0800",
    "weather":"Mostly Cloudy",
    "temperature_string":"79 F (26 C)",
    "temp_f":79,
    "temp_c":26,
    "relative_humidity":"99%",
    "wind_string":"From the WSW at 4 MPH",
    "wind_dir":"WSW",
    "wind_degrees":248,
    "wind_mph":4,
    "wind_gust_mph":0,
    "wind_kph":6,
    "wind_gust_kph":0,
    "pressure_mb":"1005",
    "pressure_in":"29.68",
    "pressure_trend":"0",
    "dewpoint_string":"79 F (26 C)",
    "dewpoint_f":79,
    "dewpoint_c":26,
    "heat_index_string":"NA",
    "heat_index_f":"NA",
    "heat_index_c":"NA",
    "windchill_string":"NA",
    "windchill_f":"NA",
    "windchill_c":"NA",
    "feelslike_string":"79 F (26 C)",
    "feelslike_f":"79",
    "feelslike_c":"26",
    "visibility_mi":"6.2",
    "visibility_km":"10.0",
    "solarradiation":"598",
    "UV":"9.3","precip_1hr_string":"0.00 in (0.0 mm)",
    "precip_1hr_in":"0.00",
    "precip_1hr_metric":"0.0",
    "precip_today_string":" in ( mm)",
    "precip_today_in":"",
    "precip_today_metric":"--",
    "icon":"mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "forecast_url":"http://www.wunderground.com/global/stations/98432.html",
    "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=ICALABAR6",
    "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=14.165845,121.241158",
    "nowcast":""
  }
    ,
  "forecast":{
    "txt_forecast": {
    "date":"8:12 PM PHT",
    "forecastday": [
    {
    "period":0,
    "icon":"chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "title":"Sunday",
    "fcttext":"Thunderstorms likely early. Lows overnight in the upper 70s.",
    "fcttext_metric":"Thunderstorms likely early. Low 25C.",
    "pop":"80"
    }
    ,
    {
    "period":1,
    "icon":"nt_chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "title":"Sunday Night",
    "fcttext":"Thunderstorms during the evening will give way to mostly cloudy skies after midnight. Low 77F. Winds light and variable. Chance of rain 80%.",
    "fcttext_metric":"Scattered thunderstorms early, then mainly cloudy after midnight. Low around 25C. Winds light and variable. Chance of rain 50%.",
    "pop":"80"
    }
    ,
    {
    "period":2,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Monday",
    "fcttext":"Thunderstorms likely. High 87F. Winds W at 10 to 15 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms. High around 30C. Winds W at 15 to 25 km/h. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":3,
    "icon":"nt_mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "title":"Monday Night",
    "fcttext":"Mainly cloudy. Low 79F. Winds WSW at 5 to 10 mph.",
    "fcttext_metric":"Considerable cloudiness. Low 26C. Winds WSW at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":4,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Tuesday",
    "fcttext":"Thunderstorms likely in the morning. Then the chance of scattered thunderstorms in the afternoon. High 86F. Winds WSW at 10 to 20 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely in the morning. Then the chance of scattered thunderstorms in the afternoon. High around 30C. Winds WSW at 15 to 30 km/h. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":5,
    "icon":"nt_mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "title":"Tuesday Night",
    "fcttext":"Mostly cloudy skies. Low 78F. Winds SW at 5 to 10 mph.",
    "fcttext_metric":"Considerable cloudiness. Low around 25C. Winds SW at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":6,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Wednesday",
    "fcttext":"Thunderstorms. High 86F. Winds WSW at 10 to 15 mph. Chance of rain 90%.",
    "fcttext_metric":"Thunderstorms likely. High near 30C. Winds WSW at 15 to 25 km/h. Chance of rain 90%.",
    "pop":"90"
    }
    ,
    {
    "period":7,
    "icon":"nt_tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "title":"Wednesday Night",
    "fcttext":"Mostly cloudy in the evening, then thunderstorms developing after midnight. Low 77F. Winds light and variable. Chance of rain 80%.",
    "fcttext_metric":"Mostly cloudy skies early followed by thunderstorms late. Low around 25C. Winds light and variable. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":8,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Thursday",
    "fcttext":"Thunderstorms likely. High 84F. Winds W at 5 to 10 mph. Chance of rain 90%.",
    "fcttext_metric":"Thunderstorms likely. High 29C. Winds light and variable. Chance of rain 90%.",
    "pop":"90"
    }
    ,
    {
    "period":9,
    "icon":"nt_tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "title":"Thursday Night",
    "fcttext":"Thunderstorms in the evening, then cloudy with rain likely overnight. Low 76F. Winds light and variable. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms in the evening, overcast overnight with occasional rain. Low 24C. Winds light and variable. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":10,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Friday",
    "fcttext":"Thunderstorms likely. High 86F. Winds W at 5 to 10 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely. High 29C. Winds W at 10 to 15 km/h. Chance of rain 90%.",
    "pop":"80"
    }
    ,
    {
    "period":11,
    "icon":"nt_chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "title":"Friday Night",
    "fcttext":"Scattered thunderstorms during the evening, then cloudy skies overnight. Low 76F. Winds light and variable. Chance of rain 60%.",
    "fcttext_metric":"Scattered thunderstorms in the evening. Cloudy skies overnight. Low 24C. Winds light and variable. Chance of rain 60%.",
    "pop":"60"
    }
    ,
    {
    "period":12,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Saturday",
    "fcttext":"Thunderstorms likely. High 87F. Winds light and variable. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely. High near 30C. Winds light and variable. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":13,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Saturday Night",
    "fcttext":"Partly cloudy. Low 77F. Winds light and variable.",
    "fcttext_metric":"Partly cloudy skies. Low around 25C. Winds light and variable.",
    "pop":"20"
    }
    ,
    {
    "period":14,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Sunday",
    "fcttext":"Thunderstorms likely. High 88F. Winds NW at 5 to 10 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely. High 31C. Winds WNW at 10 to 15 km/h. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":15,
    "icon":"nt_mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "title":"Sunday Night",
    "fcttext":"Mostly cloudy skies. Low 77F. Winds light and variable.",
    "fcttext_metric":"Partly cloudy skies during the evening will give way to cloudy skies overnight. Low near 25C. Winds light and variable.",
    "pop":"20"
    }
    ,
    {
    "period":16,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Monday",
    "fcttext":"Thunderstorms likely. High 87F. Winds W at 5 to 10 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely. High around 30C. Winds W at 10 to 15 km/h. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":17,
    "icon":"nt_chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "title":"Monday Night",
    "fcttext":"Scattered thunderstorms in the evening, with mostly cloudy skies overnight. Low 78F. Winds light and variable. Chance of rain 60%.",
    "fcttext_metric":"Scattered thunderstorms in the evening, with mostly cloudy skies overnight. Low near 25C. Winds light and variable. Chance of rain 60%.",
    "pop":"60"
    }
    ,
    {
    "period":18,
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "title":"Tuesday",
    "fcttext":"Thunderstorms. High 87F. Winds W at 5 to 10 mph. Chance of rain 80%.",
    "fcttext_metric":"Thunderstorms likely in the morning. Then the chance of scattered thunderstorms in the afternoon. High 31C. Winds W at 10 to 15 km/h. Chance of rain 80%.",
    "pop":"80"
    }
    ,
    {
    "period":19,
    "icon":"nt_chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "title":"Tuesday Night",
    "fcttext":"Scattered thunderstorms in the evening, with mostly cloudy skies overnight. Low 78F. Winds light and variable. Chance of rain 50%.",
    "fcttext_metric":"Mainly cloudy. Low around 25C. Winds light and variable.",
    "pop":"50"
    }
    ]
    },
    "simpleforecast": {
    "forecastday": [
    {"date":{
  "epoch":"1474801200",
  "pretty":"7:00 PM PHT on September 25, 2016",
  "day":25,
  "month":9,
  "year":2016,
  "yday":268,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Sun",
  "weekday":"Sunday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":1,
    "high": {
    "fahrenheit":"89",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Chance of a Thunderstorm",
    "icon":"chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.04,
    "mm": 1
    },
    "qpf_day": {
    "in": null,
    "mm": null
    },
    "qpf_night": {
    "in": 0.04,
    "mm": 1
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": null,
    "cm": null
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 12,
    "kph": 18,
    "dir": "West",
    "degrees": 0
    },
    "avewind": {
    "mph": 2,
    "kph": 4,
    "dir": "WSW",
    "degrees": 0
    },
    "avehumidity": 91,
    "maxhumidity": 93,
    "minhumidity": 89
    }
    ,
    {"date":{
  "epoch":"1474887600",
  "pretty":"7:00 PM PHT on September 26, 2016",
  "day":26,
  "month":9,
  "year":2016,
  "yday":269,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Mon",
  "weekday":"Monday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":2,
    "high": {
    "fahrenheit":"87",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"79",
    "celsius":"26"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.21,
    "mm": 5
    },
    "qpf_day": {
    "in": 0.21,
    "mm": 5
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "W",
    "degrees": 261
    },
    "avewind": {
    "mph": 11,
    "kph": 18,
    "dir": "W",
    "degrees": 261
    },
    "avehumidity": 90,
    "maxhumidity": 100,
    "minhumidity": 79
    }
    ,
    {"date":{
  "epoch":"1474974000",
  "pretty":"7:00 PM PHT on September 27, 2016",
  "day":27,
  "month":9,
  "year":2016,
  "yday":270,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Tue",
  "weekday":"Tuesday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":3,
    "high": {
    "fahrenheit":"86",
    "celsius":"30"
    },
    "low": {
    "fahrenheit":"78",
    "celsius":"26"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.30,
    "mm": 8
    },
    "qpf_day": {
    "in": 0.30,
    "mm": 8
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 20,
    "kph": 32,
    "dir": "WSW",
    "degrees": 247
    },
    "avewind": {
    "mph": 14,
    "kph": 23,
    "dir": "WSW",
    "degrees": 247
    },
    "avehumidity": 89,
    "maxhumidity": 97,
    "minhumidity": 81
    }
    ,
    {"date":{
  "epoch":"1475060400",
  "pretty":"7:00 PM PHT on September 28, 2016",
  "day":28,
  "month":9,
  "year":2016,
  "yday":271,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Wed",
  "weekday":"Wednesday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":4,
    "high": {
    "fahrenheit":"86",
    "celsius":"30"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":90,
    "qpf_allday": {
    "in": 0.52,
    "mm": 13
    },
    "qpf_day": {
    "in": 0.24,
    "mm": 6
    },
    "qpf_night": {
    "in": 0.28,
    "mm": 7
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "WSW",
    "degrees": 250
    },
    "avewind": {
    "mph": 10,
    "kph": 16,
    "dir": "WSW",
    "degrees": 250
    },
    "avehumidity": 90,
    "maxhumidity": 98,
    "minhumidity": 80
    }
    ,
    {"date":{
  "epoch":"1475146800",
  "pretty":"7:00 PM PHT on September 29, 2016",
  "day":29,
  "month":9,
  "year":2016,
  "yday":272,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Thu",
  "weekday":"Thursday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":5,
    "high": {
    "fahrenheit":"84",
    "celsius":"29"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":90,
    "qpf_allday": {
    "in": 0.80,
    "mm": 20
    },
    "qpf_day": {
    "in": 0.60,
    "mm": 15
    },
    "qpf_night": {
    "in": 0.20,
    "mm": 5
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "W",
    "degrees": 275
    },
    "avewind": {
    "mph": 6,
    "kph": 10,
    "dir": "W",
    "degrees": 275
    },
    "avehumidity": 93,
    "maxhumidity": 99,
    "minhumidity": 85
    }
    ,
    {"date":{
  "epoch":"1475233200",
  "pretty":"7:00 PM PHT on September 30, 2016",
  "day":30,
  "month":9,
  "year":2016,
  "yday":273,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"September",
  "monthname_short":"Sep",
  "weekday_short":"Fri",
  "weekday":"Friday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":6,
    "high": {
    "fahrenheit":"86",
    "celsius":"30"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.29,
    "mm": 7
    },
    "qpf_day": {
    "in": 0.27,
    "mm": 7
    },
    "qpf_night": {
    "in": 0.02,
    "mm": 1
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "W",
    "degrees": 272
    },
    "avewind": {
    "mph": 6,
    "kph": 10,
    "dir": "W",
    "degrees": 272
    },
    "avehumidity": 91,
    "maxhumidity": 99,
    "minhumidity": 81
    }
    ,
    {"date":{
  "epoch":"1475319600",
  "pretty":"7:00 PM PHT on October 01, 2016",
  "day":1,
  "month":10,
  "year":2016,
  "yday":274,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"October",
  "monthname_short":"Oct",
  "weekday_short":"Sat",
  "weekday":"Saturday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":7,
    "high": {
    "fahrenheit":"87",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.41,
    "mm": 10
    },
    "qpf_day": {
    "in": 0.39,
    "mm": 10
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "WNW",
    "degrees": 283
    },
    "avewind": {
    "mph": 5,
    "kph": 8,
    "dir": "WNW",
    "degrees": 283
    },
    "avehumidity": 89,
    "maxhumidity": 99,
    "minhumidity": 77
    }
    ,
    {"date":{
  "epoch":"1475406000",
  "pretty":"7:00 PM PHT on October 02, 2016",
  "day":2,
  "month":10,
  "year":2016,
  "yday":275,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"October",
  "monthname_short":"Oct",
  "weekday_short":"Sun",
  "weekday":"Sunday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":8,
    "high": {
    "fahrenheit":"88",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.22,
    "mm": 6
    },
    "qpf_day": {
    "in": 0.20,
    "mm": 5
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "NW",
    "degrees": 304
    },
    "avewind": {
    "mph": 6,
    "kph": 10,
    "dir": "NW",
    "degrees": 304
    },
    "avehumidity": 88,
    "maxhumidity": 99,
    "minhumidity": 75
    }
    ,
    {"date":{
  "epoch":"1475492400",
  "pretty":"7:00 PM PHT on October 03, 2016",
  "day":3,
  "month":10,
  "year":2016,
  "yday":276,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"October",
  "monthname_short":"Oct",
  "weekday_short":"Mon",
  "weekday":"Monday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":9,
    "high": {
    "fahrenheit":"87",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"78",
    "celsius":"26"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.32,
    "mm": 8
    },
    "qpf_day": {
    "in": 0.26,
    "mm": 7
    },
    "qpf_night": {
    "in": 0.06,
    "mm": 2
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "W",
    "degrees": 270
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "W",
    "degrees": 270
    },
    "avehumidity": 89,
    "maxhumidity": 99,
    "minhumidity": 77
    }
    ,
    {"date":{
  "epoch":"1475578800",
  "pretty":"7:00 PM PHT on October 04, 2016",
  "day":4,
  "month":10,
  "year":2016,
  "yday":277,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"October",
  "monthname_short":"Oct",
  "weekday_short":"Tue",
  "weekday":"Tuesday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":10,
    "high": {
    "fahrenheit":"87",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"78",
    "celsius":"26"
    },
    "conditions":"Thunderstorm",
    "icon":"tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "skyicon":"",
    "pop":80,
    "qpf_allday": {
    "in": 0.24,
    "mm": 6
    },
    "qpf_day": {
    "in": 0.22,
    "mm": 6
    },
    "qpf_night": {
    "in": 0.02,
    "mm": 1
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "W",
    "degrees": 266
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "W",
    "degrees": 266
    },
    "avehumidity": 88,
    "maxhumidity": 97,
    "minhumidity": 77
    }
    ]
    }
  }
    ,
  "hourly_forecast": [
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "25","mday_padded": "25","yday": "268","isdst": "0","epoch": "1474812000","pretty": "10:00 PM PHT on September 25, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "65",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "33",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "25","mday_padded": "25","yday": "268","isdst": "0","epoch": "1474815600","pretty": "11:00 PM PHT on September 25, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "63",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WSW", "degrees": "252"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "14",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474819200","pretty": "12:00 AM PHT on September 26, 2016","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "254"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "2",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474822800","pretty": "1:00 AM PHT on September 26, 2016","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474826400","pretty": "2:00 AM PHT on September 26, 2016","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "257"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.69", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474830000","pretty": "3:00 AM PHT on September 26, 2016","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "254"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474833600","pretty": "4:00 AM PHT on September 26, 2016","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "73",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "245"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "100",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474837200","pretty": "5:00 AM PHT on September 26, 2016","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "244"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474840800","pretty": "6:00 AM PHT on September 26, 2016","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "239"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "100",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.69", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474844400","pretty": "7:00 AM PHT on September 26, 2016","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "W", "degrees": "263"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "89", "metric": "32"},
    "feelslike": {"english": "89", "metric": "32"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474848000","pretty": "8:00 AM PHT on September 26, 2016","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "81", "metric": "27"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "65",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Scattered Thunderstorms",
    "uvi": "2",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "58",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474851600","pretty": "9:00 AM PHT on September 26, 2016","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "81", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "98", "metric": "37"},
    "feelslike": {"english": "98", "metric": "37"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "67",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474855200","pretty": "10:00 AM PHT on September 26, 2016","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "84",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "W", "degrees": "263"},
    "wx": "Thunderstorms",
    "uvi": "6",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "102", "metric": "39"},
    "feelslike": {"english": "102", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "71",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474858800","pretty": "11:00 AM PHT on September 26, 2016","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "86",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "260"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "105", "metric": "41"},
    "feelslike": {"english": "105", "metric": "41"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "66",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474862400","pretty": "12:00 PM PHT on September 26, 2016","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "87",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "W", "degrees": "268"},
    "wx": "Thunderstorms",
    "uvi": "9",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "105", "metric": "41"},
    "feelslike": {"english": "105", "metric": "41"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "66",
    "mslp": {"english": "29.69", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474866000","pretty": "1:00 PM PHT on September 26, 2016","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "82",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "W", "degrees": "265"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "105", "metric": "41"},
    "feelslike": {"english": "105", "metric": "41"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "65",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474869600","pretty": "2:00 PM PHT on September 26, 2016","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "78",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.65", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474873200","pretty": "3:00 PM PHT on September 26, 2016","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "81",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Scattered Thunderstorms",
    "uvi": "3",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "57",
    "mslp": {"english": "29.65", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474876800","pretty": "4:00 PM PHT on September 26, 2016","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "88",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Scattered Thunderstorms",
    "uvi": "1",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "43",
    "mslp": {"english": "29.65", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474880400","pretty": "5:00 PM PHT on September 26, 2016","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
    "fctcode": "4",
    "sky": "88",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "WSW", "degrees": "253"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "87",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.65", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474884000","pretty": "6:00 PM PHT on September 26, 2016","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "79",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "250"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474887600","pretty": "7:00 PM PHT on September 26, 2016","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "242"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.69", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474891200","pretty": "8:00 PM PHT on September 26, 2016","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "SW", "degrees": "237"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474894800","pretty": "9:00 PM PHT on September 26, 2016","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "SW", "degrees": "232"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474898400","pretty": "10:00 PM PHT on September 26, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "238"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "26","mday_padded": "26","yday": "269","isdst": "0","epoch": "1474902000","pretty": "11:00 PM PHT on September 26, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "SW", "degrees": "234"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474905600","pretty": "12:00 AM PHT on September 27, 2016","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "74",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WSW", "degrees": "238"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "13",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474909200","pretty": "1:00 AM PHT on September 27, 2016","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WSW", "degrees": "241"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "15",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474912800","pretty": "2:00 AM PHT on September 27, 2016","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "239"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474916400","pretty": "3:00 AM PHT on September 27, 2016","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "SW", "degrees": "233"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474920000","pretty": "4:00 AM PHT on September 27, 2016","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WSW", "degrees": "237"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.66", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474923600","pretty": "5:00 AM PHT on September 27, 2016","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "SW", "degrees": "236"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.66", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474927200","pretty": "6:00 AM PHT on September 27, 2016","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "SW", "degrees": "228"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474930800","pretty": "7:00 AM PHT on September 27, 2016","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "73",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "SW", "degrees": "237"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "89", "metric": "32"},
    "feelslike": {"english": "89", "metric": "32"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474934400","pretty": "8:00 AM PHT on September 27, 2016","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "79",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "WSW", "degrees": "237"},
    "wx": "Scattered Thunderstorms",
    "uvi": "2",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "98", "metric": "37"},
    "feelslike": {"english": "98", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "50",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474938000","pretty": "9:00 AM PHT on September 27, 2016","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "81",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "WSW", "degrees": "240"},
    "wx": "Scattered Thunderstorms",
    "uvi": "4",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "98", "metric": "37"},
    "feelslike": {"english": "98", "metric": "37"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "50",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474941600","pretty": "10:00 AM PHT on September 27, 2016","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "82",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "WSW", "degrees": "245"},
    "wx": "Scattered Thunderstorms",
    "uvi": "6",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "50",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474945200","pretty": "11:00 AM PHT on September 27, 2016","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "81",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "WSW", "degrees": "246"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "102", "metric": "39"},
    "feelslike": {"english": "102", "metric": "39"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "78",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474948800","pretty": "12:00 PM PHT on September 27, 2016","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "83",
    "wspd": {"english": "14", "metric": "23"},
    "wdir": {"dir": "WSW", "degrees": "254"},
    "wx": "Thunderstorms",
    "uvi": "9",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "102", "metric": "39"},
    "feelslike": {"english": "102", "metric": "39"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "79",
    "mslp": {"english": "29.71", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474952400","pretty": "1:00 PM PHT on September 27, 2016","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "84",
    "wspd": {"english": "14", "metric": "23"},
    "wdir": {"dir": "WSW", "degrees": "255"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "102", "metric": "39"},
    "feelslike": {"english": "102", "metric": "39"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "78",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474956000","pretty": "2:00 PM PHT on September 27, 2016","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "83",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "WSW", "degrees": "254"},
    "wx": "Scattered Thunderstorms",
    "uvi": "5",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "50",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474959600","pretty": "3:00 PM PHT on September 27, 2016","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "82",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "WSW", "degrees": "255"},
    "wx": "Scattered Thunderstorms",
    "uvi": "3",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "49",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474963200","pretty": "4:00 PM PHT on September 27, 2016","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "79",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "WSW", "degrees": "248"},
    "wx": "Scattered Thunderstorms",
    "uvi": "1",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "46",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474966800","pretty": "5:00 PM PHT on September 27, 2016","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "WSW", "degrees": "243"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "13",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474970400","pretty": "6:00 PM PHT on September 27, 2016","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "78",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "245"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474974000","pretty": "7:00 PM PHT on September 27, 2016","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "82",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "238"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "10",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474977600","pretty": "8:00 PM PHT on September 27, 2016","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "81",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "SW", "degrees": "235"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474981200","pretty": "9:00 PM PHT on September 27, 2016","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "76",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "SW", "degrees": "235"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474984800","pretty": "10:00 PM PHT on September 27, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "74",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "SW", "degrees": "232"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "27","mday_padded": "27","yday": "270","isdst": "0","epoch": "1474988400","pretty": "11:00 PM PHT on September 27, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SW", "degrees": "223"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "21",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1474992000","pretty": "12:00 AM PHT on September 28, 2016","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SW", "degrees": "230"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1474995600","pretty": "1:00 AM PHT on September 28, 2016","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "SW", "degrees": "236"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1474999200","pretty": "2:00 AM PHT on September 28, 2016","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SW", "degrees": "235"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475002800","pretty": "3:00 AM PHT on September 28, 2016","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SW", "degrees": "233"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475006400","pretty": "4:00 AM PHT on September 28, 2016","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WSW", "degrees": "241"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475010000","pretty": "5:00 AM PHT on September 28, 2016","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "WSW", "degrees": "238"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475013600","pretty": "6:00 AM PHT on September 28, 2016","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "SW", "degrees": "227"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.74", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475017200","pretty": "7:00 AM PHT on September 28, 2016","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "73",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WSW", "degrees": "242"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "89", "metric": "32"},
    "feelslike": {"english": "89", "metric": "32"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475020800","pretty": "8:00 AM PHT on September 28, 2016","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "76",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "239"},
    "wx": "Scattered Thunderstorms",
    "uvi": "2",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "48",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475024400","pretty": "9:00 AM PHT on September 28, 2016","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "74",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "243"},
    "wx": "Scattered Thunderstorms",
    "uvi": "5",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "48",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475028000","pretty": "10:00 AM PHT on September 28, 2016","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "71",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "WSW", "degrees": "248"},
    "wx": "Scattered Thunderstorms",
    "uvi": "8",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "49",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475031600","pretty": "11:00 AM PHT on September 28, 2016","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "WSW", "degrees": "246"},
    "wx": "Thunderstorms",
    "uvi": "10",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "88",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475035200","pretty": "12:00 PM PHT on September 28, 2016","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "WSW", "degrees": "257"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "88",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475038800","pretty": "1:00 PM PHT on September 28, 2016","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "259"},
    "wx": "Thunderstorms",
    "uvi": "9",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "88",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475042400","pretty": "2:00 PM PHT on September 28, 2016","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "260"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "67",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475046000","pretty": "3:00 PM PHT on September 28, 2016","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "4",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "66",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475049600","pretty": "4:00 PM PHT on September 28, 2016","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "251"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "64",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475053200","pretty": "5:00 PM PHT on September 28, 2016","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "244"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "17",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475056800","pretty": "6:00 PM PHT on September 28, 2016","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WSW", "degrees": "247"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "17",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475060400","pretty": "7:00 PM PHT on September 28, 2016","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "WSW", "degrees": "248"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "18",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475064000","pretty": "8:00 PM PHT on September 28, 2016","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WSW", "degrees": "250"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "19",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475067600","pretty": "9:00 PM PHT on September 28, 2016","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "NW", "degrees": "306"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "20",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475071200","pretty": "10:00 PM PHT on September 28, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NW", "degrees": "310"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "21",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "28","mday_padded": "28","yday": "271","isdst": "0","epoch": "1475074800","pretty": "11:00 PM PHT on September 28, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475078400","pretty": "12:00 AM PHT on September 29, 2016","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "269"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475082000","pretty": "1:00 AM PHT on September 29, 2016","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "66",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "289"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475085600","pretty": "2:00 AM PHT on September 29, 2016","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "66",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "295"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475089200","pretty": "3:00 AM PHT on September 29, 2016","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "73",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "307"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475092800","pretty": "4:00 AM PHT on September 29, 2016","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "86",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "317"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "30",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475096400","pretty": "5:00 AM PHT on September 29, 2016","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "94",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "297"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.18", "metric": "5"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "81",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475100000","pretty": "6:00 AM PHT on September 29, 2016","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "95",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "ENE", "degrees": "59"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.1", "metric": "3"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "81",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475103600","pretty": "7:00 AM PHT on September 29, 2016","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "96",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "280"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.1", "metric": "3"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "80",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475107200","pretty": "8:00 AM PHT on September 29, 2016","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "97",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.1", "metric": "3"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "85",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475110800","pretty": "9:00 AM PHT on September 29, 2016","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "97",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Thunderstorms",
    "uvi": "3",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.1", "metric": "3"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "86",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475114400","pretty": "10:00 AM PHT on September 29, 2016","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "96",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "267"},
    "wx": "Thunderstorms",
    "uvi": "4",
    "humidity": "86",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.1", "metric": "3"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "86",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475118000","pretty": "11:00 AM PHT on September 29, 2016","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "95",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "265"},
    "wx": "Thunderstorms",
    "uvi": "6",
    "humidity": "86",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "90",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475121600","pretty": "12:00 PM PHT on September 29, 2016","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "91",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "284"},
    "wx": "Thunderstorms",
    "uvi": "6",
    "humidity": "86",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "91",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475125200","pretty": "1:00 PM PHT on September 29, 2016","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "85",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "W", "degrees": "282"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "86",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "90",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475128800","pretty": "2:00 PM PHT on September 29, 2016","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "80",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "282"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475132400","pretty": "3:00 PM PHT on September 29, 2016","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "78",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "285"},
    "wx": "Scattered Thunderstorms",
    "uvi": "3",
    "humidity": "87",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "58",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475136000","pretty": "4:00 PM PHT on September 29, 2016","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "75",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "275"},
    "wx": "Scattered Thunderstorms",
    "uvi": "1",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "55",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475139600","pretty": "5:00 PM PHT on September 29, 2016","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "282"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "73",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475143200","pretty": "6:00 PM PHT on September 29, 2016","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "W", "degrees": "280"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "71",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475146800","pretty": "7:00 PM PHT on September 29, 2016","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "76",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "268"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475150400","pretty": "8:00 PM PHT on September 29, 2016","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "77",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NW", "degrees": "317"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "48",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475154000","pretty": "9:00 PM PHT on September 29, 2016","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "74",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NE", "degrees": "44"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "49",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475157600","pretty": "10:00 PM PHT on September 29, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "69",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNE", "degrees": "16"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "50",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "29","mday_padded": "29","yday": "272","isdst": "0","epoch": "1475161200","pretty": "11:00 PM PHT on September 29, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "289"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475164800","pretty": "12:00 AM PHT on September 30, 2016","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475168400","pretty": "1:00 AM PHT on September 30, 2016","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "84",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "SW", "degrees": "225"},
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "69",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475172000","pretty": "2:00 AM PHT on September 30, 2016","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "92",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "S", "degrees": "187"},
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475175600","pretty": "3:00 AM PHT on September 30, 2016","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "94",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "SW", "degrees": "225"},
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475179200","pretty": "4:00 AM PHT on September 30, 2016","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "77", "metric": "25"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "275"},
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "77", "metric": "25"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "70",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475182800","pretty": "5:00 AM PHT on September 30, 2016","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "77", "metric": "25"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Rain",
    "icon": "rain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
    "fctcode": "13",
    "sky": "100",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Rain",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "77", "metric": "25"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "75",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475186400","pretty": "6:00 AM PHT on September 30, 2016","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "77", "metric": "25"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Rain",
    "icon": "rain",
    "icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
    "fctcode": "13",
    "sky": "100",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "ESE", "degrees": "124"},
    "wx": "Rain",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "77", "metric": "25"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "76",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475190000","pretty": "7:00 AM PHT on September 30, 2016","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "96",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "77",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475193600","pretty": "8:00 AM PHT on September 30, 2016","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "95",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "255"},
    "wx": "Scattered Thunderstorms",
    "uvi": "1",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "54",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475197200","pretty": "9:00 AM PHT on September 30, 2016","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "95",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WSW", "degrees": "248"},
    "wx": "Scattered Thunderstorms",
    "uvi": "3",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "53",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475200800","pretty": "10:00 AM PHT on September 30, 2016","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "95",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "260"},
    "wx": "Scattered Thunderstorms",
    "uvi": "4",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "51",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475204400","pretty": "11:00 AM PHT on September 30, 2016","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "95",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WSW", "degrees": "256"},
    "wx": "Thunderstorms",
    "uvi": "6",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "66",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475208000","pretty": "12:00 PM PHT on September 30, 2016","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "93",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "275"},
    "wx": "Thunderstorms",
    "uvi": "6",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "67",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475211600","pretty": "1:00 PM PHT on September 30, 2016","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "88",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "W", "degrees": "275"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "68",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475215200","pretty": "2:00 PM PHT on September 30, 2016","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "86",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "84",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475218800","pretty": "3:00 PM PHT on September 30, 2016","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "88",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "284"},
    "wx": "Thunderstorms",
    "uvi": "2",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "83",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475222400","pretty": "4:00 PM PHT on September 30, 2016","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "91",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "86",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "91", "metric": "33"},
    "feelslike": {"english": "91", "metric": "33"},
    "qpf": {"english": "0.04", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "81",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475226000","pretty": "5:00 PM PHT on September 30, 2016","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "93",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "NW", "degrees": "315"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "87", "metric": "31"},
    "feelslike": {"english": "87", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "61",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475229600","pretty": "6:00 PM PHT on September 30, 2016","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "92",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "281"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "87", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475233200","pretty": "7:00 PM PHT on September 30, 2016","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "91",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WSW", "degrees": "252"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "59",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475236800","pretty": "8:00 PM PHT on September 30, 2016","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "90",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "31",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475240400","pretty": "9:00 PM PHT on September 30, 2016","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "88",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNE", "degrees": "26"},
    "wx": "Few Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "33",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475244000","pretty": "10:00 PM PHT on September 30, 2016","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "86",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "N", "degrees": "0"},
    "wx": "Few Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "34",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "30","mday_padded": "30","yday": "273","isdst": "0","epoch": "1475247600","pretty": "11:00 PM PHT on September 30, 2016","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "85",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475251200","pretty": "12:00 AM PHT on October 01, 2016","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "86",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WSW", "degrees": "255"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475254800","pretty": "1:00 AM PHT on October 01, 2016","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "89",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "296"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475258400","pretty": "2:00 AM PHT on October 01, 2016","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "91",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NNW", "degrees": "332"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475262000","pretty": "3:00 AM PHT on October 01, 2016","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "86",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "307"},
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475265600","pretty": "4:00 AM PHT on October 01, 2016","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "77", "metric": "25"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "76",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "300"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "77", "metric": "25"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475269200","pretty": "5:00 AM PHT on October 01, 2016","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "77", "metric": "25"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "71",
    "wspd": {"english": "0", "metric": "0"},
    "wdir": {"dir": "WNW", "degrees": "289"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "77", "metric": "25"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "20",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475272800","pretty": "6:00 AM PHT on October 01, 2016","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "0", "metric": "0"},
    "wdir": {"dir": "NE", "degrees": "45"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "19",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475276400","pretty": "7:00 AM PHT on October 01, 2016","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "0", "metric": "0"},
    "wdir": {"dir": "WNW", "degrees": "299"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "18",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475280000","pretty": "8:00 AM PHT on October 01, 2016","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "304"},
    "wx": "Thunderstorms",
    "uvi": "2",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "72",
    "mslp": {"english": "29.86", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475283600","pretty": "9:00 AM PHT on October 01, 2016","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "277"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "72",
    "mslp": {"english": "29.86", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475287200","pretty": "10:00 AM PHT on October 01, 2016","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "278"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.05", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "72",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475290800","pretty": "11:00 AM PHT on October 01, 2016","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "77",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "288"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "78",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475294400","pretty": "12:00 PM PHT on October 01, 2016","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "81",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "296"},
    "wx": "Thunderstorms",
    "uvi": "9",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "78",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475298000","pretty": "1:00 PM PHT on October 01, 2016","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "84",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "287"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.06", "metric": "2"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "78",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475301600","pretty": "2:00 PM PHT on October 01, 2016","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "85",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "286"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "77",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "68",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475305200","pretty": "3:00 PM PHT on October 01, 2016","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "86",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "284"},
    "wx": "Thunderstorms",
    "uvi": "3",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "67",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475308800","pretty": "4:00 PM PHT on October 01, 2016","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "86",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "271"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "65",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475312400","pretty": "5:00 PM PHT on October 01, 2016","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "84",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "61",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475316000","pretty": "6:00 PM PHT on October 01, 2016","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "82",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "62",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475319600","pretty": "7:00 PM PHT on October 01, 2016","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "79",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "62",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475323200","pretty": "8:00 PM PHT on October 01, 2016","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "N", "degrees": "353"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475326800","pretty": "9:00 PM PHT on October 01, 2016","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNE", "degrees": "25"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "17",
    "mslp": {"english": "29.86", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475330400","pretty": "10:00 PM PHT on October 01, 2016","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "64",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNE", "degrees": "18"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "18",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "1","mday_padded": "01","yday": "274","isdst": "0","epoch": "1475334000","pretty": "11:00 PM PHT on October 01, 2016","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "57",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NNE", "degrees": "21"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475337600","pretty": "12:00 AM PHT on October 02, 2016","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "50",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "W", "degrees": "271"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475341200","pretty": "1:00 AM PHT on October 02, 2016","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "43",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "313"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475344800","pretty": "2:00 AM PHT on October 02, 2016","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "37",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNW", "degrees": "331"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475348400","pretty": "3:00 AM PHT on October 02, 2016","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "76", "metric": "24"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "32",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "307"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475352000","pretty": "4:00 AM PHT on October 02, 2016","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "29",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "302"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "9",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475355600","pretty": "5:00 AM PHT on October 02, 2016","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "77", "metric": "25"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "27",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "314"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475359200","pretty": "6:00 AM PHT on October 02, 2016","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "fctcode": "1",
    "sky": "27",
    "wspd": {"english": "0", "metric": "0"},
    "wdir": {"dir": "N", "degrees": "350"},
    "wx": "Mostly Sunny",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475362800","pretty": "7:00 AM PHT on October 02, 2016","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "fctcode": "1",
    "sky": "27",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NNW", "degrees": "331"},
    "wx": "Mostly Sunny",
    "uvi": "1",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475366400","pretty": "8:00 AM PHT on October 02, 2016","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "N", "degrees": "351"},
    "wx": "Thunderstorms",
    "uvi": "3",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "61",
    "mslp": {"english": "29.86", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475370000","pretty": "9:00 AM PHT on October 02, 2016","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WNW", "degrees": "300"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "98", "metric": "37"},
    "feelslike": {"english": "98", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.86", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475373600","pretty": "10:00 AM PHT on October 02, 2016","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "296"},
    "wx": "Thunderstorms",
    "uvi": "10",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475377200","pretty": "11:00 AM PHT on October 02, 2016","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "NW", "degrees": "309"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "69",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475380800","pretty": "12:00 PM PHT on October 02, 2016","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WNW", "degrees": "303"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "77",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "68",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475384400","pretty": "1:00 PM PHT on October 02, 2016","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WNW", "degrees": "300"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "76",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "68",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475388000","pretty": "2:00 PM PHT on October 02, 2016","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WNW", "degrees": "300"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "75",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "68",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475391600","pretty": "3:00 PM PHT on October 02, 2016","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WNW", "degrees": "300"},
    "wx": "Thunderstorms",
    "uvi": "4",
    "humidity": "76",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "67",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475395200","pretty": "4:00 PM PHT on October 02, 2016","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "WNW", "degrees": "290"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475398800","pretty": "5:00 PM PHT on October 02, 2016","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "64",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "292"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "82",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "52",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475402400","pretty": "6:00 PM PHT on October 02, 2016","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "63",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "WNW", "degrees": "286"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "58",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475406000","pretty": "7:00 PM PHT on October 02, 2016","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "62",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "53",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475409600","pretty": "8:00 PM PHT on October 02, 2016","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "62",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NW", "degrees": "308"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "15",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475413200","pretty": "9:00 PM PHT on October 02, 2016","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "64",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "N", "degrees": "4"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "16",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475416800","pretty": "10:00 PM PHT on October 02, 2016","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "65",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NNW", "degrees": "346"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "16",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "2","mday_padded": "02","yday": "275","isdst": "0","epoch": "1475420400","pretty": "11:00 PM PHT on October 02, 2016","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "66",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NW", "degrees": "321"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475424000","pretty": "12:00 AM PHT on October 03, 2016","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "WNW", "degrees": "296"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475427600","pretty": "1:00 AM PHT on October 03, 2016","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "1", "metric": "2"},
    "wdir": {"dir": "NW", "degrees": "310"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475431200","pretty": "2:00 AM PHT on October 03, 2016","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "NW", "degrees": "306"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475434800","pretty": "3:00 AM PHT on October 03, 2016","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "291"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475438400","pretty": "4:00 AM PHT on October 03, 2016","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "290"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475442000","pretty": "5:00 AM PHT on October 03, 2016","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "78", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "296"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "78", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475445600","pretty": "6:00 AM PHT on October 03, 2016","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "2", "metric": "3"},
    "wdir": {"dir": "WNW", "degrees": "294"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475449200","pretty": "7:00 AM PHT on October 03, 2016","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {"english": "3", "metric": "5"},
    "wdir": {"dir": "WNW", "degrees": "289"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "89", "metric": "32"},
    "feelslike": {"english": "89", "metric": "32"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475452800","pretty": "8:00 AM PHT on October 03, 2016","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Thunderstorms",
    "uvi": "2",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475456400","pretty": "9:00 AM PHT on October 03, 2016","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475460000","pretty": "10:00 AM PHT on October 03, 2016","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475463600","pretty": "11:00 AM PHT on October 03, 2016","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "W", "degrees": "274"},
    "wx": "Thunderstorms",
    "uvi": "10",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475467200","pretty": "12:00 PM PHT on October 03, 2016","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "277"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475470800","pretty": "1:00 PM PHT on October 03, 2016","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "275"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475474400","pretty": "2:00 PM PHT on October 03, 2016","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "271"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "77",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.74", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475478000","pretty": "3:00 PM PHT on October 03, 2016","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "271"},
    "wx": "Thunderstorms",
    "uvi": "4",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.74", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475481600","pretty": "4:00 PM PHT on October 03, 2016","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Thunderstorms",
    "uvi": "2",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475485200","pretty": "5:00 PM PHT on October 03, 2016","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "253"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475488800","pretty": "6:00 PM PHT on October 03, 2016","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "254"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475492400","pretty": "7:00 PM PHT on October 03, 2016","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WSW", "degrees": "251"},
    "wx": "Thunderstorms",
    "uvi": "0",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475496000","pretty": "8:00 PM PHT on October 03, 2016","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "53",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WSW", "degrees": "246"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "91",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "44",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475499600","pretty": "9:00 PM PHT on October 03, 2016","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "55",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "268"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "45",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475503200","pretty": "10:00 PM PHT on October 03, 2016","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "59",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "279"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "51",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "3","mday_padded": "03","yday": "276","isdst": "0","epoch": "1475506800","pretty": "11:00 PM PHT on October 03, 2016","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "64",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "WSW", "degrees": "252"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "52",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475510400","pretty": "12:00 AM PHT on October 04, 2016","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "69",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "WSW", "degrees": "256"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "52",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475514000","pretty": "1:00 AM PHT on October 04, 2016","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "71",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "52",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475517600","pretty": "2:00 AM PHT on October 04, 2016","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "73",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475521200","pretty": "3:00 AM PHT on October 04, 2016","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "74",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "266"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475524800","pretty": "4:00 AM PHT on October 04, 2016","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "74",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "272"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475528400","pretty": "5:00 AM PHT on October 04, 2016","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "276"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "8",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475532000","pretty": "6:00 AM PHT on October 04, 2016","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475535600","pretty": "7:00 AM PHT on October 04, 2016","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "272"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "94",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475539200","pretty": "8:00 AM PHT on October 04, 2016","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "2",
    "humidity": "88",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "98", "metric": "37"},
    "feelslike": {"english": "98", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475542800","pretty": "9:00 AM PHT on October 04, 2016","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "5",
    "humidity": "83",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475546400","pretty": "10:00 AM PHT on October 04, 2016","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "W", "degrees": "263"},
    "wx": "Thunderstorms",
    "uvi": "8",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475550000","pretty": "11:00 AM PHT on October 04, 2016","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "266"},
    "wx": "Thunderstorms",
    "uvi": "10",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475553600","pretty": "12:00 PM PHT on October 04, 2016","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "274"},
    "wx": "Thunderstorms",
    "uvi": "11",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.75", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475557200","pretty": "1:00 PM PHT on October 04, 2016","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "271"},
    "wx": "Thunderstorms",
    "uvi": "9",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.03", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.74", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475560800","pretty": "2:00 PM PHT on October 04, 2016","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "87", "metric": "31"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "269"},
    "wx": "Thunderstorms",
    "uvi": "7",
    "humidity": "77",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "103", "metric": "39"},
    "feelslike": {"english": "103", "metric": "39"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475564400","pretty": "3:00 PM PHT on October 04, 2016","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Thunderstorms",
    "uvi": "4",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.73", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475568000","pretty": "4:00 PM PHT on October 04, 2016","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Thunderstorm",
    "icon": "tstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
    "fctcode": "15",
    "sky": "75",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Thunderstorms",
    "uvi": "1",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.02", "metric": "1"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "60",
    "mslp": {"english": "29.74", "metric": "1007"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475571600","pretty": "5:00 PM PHT on October 04, 2016","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
    "fctcode": "14",
    "sky": "69",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "59",
    "mslp": {"english": "29.76", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475575200","pretty": "6:00 PM PHT on October 04, 2016","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "67",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "261"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "87",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "57",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475578800","pretty": "7:00 PM PHT on October 04, 2016","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "82", "metric": "28"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "66",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WSW", "degrees": "259"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "90",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "55",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475582400","pretty": "8:00 PM PHT on October 04, 2016","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "66",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "30",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475586000","pretty": "9:00 PM PHT on October 04, 2016","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "284"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475589600","pretty": "10:00 PM PHT on October 04, 2016","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "67",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "WNW", "degrees": "290"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "18",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "4","mday_padded": "04","yday": "277","isdst": "0","epoch": "1475593200","pretty": "11:00 PM PHT on October 04, 2016","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "68",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "269"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475596800","pretty": "12:00 AM PHT on October 05, 2016","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "70",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "266"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "24",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475600400","pretty": "1:00 AM PHT on October 05, 2016","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "71",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "273"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "99",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "31",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475604000","pretty": "2:00 AM PHT on October 05, 2016","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "267"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "100",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "17",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475607600","pretty": "3:00 AM PHT on October 05, 2016","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "74",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "267"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "98",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "22",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475611200","pretty": "4:00 AM PHT on October 05, 2016","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "274"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "21",
    "mslp": {"english": "29.78", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475614800","pretty": "5:00 AM PHT on October 05, 2016","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "76",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "272"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.79", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475618400","pretty": "6:00 AM PHT on October 05, 2016","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "77",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475622000","pretty": "7:00 AM PHT on October 05, 2016","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "78",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "W", "degrees": "272"},
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "96",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "89", "metric": "32"},
    "feelslike": {"english": "89", "metric": "32"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "11",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475625600","pretty": "8:00 AM PHT on October 05, 2016","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "80", "metric": "27"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "79",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "W", "degrees": "265"},
    "wx": "Scattered Thunderstorms",
    "uvi": "2",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "94", "metric": "34"},
    "feelslike": {"english": "94", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "41",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475629200","pretty": "9:00 AM PHT on October 05, 2016","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "78",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "WSW", "degrees": "259"},
    "wx": "Scattered Thunderstorms",
    "uvi": "4",
    "humidity": "84",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "43",
    "mslp": {"english": "29.85", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475632800","pretty": "10:00 AM PHT on October 05, 2016","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "77",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Scattered Thunderstorms",
    "uvi": "7",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "47",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475636400","pretty": "11:00 AM PHT on October 05, 2016","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "76",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "263"},
    "wx": "Scattered Thunderstorms",
    "uvi": "8",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "51",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475640000","pretty": "12:00 PM PHT on October 05, 2016","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "75",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "W", "degrees": "272"},
    "wx": "Scattered Thunderstorms",
    "uvi": "9",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "54",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475643600","pretty": "1:00 PM PHT on October 05, 2016","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "75",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "270"},
    "wx": "Scattered Thunderstorms",
    "uvi": "9",
    "humidity": "80",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "56",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475647200","pretty": "2:00 PM PHT on October 05, 2016","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "86", "metric": "30"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "74",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "268"},
    "wx": "Scattered Thunderstorms",
    "uvi": "6",
    "humidity": "78",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "99", "metric": "37"},
    "feelslike": {"english": "99", "metric": "37"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "47",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475650800","pretty": "3:00 PM PHT on October 05, 2016","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "85", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "74",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "269"},
    "wx": "Scattered Thunderstorms",
    "uvi": "4",
    "humidity": "79",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "44",
    "mslp": {"english": "29.8", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475654400","pretty": "4:00 PM PHT on October 05, 2016","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "84", "metric": "29"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "73",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "W", "degrees": "262"},
    "wx": "Scattered Thunderstorms",
    "uvi": "1",
    "humidity": "81",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "96", "metric": "36"},
    "feelslike": {"english": "96", "metric": "36"},
    "qpf": {"english": "0.01", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "40",
    "mslp": {"english": "29.81", "metric": "1009"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475658000","pretty": "5:00 PM PHT on October 05, 2016","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "83", "metric": "28"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "73",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Scattered Thunderstorms",
    "uvi": "0",
    "humidity": "85",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "92", "metric": "34"},
    "feelslike": {"english": "92", "metric": "34"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "37",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475661600","pretty": "6:00 PM PHT on October 05, 2016","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "73",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "W", "degrees": "260"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "89",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "34",
    "mslp": {"english": "29.83", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475665200","pretty": "7:00 PM PHT on October 05, 2016","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "81", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Chance of a Thunderstorm",
    "icon": "chancetstorms",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
    "fctcode": "14",
    "sky": "72",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Isolated Thunderstorms",
    "uvi": "0",
    "humidity": "92",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "88", "metric": "31"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "33",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475668800","pretty": "8:00 PM PHT on October 05, 2016","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "80", "metric": "27"},
    "dewpoint": {"english": "78", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "WSW", "degrees": "258"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "88", "metric": "31"},
    "feelslike": {"english": "80", "metric": "27"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "6",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "5","mday_padded": "05","yday": "278","isdst": "0","epoch": "1475672400","pretty": "9:00 PM PHT on October 05, 2016","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "79", "metric": "26"},
    "dewpoint": {"english": "79", "metric": "26"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "72",
    "wspd": {"english": "7", "metric": "11"},
    "wdir": {"dir": "W", "degrees": "269"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "97",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "79", "metric": "26"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "7",
    "mslp": {"english": "29.84", "metric": "1011"}
    }
  ]
}
}