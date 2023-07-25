const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Thought is required'],
            minlength: [1, 'Thought must be at least 1 character long'],
            maxlength: [280, 'Thought must be less than 280 characters long']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: [true, 'Username is required']
        },
        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;
