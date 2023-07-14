const connection = require('../config/config.js');
const { User, Thought, Reaction } = require('../model');
const { generateEmail, generateUsername, generateThought, generateReaction } = require('./generators.js');

connection.once('open', async () => {
    //drop database if exists
    await Thought.deleteMany({});
    await User.deleteMany({});
    console.log('Database dropped');
    console.log('Seeding database');
    //create users variable
    const user = [];
    //create thoughts variable
    const thoughts = [];
    //create reactions variable
    const reactions = [];
    //create users
    for (let i = 0; i < 10; i++) {
        const newUser = await User.create({
            username: generateUsername(),
            email: generateEmail(),
        });
        user.push(newUser);
    }
    //create thoughts
    for (let i = 0; i < 10; i++) {
        const newThought = await Thought.create({
            thoughtText: generateThought(),
            username: user[Math.floor(Math.random() * user.length)].username
        });
        thoughts.push(newThought);
    }
    //create reactions
    for (let i = 0; i < 10; i++) {
        const newReaction = await Reaction.create({
            reactionBody: generateReaction(),
            username: user[Math.floor(Math.random() * user.length)].username
        });
        reactions.push(newReaction);
    }
    //add reactions to thoughts
    for (let i = 0; i < reactions.length; i++) {
        const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
        randomThought.reactions.push(reactions[i]);
        await randomThought.save();
    }
    //add thoughts to users
    for (let i = 0; i < thoughts.length; i++) {
        const randomUser = user[Math.floor(Math.random() * user.length)];
        randomUser.thoughts.push(thoughts[i]);
        await randomUser.save();
    }
    //add friends to users
    for (let i = 0; i < user.length; i++) {
        const randomUser = user[Math.floor(Math.random() * user.length)];
        user[i].friends.push(randomUser);
        await user[i].save();
    }
    console.log('Database seeded');
    process.exit(0);
});