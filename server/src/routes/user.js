const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserController');

//router POST user/create
router.post('/create', UserControllers.addUser);

//router GET user/get
router.get('/get', UserControllers.getUser);

module.exports = router;
