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

var userData = [{
    userId: "10",
    firstName: "Jon",
    lastName: "Snow",
    userName: "Jon Snow",
    age: "30",
    imagePath: "jon_snow.png",
    userInfo: {
        signedIn: true,
        permissionLevel: "user",
        token: "as9sad92dhk7k0vu7dgre68d8",
        features: [
            "dashboard",
            "dasboard_edit",
            "room_edit"
        ]
    }
}];

app.get('/userData', function (req, res) {
    console.log("GET From SERVER");
    res.send(userData);
});

var headerData = [{text: "LOGOUT"}];

app.get('/headerData', function (req, res) {
    console.log("GET From SERVER");
    res.send(headerData);
});

var allAreasForUser = [
    {
        _id: "AR0001",
        area_name: "Room 01",
        area_type: "Room",
        orientation: "Left",
        sequence: "01",
        selected_area_img_id: "AR0001-AI0001",
        floor: [{
            floor_id: "FL0001",
            floor_name: "1st floor",
            floor_no: "01"
        }],
        user_area: [
            {
                user_id: "U0001",
                personal_room: 1,
                personal_name: "My Room"
            },
            {
                user_id: "U0002",
                personal_room: 0,
                personal_name: "Brothers's Room"
            }
        ],
        img: [
            {
                area_img_id: "AR0001-AI0001",
                area_img: "dummy-room-2.jpg"
            },
            {
                area_img_id: "AR0001-AI0002",
                area_img: "Room01-02.jpeg"
            },
            {
                area_img_id: "AR0001-AI0003",
                area_img: "Room01-03.jpeg"
            }
        ]
    }, {
        _id: "AR0002",
        area_name: "Room 02",
        area_type: "Room",
        orientation: "Left",
        sequence: "02",
        selected_area_img_id: "AR0001-AI0001",
        floor: [{
            floor_id: "FL0001",
            floor_name: "1st floor",
            floor_no: "01"
        }],
        user_area: [
            {
                user_id: "U0001",
                personal_room: 1,
                personal_name: "My Room"
            },
            {
                user_id: "U0002",
                personal_room: 0,
                personal_name: "Brothers's Room"
            }
        ],
        img: [
            {
                area_img_id: "AR0001-AI0001",
                area_img: "dummy-room-3.jpg"
            },
            {
                area_img_id: "AR0001-AI0002",
                area_img: "Room01-02.jpeg"
            },
            {
                area_img_id: "AR0001-AI0003",
                area_img: "Room01-03.jpeg"
            }
        ]
    }];

app.get('/users/U0001/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(allAreasForUser);
});

var infoForTheArea = [
    {
        _id: "AR0001",
        area_name: "Room 01",
        area_type: "Room",
        orientation: "Left",
        sequence: "01",
        selected_area_img_id: "AR0001-AI0001",
        floor: [{
            floor_id: "FL0001",
            floor_name: "1st floor",
            floor_no: "01"
        }],
        user_area: [
            {
                user_id: "U0001",
                personal_room: 1,
                personal_name: "My Room"
            },
            {
                user_id: "U0002",
                personal_room: 0,
                personal_name: "Brothers's Room"
            }
        ],
        img: [
            {
                area_img_id: "AR0001-AI0001",
                area_img: "Room01-01.jpeg"
            },
            {
                area_img_id: "AR0001-AI0002",
                area_img: "Room01-02.jpeg"
            },
            {
                area_img_id: "AR0001-AI0003",
                area_img: "Room01-03.jpeg"
            }
        ]
    }
];

app.get('/areas/AR0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(infoForTheArea);
});

var allAreas = [
    {
        _id: "AR0001",
        area_name: "Room 01",
        area_type: "Room",
        orientation: "Left",
        sequence: "01",
        selected_area_img_id: "AR0001-AI0001",
        floor: [{
            floor_id: "FL0001",
            floor_name: "1st floor",
            floor_no: "01"
        }],
        user_area: [
            {
                user_id: "U0001",
                personal_room: 1,
                personal_name: "My Room"
            },
            {
                user_id: "U0002",
                personal_room: 0,
                personal_name: "Brothers's Room"
            }
        ],
        img: [
            {
                area_img_id: "AR0001-AI0001",
                area_img: "Room01-01.jpeg"
            },
            {
                area_img_id: "AR0001-AI0002",
                area_img: "Room01-02.jpeg"
            },
            {
                area_img_id: "AR0001-AI0003",
                area_img: "Room01-03.jpeg"
            }
        ]
    }
];

app.get('/areas', function (req, res) {
    console.log("GET From SERVER");
    res.send(allAreas);
});

var summaryStatsForUser = [{
    _id: "SS0001",
    role_action_id: "RA0001",
    stat_id: "ST0001",
    stat_name: "Temperature",
    icon_id: "IC0001",
    icon: "Temperature.png",
    selected: "1"
}];

app.get('/users/U0001/summarystats', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsForUser);
});

var summaryStatsforSSID = [{
    _id: "SS0001",
    role_action_id: "RA0001",
    stat_id: "ST0001",
    stat_name: "Temperature",
    icon_id: "IC0001",
    icon: "Temperature.png",
    selected: "1"
}];

app.get('/summarystats/SS0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsforSSID);
});

var allSummaryStats = [{
    _id: "SS0001",
    role_action_id: "RA0001",
    stat_id: "ST0001",
    stat_name: "Temprature",
    icon_id: "IC0001",
    icon: "Temprature.png",
    selected: "1"
}, {
    _id: "SS0002",
    role_action_id: "RA0002",
    stat_id: "ST0002",
    stat_name: "Temprature",
    icon_id: "IC0001",
    icon: "Temprature.png",
    selected: "1"
}, {
    _id: "SS0003",
    role_action_id: "RA0003",
    stat_id: "ST0003",
    stat_name: "Temprature",
    icon_id: "IC0001",
    icon: "Temprature.png",
    selected: "1"
}, {
    _id: "SS0004",
    role_action_id: "RA0004",
    stat_id: "ST0004",
    stat_name: "Temprature",
    icon_id: "IC0001",
    icon: "Temprature.png",
    selected: "0"
}, {
    _id: "SS0005",
    role_action_id: "RA0005",
    stat_id: "ST0005",
    stat_name: "Temprature",
    icon_id: "IC0001",
    icon: "Temprature.png",
    selected: "0"
}];

app.get('/summarystats/SS0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(allSummaryStats);
});

// //2.4
// var summaryStatsforUserAndArea = [{
//     _id: "AR0001",
//     area_name: "Room 01",
//     area_type: "Room",
//     orientation: "Left",
//     sequence: "01",
//     selected_area_img_id: "AR0001-AI0001",
//     floor: [{
//         floor_id: "FL0001",
//         floor_name: "1st floor",
//         floor_no: "01"
//     }],
//     user_area: [{
//         user_id: "U0001",
//         personal_room: 1,
//         personal_name: "My Room"
//     }, {
//         user_id: "U0002",
//         personal_room: 0,
//         personal_name: "Brothers's Room"
//     }],
//     img: [{
//         area_img_id: "AR0001-AI0001",
//         area_img: "Room01-01.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0002",
//         area_img: "Room01-02.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0003",
//         area_img: "Room01-03.jpeg"
//     }],
//     summerystat: [{
//         _id: "SS0001",
//         role_action_id: "RA0001",
//         stat_id: "ST0001",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Temperature",
//         icon: "thermometer.png",
//         value: "25",
//         selected: "1"
//     }, {
//         _id: "SS0002",
//         role_action_id: "RA0001",
//         stat_id: "ST0002",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Occupancy",
//         icon: "command.png",
//         value: "2",
//         selected: "1"
//     }, {
//         _id: "SS0003",
//         role_action_id: "RA0001",
//         stat_id: "ST0003",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Power Consumption",
//         icon: "flash.png",
//         value: "2",
//         selected: "0"
//     }, {
//         _id: "SS0004",
//         role_action_id: "RA0001",
//         stat_id: "ST0004",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "What ever",
//         icon: "flash.png",
//         value: "2",
//         selected: "1"
//     }]
// }];
//
// app.get('/users/U0001/areas/AR0001/summarystats/data', function (req, res) {
//     console.log("GET From SERVER");
//     res.send(summaryStatsforUserAndArea);
// });

//Summary Stats for areas
var modifiedSummaryStatsArea1 = [{
    _id: "SS0001",
    role_action_id: "RA0001",
    stat_id: "ST0001",
    area_id: "[AR0001,AR0002]",
    stat_name: "Temperature",
    icon: "thermometer.png",
    value: "Area 1 - 25°C",
    selected: "1"
}, {
    _id: "SS0002",
    role_action_id: "RA0001",
    stat_id: "ST0002",
    area_id: "[AR0001,AR0002]",
    stat_name: "Occupancy",
    icon: "command.png",
    value: "Area 1 - 2",
    selected: "1"
}, {
    _id: "SS0003",
    role_action_id: "RA0001",
    stat_id: "ST0003",
    area_id: "[AR0001,AR0002]",
    stat_name: "Power Consumption",
    icon: "flash.png",
    value: "Area 1 - 270",
    selected: "0"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "alarm.png",
    value: "Area 1 - 123",
    selected: "1"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "idea.png",
    value: "Area 1 - 12211",
    selected: "1"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "settings.png",
    value: "Area 1 - 1211",
    selected: "0"
}];

app.get('/users/U0001/areas/AR0001/summarystats/data', function (req, res) {
    console.log("GET From SERVER");
    res.send(modifiedSummaryStatsArea1);
});

var modifiedSummaryStatsArea2 = [{
    _id: "SS0001",
    role_action_id: "RA0001",
    stat_id: "ST0001",
    area_id: "[AR0001,AR0002]",
    stat_name: "Temperature",
    icon: "thermometer.png",
    value: "Area 2 - 30°C",
    selected: "1"
}, {
    _id: "SS0002",
    role_action_id: "RA0001",
    stat_id: "ST0002",
    area_id: "[AR0001,AR0002]",
    stat_name: "Occupancy",
    icon: "command.png",
    value: "Area 2 - 4",
    selected: "1"
}, {
    _id: "SS0003",
    role_action_id: "RA0001",
    stat_id: "ST0003",
    area_id: "[AR0001,AR0002]",
    stat_name: "Power Consumption",
    icon: "flash.png",
    value: "Area 2 - 140",
    selected: "0"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "alarm.png",
    value: "Area 2 - 13",
    selected: "1"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "idea.png",
    value: "Area 2 - 22",
    selected: "1"
}, {
    _id: "SS0004",
    role_action_id: "RA0001",
    stat_id: "ST0004",
    area_id: "[AR0001,AR0002]",
    stat_name: "What ever",
    icon: "settings.png",
    value: "Area 2 - 33",
    selected: "0"
}];

app.get('/users/U0001/areas/AR0002/summarystats/data', function (req, res) {
    console.log("GET From SERVER");
    res.send(modifiedSummaryStatsArea2);
});

// 2.5
// var summaryStatsForOneUserAllAreasss = [{
//     _id: "AR0001",
//     area_name: "Room 01",
//     area_type: "Room",
//     orientation: "Left",
//     sequence: "01",
//     selected_area_img_id: "AR0001-AI0001",
//     floor: [{
//         floor_id: "FL0001",
//         floor_name: "1st floor",
//         floor_no: "01"
//     }],
//     user_area: [{
//         user_id: "U0001",
//         personal_room: 1,
//         personal_name: "My Room"
//     }, {
//         user_id: "U0002",
//         personal_room: 0,
//         personal_name: "Brothers's Room"
//     }],
//     img: [{
//         area_img_id: "AR0001-AI0001",
//         area_img: "Room01-01.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0002",
//         area_img: "Room01-02.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0003",
//         area_img: "Room01-03.jpeg"
//     }],
//     summerystat: [{
//         _id: "SS0001",
//         role_action_id: "RA0001",
//         stat_id: "ST0001",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Temperature",
//         icon: "thermometer.png",
//         value: "25°C",
//         selected: "1"
//     }, {
//         _id: "SS0002",
//         role_action_id: "RA0001",
//         stat_id: "ST0002",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Occupancy",
//         icon: "command.png",
//         value: "2",
//         selected: "1"
//     }, {
//         _id: "SS0003",
//         role_action_id: "RA0001",
//         stat_id: "ST0003",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Power Consumption",
//         icon: "flash.png",
//         value: "2",
//         selected: "0"
//     }, {
//         _id: "SS0002",
//         role_action_id: "RA0001",
//         stat_id: "ST0002",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "What ever",
//         icon: "flash.png",
//         value: "2",
//         selected: "1"
//     }]
// }, {
//     _id: "AR0002",
//     area_name: "Room 02",
//     area_type: "Room",
//     orientation: "Left",
//     sequence: "01",
//     selected_area_img_id: "AR0001-AI0001",
//     floor: [{
//         floor_id: "FL0001",
//         floor_name: "1st floor",
//         floor_no: "01"
//     }],
//     user_area: [{
//         user_id: "U0001",
//         personal_room: 1,
//         personal_name: "My Room"
//     }, {
//         user_id: "U0002",
//         personal_room: 0,
//         personal_name: "Brothers's Room"
//     }],
//     img: [{
//         area_img_id: "AR0001-AI0001",
//         area_img: "Room01-01.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0002",
//         area_img: "Room01-02.jpeg"
//     }, {
//         area_img_id: "AR0001-AI0003",
//         area_img: "Room01-03.jpeg"
//     }],
//     summerystat: [{
//         _id: "SS0001",
//         role_action_id: "RA0001",
//         stat_id: "ST0001",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Temperature",
//         icon: "thermometer.png",
//         value: "25°C",
//         selected: "1"
//     }, {
//         _id: "SS0002",
//         role_action_id: "RA0001",
//         stat_id: "ST0002",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Occupancy",
//         icon: "command.png",
//         value: "2",
//         selected: "1"
//     }, {
//         _id: "SS0003",
//         role_action_id: "RA0001",
//         stat_id: "ST0003",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "Power Consumption",
//         icon: "flash.png",
//         value: "2",
//         selected: "0"
//     }, {
//         _id: "SS0002",
//         role_action_id: "RA0001",
//         stat_id: "ST0002",
//         area_id: "[AR0001,AR0002]",
//         stat_name: "What ever",
//         icon: "flash.png",
//         value: "2",
//         selected: "1"
//     }]
// }];
//
// app.get('/users/U0001/areas/AR0001/summarystats/data/blah', function (req, res) {
//     console.log("GET From SERVER");
//     res.send(summaryStatsForOneUserAllAreasss);
// });

var allModesForUserAndArea = [{
    mode_id: "M0001",
    mode_name: "happy",
    icon: "MI0001.png",
    mode_staus: "1",
    mode_permission: [{
        mode_permission_id: "MP0001",
        mode_id: "M0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "1"
    }, {
        mode_permission_id: "MP0002",
        mode_id: "M0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]
}];

app.get('/users/U0001/areas/AR0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(allModesForUserAndArea);
});

var allModes = [{
    mode_id: "M0001",
    mode_name: "happy",
    icon: "MI0001.png",
    mode_staus: "1",
    mode_permission: [{
        mode_permission_id: "MP0001",
        mode_id: "M0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "1"
    }, {
        mode_permission_id: "MP0002",
        mode_id: "M0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]
}];

app.get('/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(allModes);
});

var modesByID = [{
    mode_id: "M0001",
    mode_name: "happy",
    icon: "MI0001.png",
    mode_staus: "1",
    mode_permission: [{
        mode_permission_id: "MP0001",
        mode_id: "M0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "1"
    }, {
        mode_permission_id: "MP0002",
        mode_id: "M0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]


}];

app.get('/modes/M0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesByID);
});

var modesForArea = [{
    mode_id: "M0001",
    mode_name: "happy",
    icon: "MI0001.png",
    mode_staus: "1",
    mode_permission: [{
        mode_permission_id: "MP0001",
        mode_id: "M0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "1"
    }, {
        mode_permission_id: "MP0002",
        mode_id: "M0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]


}];

app.get('/areas/AR0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesForArea);
});

//3.5
var modesForUser = [{
    _id: "M0001",
    mode_name: "Love Mode",
    icon: "love.png",
    mode_staus: "1",
    role_action_id: "RA0001",
    area_id: "AR0001",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    node_info: [{
        node_id: "N0001",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }, {
        node_id: "N0002",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }]
}, {
    _id: "M0001",
    mode_name: "Party Mode",
    icon: "party.png",
    mode_staus: "1",
    role_action_id: "RA0001",
    area_id: "AR0001",
    favorite: "0",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    node_info: [{
        node_id: "N0001",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }, {
        node_id: "N0002",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }]
}, {
    _id: "M0003",
    mode_name: "Sad Mode",
    icon: "sad.png",
    mode_staus: "1",
    role_action_id: "RA0001",
    area_id: "AR0001",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    node_info: [{
        node_id: "N0001",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }, {
        node_id: "N0002",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }]
}, {
    _id: "M0004",
    mode_name: "Hungry Mode",
    icon: "hungry.png",
    mode_staus: "1",
    role_action_id: "RA0004",
    area_id: "AR0004",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    node_info: [{
        node_id: "N0001",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }, {
        node_id: "N0002",
        action_event_id: ["AE0001",
            "AE0002"
        ]
    }]
}];

app.get('/users/U0001/modes', function (req, res) {
    console.log("GET From SERVER");
    res.send(modesForUser);
});

//4.1
var presetsForUsers = [{
    _id: "P0001",
    icon: "shopping.png",
    preset_name: "Shopping",
    preset_status: "1",
    role_action_id: "RA0001",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    mode_id: ["M0001"]
}, {
    _id: "P0002",
    icon: "sunday.png",
    preset_name: "Sunday",
    preset_status: "1",
    role_action_id: "RA0001",
    favorite: "0",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    mode_id: ["M0001"]
}, {
    _id: "P0003",
    icon: "guys_only.png",
    preset_name: "Drinking Night",
    preset_status: "1",
    role_action_id: "RA0001",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    mode_id: ["M0001"]
}, {
    _id: "P0004",
    icon: "poya.png",
    preset_name: "Poya Day",
    preset_status: "1",
    role_action_id: "RA0001",
    favorite: "1",
    operation: ["Add",
        "Update",
        "Delete",
        "View"
    ],
    mode_id: ["M0001"]
}];

app.get('/users/U0001/preset', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetsForUsers);
});

var allPresets = [{
    preset_id: "P0001",
    preset_name: "Morning",

    preset_permission: [{
        preset_permission_id: "PP0001",
        preset_id: "P0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "0"
    }, {
        preset_permission_id: "PP0002",
        preset_id: "P0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]
}];

app.get('/preset', function (req, res) {
    console.log("GET From SERVER");
    res.send(allPresets);
});

var presetForID = [{
    preset_id: "P0001",
    preset_name: "Morning",

    preset_permission: [{
        preset_permission_id: "PP0001",
        preset_id: "P0001",
        role_action_id: "RA0001",
        operation_id: "OP0001",
        favorite: "0"
    }, {
        preset_permission_id: "PP0002",
        preset_id: "P0001",
        role_action_id: "RA0002",
        operation_id: "OP0002",
        favorite: "1"
    }]
}];

app.get('/preset/P0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(presetForID);
});

var notificationForUserAndAllAreas = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "Notification Notification Notification Notification ",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}, {
    _id: "SS0002",
    Type_id: "NT0002",
    type: "warning",
    message: "Warning Warning Warning Warning ",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}, {
    _id: "SS0003",
    Type_id: "NT0003",
    type: "information",
    message: "Information Information Information Information ",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/users/U0001/areas/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationForUserAndAllAreas);
});

var notificationForUserAndArea = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/users/U0001/areas/AR0001/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationForUserAndArea);
});

var notificationsForAllAreas = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/areas/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsForAllAreas);
});

var notificationsForArea = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/areas/AR0001/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationsForArea);
});

var allNotifications = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(allNotifications);
});

var notificationForID = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/notification/SS0001', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationForID);
});

//5.7
var notificationForUser = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/users/U0001/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(notificationForUser);
});

var allNotificationsForAllUsers = [{
    _id: "SS0001",
    Type_id: "NT0001",
    type: "notification",
    message: "good morning",
    area_id: "[AR0001,AR0002]",
    user_id: "U0001",
    state: "1"
}];

app.get('/users/notification', function (req, res) {
    console.log("GET From SERVER");
    res.send(allNotificationsForAllUsers);
});

var summaryStatsSidepanelAll = [{
        _id: "SS0001",
        role_action_id: "RA0001",
        stat_id: "1",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Temperature",
            icon: "thermometer.png"
        }],
        value: "25°C",
        selected: "1"
    }, {
        _id: "SS0001",
        role_action_id: "RA0002",
        stat_id: "2",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Power Consumption",
            icon: "flash.png"
        }],
        value: "179 Unit",
        selected: "1"
    }, {
        summarystat_id: "SS0004",
        role_action_id: "RA0003",
        stat_id: "3",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Occupancy",
            icon: "command.png"
        }],
        value: "5 people",
        selected: "1"
    }, {
        summarystat_id: "SS0004",
        role_action_id: "RA0004",
        stat_id: "4",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Devices",
            icon: "idea.png"
        }],
        value: "6 devices",
        selected: "1"
    }, {
        summarystat_id: "SS0005",
        role_action_id: "RA0004",
        stat_id: "5",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Just",
            icon: "settings.png"
        }],
        value: "Temp",
        selected: "0"
    }, {
        summarystat_id: "SS0006",
        role_action_id: "RA0004",
        stat_id: "6",
        area_id: "[AR0001,AR0002]",
        stat: [{
            stat_name: "Weather",
            icon: "cloud.png"
        }],
        value: "Weather",
        selected: "0"
    }]
    ;

app.get('/users/U0001/summarystats/overview', function (req, res) {
    console.log("GET From SERVER");
    res.send(summaryStatsSidepanelAll);
});

//POST Testing
var test = [{name: "Dee"}, {age: "23"}];

app.get('/test', function (req, res) {
    console.log("GET From SERVER");
    res.send(test);
});
app.post('/test', function (req, res) {
    console.log("POST To SERVER");
    res.send(test, {body: req.body});
});

app.listen(6060);
