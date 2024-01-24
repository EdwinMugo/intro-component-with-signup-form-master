const form = document.querySelector('.form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('passWord');

const showError = (input, message) => {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-message');
  errorElement.innerText = message;
  input.parentNode.appendChild(errorElement);
};

const showWarning = (input) => {
  const warningElement = document.createElement('span');
  warningElement.classList.add('warning-symbol');
  warningElement.innerText = '⚠️';
  input.parentNode.appendChild(warningElement);
};

const validateForm = (event) => {
  event.preventDefault();

  // Reset error messages and warning symbols
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach((errorMessage) => errorMessage.remove());

  const warningSymbols = form.querySelectorAll('.warning-symbol');
  warningSymbols.forEach((warningSymbol) => warningSymbol.remove());

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput, 'First name cannot be empty');
    showWarning(firstNameInput);
  }

  // Validate last name
  if (lastNameInput.value.trim() === '') {
    showError(lastNameInput, 'Last name cannot be empty');
    showWarning(lastNameInput);
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
    showWarning(emailInput);
  }

  // Validate password
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    showError(passwordInput, 'Password must contain at least 8 characters, one number, one special character, one uppercase letter, and one lowercase letter');
    showWarning(passwordInput);
  }
};

form.addEventListener('submit', validateForm);
