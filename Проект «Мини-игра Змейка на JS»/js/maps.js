const map1 ={
    cords: [],
    completed: 98
};

const generateMap = (map, axis, from, to, numRestAxis) => {
    
    const countIteration = to - from;
    const getRestAxis = (axis === "x") ? "y" : "x";
    let cords;
    
    for(let i = 0; i < countIteration; i++){
        cords = {[axis]: from+i, [getRestAxis]: numRestAxis};
        map.cords.push(cords);
    }

    map.completed = map.completed - countIteration;
};
