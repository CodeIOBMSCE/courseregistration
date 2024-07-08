import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import jwt from 'jsonwebtoken';

const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'codeio', 
  password: 'sushanth', 
  port: '5432', 
  max: 20, 
  idleTimeoutMillis: 30000, 
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/studentRegistration', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email:', email);
  console.log('Received password:', password);

  try {
    const result = await pool.query('SELECT * FROM students WHERE email_id = $1 AND password = $2', [email, password]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const student = result.rows[0];
    const token = jwt.sign({ id: student.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, redirectUrl: "/studentRegistration" });
  } catch (err) {
    console.error('Internal server error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/facultyDashboard', async (req, res) => {
    const { email, password } = req.body;
    console.log('Received email:', email);
    console.log('Received password:', password);
  
    try {
      const result = await pool.query('SELECT * FROM faculty WHERE email_id = $1 AND password = $2', [email, password]);
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const faculty = result.rows[0];
      const token = jwt.sign({ id: faculty.id }, 'your_jwt_secret', { expiresIn: '1h' });
      const redirectUrl = email === 'hod.cse@bmsce.ac.in' ? '/HOD' : '/proctor';
      res.json({ token, redirectUrl });
    } catch (err) {
      console.error('Internal server error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/departments', async (req, res) => {
    try {
      const result = await pool.query('SELECT dept_id, dept_name FROM departments');
      res.json({ departments: result.rows }); // Correctly sending dept_id and dept_name
    } catch (error) {
      console.error('Error fetching departments:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.get('/courses', async (req, res) => {
  const { department, year, semester } = req.query;

  try {
    const result = await pool.query('SELECT * FROM courses WHERE dept_id = $1 AND year = $2 AND semester = $3', [department, year, semester]);
    res.json({ courses: result.rows });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
