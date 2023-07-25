const User = require('../model/User');
const Thought = require('../model/Thoughts');


// get all users
const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find({})
        .populate({
            path: 'thoughts',
        })
        .populate({
            path: 'friends',
        })
        .select('-__v')
        .sort({_id: -1});
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

// get one user by id
const getUserById = async (req, res) => {
    try {
        const userData = await User.findOne({_id: req.params.id})
        .populate({
            path: 'thoughts',
        })
        .populate({
            path: 'friends',
        })
        .select('-__v')
        .sort({_id: -1});
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

// create user
const createUser = async (req, res) => {
    console.log(req.body); // Add this line
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }    
};

// update user by id
const updateUser = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

// delete user by id
const deleteUser = async (req, res) => {
    try {
        const userData = await User.findOneAndDelete({_id: req.params.id});
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

// add friend
const addFriend = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        );
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

// remove friend
const removeFriend = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        );
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
};