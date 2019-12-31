PIXI.Loader.shared
    .add("images/Jungle-Tileset.json")
    .load(setup);

let state
function setup() {
    let textures = PIXI.Loader.shared.resources["images/Jungle-Tileset.json"].textures;
    // set in level.js
    setLevel(textures)
    setCharacter(textures)
    events()
    state = play

    //Start the game loop 
    // delta is 1 if running at 100% performance
    app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta) {
    //Update the current game state:
    state(delta)
}


function play(delta) {
    // move Horizontal
    character.x += character.vx;
    if (character.x > window.innerWidth) {
        character.x = -80
    }

    if (character.x < -80) {
        character.x = window.innerWidth
    }
    // move Vertical
    floor.forEach(element => { floorColition = characterColition(character, element)});
    fllorVibration()
    character.y += character.vy
    character.vy += 1 * delta
}

let floorColition
let pendingVibration = false
function fllorVibration(){
    if (character.vy > 15) { pendingVibration = true }
    if (floorColition && pendingVibration) {
        console.log("floorColition && pendingVibration")
        level.y = 4
        pendingVibration = false
    } else {
        level.y = 0
    }
}
function characterColition(character, element) {
    let character_base = character.y + character.height + character.vy + 4

    if (character_base >= element.y) {
        character.vy = 0
        character.y = element.y - character.height + 4
        return true
    } else {
        return false
    }
}