// email generator
const { faker } = require('@faker-js/faker')

const generateEmail = () => {
    return faker.internet.email();
}

const generateUsername = () => {
    return faker.internet.userName();
}

const generateThought = () => {
    return faker.lorem.words(Math.round(Math.random() * 20) + 1);
}

const generateReaction = () => {
    return faker.lorem.words(Math.round(Math.random() * 20) + 1);
}

module.exports = generateEmail, generateUsername, generateThought, generateReaction;