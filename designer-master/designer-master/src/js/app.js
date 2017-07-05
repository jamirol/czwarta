jQuery(document).ready( function () {
	jQuery("#top h2, #top span, #top p, #top a, nav, #about h2, #about p, iframe, #who h2, #who p, .figure, #who h3, #who span, #what-we-do h2, #what-we-do p, #what-we-do img, #what-we-do h3, #work h2, #work p, #work-slider, #clients h2, #clients p, #clients img, #contact h2, #contact p, #contact span, #contact form, .social-share").addClass("hideme").viewportChecker({
classToAdd: 'visible animated fadeInDown',
offset: 100
});
	
	  jQuery("#work-slider").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        responsive: true,
        addClassActive: true,
				pagination: true,
				navigation: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        stopOnHover:true,
//        afterMove:function(){
//            //reset transform for all item
//            jQuery(".owl-item").css({
//                transform:"none"
//            })
//            //add transform for 2nd active slide
//            jQuery(".active").eq(1).css({
////                transform:"scale(1.9)",
//                zIndex:3000,
//
//            })
//
//        },
        //set init transform
//        afterInit:function(){
//            jQuery(".active").eq(1).css({
//                transform:"scale(1.9)",
//                zIndex:3000,
//
//            })
//        }

    });
	
	jQuery('nav').affix({
      offset: {
        top: jQuery('#top').height()
      }
}); 
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
