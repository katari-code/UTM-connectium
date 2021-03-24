const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
morgan;
app.use((req, res, next) => {
  console.log('hellow from the middleware ');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server side!' });
});

const departments = 0;

app.get('/api/v1/departments', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      departments: departments,
    },
  });
});

app.get('/api/v1/departments/:id/', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      departments: departments,
    },
  });
});

app.post('/api/v1/departments', (req, res) => {
  res.status(201).json({
    status: 'success',
    results: 0,
    data: {
      departments: req.body,
    },
  });
  res.send('Done');
});

app.patch('/api/v1/departments', (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});
