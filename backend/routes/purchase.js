const router = require('express').Router();
let Purchase = require('../models/purchase.model');

router.route('/').get((req, res) => {
  Purchase.find()
    .then(purchases => res.json(purchases))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const purchaseName = req.body.purchaseName;
  const date = Date.parse(req.body.date);
  const price = Number(req.body.price);
  const buyer = req.body.buyer;

  const newPurchase = new Purchase({purchaseName, date, price, buyer});

  newPurchase.save()
    .then(() => res.json('Purchase Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
