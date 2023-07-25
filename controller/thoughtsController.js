const {Thoughts, User} = require('../model');

const getAllThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.find({})
        .populate({
            path: 'reactions',
        })
        .select('-__v')
        .sort({_id: -1});
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const getThoughtsById = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.findOne({_id: req.params.id})
        .populate({
            path: 'reactions',
        })
        .select('-__v')
        .sort({_id: -1});
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const createThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.create(req.body);
        const userData = await User.findOneAndUpdate(
            {_id: req.body.userId},
            {$push: {thoughts: thoughtsData._id}},
            {new: true}
        );
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const updateThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const deleteThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.findOneAndDelete({_id: req.params.id});
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const addReaction = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtsId},
            {$push: {reactions: req.body}},
            {new: true}
        );
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const removeReaction = async (req, res) => {
    try {
        const thoughtsData = await Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtsId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {new: true}
        );
        res.json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

module.exports = {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    removeReaction
}
