/* Constantine Doukas NOTE: This file was run through JSHint and found no errors. */

(function() {
    var passwordToggler = document.getElementById('toggle-password'),
        hamburgerButton = document.querySelector('.hamburger--collapse'),
        signupForm = document.getElementById('stamp-signup-form');
   
    // This function has one event listener attached to it. When fired, the password visibility in the registration form is toggled. 
    function togglePassword() { 
      const password = document.getElementById('stamp-password');
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    }
    
    // The following are the event listeners for the page
    passwordToggler.addEventListener('change', togglePassword); // When the check box changes, toggle the password visibility 

    hamburgerButton.addEventListener('click', function() {  // When the hamburger menu is clicked, toggle the button animation
        hamburgerButton.classList.toggle('is-active');  // Need to add logic to show the menu on click as well
    });

    // This event listener is to prevent the default behavior when the form is sumbit. Without this, query strings are added to the URL from the user's form inputs
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
    });
})();