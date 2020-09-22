const router = require('express').Router();
let Purchase = require('../models/purchase.model');
const purchaseController = require("./purchaseController");

router.route('/').get(purchaseController.get);

router.route('/add').post(purchaseController.addPost);

module.exports = router;
