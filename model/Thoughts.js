const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
const { Schema, model } = mongoose;


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Thought is required'],
            minlength: [1, 'Thought must be at least 1 character long'],
            maxlength: [280, 'Thought must be less than 280 characters long']
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
        id: false,
        timestamps: true
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = mongoose.model('Thought', thoughtSchema);