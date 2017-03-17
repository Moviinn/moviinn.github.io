var contactFormSubmit = function(event) {
  var http = new XMLHttpRequest();
  var url = document.getElementById('mvn-form').action;
  var inputs = document.querySelectorAll('input,textarea');
  var params = [];

  for(var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    params.push(
      encodeURIComponent(input.name) + '=' + encodeURIComponent(input.value)
    );
  }

  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 200) {
      alert('Thank you. We will get back to you soon.');

      // Cleanup form values
      for(var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'submit' && inputs[i].type !== 'hidden') {
          inputs[i].value = '';
        }
      }

    } else if (http.readyState == 4 && http.status !== 200) {
      alert('Submission did not work. Please send us an email or call us.');
    }

  }
  http.send(params.join('&'));
  return false;
};
