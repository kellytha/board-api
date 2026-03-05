const express = require('express');
const userController = require('./user.controller');
const authMiddleware = require('../auth/auth.middleware');

const router = express.Router();

// Get your own profile
router.get('/me', authMiddleware, userController.getMe.bind(userController));

// Admin or workspace manager can list all users
router.get('/', authMiddleware, userController.getAllUsers.bind(userController));

// Get one user
router.get('/:id', authMiddleware, userController.getUser.bind(userController));

// Update
router.put('/:id', authMiddleware, userController.updateUser.bind(userController));

// Delete
router.delete('/:id', authMiddleware, userController.deleteUser.bind(userController));

module.exports = router;