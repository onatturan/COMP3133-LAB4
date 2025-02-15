const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Kullanıcı Ekleme (POST)
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ errors: error.message });
  }
});

module.exports = router;
