const state = {
    snake:{
        tail:[
            {x: 0, y: 4, d:"right", h: false},
            {x: 1, y: 4, d:"right", h: true},   
        ],
        direction: "right",
        lastPosTail: {},
        speed:300
    },
    food:{
        didAte: true,
        apples: {}
    },
    level: 1,
    maps: {
        "map1": map1, 
    }
};
