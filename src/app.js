const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users.route');
const mailRoutes = require('./routes/mails.route');
const vehiculeRoutes = require('./routes/vehicules.route');
const bookingRoutes = require('./routes/booking.route');
const corsMW = require('./middleware/cors');

const app = express();

const API_VERSION = '/api/v1';

// Middlewares
app.use(
  corsMW({
    allowedMethods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  }),
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get(`${API_VERSION}/`, (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

// Launch Jobs

// Activated routes
app.use(`${API_VERSION}/users`, userRoutes);
app.use(`${API_VERSION}/mails`, mailRoutes);
app.use(`${API_VERSION}/vehicules`, vehiculeRoutes);
app.use(`${API_VERSION}/booking`, bookingRoutes);

module.exports = app;
