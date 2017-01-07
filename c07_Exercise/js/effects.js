$(document).ready(function(){
  // hide first, then slide down to start
  $('h2').hide().slideDown();
  var $li = $('li');
  // hide all list items, then fade them in one-by-one
  $li.hide().each(function(index) {
    $(this).delay(index * 700).fadeIn(700);
  });
  // add event listener to fade out li item upon click
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
});
