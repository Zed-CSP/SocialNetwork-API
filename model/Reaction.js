const { Schema, Types, model } = require('mongoose'); // import the necessary dependencies
const format_date = require('../utils/dateFormat'); // import the dateFormat function

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reaction_text: {
            type: String,
            required: true,
            max_length: 240,
        },
        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        date_created: {
            type: Date,
            default: Date.now,
            get: (timestamp) => format_date(timestamp),
            allowNull: false,
        },
    },
    {
            toJSON: {
                virtuals: true,
                getters: true,
            },
            id: false,
    },
);

module.exports = reactionSchema;