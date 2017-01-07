$(document).ready(function(){
  // cache the window
  var $window = $(window);
  // cache the ads
  var $slideAd = $('#slideAd');
  // calculate and cache the height of end zone = pageHeight - viewportHeight - 500px
  var endZone = $('#footer').offset().top - $window.height() - 500;
  // add event listener for scrolling
  $window.on('scroll', function() {
    // if end zone is breached .scrollTop tells how far user has scrolled
    if ((endZone) < $(window).scrollTop()) {
    // slide the box in from right edge in 250 ms
    $slideAd.animate({ 'right': '0px'}, 250);
    // if scrolling hasn't reached end zone or box is the the middle of animating, slide it back out
  } else {
    $slideAd.stop(true).animate({ 'right': '-360px'}, 250);
  }
  });
});
