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
    if (character.x > window.innerWidth) {
        character.x = -80
    }

    if (character.x < -80) {
        character.x = window.innerWidth
    }
    // move Vertical
    floorColition = false
    characterColitionY(character, floor)
    characterColitionY(character, box)
    characterColitionX(character, floor)
    // characterColitionX(character, box)
    // floor.forEach(element => { floorColition = characterColitionY(character, element) });
    // box.forEach(element => { floorColition = characterColition(character, element) });
    fllorVibration()
    // console.log("character.vx: "+character.vx)
    character.y += character.vy
    character.x += character.vx;
    character.vy += 1 * delta
}

let floorColition
let pendingVibration = false
function fllorVibration() {
    if (character.vy > 15) { pendingVibration = true }
    if (floorColition && pendingVibration) {
        // console.log("floorColition && pendingVibration")
        level.y = 8
        pendingVibration = false
    } else {
        level.y = 0
    }
}
function characterColitionY(character, elements) {
    let character_base = character.y + character.height + character.vy + 4

    for (let i = 0; i < elements.length && !floorColition; i++) {
        const element = elements[i];
        if (character_base >= element.y
            && character.vy > 0
            && character.x > element.x - element.width + 20
            && character.x < element.x + element.width - 20
        ) {
            character.vy = 0
            character.y = element.y - character.height + 4
            floorColition = true
            break
        }
    }
}
function characterColitionX(character, elements) {

    let character_base = character.y + character.height + character.vy + 4

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (character.x + character.vx > element.x - element.width + 20
            && character.x + character.vx < element.x + element.width - 20
            && character_base >= element.y + 10
        ) {
            character.vx = 0
            break
        }
    }
}