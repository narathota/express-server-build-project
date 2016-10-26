var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var userData = [{"appuser": "DEESH Na"}];

app.get('/userData', function (req, res) {
    console.log("GET From SERVER");
    res.send(userData);
});

var headerData = [{"text": "USER MODE"}, {"text": "SETTINGS"}, {"text": "LOGOUT"}];

app.get('/headerData', function (req, res) {
    console.log("GET From SERVER");
    res.send(headerData);
});

var notifications = [{"text": "25"}, {"text": "180"}, {"text": "2"}, {"text": "3"}, {"text": "DEE"}];

app.get('/notifications', function (req, res) {
    console.log("GET From SERVER");
    res.send(notifications);
});

var warnings = [
    {"text": "Turn off the microwave oven in 30 minutes"},
    {"text": "3 devices in the Living Room are not working"},
    {"text": "Mostly Sunny"}];

app.get('/warnings', function (req, res) {
    console.log("GET From SERVER");
    res.send(warnings);
});

var modeData = [{"text": "BABY"}, {"text": "LOVE"}, {"text": "HAPPY"}];

app.get('/modedata', function (req, res) {
    console.log("GET From SERVER");
    res.send(modeData);
});

var presetData = [{"text": "WEEKDAY"}, {"text": "WEEKEND"}];

app.get('/presetdata', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetData);
});

var modalDataInfo = [
    {"text": "Temp"},
    {"text": "Units"},
    {"text": "Peeps"},
    {"text": "Devices"},
    {"text": "Other 1"},
    {"text": "Other 2"},
    {"text": "Other 3"},
    {"text": "Other 4"},
    {"text": "Other 5"},
    {"text": "Other 6"}
    ];

app.get('/modaldatainfo', function (req, res) {
    console.log("GET From SERVER");
    res.send(modalDataInfo);
});

var rememberedRoomInfo = [
    {"text": "Remembered 1"},
    {"text": "Remembered 2"},
    {"text": "Remembered 3"},
    {"text": "Remembered 4"}
    ];

app.get('/rememberedroominfo', function (req, res) {
    console.log("GET From SERVER");
    res.send(rememberedRoomInfo);
});

var roomName = [{"text": "My Room"}];

app.get('/roomname', function (req, res) {
    console.log("GET From SERVER");
    res.send(roomName);
});


app.listen(6060);
