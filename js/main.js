var navPosition = $('.container').offset().top;
var navPosition = navPosition - 60;

$(window).on('scroll', function(){
	if ($(this).scrollTop() >= navPosition) {
		$('nav').addClass('scrolled');
		$('.menu').removeClass('openMenu');
		$('.page').removeClass('shiftRight');
	} else {
		$('nav').removeClass('scrolled');
	}
});

$('.hamburger').on('click', function(){
	$('.menu').toggleClass('openMenu');
	$('.page').toggleClass('shiftRight');
});


//Carousel

var images=['img/desk_carousel.jpg', 'img/table_carousel.jpg', 'img/coffee_carousel.jpg', 'img/board_carousel.jpg'];
var countDots=['#count-one', '#count-two', '#count-three', '#count-four']
var currentPosition = 0;

$('#next').on('click', nextImage);
$('#prev').on('click', previousImage);

function nextImage(){
	currentPosition++;

	$('#prev').prop('disabled', false);

	changeImage();

 	if (currentPosition === 3) {

		$('#next').prop('disabled', true);

	}
}

function previousImage(){

	currentPosition--;


	$('#next').prop('disabled', false);


	changeImage();


	if (currentPosition === 0 ) {

		$('#prev').prop('disabled', true);
	}
}

function changeImage(){

	$('#carousel-image').attr('src', images[currentPosition]);
	$('#count-one').css('background-color', 'rgba(255, 255, 255, 0)');
	$('#count-two').css('background-color', 'rgba(255, 255, 255, 0)');
	$('#count-three').css('background-color', 'rgba(255, 255, 255, 0)');
	$('#count-four').css('background-color', 'rgba(255, 255, 255, 0)');
	$(countDots[currentPosition]).css('background-color', 'rgba(255, 255, 255, .4)');


}
