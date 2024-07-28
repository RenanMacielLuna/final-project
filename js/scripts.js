function showAlert() {
  alert('Comment Added.');
}

function enableButton() {
  let name = document.forms['contactForm']['name'].value;
  let email = document.forms['contactForm']['email'].value;
  let comment = document.forms['contactForm']['comment'].value;
  if (name === '') {
    document.getElementById('invalid-feedback-name').hidden = false;
  } else {
    document.getElementById('invalid-feedback-name').hidden = true;
  }
  if (email === '') {
    document.getElementById('invalid-feedback-email').hidden = false;
  } else {
    document.getElementById('invalid-feedback-email').hidden = true;
  }
  if (comment === '') {
    document.getElementById('invalid-feedback-comment').hidden = false;
  } else {
    document.getElementById('invalid-feedback-comment').hidden = true;
  }
  if (name !== '' && email !== '' && comment !== '') {
    document.getElementById('my-button').disabled = false;
  } else {
    document.getElementById('my-button').disabled = true;
  }
}

function enableButtonIssue() {}

function showAlertIssue() {
  alert('We will be in contact with you soon. Please, check your e-mail.');
}
