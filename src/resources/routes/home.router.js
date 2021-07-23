const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');

router.get('', homeController.index);

router.post('/store', homeController.store);

module.exports = router;
