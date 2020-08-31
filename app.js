const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");


const PORT = process.env.PORT || 8080;

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const databaseUrl = "portfoliodb";
const collections = ["contacts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error=> {
    console.log("database ERROR: ", error);
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.post('/post-feedback', (req,res) => {
    console.log(req.body);
    db.contacts.insert(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            console.log("Thank You!");
            res.send(data);
            // res.send('Thank you for your comment!');
        }
    });
});

app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});