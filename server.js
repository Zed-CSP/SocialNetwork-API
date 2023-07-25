// Headers:
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// constants
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;
// middleware
mongoose.connect('mongodb://localhost/socialNetworkDB')
    .then(() => console.log('SN_DB connected'))
    .catch(err => console.log(err));
app.use(routes);
app.use(express.urlencoded({ extended: true }));
// listener
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)); 