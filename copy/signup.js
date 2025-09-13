  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign up successful! You can now sign in.');
    window.location.href = 'signin.html';
  });