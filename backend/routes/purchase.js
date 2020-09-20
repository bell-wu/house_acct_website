const router = require('express').Router();
let Purchase = require('../models/purchase.model');
const purchaseController = require("./purchaseController");

// router.route('/').get((req, res) => {
//   Purchase.find()
//     .then(purchases => res.json(purchases))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/').get(purchaseController.get);

// router.route('/add').post((req, res) => {
//   const purchaseName = req.body.purchaseName;
//   const date = Date.parse(req.body.date);
//   const price = Number(req.body.price);
//   const buyer = req.body.buyer;
//   const consumers = req.body.consumers;
//   let individualPrice = req.body.price / consumers.length;

  


//   const newPurchase = new Purchase({purchaseName, date, price, buyer});

//   newPurchase.save()
//     .then(() => res.json('Purchase Added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post(purchaseController.addPost);

module.exports = router;
