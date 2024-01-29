const express = require('express');
const {getAllusers,getAllcontacts} = require('../controllers/admin-controller');
const router = express.Router();

router.route('/users').get(getAllusers);
router.route('/contact').get(getAllcontacts);

module.exports = router;