const purchaseModel = require('../models/purchase.model');
const usersController = require("./usersController");


class PurchaseController {

  static async get(req, res) {
    purchaseModel.find()
    .then(purchases => res.json(purchases))
    .catch(err => res.status(400).json('Error: ' + err));
  }

  static async addPost(req, res) {
    const purchaseName = req.body.purchaseName;
    const id = req.body.id;
    const date = Date.parse(req.body.date);
    const price = Number(req.body.price);
    const buyer = req.body.buyer;
    const consumers = req.body.consumers;
    let individualPrice = req.body.price / consumers.length;
    await usersController.updateOwed(id, -req.body.price);
    for (var i = 0; i < consumers.length; i++) {
      await usersController.updateOwed(consumers[i], individualPrice);
    }
  
    
  
  
    const newPurchase = new purchaseModel({purchaseName, id, date, price, buyer});
  
    newPurchase.save()
      .then(() => res.json('Purchase Added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }

}

module.exports = PurchaseController
