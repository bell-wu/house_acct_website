const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const owed = Number(req.body.owed);
  const id = Number(req.body.id);

  const newUser = new User({name, id, owed});

  newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
      user.owed = Number(req.body.owed);
      user.id = Number(req.body.id);

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + errr));
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


module.exports = router;
