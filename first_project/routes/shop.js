// Import required modules
const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');

// Create a router instance from the Express framework
const router = express.Router();

// Handle GET request to the root route ('/')
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);
// Export the router to make it available to other modules
module.exports = router;
