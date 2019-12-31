// get a reference to the sprite sheet we've just loaded:


let level = new PIXI.Container();
let background = []
let background2 = []
let floor = []
let under = []

function setLevel(textures) {
    // set textures
    let tx_floor = textures["Jungle-Tileset_0004_floor.png"];
    let tx_under = textures["Jungle-Tileset_0012_under.png"];
    let tx_background = textures["Jungle-Tileset_0010_bg_trees.png"];
    let tx_background2 = textures["Jungle-Tileset_0011_bg.png"];

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
    for (let index = 0; index < 20; index++) {
        floor.push(new PIXI.Sprite(tx_floor))
        const f = floor[index];
        f.y = 234
        f.x = 80 * index
        level.addChild(f);
    }
    for (let index = 0; index < 12; index++) {
        under.push(new PIXI.Sprite(tx_under))
        const u = under[index];
        u.y = 316
        u.x = 155 * index
        level.addChild(u);
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
    

function events() {
    left.press = () => {
        character.vx = -5;
        this.press = "left"
    };
    left.release = () => {
        if (this.press == "left") {
            this.press = undefined
            character.vx = 0;
        }
    };

    right.press = () => {
        character.vx = 5;
        this.press = "right"
    };
    right.release = () => {
        if (this.press == "right") {
            this.press = undefined
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

