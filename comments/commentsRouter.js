const router = require('express').Router();

const db = require('../data/helpers/commentsHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.post('/', (req, res) => {
  if(!req.body.comment || !req.body.post_id) {
    res.status(400).json({message: 'Please provide the comment text content and a valid post ID'});
  } else {
    const comment = {
      ...req.body,
      user_id: req.decoded.subject
    }
    db.addComment(comment)
      .then(newComment => res.status(200).json(newComment))
      .catch(err => res.status(500).json({message: 'Could not create a new comment at this time', err}));
  }
})

module.exports = router;