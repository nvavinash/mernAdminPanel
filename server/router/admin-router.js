const express = require('express');
const {usersUpdateById,getAllusers,getUserById,deleteUserById,deleteMessageById,getAllcontacts} = require('../controllers/admin-controller');
const router = express.Router();
const authMiddleware =require("../middlewares/auth-middleware");

router.route('/users').get(authMiddleware,getAllusers);
router.route('/contact').get(authMiddleware,getAllcontacts);
router.route('/users/delete/:id').delete(authMiddleware,deleteUserById);
router.route('/users/:id').get(authMiddleware,getUserById);
router.route('/users/update/:id').patch(authMiddleware,usersUpdateById);
router.route('/contact/delete/:id').delete(authMiddleware,deleteMessageById);
module.exports = router;