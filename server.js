// Headers:
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// constants
const app = express();
const PORT = process.env.PORT || 3001;
// middleware
mongoose.connect('mongodb://localhost/socialNetworkDB')
    .then(() => console.log('SN_DB connected'))
    .catch(err => console.log(err));
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// listener
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));