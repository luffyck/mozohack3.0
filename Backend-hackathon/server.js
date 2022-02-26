const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express()

app.use(bodyParser.json())

app.use(cors());

require('./data');


const Datas = mongoose.model("data");

const mongodburi = "mongodb+srv://salmanstark:pamelia@cluster0.as7g7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongodburi, {
    useNewUrlParser : true,
})

mongoose.connection.on("connected", () => {
    console.log("Database Connected");
})

mongoose.connection.on("error", (err) => {
    console.log("Some Stupid Error", err);
})

app.get("/", (req, res) => {
    Datas.find({})
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log(err);
    })
})


app.post("/post-data", (req, res) => {
    const qdata = new Datas({
        question : req.body.question,
        a : req.body.a,
        b : req.body.b,
        c : req.body.c,
        d : req.body.d,
        explanation : req.body.explanation
    })
    qdata.save()
    .then(data => {
        console.log(data)
        res.send("Posted");
    }).catch(err => {
        console.log(err);
    }) 
})

app.post('/delete', (req, res) => {
    Datas.findByIdAndDelete(req.body.id)
    .then(data => {
        console.log(data)
        res.send("deleted")
    })
    .catch(err => {
        console.log(err);
    })
})



app.listen(3004, () => {
    console.log("Server is listening");
})