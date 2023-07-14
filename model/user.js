const {schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new schema(
    {
        username: {
            type: String,
            unique: [true, 'Username already exists'],
            required: [true, 'Username is required'],
            trim: true
        },
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email is required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid e-mail address']
            // ^\w+: Start of the string, and matches one or more word characters (equivalent to [a-zA-Z0-9_]).
            // ([\.-]?\w+)*: Matches zero or more occurrences of either a dot . or a dash - followed immediately by a word character.
            // @: Matches the @ symbol.
            // \w+: Matches one or more word characters.
            // ([\.-]?\w+)*: Matches zero or more occurrences of either a dot . or a dash - followed immediately by a word character.
            // (\.\w{2,3})+: Matches a dot . followed by two to three word characters. The + at the end of this group is to allow for email domains like .co.uk.
            // $: End of the string.
        },
        friends: [
            {
                type: schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        thoughts: [
            {
                type: schema.Types.ObjectId,
                ref: 'Thought'
            }
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

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);
module.exports = model('User', UserSchema);