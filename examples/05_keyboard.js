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
        //Change the character's velocity when the key is pressed
        character.vx = -5;
    };

    //Left 
    left.release = () => {
        //Stop the character
        character.vx = 0;
    };

 
    //Right
    right.press = () => {
        character.vx = 5;
    };
    right.release = () => {
        character.vx = 0;
    };

    //Up
    up.press = () => {
        character.vy = -15
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
    //Use the character's velocity to make it move

    // move Horizontal
    character.x += character.vx;

    if (character.x > window.innerWidth) {
        character.x = -80
    }

    if (character.x < -80) {
        character.x = window.innerWidth
    }
    // move Vertical
    if (character.vy < 0 || character.y < 159) {
        character.vy += 1
    }
    if (character.y > 160) {
        character.vy = 0
        character.y = 160
        level.y = 5 // vibracion piso
    } else {
        level.y = 0
    }
    character.y += character.vy
}
