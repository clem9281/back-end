const router = require('express').Router();

const db = require('../data/helpers/usersHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/me', (req, res) => {
  db.get(req.decoded.subject)
    .then(userInfo => res.status(200).json(userInfo))
    .catch(err => res.status(500).json({message: 'Could not retrieve user info at this time'}));
})

module.exports = router;