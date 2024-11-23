const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve login file
app.get('/login', (req, res) => {
  const signupSuccess = req.query.signupSuccess;
  res.sendFile(path.join(__dirname, 'login.html'), { signupSuccess });
});

// Serve signup file
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle login form submission
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Simple login logic (you can expand this with authentication, etc.)
  console.log(`Login attempt: ${username}, ${password}`);
  
  // Simulate a successful login
  res.send('Login successful!');
});

// Handle signup form submission
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  
  // Simulate a signup (you can expand with actual database logic)
  console.log(`Signup attempt: ${username}, ${email}, ${password}`);
  
  // After successful signup, redirect to login page with success message
  res.redirect('/login?signupSuccess=true');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
