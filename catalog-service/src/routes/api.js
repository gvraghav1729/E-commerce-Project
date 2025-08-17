const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const products = [
    { id: '1', name: 'Laptop', price: 83000, stock: 10 },
    { id: '2', name: 'Phone', price: 72000, stock: 20 },
    { id: '3', name: 'Earphones', price: 7000, stock: 30 },
    { id: '4', name: 'Powerbank', price: 2500, stock: 5 },
];

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

router.get('/products', authenticateToken, (req, res) => {
    res.json(products);
});

router.post('/cart', authenticateToken, (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product || product.stock < quantity) {
        return res.status(400).json({ error: 'Product unavailable' });
    }
    res.json({ message: 'Added to cart', productId, quantity });
});

module.exports = router;