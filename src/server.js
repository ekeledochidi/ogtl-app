import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
  const { name } = req.body;
  const query = 'INSERT INTO users (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error saving user');
    } else {
      res.status(200).send('User saved successfully');
    }
  });
});

// Start the server
const PORT = 5000; // You can change this port if needed
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});