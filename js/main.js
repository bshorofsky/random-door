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


// Gallery
var images = galleryList.images;

window.onload = function(){
	for (i=0; i < images.length; i++){
		var gallery = document.getElementById('gallery');
		// Create thumbnail images
		var project = gallery.appendChild(document.createElement('div'));
	  	project.className = 'project';
	    project.id = "project-" + i;
	  	project.style.backgroundImage = 'url("' + images[i].src + '")';
	  	// Create captions
	  	var caption = project.appendChild(document.createElement('div'));
	  	caption.className = 'caption';
	  	var title = caption.appendChild(document.createElement('h4'));
	  	title.innerHTML = images[i].caption;
	  	title.className = 'project-title'
	  	var cost = caption.appendChild(document.createElement('p'));
	  	cost.innerHTML = images[i].price;
	  	cost.className = 'project-cost';
	  	var availability = caption.appendChild(document.createElement('p'));
	  	availability.innerHTML = images[i].status;
	  	availability.className = 'project-availability';
	  	// Keep square proportions for any screen size
	  	var projects = document.getElementsByClassName('project');
	  	window.onresize = function resizeit() { 		
	  		var width = project.offsetWidth;
	  		for (i=0; i < projects.length; i++){
		  		projects[i].style.height = width+'px';
		  	}
		  	caption.width = width + 'px';
	  	}
		project.addEventListener('mouseover', function(){
			var currentProject = document.getElementById(this.id);
			var currentCaption = currentProject.querySelector('.caption');
			if (currentCaption.classList)
			  currentCaption.classList.add('show');
		});
		project.addEventListener('mouseout', function(){
			var currentProject = document.getElementById(this.id);
			var currentCaption = currentProject.querySelector('.caption');
			if (currentCaption.classList)
			  currentCaption.classList.remove('show');
		});
	}
};
