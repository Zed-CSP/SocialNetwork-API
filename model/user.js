const {Schema, model} = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: [true, 'Username already exists'],
            // required: [true, 'Username is required'],
            trim: true
        },
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email is required'],
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid e-mail address']
     
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
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
module.exports = User;