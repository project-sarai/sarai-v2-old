Template.WeatherAdvisory.helpers({
  weatherAdvisoryMain: function(){
    var obj = Main.findOne({'name': 'weather-advisory'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  weatherAdvisory: function(){
  	var obj = Main.findOne({'name': 'weather-advisory'});
    if(typeof obj !== 'undefined'){
      return obj.weatherAdvisory.slice(0,1);
    }
  }
});

// Template.TestimonialSlider.onRendered(() => {

// })

// Template.TestimonialSlider.helpers({

//   partnerInstitutionslist: () => {
//     const record = Main.findOne({name: 'testimonials'});

//     return record && record.testimonials;
//   }
// })

// // TestimonialContent Stuff starts here
// Template.TestimonialContent.onRendered(() => {

//   $('#testimonial-carousel').slick({
//     dots: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 4000
//   })

// })

// Template.TestimonialContent.events({

// });