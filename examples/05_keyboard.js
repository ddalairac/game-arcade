PIXI.Loader.shared
    .add("images/Jungle-Tileset.json")
    .load(setup);

let state
function setup() {
    let textures = PIXI.Loader.shared.resources["images/Jungle-Tileset.json"].textures;
    // set in level.js
    setLevel(textures) 
    setCharacter(textures)

    //Capture the keyboard arrow keys
    let left = keyboard("ArrowLeft"),
        up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight")

    //Left 
    left.press = () => {
        //Change the barrel's velocity when the key is pressed
        barrel.vx = -5;
    };

    //Left 
    left.release = () => {
        //Stop the barrel
        barrel.vx = 0;
    };

 
    //Right
    right.press = () => {
        barrel.vx = 5;
    };
    right.release = () => {
        barrel.vx = 0;
    };

    //Up
    up.press = () => {
        barrel.vy = -15
    };
    up.release = () => {
        // se resuelve en el loop
    };

    //Set the game state
    state = play;

    //Start the game loop 
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    //Update the current game state:
    state(delta);
}

function play(delta) {
    //Use the barrel's velocity to make it move

    // move Horizontal
    barrel.x += barrel.vx;

    if (barrel.x > window.innerWidth) {
        barrel.x = -80
    }

    if (barrel.x < -80) {
        barrel.x = window.innerWidth
    }
    // move Vertical
    if (barrel.vy < 0 || barrel.y < 159) {
        barrel.vy += 1
    }
    if (barrel.y > 160) {
        barrel.vy = 0
        barrel.y = 160
        level.y = 5 // vibracion piso
    } else {
        level.y = 0
    }
    barrel.y += barrel.vy
}
