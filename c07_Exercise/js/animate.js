$(document).ready(function(){
  $('li').on('click', function() {
    // animate method takes 3 arguemnts, (newCss, speed, complete function)
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80',
    }, 500, function() {
      $(this).remove();
    });
  });
});
