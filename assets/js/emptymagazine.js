jQuery(document).ready(function() {

	//Lazy Load
	$("img.lazy").show().lazyload({
		effect: "fadeIn",
	//	threshold: 99999
	});
	
	//FancyBox
	$("a.fancy").fancybox();
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

}); //END doc.ready