// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

// Import routes
const listingRoutes = require('./routes/listings');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/konkanstay')
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data
app.use(methodOverride('_method')); // Enable HTTP method override for forms

// Session configuration for flash messages
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Flash messages middleware
app.use(flash());

// Global variables for flash messages
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/listings', listingRoutes); // All listing routes will be prefixed with /listings

// Home route - redirect to listings
app.get('/', (req, res) => {
  res.redirect('/listings');
});

// 404 Error handler
app.use('*', (req, res) => {
  res.status(404).render('error', { 
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.' 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 KonkanStay server is running on http://localhost:${PORT}`);
  console.log(`📱 Mobile-friendly UI ready!`);
});