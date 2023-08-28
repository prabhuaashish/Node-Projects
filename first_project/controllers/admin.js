const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        // Render the 'shop' view/template with the provided data
        res.render('admin/products', {
            prods: products, // Passing the products data to the template
            pageTitle: 'Admin Products', // Page title
            path: '/admin/products', // Current path
        });
    });
}