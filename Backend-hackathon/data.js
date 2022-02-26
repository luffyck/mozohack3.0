const mongoose = require("mongoose");

const Data = new mongoose.Schema({
    question : String,
    a : String,
    b : String,
    c : String,
    d : String,
    explanation : String
})

mongoose.model("data", Data);