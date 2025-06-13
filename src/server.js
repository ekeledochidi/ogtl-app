import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import session from 'express-session';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add session middleware
app.use(session({
  secret: 'fingerprint_user', // use a strong secret in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true } // set secure: true if using HTTPS
}));

const JWT_SECRET = 'access_granted'; // use a strong secret in production

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: 'Enyeremadu1$',      // Replace with your MySQL password
  database: 'userdb' // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to handle user signup

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password || username.trim() === '' || password.trim() === '') {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error signing up user:', err);
      res.status(500).send('Error signing up user');
    } else {
      res.status(201).json({ success: true, message: 'User signed up successfully' });
    }
  });
});
// API endpoint to handle user sign-in
app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  // Validate input
  if (!username || !password || username.trim() === '' || password.trim() === '') {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error signing in user:', err);
      res.status(500).send('Error signing in user');
    } else if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: 60 * 60 });
      req.session.authorization = token; // Store token in session
      res.status(200).json({ success: true, message: 'User signed in successfully' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

// Middleware to check authentication
function authenticateToken(req, res, next) {
  const token = req.session.authorization;
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// API endpoint to handle user sign-out
app.post('/signout', (req, res) => {
  // Here you can handle sign-out logic, like clearing session data
  // For simplicity, we just send a success response
  res.status(200).json({ success: true, message: 'User signed out successfully' });
});

// API endpoint to get all users
app.get('/users', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    } else {
      res.status(200).json(results);
    }
  });
});
// API endpoint to get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Error fetching user');
    } else if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).send('User not found');
    }
  });
});
// API endpoint to update a user
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;
  const query = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
  db.query(query, [username, password, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Error updating user');
    } else if (result.affectedRows > 0) {
      res.status(200).send('User updated successfully');
    } else {
      res.status(404).send('User not found');
    }
  });
});

// API endpoint to delete a user
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Error deleting user');
    } else if (result.affectedRows > 0) {
      res.status(200).send('User deleted successfully');
    } else {
      res.status(404).send('User not found');
    }
  });
});


// Start the server
const PORT = 5000; // You can change this port if needed
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});