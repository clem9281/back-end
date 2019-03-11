const router = require('express').Router();

const db = require('../data/helpers/schoolsHelpers');

router.get('/', (req, res) => {
  db.get()
    .then(schools => res.status(200).json(schools))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of schools at this time', err}));
})

module.exports = router;