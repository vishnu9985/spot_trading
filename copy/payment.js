  // Courses data
  const courses = [
    { id: 1, title: "Option Trading Course", price: 999 },
    { id: 2, title: "Fundamental Analysis Course", price: 1499 },
    { id: 3, title: "Technical Analysis Course", price: 1199 },
    { id: 4, title: "Full Stock Market Course", price: 4999 },
    { id: 5, title: "Swing Trading Course", price: 699 },
    { id: 6, title: "Positional Trading Course", price: 699 },
    { id: 7, title: "Qualitative Analysis Course", price: 699 },
    { id: 8, title: "Quantitative Analysis Course", price: 699 }
  ];

  // Get courseId from URL
  const params = new URLSearchParams(window.location.search);
  const courseId = parseInt(params.get('courseId'));
  const course = courses.find(c => c.id === courseId);

  // Display course details and set QR code
  const courseDetails = document.getElementById('courseDetails');
  const upiQr = document.getElementById('upiQr');
  if (course) {
    courseDetails.innerHTML = `
      <div>
        <strong>Course:</strong> ${course.title}<br>
        <strong>Amount:</strong> ₹${course.price.toFixed(2)}
      </div>
    `;
    upiQr.src = `https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=8522822852@ybl&pn=SpotTrading&am=${course.price}&cu=INR`;
  } else {
    courseDetails.innerHTML = `<div>Course not found.</div>`;
    upiQr.style.display = 'none';
  }
  // ...existing code...

// Unlock course function
function unlockCourse(courseId) {
  let unlocked = JSON.parse(localStorage.getItem('unlockedCourses') || '[]');
  if (!unlocked.includes(courseId)) {
    unlocked.push(courseId);
    localStorage.setItem('unlockedCourses', JSON.stringify(unlocked));
  }
}

// Handle "I've Paid" button click
document.getElementById('confirmPayment').addEventListener('click', function() {
  unlockCourse(courseId);
  alert('Payment successful! Your course is now unlocked.');
  window.location.href = 'st.html';
});