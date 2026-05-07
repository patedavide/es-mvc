// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
// Rotte
router.get('/', userController.home);
router.get('/users', userController.listUsers);
router.post('/users', userController.createUser);
router.post('/users/delete/:id', userController.deleteUser);
router.post('/users/buy/:id', userController.buyUser);
router.post('/users/sell/:id', userController.sellUser);
module.exports = router;