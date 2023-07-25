const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../../controller/userController.js');

// /api/users

router.get('/', getAllUsers)
    
router.post('/', createUser);

// /api/users/:id

router.get('/:id', getUserById)
    
router.put('/:id',updateUser)

router.delete('/:id', deleteUser);

// /api/users/:userId/friends/:friendId

router.post('/:userId/friends/:friendId', addFriend)
    
router.delete('/:userID/friends//:friendId', removeFriend);

module.exports = router;
