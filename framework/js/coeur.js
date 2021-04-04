// Old version from custom site
jQuery(document).ready(function($) { //noconflict wrapper

	$('input#submit').addClass('btn btn-primary');
	
	$("#commentform").removeAttr("novalidate");

	$("[rel='tooltip']").tooltip();

	// Comment toggle
	$('.comment-toggle').click(function () {
    $('#commentreveal').slideToggle('2000', function () {
        // Animation complete.
    });
	});

	// Search toggle
	$('#search_toggle').click(function () {
    $('.search-box').slideToggle('300', function () {
        // Animation complete.
    });
    $('ul.navbar-primary').slideToggle('300', function () {
    
    });
	});

	// Mobile Search
	$('.mobile-search-icon').click(function () {
    $('.mobile-search').slideToggle('300', function () {
        // Animation complete.
    });
	});

	$("#video-frame").fitVids();

	// Mobile - Put cursor in input field after click
	$('.mobile-search-icon').live("click", function(e) {
	e.preventDefault();
	$('.mobile-search input.search-field').focus();
	return false;
	});

	// Desktop - Put cursor in input field after click
	$('#search_toggle').live("click", function(e) {
	e.preventDefault();
	$('.search-box input.search-field').focus();
	return false;
	});

});//end noconflict