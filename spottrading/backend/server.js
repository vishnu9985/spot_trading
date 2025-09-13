const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Demo in-memory storage
let users = [];
let courses = [
  { id: 1, title: "Option Trading Course", description: "Learn options trading strategies.", price: 999 },
  { id: 2, title: "Fundamental Analysis Course", description: "Master fundamental analysis.", price: 1499 },
  { id: 3, title: "Technical Analysis Course", description: "Technical analysis for traders.", price: 1199 },
  { id: 4, title: "Full Stock Market Course", description: "Comprehensive stock market course.", price: 4999 }
];

app.use(cors());
app.use(bodyParser.json());

// Register
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  users.push({ name, email, password, unlockedCourses: [] });
  res.json({ message: 'Sign up successful' });
});

// Login
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Sign in successful', user: { name: user.name, email: user.email, unlockedCourses: user.unlockedCourses } });
});

// Get courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Purchase course
app.post('/api/purchase', (req, res) => {
  const { email, courseId } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  if (!user.unlockedCourses.includes(courseId)) {
    user.unlockedCourses.push(courseId);
  }
  res.json({ message: 'Course unlocked', unlockedCourses: user.unlockedCourses });
});

// Get profile
app.get('/api/profile', (req, res) => {
  const { email } = req.query;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  res.json({ name: user.name, email: user.email, unlockedCourses: user.unlockedCourses });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});