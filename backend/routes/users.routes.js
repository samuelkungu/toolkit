const express = require('express');
const router = express.Router();
const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/users.controller');


router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
router.get('/', getUsers);

module.exports = router;