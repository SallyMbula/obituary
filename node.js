// node.js file: script.js

// Get the form elements
const nameInput = document.getElementById('name');
const dateOfBirthInput = document.getElementById('date-of-birth');
const dateOfDeathInput = document.getElementById('date-of-death');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('obituary-form');

// Add event listener to the submit button
submitButton.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form inputs
  if (!nameInput.value) {
    alert('Please enter a name');
    return;
  }
  if (!dateOfBirthInput.value) {
    alert('Please enter a date of birth');
    return;
  }
  if (!dateOfDeathInput.value) {
    alert('Please enter a date of death');
    return;
  }
  if (!contentInput.value) {
    alert('Please enter the obituary content');
    return;
  }
  if (!authorInput.value) {
    alert('Please enter the author name');
    return;
  }

  // If all inputs are valid, submit the form and display a success message
  const formData = new FormData(document.getElementById('obituary-form'));
  fetch('/submit-obituary', { method: 'POST', body: formData })
    .then((response) => response.text())
    .then((data) => {
      const successMessage = document.getElementById('success-message');
      successMessage.innerHTML = 'Obituary submitted successfully!';
      successMessage.style.display = 'block';
    })
    .catch((error) => {
      console.error(error);
    });
});












