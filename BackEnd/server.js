const express = require("express");
const app = express();
const port = 4000; //change port from 3000 to 4000
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//mongoose connection
const Connection =
    "mongodb+srv://Michael_DB_Manager:Lotrfan1@cluster0.8d0l5.mongodb.net/Albums?retryWrites=true&w=majority";
mongoose.connect(Connection, { useNewUrlParser: true });

const Schema = mongoose.Schema;

//album schema sets up the look of DB
var albumSchema = new Schema({
    name: String,
    sales: String,
    cover: String,
    artist: String
});

var AlbumModel = mongoose.model("album", albumSchema);

app.get("/api/albums", (req, res) => {

    //sends all records found in DB
    AlbumModel.find((err, data) => {
        res.json(data);
    });
});

// listen for delete method
app.delete("/api/albums/:id", (req, res) => {
    console.log("Delete Album: " + req.params.id);

    AlbumModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    });
});

//take id and return data with associated album
app.get("/api/albums/:id", (req, res) => {
    console.log(req.params.id);

    AlbumModel.findById(req.params.id, (err, data) => {
        res.json(data);
    });
});

//method for editing record
app.put("/api/albums/:id", (req, res) => {
    console.log("Update album: " + req.params.id);
    //passes up object containing new album data
    console.log(req.body);

    //interacts with the DB
    AlbumModel.findByIdAndUpdate(req.params.id, req.body, { new: true },//new:true used to create a record
        (err, data) => {
            res.send(data);
        })
});

app.post("/api/albums", (req, res) => {
    console.log("Album Received");
    console.log(req.body.name);
    console.log(req.body.sales);
    console.log(req.body.cover);
    console.log(req.body.artist);

    AlbumModel.create({
        name: req.body.name,
        sales: req.body.sales,
        cover: req.body.cover,
        artist: req.body.artist
    });

    res.send("Item Added"); // line is nedded to stop the create page from posting twice to database
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
