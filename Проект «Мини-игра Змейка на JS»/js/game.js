const onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const renderGame = () => {
        ctx.clearRect(0,0,width,height);
        
        for(let y = 0; y < row; y++){
            for(let x=0; x<row; x++){
                ctx.fillStyle = "aqua";
                ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));

                state.snake.tail.forEach(s => {
                    if (s.x === x && s.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                        if (s.h) {
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                        }
                    }
                });

                if(state.food.apples.x === x && state.food.apples.y === y){
                    ctx.fillStyle = colors.apples;
                    ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                }

                state.maps[`map${state.level}`].cords.forEach(m => {
                    if(m.x === x && m.y === y){
                        ctx.fillStyle = colors.wall;
                        ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                    }
                });
            }
        }
    };
    renderGame(); 

    let startTime = 0,
        currentTime = 0,
        time = 0,
        currentSecond = 0;

    animateRAFInterval.start(() => {
        if(startTime === 0){
            startTime = new Date().getTime();            
        }

        currentTime = new Date().getTime();
        time = currentTime - startTime;
        currentSecond = Math.floor(time/state.snake.speed);

        if(currentSecond > 0){
            startTime = 0;
            moveSnake();
            addNewFood();
            renderGame();
        }
    }); 

    const onekeydown = (e) => {
        changeDirection(e.keyCode);
        
        
        console.log(state.snake);
    };
    document.addEventListener("keydown", onekeydown);

};

window.addEventListener("load", onload);