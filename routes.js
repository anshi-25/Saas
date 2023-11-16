const express = require('express');
const router = express.Router();
const { createCustomer, createCharge } = require('./stripeOperations');

// Route for creating a customer
router.post('/create-customer', async (req, res) => {
  const { email } = req.body;
  try {
    const customer = await createCustomer(email);
    res.json({ customer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for charging the customer
router.post('/create-charge', async (req, res) => {
  const { customerId, amount, description } = req.body;
  try {
    const charge = await createCharge(customerId, amount, description);
    res.json({ charge });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
