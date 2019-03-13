const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('../data/helpers/authHelpers');
const generateToken = require('../config/tokenServices');

router.post('/login', (req, res) => {
  if(req.body.username && req.body.password) {
    db.findBy({username: req.body.username})
      .then(user => {
        if(user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({message: `Successfully logged in, welcome ${user.name}!`, token})
        } else {
          res.status(401).json({message: 'Invalid credentials'});
        }
      })
      .catch(err => res.status(500).json({message: 'Unable to login at this time', err}));
  } else {
    res.status(400).json({message: 'Please provide a username and password'});
  }
});

router.post('/register', (req, res) => {
  if(!req.body.username || !req.body.password || !req.body.name || req.body.school_id === undefined) {
    res.status(400).json({message: 'Please provide your name, a username, password and a valid school ID'});
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    db.add(req.body)
      .then(id => res.status(201).json({message: 'Successfully signed up!'}))
      .catch(err => res.status(500).json({message: 'Could not register at this time', err}));
  }
})

module.exports = router;