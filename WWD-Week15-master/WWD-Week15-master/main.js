$(document).ready(function(){
	var menuWidth = $('#asideMenu').css("width");
	$('#asideMenu').css("left", "-"+menuWidth)
})

$('#openMenu').click(function() {
	var menuWidth = $('#asideMenu').css("width");
	$('.page-header').animate({
		left: menuWidth 
	})

	$('#asideMenu').animate({
		left: "0px"
	});
});


$('#closeMenu').click(function() {

	var menuWidth = $('#asideMenu').css("width");
	$('.page-header').animate({
		left: "0px"
	});
	$('#asideMenu').animate({
		left: "-" + menuWidth
	});
});


$('.scroll-arrow-holder').click(function scroll() {
	var height = $('.page-header').css('height');

	$('html, body').animate({
			scrollTop: height
	}, 500)
	
});


function mainSlider() {
	$('.slider-link').click(function() {
		$('.slider-link.activeSliderLink').removeClass('activeSliderLink');
		$(this).addClass('activeSliderLink');
		var slideNr = $(this).attr('id').substring(4);
		var slideId = "#slide" + slideNr;
		$('.slide.active').removeClass('active');
		$(slideId).addClass('active');
	});
};



function autoSlide() {



	var slides = $(".main-slider .slide");
	for (x = 0; x < slides.length; x++) {

		if ($(slides[x]).hasClass("active")) {

			if (x === (slides.length - 1)) {
				$(slides[x]).removeClass("active");
				$(slides[0]).addClass("active");
				break;
				
			}

			else {
			$(slides[x]).removeClass("active");
			$(slides[x+1]).addClass("active");
			break;

			};
		};



	};

	for (x = 0; x < slides.length; x++) {
		if ($(slides[x]).hasClass("active")) {
			var links = $('.slider-link');
			links.removeClass('activeSliderLink')
			$(links[x]).addClass('activeSliderLink')
		}
	};

};


// WORKS SLIDER ---------------------------

$('.works-slider-nav #next').click(

	function()  {

		var sets = $('.works-set');

		for (x =0; x < sets.length; x++) {

			if ($(sets[x]).hasClass('active-set')) {

				$(sets[x]).removeClass('active-set');

				if (x === (sets.length - 1) ) {
					console.log('druga')
					$(sets[0]).addClass('active-set');	
					break;
				}

				else {
					console.log('pierwsza')
					$(sets[x+1]).addClass('active-set');
					break;
				};
			};

		};
	}
);

$('.works-slider-nav #prev').click(
	function() {
		console.log("perev")
		var sets = $('.works-set');

		for (var x = 0; x < sets.length; x++) {

			if ($(sets[x]).hasClass('active-set')) {

				$(sets[x]).removeClass('active-set');

				if (x === 0 ) {
					$(sets[(sets.length - 1)]).addClass('active-set');	
					break;
				}

				else {
					$(sets[x-1]).addClass('active-set');
					break;
				};
			};

		};
	}
);




// NAVIGATION SCROLL

$(".main-menu li, .aside-menu li").click(function(){

	var section = "#" + $(this).attr('id') + "Section";
	var pos = $(section).position().top;

	$("html, body").animate({
		scrollTop: pos
	}, 500);

});

// ----------------------------------


$(document).ready(
	mainSlider(), 
	window.setInterval(autoSlide, 10000)
);


