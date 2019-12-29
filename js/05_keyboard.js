PIXI.Loader.shared
    .add("images/Jungle-Tileset.json")
    .load(setup);

let background = []
let background2 = []
let floor = []
let under = []
let barrel
let state
function setup() {
    // get a reference to the sprite sheet we've just loaded:
    let textures = PIXI.Loader.shared.resources["images/Jungle-Tileset.json"].textures;

    // set textures
    let tx_floor = textures["Jungle-Tileset_0004_floor.png"];
    let tx_under = textures["Jungle-Tileset_0012_under.png"];
    let tx_background = textures["Jungle-Tileset_0010_bg_trees.png"];
    let tx_background2 = textures["Jungle-Tileset_0011_bg.png"];
    let tx_barrel = textures["Jungle-Tileset_0008_barrel.png"];

    for (let index = 0; index < 12; index++) {
        background2.push(new PIXI.Sprite(tx_background2))
        const bg2 = background2[index];
        bg2.y = 0
        bg2.x = 421 * index
        app.stage.addChild(bg2);
    }
    for (let index = 0; index < 12; index++) {
        background.push(new PIXI.Sprite(tx_background))
        const bg = background[index];
        bg.y = 0
        bg.x = 418 * index
        app.stage.addChild(bg);
    }
    for (let index = 0; index < 12; index++) {
        floor.push(new PIXI.Sprite(tx_floor))
        const f = floor[index];
        f.y = 234
        f.x = 80 * index
        app.stage.addChild(f);
    }
    for (let index = 0; index < 12; index++) {
        under.push(new PIXI.Sprite(tx_under))
        const u = under[index];
        u.y = 316
        u.x = 155 * index
        app.stage.addChild(u);
    }
    barrel = new PIXI.Sprite(tx_barrel);
    barrel.y = 160
    barrel.x = window.innerWidth / 2
    barrel.vx = 0;
    barrel.vy = 0;
    app.stage.addChild(barrel);

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
    }
    barrel.y += barrel.vy
}

//? ****** EVENT *******
function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
        if (event.key === key.value) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
            event.preventDefault();
        }
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.key === key.value) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
            event.preventDefault();
        }
    };

    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener(
        "keydown", downListener, false
    );
    window.addEventListener(
        "keyup", upListener, false
    );

    // Detach event listeners
    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };

    return key;
}
