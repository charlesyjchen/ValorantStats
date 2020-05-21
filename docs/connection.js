var $form = $('form#statSubmission'),
    url = 'https://script.google.com/macros/s/AKfycbzvcRr3RKQmEjxCc7LMvPRbAbOU4vlbbyVR1mEK7QeV6XZifIk/exec'

$('#submitbutton').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})