const stripe = require('stripe')('sk_test_51OCHooSGoOOsD2q7FfExI1d4GW1RR4GHBobDYygK34IS7cjEtozVpBOXCONhx7R55SmPty10xBHRYqxLts5IQMxa00IOCrDxYX');

// Create a customer
const createCustomer = async (email) => {
  try {
    const customer = await stripe.customers.create({
      email: email,
    });
    return customer;
  } catch (err) {
    console.error('Error creating customer:', err);
    throw err;
  }
};

// Charge the customer
const createCharge = async (customerId, amount, description) => {
  try {
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      customer: customerId,
      description: description,
    });
    return charge;
  } catch (err) {
    console.error('Error creating charge:', err);
    throw err;
  }
};

module.exports = {
  createCustomer,
  createCharge,
};
