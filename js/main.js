$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000,
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });

 });


jQuery(document).ready(function() {
jQuery('.post').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated bounceInLeft',
  offset: 100
 });
});

  jQuery(document).ready(function() {
  jQuery('h1, h2, p').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 100
   });
  });

  $('.icon-menu').on('click',function(){
    $('#article li').slideToggle();
  });
