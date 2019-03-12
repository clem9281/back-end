const router = require('express').Router();

const db = require('../data/helpers/postsHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/', (req, res) => {
  db.getUserPosts(req.decoded.subject)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json({message: 'Could not retrieve your posts at this time', err}));
})

router.get('/school', (req, res) => {
  db.getSchoolsPosts(req.decoded.school_id)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json({message: 'Could not retrieve posts for school at this time', err}));
})

router.delete('/:id', (req, res) => {
  db.get(req.params.id)
    .then( post => {
      if(String(post.user_id) === req.params.id) {
        db.deletePost(req.params.id)
          .then(count => {
            if(count > 0) {
              res.status(204).end();
            } else {
              res.status(404).json({message: 'The post you tried to delete was not found'});
            }
          })
          .catch(err => res.status(500).json({message: 'Post could not be deleted at this time', err}));
      } else {
        res.status(401).json({message: 'The post you tried to delete does not belong to you'});
      }
    })
})

module.exports = router;