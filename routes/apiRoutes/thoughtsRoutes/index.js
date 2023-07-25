const router = require('express').Router();

const {
    getAllThoughts,
    createThoughts,
    getThoughtsById,
    updateThoughts,
    deleteThoughts,
    addReaction,
    removeReaction
} = require('../../../controller/thoughtsController.js');

// /api/thoughts

router.get('/', getAllThoughts)
    
router.post('/', createThoughts);
    
// /api/thoughts/:id

router.get('/:id', getThoughtsById)
router.put('/:id', updateThoughts)
router.delete('/:id', deleteThoughts);

// /api/thoughts/:thoughtId/reactions

router.post('/:thoughtId/reactions', addReaction); //updated

// /api/thoughts/:thoughtId/reactions/:reactionId

router.delete('/:thoughtId/reactions/:reactionId', removeReaction); //updated

module.exports = router;
