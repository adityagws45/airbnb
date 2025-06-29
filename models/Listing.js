// Import mongoose for MongoDB operations
const mongoose = require('mongoose');

// Define the schema for homestay listings
const listingSchema = new mongoose.Schema({
  // Basic listing information
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  
  // Location in Konkan region
  region: {
    type: String,
    required: [true, 'Region is required'],
    enum: {
      values: ['Goa', 'Ratnagiri', 'Sindhudurg', 'Raigad', 'Thane', 'Udupi', 'Dakshina Kannada'],
      message: 'Please select a valid Konkan region'
    }
  },
  
  // Pricing information
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [500, 'Price must be at least ₹500 per night'],
    max: [50000, 'Price cannot exceed ₹50,000 per night']
  },
  
  // Special features
  localFood: {
    type: Boolean,
    default: false,
    description: 'Does the homestay offer authentic local Konkan cuisine?'
  },
  
  beachNearby: {
    type: Boolean,
    default: false,
    description: 'Is the homestay located near a beach?'
  },
  
  // Cultural experiences offered
  culturalExperience: {
    type: [String],
    default: [],
    validate: {
      validator: function(experiences) {
        // Limit to maximum 5 cultural experiences
        return experiences.length <= 5;
      },
      message: 'Cannot have more than 5 cultural experiences'
    }
  },
  
  // Contact information
  contact: {
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^[6-9]\d{9}$/, 'Please enter a valid Indian phone number']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    }
  },
  
  // Image URL (for simplicity, we'll use a single image)
  image: {
    type: String,
    default: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg'
  },
  
  // Capacity
  maxGuests: {
    type: Number,
    required: [true, 'Maximum guests capacity is required'],
    min: [1, 'Must accommodate at least 1 guest'],
    max: [20, 'Cannot accommodate more than 20 guests']
  }
}, {
  // Add timestamps for created and updated dates
  timestamps: true
});

// Create indexes for better query performance
listingSchema.index({ region: 1 });
listingSchema.index({ price: 1 });
listingSchema.index({ beachNearby: 1 });

// Virtual property to format price in Indian currency
listingSchema.virtual('formattedPrice').get(function() {
  return `₹${this.price.toLocaleString('en-IN')}`;
});

// Instance method to check if listing is budget-friendly
listingSchema.methods.isBudgetFriendly = function() {
  return this.price <= 2000;
};

// Static method to find listings by region
listingSchema.statics.findByRegion = function(region) {
  return this.find({ region: region });
};

// Export the model
module.exports = mongoose.model('Listing', listingSchema);