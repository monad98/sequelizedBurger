const express = require('express');
const router = express.Router();
const ctrl = require('../controller')

router.get('/', ctrl.index);

router.post('/burger', ctrl.createBurger);
router.post('/customer', ctrl.createCustomer);

router.put('/eat/:burger', ctrl.update);
module.exports = router;
