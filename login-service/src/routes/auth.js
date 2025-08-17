const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [{ username: 'user1', password: 'password1' }];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;