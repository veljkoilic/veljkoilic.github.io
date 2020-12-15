$(document).ready(function () {

(function ($) {

	"use strict";

	//Prikazuje pozadinu headera ako je skrolovano vise od  visine headera
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// Window Resize Mobile Menu Fix
	mobilnaNavigacija();


	// Animacije kada element udje unutar viewport-a
	window.sr = new scrollReveal();

		var menuOpen = false
		//Otvaranje i zatvaranje mobile-menija
		$(".menu-trigger").on('click', function () {
			$('.menu-trigger').toggleClass('active');
			$('.header-area .nav').fadeToggle(100);
			menuOpen = !menuOpen;
			console.log(menuOpen)
		});


	
		$('#welcome').addClass('active');

		//Klik zatvara meni na mobilnom
		$('.menu-item').on('click', function (e) {
			if(menuOpen){
				$('.menu-trigger').toggleClass('active');
				$('.header-area .nav').slideToggle(300);
				menuOpen = !menuOpen;

			}
		});


	//Podesiti 'active' klasu u navigaciji na ono sto je u viewportu
	$(window).scroll(function (event) {
		var scrollPos = $(document).scrollTop() + 80;

		if (scrollPos === 0) {
			$('a[href^="#welcome"]').addClass('active');
			return;
		}
		$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));

			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.menu-item').removeClass("active");
				currLink.addClass("active");
			} else {
				currLink.removeClass("active");
			}
		});
	})
	// Kada se promeni velicina browsera poziva se mobilnaNavigacija()
	$(window).on('resize', function () {
		mobilnaNavigacija();
	});

	function mobilnaNavigacija() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}
	//rotiranje telefona sa leve strane u odnosu na poziciju misa unutar sectiona
		$("#promotion").on('mousemove',(function(e) {

		  var offset = $(this).offset();
		  var relativeY = (e.pageY - offset.top);
		  $('#leftPhoneImg').css('transition', '0.2s')
		  $('#leftPhoneImg').css('-webkit-transform','rotate('+relativeY/30+'deg)'); 
		  $('#leftPhoneImg').css('-moz-transform','rotate('+relativeY/30+'deg)');
		  $('#leftPhoneImg').css('transform','rotate('+relativeY/30+'deg)');		
		}));

})(window.jQuery);
});
