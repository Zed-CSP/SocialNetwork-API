module.exports = {
    db: {
        mongoURI: process.env.MONGODB_URI || 'mongodb://localhost/social-network-api'
    },
    port: process.env.PORT || 3006
};