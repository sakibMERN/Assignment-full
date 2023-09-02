const express = require('express');
const { deleteUser } = require('../controllers/user');

const router = express.Router();


// Delete user || Delete
router.delete("/delete-user", deleteUser);

module.exports = router;