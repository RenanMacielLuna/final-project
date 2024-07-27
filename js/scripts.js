function showAlert() {
  alert('Comment Added.');
}

function enableButton() {
  let name = document.forms['contactForm']['name'].value;
  let email = document.forms['contactForm']['email'].value;
  let comment = document.forms['contactForm']['comment'].value;
  if (name !== '' && email !== '' && comment !== '') {
    document.getElementById('my-button').disabled = false;
  } else {
    document.getElementById('my-button').disabled = true;
  }
}
