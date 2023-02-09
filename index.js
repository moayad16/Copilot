const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Import Routes
const databaseRoute = require('./routes/connectDatabase');
const createUserRoute = require('./routes/createUser');
const deleteUserRoute = require('./routes/deleteUser');
const loginRoute = require('./routes/login');


// Route Middlewares


app.use('/createUser', createUserRoute);
app.use('/deleteUser', deleteUserRoute)
app.use('/login', loginRoute)


// Connect to DB
databaseRoute()



app.listen(8080, () => console.log('Server started on port 8080'));