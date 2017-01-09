$('#register').on('submit', function(e) {       // when the form is submitted in ID register
  e.preventDefault();                           // prevent submission
  var details = $('#register').serialize();     // serialize form data and save to variable
  $.post('register.php', details, function(data) {  // send it with .post()
    $('#register').html(data);                      // overwrite element #register with server data
  });
});
