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

router.route('/')
    .get(getAllThoughts)
    .post(createThoughts);
    
// /api/thoughts/:id

router.route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

// /api/thoughts/:thoughtsId/reactions

router.route('/:thoughtsId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtsId/reactions/:reactionId

router.route('/:thoughtsId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;