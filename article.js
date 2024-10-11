
const loginButton = document.getElementById('login-button');
const loginForm = document.querySelector('.login-form');

loginButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
  loginButton.style.display = 'none'; // Hide the button after clicking
});
