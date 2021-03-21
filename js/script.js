/** Scroll Spy - Quick and Dirty
	Update URL in address bar with #Ancor
	Triggered by Boostraps built in scrollspy
	events
**/

$(window).on('activate.bs.scrollspy', function(e) {
    history.replaceState({}, "", $('.nav-item .active').attr("href"));
});

/** Smooth Scrolling **/
/** w3schools example **/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var secondListStart = $(".list-items").children().length - 3;

$(".second-list-appender").append($("<ol start=" + secondListStart + ">"));
$(".second-list-appender ol").append($(".second-list"));
$(".second-list-appender").append($("</ol>"));
