$(document).ready(function(){
  var backgroundColor = $('li').css('background-color');
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
  $('li').css({
    backgroundColor: '#c5a996',   // javascript will read the '-' between background-color as a math minus sign, need to use 'background-color' or backgroundColor
    border: '1px solid #fff',
    color: '#000',
    fontFamily: 'Georgia',
    paddingLeft: '+= 75'        // += is paddingLeft = paddingLeft + 75
  });
});
