const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// const body-parser = require('body-parser')

const app = express();
const PORT = 5000; // You can choose any available port

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'applications', // Replace with the name of your database
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);


// Registration route

app.post('/api/register', (req, res) => {

  const { firstname, password } = req.body;

  console.log('Received data:', { firstname, password });

  // ... rest of the code ...
  const query = 'INSERT INTO users (firstname, password ) VALUES (?, ?)';
  pool.query(query, [firstname, password], (error, result) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).json({ error: 'Error inserting data into the database' });
    } else {
      console.log('Data inserted successfully');
      res.json({ message: 'Data inserted successfully' });
    }
  });

});


// Login route
app.post('/api/login', (req, res) => {
  const { firstname, password } = req.body;

  // Check if the username exists in the database
  pool.query('SELECT * FROM users WHERE firstname = ?', [firstname], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'An error occurred' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Compare the provided password with the password from the database
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  });
});


// POST YOUR NEW TODO 
app.post('/apldataform', (req, res) => {
  const { fname,lname,dob,mobile,category,edu,country,state,email,city } = req.body; // Assuming the request body contains "name" and "email" fields

  // Perform the INSERT query to add data to the candidates table
  const query = 'INSERT INTO aplform (fname,lname,dob,mobile,category,edu,country,state,email,city) VALUES (?,?,?,?,?,?,?,?,?,?)';
  pool.query(query, [fname,lname,dob,mobile,category,edu,country,state,email,city], (error, result) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).json({ error: 'Error inserting data into the database' });
    } else {
      res.json({ message: 'Data inserted successfully' });
    }
  });
});


// GET YOUR NEW TODO DATA
app.get('/apllcnform', (req, res) => {
  const { fname,lname,dob,mobile,category,edu,country,state,email,city } = req.body; // Assuming the request body contains "name" and "email" fields

  // Perform the INSERT query to add data to the candidates table
  const query = 'SELECT * FROM aplform';
  pool.query(query, [fname,lname,dob,mobile,category,edu,country,state,email,city], (error, result) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).json({ error: 'Error inserting data into the database' });
    } else {
      res.json(result);
    }
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
