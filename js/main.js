//Smooth Scroll

$('nav a').on('click', function() {
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset - 80
  }, 1200);
});

$('.fa-chevron-down').on('click', function() {
  // use the href of the link to identify what
  // section to scroll to
  var targetOffset = $('#about').offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset - 80
  }, 1200);
});




//Nav properties

var navPosition = $('.container').offset().top;
var navPosition = navPosition - 60;

$(window).on('scroll', function(){
	if ($(this).scrollTop() >= navPosition) {
		$('nav').addClass('scrolled');
		$('.menu').removeClass('openMenu');
		$('.page').removeClass('shiftRight');
		$('.title').hide();
		$('.fa-chevron-down').hide();
	} else {
		$('nav').removeClass('scrolled');
		$('.title').show();
		$('.fa-chevron-down').show();
	}
});

$('.hamburger').on('click', function(){
	$('.menu').toggleClass('openMenu');
	$('.page').toggleClass('shiftRight');
});


//Carousel

var images=[

'https://lh3.googleusercontent.com/0to_7AkkG1G-QOOaxmNIiHF_bDYxmXvRVuI4mSe0glKN0gU_NgOPJJOLYhk_sHkSSAEBhPjuSURkUZ-lThV89VsbLvWvgv3972jr7GXPlq5Z2H9dFwpSKDPbEG33ikyZ6lDC6oLqBNczvJXMS0VXljfDqJqsTTUn_haFnMdP68JDAjz1RsJywOZw4qjdBDk0QB93LAUpJdbi1IOEQiSeHIvOb3FZs_IfM3VzrYEPOh2C_YUA-UKTPnY5RW2d8xrhj9usyTBIUxHYUsXkZOJqd5iVisRNIILq--iOeh4KLYu8o4oliXP2FLrkM8EgPDsAPeEI2-6TalD3gByE6ZbL-uc9rjKOMNhxOdIKDhK5CXPp0rNKuF64uLrbmHfWTvctHxIlsiAZK3xj20M0-TvMZUpXTVkCOwJJ0sIvxSsPscljVZY804XRXLbhPF7u7fQLhuQlR1xJEMcgUQxOcxVWB3g-UCqj6BmcBCUuBKV9M2ewpEAlHQMRzlMT7loyOySSKoorSDiGIFHLppz3TAz2k1ej6dtf8pO3uGfkm6Jg6ToA0W5xij8jWhvDfj0t8E-QArSxuLM1v-LR4uSFG8qd2mSpMJ8BiS5ttKIbjAGvJW5b7Led=w1055-h703-no',

'https://lh3.googleusercontent.com/1WVjDXjm183090nlik_4NqD5hNplgsjhomquTT6eysF9OBp_YUndwPrNGclBrlRZntCIhBB_7idQH6uHdhvWM-crUUH6LyqTFGg-R5w21MFroxoT4dtv6mRQRf8eG7O6OpEHixDg4EFmJIuOdxyZIIHmG559lTsF__8AJ5Ppndr28wHVG9ONGD6C0h2RRwZi7tTN3Hh53v8y6UDtIaVeoBAakviGEXhjk1iVYP153QKjrrcd6aL-Fvt6UTfk66V3CQT0AAdOtZ74POrWuL7MRFwzN2qSKptvQwL57K-ZVLj-cijD9fZ8IYsJnMpKtSEV9XN1wxMUFZFRrimGTG88E8ii1rYCq9fjnf2gwyPW_iBQEM6vP18wTm-skpAQhqSGI_JYIk9BHWplAQBIMdIU0pRXYRewJ8JuXBfYqUpsuYSJbGua2_B0yEvSTtDAY0XwNNOVzLg8BF7d0nodI-Ypd8vck4iesXkdt8pX7eeprZRfHRKWT1qchNmYDqtRVVVy75a5cwBMTY9BM7hmn3jWcGYS7-_XHmRKUzfMwq9M1NFCN1PoRT92gN5vc0l7tz1fR8QGdO_qwqGriCXWepciyMy5gUGO-tPAQNhIJdHbGChktPlw9Q=w1055-h703-no', 

 'img/coffee_carousel.jpg', 

 'img/tableTwo_carousel.jpg', 

 'img/desk_carousel.jpg', 

 'img/table_carousel.jpg', 

 'https://lh3.googleusercontent.com/BxZ9g5zC6_TDaw4KI4-xFaU1DSXgSpEg9DKgmpL7-AuSOXqcxOBOJYZ1yFpPkvBzbVv4G0N5yr06GgsRp2q4cXy2ChaEiChxU_7o9rGCBf8HpKRajh4tWAoYFbyu6xXtR9e6A8oDTEpm5avtelbfIUgu1tQ0b9it5yRN4CB5kpt2LfurNToLtfd-hoC7m6B6hPYpi0EC-01fTtSJJ0iVBBszXMhU5vRpZ2hA4xxv08plx4-n3i-4DPY4-GsXJrWAQb4pm3lznc-hEmq8xVZyWBhKQyjCf7gdlVmttTdzD_7n6_lYERQzzpYXPRgv8oAabhOPAMlrCK0XW6cR2Kdoei4zBJyl99Bm__yKHb-DAS_8zccFD16dqLxPdGwPUUshazrGW7eQZsxxAQMkgN6OADCQ_U_nma0bmozVKdkMhccNSrsgvMS2MX3LTIj5fIi2assdyHbHzYGc0oMZOycBJSEohX6iBLecyOXb8Lvgt4G7L7U9jZZzXWlA96zCPEHLRIiWQ18MfFTGJAf0NKpGgtoYfaKSPJ8Qb6ehDInUkejR-HOEBCbteT1mAK5aoXZcxYufLwSV312tSAQXX-Aob7xpy2HsR1l4=w1055-h703-no', 

 'https://lh3.googleusercontent.com/6uSdfTaRvQ7R5xmPCr1wt6ie63t7wgHqBMZ6xKR5ZCAX4kxqcR4_lV729srljDcdAY50VWlqjibDLkVbZRblWnswcrQqgTYH28CB-HWvpAAJacIi3RpGdpCKGlLndrheXLUCK9emmcu1J_9bTXs8MlkEvF070lHv0kNy0Cu4FpxzH2DOjScLF0dJZBW7UZyItlzOzFv-v3mQ4ErKTKK4Be8ZtRztmemaX7UFt7kAWfOZnZvL1zZDunkLFO9htuKa-q2ZubHLO79pHemqWy69bFjJFvJRrJpFB1WftjoG-mHpKwnQDjehqDMYuxLhoLlOedwI1Cnv7BO4r710tuTMwwzwdZfbRy--ICzZUMYugePafcIyN6JgCbj-jkfhjdY7ThOrN9BtBraOLmP1CrxT0l0sUtjqJGPBJkuErvlHs6DUET_qV-kWon2du-7R36toayEEg67bQiW7UTWltp3hMVBzP0QEu56WeM4dwlJU_D6-uv0EwZLHfp-r0aq1RbZhxZYZZqjXQLZw1R8nREGFcKzV22NQNnC7SuhhE9neQhiExeppZ6_ebgIKAt-IV70o-QDY2i9zzyPTk6UCx4aHLO2zcOiP__k=w1212-h682-no'];
// var countDots=['#count-one', '#count-two', '#count-three', '#count-four']
// var currentPosition = 0;

window.onload = function(){
	for (i=0; i < images.length; i++){
		var gallery = document.getElementById('gallery');
		var project = gallery.appendChild(document.createElement('div'));
	  	project.className = 'project';
	    project.id = "project-" + i;
	  	project.style.backgroundImage = 'url("' + images[i] + '")';
	  	window.onresize = function resizeit() {
	  		var projects = document.getElementsByClassName('project');
	  		var width = project.offsetWidth;
		  	console.log(width);
	  		for (i=0; i < projects.length; i++){
		  		projects[i].style.height = width+'px';
		  	}
	  	}
	}
};

// $('#next').on('click', nextImage);
// $('#prev').on('click', previousImage);

// function nextImage(){
// 	currentPosition++;

// 	$('#prev').css('display', 'inline');

// 	changeImage();

//  	if (currentPosition === 3) {
// 		$('#next').css('display', 'none');
// 	}
// }

// function previousImage(){

// 	currentPosition--;

// 	$('#next').css('display', 'inline');

// 	changeImage();

// 	if (currentPosition === 0 ) {
// 		$('#prev').css('display', 'none');
// 	}
// }

// function changeImage(){
// 	$('#carousel-image').attr('src', images[currentPosition]);
// 	$('#count-one').css('background-color', 'rgba(255, 255, 255, 0)');
// 	$('#count-two').css('background-color', 'rgba(255, 255, 255, 0)');
// 	$('#count-three').css('background-color', 'rgba(255, 255, 255, 0)');
// 	$('#count-four').css('background-color', 'rgba(255, 255, 255, 0)');
// 	$(countDots[currentPosition]).css('background-color', 'rgba(255, 255, 255, .4)');
// }
