// get a reference to the sprite sheet we've just loaded:


let level = new PIXI.Container();
let background = []
let background2 = []
let floor = []
let under = []
let box = []
function setLevel(textures) {
    // set textures
    let tx_floor = textures["Jungle-Tileset_0004_floor.png"];
    let tx_floorLeft = textures["Jungle-Tileset_0002_floor_tip.png"];
    let tx_floorRight = textures["Jungle-Tileset_0002_floor_tip2.png"];
    let tx_under = textures["Jungle-Tileset_0012_under.png"];
    let tx_background = textures["Jungle-Tileset_0010_bg_trees.png"];
    let tx_background2 = textures["Jungle-Tileset_0011_bg.png"];
    let tx_box = textures["Jungle-Tileset_0009_box.png"];
    console.log("tx_floor",tx_floor)

    for (let index = 0; index < 12; index++) {
        background2.push(new PIXI.Sprite(tx_background2))
        const bg2 = background2[index];
        bg2.y = 0
        bg2.x = 421 * index
        level.addChild(bg2);
    }
    for (let index = 0; index < 12; index++) {
        background.push(new PIXI.Sprite(tx_background))
        const bg = background[index];
        bg.y = 0
        bg.x = 418 * index
        level.addChild(bg);
    }
    for (let index = 0; index < 30; index++) {
        floor.push(new PIXI.Sprite(tx_floor))
        const f = floor[index];
        f.y = 234
        f.x = 80 * index
        level.addChild(f);
    }
    const f = new PIXI.Sprite(tx_floorLeft)
    floor.push(f)
    f.y = 154
    f.x = 320
    level.addChild(f);
    const f2 = new PIXI.Sprite(tx_floorRight)
    floor.push(f2)
    f2.y = 154
    f2.x = 400
    level.addChild(f2);
    for (let index = 0; index < 13; index++) {
        under.push(new PIXI.Sprite(tx_under))
        const u = under[index];
        u.y = 316
        u.x = 155 * index
        level.addChild(u);
    }

    for (let index = 0; index < 1; index++) {
        box.push(new PIXI.Sprite(tx_box))
        const bx = box[index];
        bx.y = 156
        bx.x = 700 //300 * index 
        level.addChild(bx);
    }

    app.stage.addChild(level);

}

let character
function setCharacter(textures) {
    let tx_character = textures["Jungle-Tileset_0008_barrel.png"];
    character = new PIXI.Sprite(tx_character);
    character.y = 0
    character.x = window.innerWidth / 2
    character.vx = 0;
    character.vy = 0;
    app.stage.addChild(character);
}

//Capture the keyboard arrow keys
let left = keyboard("ArrowLeft"),
    up = keyboard("ArrowUp"),
    right = keyboard("ArrowRight")

let xDirection

function events() {
    left.press = () => {
        character.vx = -5
        xDirection = "left"
    };
    left.release = () => {
        if (xDirection == "left") {
            xDirection = undefined
            character.vx = 0;
        }
    };

    right.press = () => {
        character.vx = 5;
        xDirection = "right"
    };
    right.release = () => {
        if (xDirection == "right") {
            xDirection = undefined
            character.vx = 0;
        }
    };

    up.press = () => {
        character.vy = -15
    };
    up.release = () => {
        // se resuelve en play()
    };
}

