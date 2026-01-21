const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

//TODO
router.route('/hello').get(authMiddleware, hello);
router.route('/logon').post(logon);

module.exports = router;