const router = require('express').Router();

const db = require('../data/helpers/bubblesHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/', (req, res) => {
  db.get(req.decoded.school_id)
    .then(bubbles => res.status(200).json(bubbles))
    .catch(err => res.status(500).json({message: 'Could not retreive list of bubbles at this time'}))
})

router.post('/join/:id', (req, res) => {
  db.joinBubble({student_id: req.decoded.subject, bubble_id: req.params.id})
    .then(id => res.status(200).json({message: 'Successfully Joined bubble'}))
    .catch(err => res.status(500).json({message: 'Could not join bubble at this time', err}));
})

// router.delete('/leave/:id', (req, res) => {
//   db.leaveBubble(Number(req.params.id), req.decoded.subject)
//     .then(count => {
//       if(count > 0) {
        
//       }
//     })
// })

module.exports = router;