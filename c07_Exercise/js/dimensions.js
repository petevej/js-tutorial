$(document).ready(function(){
  $(function() {
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeigth + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');
  });
});
