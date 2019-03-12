const router = require('express').Router();

const db = require('../data/helpers/bubblesHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/', (req, res) => {
  db.get(req.decoded.school_id)
    .then(bubbles => res.status(200).json(bubbles))
    .catch(err => res.status(500).json({message: 'Could not retreive list of bubbles at this time'}))
})

module.exports = router;