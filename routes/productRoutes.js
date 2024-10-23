// routes/productRoutes.js
const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getProducts)              // Public: Get all products
    .post(protect, admin, createProduct);  // Admin: Create product

router.route('/:id')
    .get(getProductById)           // Public: Get a single product
    .put(protect, admin, updateProduct)    // Admin: Update product
    .delete(protect, admin, deleteProduct);  // Admin: Delete product

module.exports = router;