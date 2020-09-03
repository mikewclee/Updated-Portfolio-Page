
//create mongoose database

const mongoose = require("mongoose");

const InquireSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    comment: {
        type: String,
        trim: true,
    },

    creationDate: {
        type: Date,
        default: Date.now
    }

});

//This creates our model from the above schema, using
//mongoose model method
const Inquire = mongoose.model("Inquire", InquireSchema);

//export the Inquire model
module.exports = Inquire;