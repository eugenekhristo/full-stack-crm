const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

router.put('/login', controller.login);
router.put('/register', controller.register);

module.exports = router;