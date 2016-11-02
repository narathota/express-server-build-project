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

var userData = [{appuser: "DEESH Na"}];

app.get('/userData', function (req, res) {
    console.log("GET From SERVER");
    res.send(userData);
});

var headerData = [{text: "USER MODE"}, {text: "SETTINGS"}, {text: "LOGOUT"}];

app.get('/headerData', function (req, res) {
    console.log("GET From SERVER");
    res.send(headerData);
});

var notifications = [{text: "25"}, {text: "180"}, {text: "2"}, {text: "3"}];

app.get('/notifications', function (req, res) {
    console.log("GET From SERVER");
    res.send(notifications);
});

var warnings = [
    {text: "Turn off the microwave oven in 30 minutes"},
    {text: "3 devices in the Living Room are not working"},
    {text: "Mostly Sunny"}];

app.get('/warnings', function (req, res) {
    console.log("GET From SERVER");
    res.send(warnings);
});

var presetData = [{preset_name: "WEEKDAY"}, {preset_name: "WEEKEND"}];

app.get('/presetdata', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetData);
});

var modalDataInfo = [
    {text: "Temp"},
    {text: "Units"},
    {text: "Peeps"},
    {text: "Devices"},
    {text: "Other 1"},
    {text: "Other 2"},
    {text: "Other 3"},
    {text: "Other 4"},
    {text: "Other 5"},
    {text: "Other 6"}
];

app.get('/modaldatainfo', function (req, res) {
    console.log("GET From SERVER");
    res.send(modalDataInfo);
});

var rememberedRoomInfo = [
    {text: "Remembered 1"},
    {text: "Remembered 2"},
    {text: "Remembered 3"},
    {text: "Remembered 4"}
];

app.get('/rememberedroominfo', function (req, res) {
    console.log("GET From SERVER");
    res.send(rememberedRoomInfo);
});

var areas = [{
    _id: "AR0001",
    area_name: "Room01",
    area_type: "Room",
    img: [{area_img_id: "AR0001-AI0001", area_img: "Room01-01.jpeg"}, {
        area_img_id: "AR0001-AI0002",
        area_img: "Room01-02.jpeg"
    }, {area_img_id: "AR0001-AI0003", area_img: "Room01-03.jpeg"}],
    orientation: "Left",
    sequence: "01",
    user_area: [{user_id: "U0001", personal_room: 1, personal_name: "MyRoom"}, {
        user_id: "U0002",
        personal_room: 0,
        personal_name: "Brothers'sRoom"
    }],
    selected_area_img_id: "AR0001-AI0001"
}, {
    _id: "AR0002",
    area_name: "Room02",
    area_type: "Room",
    img: [{area_img_id: "AR0002-AI0001", area_img: "Room02-01.jpeg"}, {
        area_img_id: "AR0002-AI0002",
        area_img: "Room02-02.jpeg"
    }, {area_img_id: "AR0002-AI0003", area_img: "Room02-03.jpeg"}],
    orientation: "Left",
    sequence: "01",
    user_area: [{user_id: "U0001", personal_room: 0, personal_name: "BigBrother'sRoom"}, {
        user_id: "U0002",
        personal_room: 1,
        personal_name: "MyRoom"
    }],
    selected_area_img_id: "AR0001-AI0001"
}];

app.get('/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(areas);
});

var modes = [
    {mode_id: "M0001", mode_name: "happy", icon: "MI0001.png", mode_staus: 1},
    {mode_id: "M0002", mode_name: "sad", icon: "MI0002.png", mode_staus: 0}];

app.get('/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modes);
});

var summarystats = [
    {_id: "SS0001", role_action_id: "RA0001", stat_id: "ST0001.png", selected: 1},
    {_id: "SS0002", role_action_id: "RA0001", stat_id: "ST0001.png", selected: 1},
    {_id: "SS0003", role_action_id: "RA0001", stat_id: "ST0001.png", selected: 1},
    {_id: "SS0004", role_action_id: "RA0001", stat_id: "ST0001.png", selected: 1},
    {_id: "SS0005", role_action_id: "RA0001", stat_id: "ST0001.png", selected: 0}];

app.get('/summarystats', function (req, res) {
    console.log("GET From SERVER");
    res.send(summarystats);
});


var notificationModalListItems = [
    {text: "Notification all 1"},
    {text: "Notification all 2"},
    {text: "Notification all 3"},
    {text: "Notification all 4"},
    {text: "Notification all 5"},
    {text: "Notification all 6"}
];

app.get('/notificationModalListItems', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationModalListItems);
});

var warningModalListItems = [
    {text: "Warning all 1"},
    {text: "Warning all 2"},
    {text: "Warning all 3"},
    {text: "Warning all 4"},
    {text: "Warning all 5"},
    {text: "Warning all 6"}
];

app.get('/warningModalListItems', function (req, res) {
    console.log("GET From SERVER");
    res.send(warningModalListItems);
});

var allPresets = [
    {preset_id: "P0001", preset_name: "Morning"},
    {preset_id: "P0002", preset_name: "Afternoon"},
    {preset_id: "P0003", preset_name: "Evening"},
    {preset_id: "P0004", preset_name: "Night"}];

app.get('/users/1/preset', function (req, res) {
    console.log("GET From SERVER");
    res.send(allPresets);
});

var allModes = [
    {mode_id: "M0001", mode_name: "Mode Morning"},
    {mode_id: "M0002", mode_name: "Mode Afternoon"},
    {mode_id: "M0003", mode_name: "Mode Evening"},
    {mode_id: "M0004", mode_name: "Mode Night"}];

app.get('/users/1/mode', function (req, res) {
    console.log("GET From SERVER");
    res.send(allModes);
});

app.listen(6060);
