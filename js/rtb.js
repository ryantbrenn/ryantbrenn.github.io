// TOGGLE MENU
$(document).ready(function(){
  $("#toggle").click(function() {
	$(this).toggleClass("on");
	$("#menu").toggleClass("visible");
  });
	$("#menu ul li a").click(function() {
	  $("#toggle").toggleClass("on");
	  $("#menu").toggleClass("visible");
	});
});



// opal custom message
    if (window.location.href.indexOf("opal") > -1) {
    	$(function() {

    var quotes = $(".opal p");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();

        // do nothing
    }
