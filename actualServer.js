/**
 * Created by Yudeesha Lakshan on 1/27/2017.
 */
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

// Areas
var allAreasForUsers = {
    "data": [{
        "_id": "AR0001",
        "area_name": "Area 1",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe163",
            "area_img_id": "AR0001-AI0001",
            "area_img": "32a2a398-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe164",
            "area_img_id": "AR0001-AI0002",
            "area_img": "32a2a62c-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c4dfdfdsf9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe167",
            "area_img_id": "AR0001-AI0003",
            "area_img": "32a2a74e-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7edsfdsfdsfb9c4c2c986d272dc0b1d24e417e"
        }],
        "user_area": [{
            "_id": "587debb9zxzc5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 1,
            "personal_name": "My Room"
        }, {
            "_id": "587debb9czzx5116107e0afe163",
            "user_id": "U0002",
            "personal_room": 0,
            "personal_name": "Brothers's Room"
        }],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}],
        "area_type_info": [{"_id": "AT0001", "area_type": "Bed Room"}]
    }, {
        "_id": "AR0002",
        "area_name": "Area 2",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe169",
            "area_img_id": "AR0002-AI0001",
            "area_img": "32a2a82a-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe165",
            "area_img_id": "AR0002-AI0002",
            "area_img": "32a2a8fc-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2cxcvcxv2dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe170",
            "area_img_id": "AR0002-AI0003",
            "area_img": "32a2ad16-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f715xzcxzcxz2c986d272dc0b1d24e417e"
        }, {"y_coordinate": 0, "x_coordinate": "1", "area_img": "rrrrr.png", "area_img_id": "AR0002-AI0004"}],
        "user_area": [{
            "_id": "587debbzx5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 0,
            "personal_name": "Big Brother's Room"
        }, {"_id": "587debb9czx16107e0afe163", "user_id": "U0002", "personal_room": 1, "personal_name": "My Room"}],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}],
        "area_type_info": [{"_id": "AT0001", "area_type": "Bed Room"}]
    }]
};

app.get('/users/U0001/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(allAreasForUsers);
});

var areaInfoForAreaID = {
    "data": [{
        "_id": "AR0001",
        "area_name": "Area 1",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe163",
            "area_img_id": "AR0001-AI0001",
            "area_img": "32a2a398-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe164",
            "area_img_id": "AR0001-AI0002",
            "area_img": "32a2a62c-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c4dfdfdsf9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe167",
            "area_img_id": "AR0001-AI0003",
            "area_img": "32a2a74e-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7edsfdsfdsfb9c4c2c986d272dc0b1d24e417e"
        }],
        "user_area": [{
            "_id": "587debb9zxzc5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 1,
            "personal_name": "My Room"
        }, {
            "_id": "587debb9czzx5116107e0afe163",
            "user_id": "U0002",
            "personal_room": 0,
            "personal_name": "Brothers's Room"
        }],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}],
        "area_type_info": [{"_id": "AT0001", "area_type": "Bed Room"}]
    }]
};

app.get('/areas/AR0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(areaInfoForAreaID);
});

var areaMetaServer = {
    "data": [{
        "area_name": "Area 3",
        "area_type": [{"_id": "AT0001", "area_type": "Bed Room"}, {
            "_id": "AT0002",
            "area_type": "Kitchen"
        }, {"_id": "AT0003", "area_type": "Dining Room"}, {"_id": "AT0004", "area_type": "Living Room"}],
        "floor_list": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}, {
            "_id": "FL0002",
            "floor_name": "Peter Room",
            "floor_no": 2
        }, {"_id": "FL0003", "floor_name": "Anna Room", "floor_no": 3}, {
            "_id": "FL0004",
            "floor_name": "Sandra Room",
            "floor_no": 4
        }, {"_id": "FL0005", "floor_name": "Ben Room", "floor_no": 5}, {
            "_id": "FL0006",
            "floor_name": "Harvey Room",
            "floor_no": 6
        }, {"_id": "FL0007", "floor_name": "Michelle Room", "floor_no": 7}, {
            "_id": "FL0008",
            "floor_name": "Karen Room",
            "floor_no": 8
        }, {"_id": "FL0009", "floor_name": "Cathy Room", "floor_no": 9}, {
            "_id": "FL00010",
            "floor_name": "Natalie Room",
            "floor_no": 10
        }, {"_id": "FL00011", "floor_name": "Sidney Room", "floor_no": 11}, {
            "_id": "FL00012",
            "floor_name": "Nicole Room",
            "floor_no": 12
        }, {"_id": "FL00013", "floor_name": "Ben Room", "floor_no": 13}, {
            "_id": "FL00014",
            "floor_name": "Melinda Room",
            "floor_no": 14
        }, {"_id": "FL00015", "floor_name": "Curtis Room", "floor_no": 15}, {
            "_id": "FL00016",
            "floor_name": "Luis Room",
            "floor_no": 16
        }, {"_id": "FL00017", "floor_name": "Susan Room", "floor_no": 17}, {
            "_id": "FL00018",
            "floor_name": "Clara Room",
            "floor_no": 18
        }, {"_id": "FL00019", "floor_name": "Ben Room", "floor_no": 19}, {
            "_id": "FL00020",
            "floor_name": "Justin Room",
            "floor_no": 20
        }, {"_id": "FL00021", "floor_name": "Jacob Room", "floor_no": 21}, {
            "_id": "FL00022",
            "floor_name": "Nicholas Room",
            "floor_no": 22
        }, {"_id": "FL00023", "floor_name": "Tamara Room", "floor_no": 23}, {
            "_id": "FL00024",
            "floor_name": "Dorothy Room",
            "floor_no": 24
        }, {"_id": "FL00025", "floor_name": "Helen Room", "floor_no": 25}, {
            "_id": "FL00026",
            "floor_name": "Ethel Room",
            "floor_no": 26
        }, {"_id": "FL00027", "floor_name": "Crystal Room", "floor_no": 27}, {
            "_id": "FL00028",
            "floor_name": "Tommy Room",
            "floor_no": 28
        }, {"_id": "FL00029", "floor_name": "Alexander Room", "floor_no": 29}, {
            "_id": "FL00030",
            "floor_name": "Vincent Room",
            "floor_no": 30
        }]
    }]
};

app.get('/metainfo/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(areaMetaServer);
});

var allAreas = {
    "data": [{
        "_id": "AR0001",
        "area_name": "Area 1",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe163",
            "area_img_id": "AR0001-AI0001",
            "area_img": "32a2a398-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe164",
            "area_img_id": "AR0001-AI0002",
            "area_img": "32a2a62c-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c4dfdfdsf9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe167",
            "area_img_id": "AR0001-AI0003",
            "area_img": "32a2a74e-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7edsfdsfdsfb9c4c2c986d272dc0b1d24e417e"
        }],
        "user_area": [{
            "_id": "587debb9zxzc5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 1,
            "personal_name": "My Room"
        }, {
            "_id": "587debb9czzx5116107e0afe163",
            "user_id": "U0002",
            "personal_room": 0,
            "personal_name": "Brothers's Room"
        }],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}],
        "area_type_info": [{"_id": "AT0001", "area_type": "Bed Room"}]
    }, {
        "_id": "AR0002",
        "area_name": "Area 2",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe169",
            "area_img_id": "AR0002-AI0001",
            "area_img": "32a2a82a-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe165",
            "area_img_id": "AR0002-AI0002",
            "area_img": "32a2a8fc-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2cxcvcxv2dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe170",
            "area_img_id": "AR0002-AI0003",
            "area_img": "32a2ad16-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f715xzcxzcxz2c986d272dc0b1d24e417e"
        }, {"y_coordinate": 0, "x_coordinate": "1", "area_img": "rrrrr.png", "area_img_id": "AR0002-AI0004"}],
        "user_area": [{
            "_id": "587debbzx5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 0,
            "personal_name": "Big Brother's Room"
        }, {"_id": "587debb9czx16107e0afe163", "user_id": "U0002", "personal_room": 1, "personal_name": "My Room"}],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}],
        "area_type_info": [{"_id": "AT0001", "area_type": "Bed Room"}]
    }]
};

app.get('/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(allAreas);
});

// Summary Stats

var summaryStatByID = {
    "data": [{
        "_id": "SS0001",
        "role_action_id": "RA0001",
        "stat_id": "ST0001",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0001", "stat_name": "Temprature", "icon": "Temprature.png"}]
    }]
};

app.get('/summarystats/SS0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatByID);
});

var allSummaryStats = {
    "data": [{
        "_id": "SS0001",
        "role_action_id": "RA0001",
        "stat_id": "ST0001",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0001", "stat_name": "Temprature", "icon": "Temprature.png"}]
    }, {
        "_id": "SS0002",
        "role_action_id": "RA0001",
        "stat_id": "ST0002",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0002", "stat_name": "Lights", "icon": "Lights.png"}]
    }, {
        "_id": "SS0003",
        "role_action_id": "RA0001",
        "stat_id": "ST0003",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0003", "stat_name": "Fan", "icon": "Fan.png"}]
    }, {
        "_id": "SS0004",
        "role_action_id": "RA0001",
        "stat_id": "ST0004",
        "area_id": ["AR0001"],
        "selected": 1,
        "stat": [{"_id": "ST0004", "stat_name": "Occupancy", "icon": "Occupancy.png"}]
    }, {
        "_id": "SS0005",
        "role_action_id": "RA0002",
        "stat_id": "ST0005",
        "area_id": ["AR0002"],
        "selected": 0,
        "stat": [{"_id": "ST0005", "stat_name": "Power", "icon": "Power.png"}]
    }]
};

app.get('/summarystats', function (req, res) {
    console.log("GET From SERVER");
    res.send(allSummaryStats);
});

var summaryStatsByAreaUser = {
    "data": [{
        "_id": "AR0001",
        "area_name": "Area 1",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe163",
            "area_img_id": "AR0001-AI0001",
            "area_img": "32a2a398-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe164",
            "area_img_id": "AR0001-AI0002",
            "area_img": "32a2a62c-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c4dfdfdsf9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe167",
            "area_img_id": "AR0001-AI0003",
            "area_img": "32a2a74e-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7edsfdsfdsfb9c4c2c986d272dc0b1d24e417e"
        }],
        "user_area": [{
            "_id": "587debb9zxzc5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 1,
            "personal_name": "My Room"
        }, {
            "_id": "587debb9czzx5116107e0afe163",
            "user_id": "U0002",
            "personal_room": 0,
            "personal_name": "Brothers's Room"
        }],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "summarystat": [{
            "_id": "SS0001",
            "role_action_id": "RA0001",
            "stat_id": "ST0001",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Temprature",
            "icon": "Temprature.png"
        }, {
            "_id": "SS0002",
            "role_action_id": "RA0001",
            "stat_id": "ST0002",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Lights",
            "icon": "Lights.png"
        }, {
            "_id": "SS0003",
            "role_action_id": "RA0001",
            "stat_id": "ST0003",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Fan",
            "icon": "Fan.png"
        }, {
            "_id": "SS0004",
            "role_action_id": "RA0001",
            "stat_id": "ST0004",
            "area_id": ["AR0001"],
            "selected": 1,
            "stat_name": "Occupancy",
            "icon": "Occupancy.png"
        }],
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}]
    }]
};

app.get('/users/U0001/areas/AR0001/summarystats/data', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsByAreaUser);
});

var summaryStatsbyUID = {
    "data": [{
        "_id": "AR0001",
        "area_name": "Area 1",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe163",
            "area_img_id": "AR0001-AI0001",
            "area_img": "32a2a398-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe164",
            "area_img_id": "AR0001-AI0002",
            "area_img": "32a2a62c-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c4dfdfdsf9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe167",
            "area_img_id": "AR0001-AI0003",
            "area_img": "32a2a74e-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7edsfdsfdsfb9c4c2c986d272dc0b1d24e417e"
        }],
        "user_area": [{
            "_id": "587debb9zxzc5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 1,
            "personal_name": "My Room"
        }, {
            "_id": "587debb9czzx5116107e0afe163",
            "user_id": "U0002",
            "personal_room": 0,
            "personal_name": "Brothers's Room"
        }],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "summarystat": [{
            "_id": "SS0001",
            "role_action_id": "RA0001",
            "stat_id": "ST0001",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Temprature",
            "icon": "Temprature.png"
        }, {
            "_id": "SS0003",
            "role_action_id": "RA0001",
            "stat_id": "ST0003",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Fan",
            "icon": "Fafsfsfsdn.png"
        }, {
            "_id": "SS0004",
            "role_action_id": "RA0001",
            "stat_id": "ST0004",
            "area_id": ["AR0001"],
            "selected": 1,
            "stat_name": "Occupancy",
            "icon": "Occupancy.png"
        }],
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}]
    }, {
        "_id": "AR0002",
        "area_name": "Area 2",
        "area_type_id": "AT0001",
        "grid_size": "3x3",
        "img": [{
            "_id": "587debb9c5116107e0afe169",
            "area_img_id": "AR0002-AI0001",
            "area_img": "32a2a82a-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "0",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2c986d272dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe165",
            "area_img_id": "AR0002-AI0002",
            "area_img": "32a2a8fc-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "1",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f7158d7b9c4c2cxcvcxv2dc0b1d24e417e"
        }, {
            "_id": "587debb9c5116107e0afe170",
            "area_img_id": "AR0002-AI0003",
            "area_img": "32a2ad16-dc9d-11e6-bf26-cec0c932ce01.png",
            "x_coordinate": "2",
            "y_coordinate": "0",
            "md5_sum": "be78fc7a2c433db40e9abc164d7ef8f715xzcxzcxz2c986d272dc0b1d24e417e"
        }, {"y_coordinate": 0, "x_coordinate": "1", "area_img": "rrrrr.png", "area_img_id": "AR0002-AI0004"}],
        "user_area": [{
            "_id": "587debbzx5116107e0afe163",
            "user_id": "U0001",
            "personal_room": 0,
            "personal_name": "Big Brother's Room"
        }, {"_id": "587debb9czx16107e0afe163", "user_id": "U0002", "personal_room": 1, "personal_name": "My Room"}],
        "selected_area_img_id": "AR0001-AI0001",
        "floor_id": "FL0001",
        "summarystat": [{
            "_id": "SS0001",
            "role_action_id": "RA0001",
            "stat_id": "ST0001",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Temprature",
            "icon": "Temprature.png"
        }, {
            "_id": "SS0002",
            "role_action_id": "RA0001",
            "stat_id": "ST0002",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Lights",
            "icon": "Lights.png"
        }, {
            "_id": "SS0003",
            "role_action_id": "RA0001",
            "stat_id": "ST0003",
            "area_id": ["AR0001", "AR0002"],
            "selected": 1,
            "stat_name": "Fan",
            "icon": "Fan.png"
        }, {
            "_id": "SS0005",
            "role_action_id": "RA0002",
            "stat_id": "ST0005",
            "area_id": ["AR0002"],
            "selected": 0,
            "stat_name": "Power",
            "icon": "Power.png"
        }],
        "floor": [{"_id": "FL0001", "floor_name": "Amy Room", "floor_no": 1}]
    }]
};

app.get('/users/U0001/areas/summarystats/data', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsbyUID);
});

// Modes
var modesbyUserIDandArea = {
    "data": [{
        "_id": "M0001",
        "mode_name": "Happy Mode",
        "icon": "Happy.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }, {
        "_id": "M0002",
        "mode_name": "Sad Mode",
        "icon": "Sad.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/users/U0001/areas/AR0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesbyUserIDandArea);
});

var allModes = {
    "data": [{
        "_id": "M0001",
        "mode_name": "Happy Mode",
        "icon": "Happy.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }, {
        "_id": "M0002",
        "mode_name": "Sad Mode",
        "icon": "Sad.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(allModes);
});

var modesByID = {
    "data": [{
        "_id": "M0001",
        "mode_name": "Happy Mode",
        "icon": "Happy.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/modes/M0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesByID);
});

var modesByAreaID = {
    "data": [{
        "_id": "M0001",
        "mode_name": "Happy Mode",
        "icon": "Happy.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }, {
        "_id": "M0002",
        "mode_name": "Sad Mode",
        "icon": "Sad.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/areas/AR0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesByAreaID);
});

var modesByUserID = {
    "data": [{
        "_id": "M0001",
        "mode_name": "Happy Mode",
        "icon": "Happy.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }, {
        "_id": "M0002",
        "mode_name": "Sad Mode",
        "icon": "Sad.png",
        "mode_status": 1,
        "role_action_id": "RA0001",
        "area_id": "AR0001",
        "favorite": 1,
        "node_info": [{"node_id": "N0001", "action_event_id": ["AE0001", "AE0002"]}, {
            "node_id": "N0002",
            "action_event_id": ["AE0001", "AE0002"]
        }],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/users/U0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesByUserID);
});

// Presers
var presetsByUserID = {
    "data": [{
        "_id": "PR0001",
        "preset_name": "Happy Preset",
        "icon": "Happy.png",
        "preset_status": 1,
        "role_action_id": "RA0001",
        "favorite": 1,
        "preset_schedule": [{
            "schedule_id": "SH0001",
            "preset_schedule_name": "Never Ending Preset Schedule",
            "repeat_type": "Daly",
            "repeat_end_type": "Never End",
            "repeat_start_time_stamp": "2014-09-17T23:25:56.314Z",
            "repeat_end_time_stamp": "2014-09-17T23:25:56.314Z",
            "priority": 0,
            "status": 1,
            "days": ["Mon", "Tue", "Thu"]
        }],
        "mode_id": ["M0001"],
        "operation": ["Add", "Update", "Delete", "View"]
    }, {
        "_id": "PR0001",
        "preset_name": "Happy Preset",
        "icon": "Happy.png",
        "preset_status": 0,
        "role_action_id": "RA0001",
        "favorite": 1,
        "preset_schedule": [{
            "schedule_id": "SH0001",
            "preset_schedule_name": "Never Ending Preset Schedule",
            "repeat_type": "Daly",
            "repeat_end_type": "Never End",
            "repeat_start_time_stamp": "2014-09-17T23:25:56.314Z",
            "repeat_end_time_stamp": "2014-09-17T23:25:56.314Z",
            "priority": 0,
            "status": 1,
            "days": ["Mon", "Tue", "Thu"]
        }],
        "mode_id": ["M0001"],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/users/U0001/presets', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetsByUserID);
});

var allPresets = {
    "data": [{
        "_id": "PR0001",
        "preset_name": "Happy Preset",
        "icon": "Happy.png",
        "preset_status": 1,
        "role_action_id": "RA0001",
        "favorite": 1,
        "preset_schedule": [{
            "schedule_id": "SH0001",
            "preset_schedule_name": "Never Ending Preset Schedule",
            "repeat_type": "Daly",
            "repeat_end_type": "Never End",
            "repeat_start_time_stamp": "2014-09-17T23:25:56.314Z",
            "repeat_end_time_stamp": "2014-09-17T23:25:56.314Z",
            "priority": 0,
            "status": 1,
            "days": ["Mon", "Tue", "Thu"]
        }],
        "mode_id": ["M0001"],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/presets', function (req, res) {
    console.log("GET From SERVER");
    res.send(allPresets);
});

var presetsByID = {
    "data": [{
        "_id": "PR0001",
        "preset_name": "Happy Preset",
        "icon": "Happy.png",
        "preset_status": 1,
        "role_action_id": "RA0001",
        "favorite": 1,
        "preset_schedule": [{
            "schedule_id": "SH0001",
            "preset_schedule_name": "Never Ending Preset Schedule",
            "repeat_type": "Daly",
            "repeat_end_type": "Never End",
            "repeat_start_time_stamp": "2014-09-17T23:25:56.314Z",
            "repeat_end_time_stamp": "2014-09-17T23:25:56.314Z",
            "priority": 0,
            "status": 1,
            "days": ["Mon", "Tue", "Thu"]
        }],
        "mode_id": ["M0001"],
        "operation": ["Add", "Update", "Delete", "View"]
    }]
};

app.get('/presets/PR0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetsByID);
});

// Notification

var notificationsByUID = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/users/U0001/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsByUID);
});

var notificationsByARIDUID = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/users/U0001/areas/AR0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsByARIDUID);
});

var notificationsByAreas = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0002",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0002",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0003",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0003",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsByAreas);
});

var notificationsByAID = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0002",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0002",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0003",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0003",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/areas/AR0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsByAID);
});

var allNotifications = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0002",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0002",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0003",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0003",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(allNotifications);
});

var notificationByNID = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/N0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationByNID);
});

var notificationsForUsers = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/notification/users/U0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsForUsers);
});

var notificationsForAllUsers = {
    "data": [{
        "_id": "N0001",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0001",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0002",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0002",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }, {
        "_id": "N0003",
        "notification_template_id": "NT0001",
        "area_id": ["AR0001"],
        "user_id": "U0003",
        "reply": "Turn off",
        "status": 4,
        "resolve_timestamp": "2014-09-17T25:25:56.314Z",
        "created_timestamp": "2014-09-17T23:25:56.314Z",
        "notification_template": [{
            "_id": "NT0001",
            "message": "Good morning",
            "type": "notification",
            "status": 1,
            "reply": ["Good morning", "Very good morning", "Morning"],
            "role_action_id": ["RA0001", "RA0002", "RA0003"]
        }]
    }]
};

app.get('/users/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsForAllUsers);
});

// Summarystats Overviewdata

var summaryStatsOverview = {
    "data": [{
        "_id": "SS0001",
        "role_action_id": "RA0001",
        "stat_id": "ST0001",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0001", "stat_name": "Temprature", "icon": "Temprature.png"}],
        "value": "30"
    }, {
        "_id": "SS0002",
        "role_action_id": "RA0001",
        "stat_id": "ST0002",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0002", "stat_name": "Lights", "icon": "Lights.png"}],
        "value": "30"
    }, {
        "_id": "SS0003",
        "role_action_id": "RA0001",
        "stat_id": "ST0003",
        "area_id": ["AR0001", "AR0002"],
        "selected": 1,
        "stat": [{"_id": "ST0003", "stat_name": "Fan", "icon": "Fan.png"}],
        "value": "30"
    }, {
        "_id": "SS0004",
        "role_action_id": "RA0001",
        "stat_id": "ST0004",
        "area_id": ["AR0001"],
        "selected": 1,
        "stat": [{"_id": "ST0004", "stat_name": "Occupancy", "icon": "Occupancy.png"}],
        "value": "30"
    }]
};

app.get('/users/U0001/summarystats/overviewdata', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsOverview);
});


//POST Testing
var test = [{name: "Dee"}, {age: "23"}];

app.get('/test', function (req, res) {
    console.log("GET From SERVER");
    res.send(test);
});
app.post('/test', function (req, res) {
    console.log("POST To SERVER");
    res.send(test, {body: "testing"});
});

app.listen(6061);
