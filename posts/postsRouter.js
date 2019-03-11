const router = require('express').Router();

const db = require('../data/helpers/postsHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/', (req, res) => {
  db.getUserPosts(req.decoded.subject)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json({message: 'Could not retrieve your posts at this time', err}));
})

module.exports = router;