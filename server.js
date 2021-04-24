const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://",
    {useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => {console.log(error)});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require("./controllers/users-controller")(app);
require("./controllers/clubs-controller")(app);
require('./controllers/posts-controller')(app);

app.listen(process.env.PORT);