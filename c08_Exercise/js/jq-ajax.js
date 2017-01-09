$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                        // URL to laod
  var $content = $('#content');               // Cache selection to use later

  $('nav a.current').removeClass('current');  // Update links
  $(this).addClass('current');
  $('#container').remove();                   // Remove content

  $.ajax({
    type: "POST",                             // either GET or POST
    url: url,                                 // path to file
    timeout: 2000,                            // waiting timeout
    beforeSend: function() {
      $content.append('<div id="load">Loading</div>');  // Load msg
    },
    complete: function() {
      $('#load').remove();
    },
    success: function(data) {
      $content.html( $(data).find('#container')).hide().fadeIn(400);
    },
    fail: function() {
      $('#panel').html('<div class="loading">Pleas try again soon.</div>');
    }
  });
});
