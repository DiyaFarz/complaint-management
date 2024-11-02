const express = require('express');
const Complaint = require('../models/Complaint');

const router = express.Router();

// Submit a complaint
router.post('/submit', async (req, res) => {
  try {
    const complaint = new Complaint({
      
      title: req.body.title,
      description: req.body.description,
    });
    await complaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting complaint' });
  }
});

// Get all complaints for the logged-in user
router.get('/complaints',  async (req, res) => {
  try {
    const complaints = await Complaint.find({  });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving complaints' });
  }
});

module.exports = router;
