 // Navigation logic
  if (localStorage.getItem('signedIn') === 'true') {
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('signinBtn').style.display = 'none';
    document.getElementById('profileBtn').style.display = 'inline-block';
  } else {
    document.getElementById('signupBtn').style.display = 'inline-block';
    document.getElementById('signinBtn').style.display = 'inline-block';
    document.getElementById('profileBtn').style.display = 'none';
  }

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign up successful! You can now sign in.');
    window.location.href = 'signin.html';
  });
  