PIXI.Loader.shared
    .add("images/Jungle-Tileset.json")
    .load(setup);

function setup() {
    let textures = PIXI.Loader.shared.resources["images/Jungle-Tileset.json"].textures;
    // set in level.js
    setLevel(textures) 
    setCharacter(textures)
    events()


    //Start the game loop 
    app.ticker.add(() => gameLoop());
}

function gameLoop() {
    //Update the current game state:
    play()
}

function play() {

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
