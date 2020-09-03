const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;
// mongoose.connect(MONGODB_URI);
//import the schema model
const Inquire = require('./commentsModel.js');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to mongoose. url parser - useNewUrlParser - new version
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfoliodb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.post('/submit', ({ body }, res) => {
    Inquire.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
        res.redirect('../index.html');
});

app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});