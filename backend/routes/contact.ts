const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController.ts');

router.post('/send', emailController.sendEmail);

module.exports = router;
