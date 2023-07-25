const mongoose = require('mongoose');
const mongodb = require('mongodb');

const Thought = require('../model/Thoughts'); // Update with the correct path
const Reaction = require('../model/Reaction'); // Update with the correct path
const User = require('../model/User'); // Update with the correct path
const generateEmail = require('./generators.js');
const generateUsername = require('./generators.js');
const generateThought = require('./generators.js');
const generateReaction = require('./generators.js');


mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [];
const thought = [];
const reactions = [];

// Create users
for (let i = 1; i <= 10; i++) {
    users.push({
        username: `user${i}`,
        email: `user${i}@example.com`,
    });
}

// Create thoughts
for (let i = 1; i <= 10; i++) {
    thoughts.push({
        thoughtText: `This is thought ${i}`,
        username: `user${i}`,
    });
}

// Create reactions
for (let i = 1; i <= 10; i++) {
    reactions.push({
        reaction_text: `This is reaction ${i}`,
        username: `user${i}`,
    });
}

const seedDB = async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.create(users);
    const createdThoughts = await Thought.create(Thought);
    const createdReactions = reactions.map(reaction => new Reaction(reaction)); // As Reaction model doesn't have a corresponding collection

    // Attach each reaction to a thought
    createdThoughts.forEach((thought, index) => {
        thought.reactions.push(createdReactions[index]);
    });

    // Save the updated thought
    await Promise.all(createdThoughts.map(Thought => Thought.save()));
};

seedDB().then(() => {
    process.exit(0);
});
