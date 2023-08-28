// Import required modules
const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');
// Create a router instance from the Express framework
const router = express.Router();



// Handle GET request to '/add-product' route
router.get('/add-product', adminController.getAddProduct );

router.get('/products', adminController.getProducts );

// Handle POST request to '/add-product' route
router.post('/add-product', adminController.postAddProduct );

// Export the router object to be used by other modules
module.exports = router;
