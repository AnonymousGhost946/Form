const form = document.querySelector("#login-form");
const btn = document.querySelector("#btn-submit");
const loader = document.querySelector(".btn-loader");
const buttonText = document.querySelector(".button-text");
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

btn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  loader.style.opacity = "1"; // Show the loader
  buttonText.style.display = "none"; // Hide the button text

  setTimeout(function() {
    loader.style.opacity = "0"; // Hide the loader after some time (simulating a process)
    buttonText.style.display = "inline-block"; // Show the button text
    btn.style.backgroundColor = "green"; // Change button background color
    buttonText.innerHTML = "Login successful"; // Change the button text

    // Reset form fields
    usernameInput.value = '';
    passwordInput.value = '';
  }, 5000); // Adjust the time as per your requirement
});