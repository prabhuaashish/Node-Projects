const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        // Render the 'shop' view/template with the provided data
        res.render('shop/product-list', {
            prods: products, // Passing the products data to the template
            pageTitle: 'All Products', // Page title
            path: '/products', // Current path
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        // Render the 'shop' view/template with the provided data
        res.render('shop/index', {
            prods: products, // Passing the products data to the template
            pageTitle: 'Shop', // Page title
            path: '/', // Current path
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}