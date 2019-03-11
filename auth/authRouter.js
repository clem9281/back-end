const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('../data/helpers/authHelpers');

router.post('/login', (req, res) => {
  if(req.body.username && req.body.password) {
    db.findBy({username: req.body.username})
      .then(user => {
        if(user && bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json({message: `Successfully logged in, welcome ${user.name}!`})
        } else {
          res.status(401).json({message: 'Invalid credentials'});
        }
      })
      .catch(err => res.status(500).json({message: 'Unable to login at this time', err}));
  } else {
    res.status(400).json({message: 'Please provide a username and password'});
  }
})

module.exports = router;