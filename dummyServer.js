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

var serverData = {
    "data": [
        {
            "_id": "AR0001",
            "area_names": "Area 1",
            "area_img_id": "ARI0001",
            "area_img": "area.jpg",
            "md5_sum": "string",
            "personal_room": 0,
            "personal_name": "My Room",
            "floor_id": "FL0001",
            "floor_name": "1st",
            "floor_no": 0,
            "summarystats": [
                {
                    "_id": "SS0001",
                    "role_action_id": "RA0001",
                    "selected": 1,
                    "stat_name": "area 1 - 1 - Temperature",
                    "icon": "area 1 - 1 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0002",
                    "role_action_id": "RA0002",
                    "selected": 1,
                    "stat_name": "area 1 - 2 - Blah",
                    "icon": "area 1 - 2 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0003",
                    "role_action_id": "RA0003",
                    "selected": 1,
                    "stat_name": "area 1 - 3 - Blah blah",
                    "icon": "area 1 - 3 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0001",
                    "role_action_id": "RA0001",
                    "selected": 1,
                    "stat_name": "area 1 - 4 - Blah blah blah",
                    "icon": "area 1 - 4 - temp.png",
                    "value": "20"
                }
            ]
        }
        , {
            "_id": "AR0002",
            "area_names": "Area 2",
            "area_img_id": "ARI0002",
            "area_img": "area.jpg",
            "md5_sum": "string",
            "personal_room": 0,
            "personal_name": "My Room",
            "floor_id": "FL0001",
            "floor_name": "1st",
            "floor_no": 0,
            "summarystats": [
                {
                    "_id": "SS0021",
                    "role_action_id": "RA0001",
                    "selected": 1,
                    "stat_name": "area 2 - 1 - Temperature",
                    "icon": "area 2 - 1 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0022",
                    "role_action_id": "RA0002",
                    "selected": 1,
                    "stat_name": "area 2 - 2 - Blah",
                    "icon": "area 2 - 2 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0023",
                    "role_action_id": "RA0003",
                    "selected": 1,
                    "stat_name": "area 2 - 3 - Blah blah",
                    "icon": "area 2 - 3 - temp.png",
                    "value": "20"
                },
                {
                    "_id": "SS0024",
                    "role_action_id": "RA0001",
                    "selected": 1,
                    "stat_name": "area 2 - 4 - Blah blah blah",
                    "icon": "area 2 - 4 - temp.png",
                    "value": "20"
                }
            ]
        }
    ]
};

app.get('/users/U0001/areas/AR0001/summarystats/data', function (req, res) {
    console.log("GET From SERVER");
    res.send(serverData);
});


app.listen(7070);
