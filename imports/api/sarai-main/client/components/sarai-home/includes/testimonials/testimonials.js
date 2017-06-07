Template.Testimonials.helpers({
  testimonialsMain: function(){
    var obj = Main.findOne({'name': 'testimonials'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  testimonials: function(){
  	var obj = Main.findOne({'name': 'testimonials'});
    if(typeof obj !== 'undefined'){
      return obj.testimonials.slice(0,1);
    }
  }
});

Template.TestimonialSlider.onRendered(() => {

})

Template.TestimonialSlider.helpers({

  testimoniallist: () => {
    const record = Main.findOne({name: 'testimonials'});

    return record && record.testimonials;
  }
})

// TestimonialContent Stuff starts here
Template.TestimonialContent.onRendered(() => {

  $('#testimonial-carousel').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000
  })

})

Template.TestimonialContent.events({

});