[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# socialNetwork-API
Social Network noSQL database API testing

  
  ## Description
  This application is the backend of a social network API. This diplays Utilization Of a noSQL Dataabase. The utility of this database is displayed through a Social media application where users can share their thoughts, comment or react on others' thoughts, and create a friend list. 
  
  Skills This repo displays: utilizing MongoDB and Mongoose to create schemas, models and functional interaction with a MongoDB database. 
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Demo](#demo)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
   1. [Clone](https://github.com/Zed-CSP/socialNetwork-API.git) the repository to your computer. 
   2. Type `npm i` in the command line to install.
   3. Create a `.env` file in the repo's root directory Specifying the port to be used (example: 3001): 
    `PORT=[the port you wish to use to access the server]`
   4. install Postman [here](https://www.postman.com/).
  
  ## Usage
  * Navigate into the root folder of the repository and enter `node server` to start the server.
  * Open and use your API Platform (e.g., Postman) to GET, CREATE, UPDATE, and DELETE users, friends, thoughts, and reactions. For instructions related to using Postman visit their [Learning Center](https://learning.postman.com/docs/introduction/overview/)
  * The routes are:
    * `/apiRoutes/users`
        * `GET` all users
        * `POST` to create a user
    * `/apiRoutes/users/:userId`
        * `GET` a user by id
        * `PUT` to update a user by id
        * `DELETE`a user and associated friends by id
    * `/apiRoutes/users/:userId/friends`
        * `POST` to add a friend to a user's friend list
        * `DELETE` to delete a friend from a user's friend list
    * `/apiRoutes/thoughts`
        * `GET` all thoughts
        * `POST` to create a new thought
    * `/apiRoutes/thoughts/:thoughtId`
        * `GET` a single thought by id
        * `PUT` to update a thought by id
        * `DELETE`a thought and its associated reactions by id
    * `/apiRoutes/thoughts/:thoughtId/reactions`
        * `POST` to add a reaction by the thoughtId
        * `DELETE` to delete a reaction from a thought by id
  ---
   
  This application uses the following:
  * JavaScript
  * MongoDB
  * Mongoose
  * Node.js
  * Dotenv
  * Express
  
  ## Demo

*WIP
  
  ## Tests
  You may test the API routes using an API Platform such as Postman.
  
  ## License
  This project is licensed under the MIT License - see Badge link for details.
  
  ## Questions
  If you have any questions or issues with the repo, please reach out to "[Zed-CSP]("https://github.com/Zed-CSP")" or create an issue in the "["repo"](https://github.com/Zed-CSP/socialNetwork-API)".
