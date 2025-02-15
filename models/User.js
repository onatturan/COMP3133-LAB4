const mongoose = require('mongoose');

// Kullanıcı Şeması
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [4, 'Username must be at least 4 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Email is not valid'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    match: [/^[a-zA-Z\s]+$/, 'City can only contain letters and spaces'],
  },
  website: {
    type: String,
    required: [true, 'Website URL is required'],
    match: [/^https?:\/\/.+/, 'Invalid URL format'],
  },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    match: [/^\d{5}-\d{4}$/, 'Zip code must be in the format 12345-1234'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 1-123-123-1234'],
  },
});

module.exports = mongoose.model('User', userSchema);
