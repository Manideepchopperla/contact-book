const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Validation helper
const validateContact = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Valid email is required';
  }
  
  const phoneRegex = /^\d{10}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = 'Phone must be 10 digits';
  }
  
  return errors;
};

// Get all contacts with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const totalContacts = await Contact.countDocuments();
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    res.json({
      contacts,
      currentPage: page,
      totalPages: Math.ceil(totalContacts / limit),
      totalContacts
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new contact
router.post('/', async (req, res) => {
  try {
    const errors = validateContact(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

// Delete contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

module.exports = router;