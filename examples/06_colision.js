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
    barrel.x += barrel.vx;
    if (barrel.x > window.innerWidth) {
        barrel.x = -80
    }

    if (barrel.x < -80) {
        barrel.x = window.innerWidth
    }
    // move Vertical
        let floorColition = false
        for (let index = 0; index < floor.length; index++) {
            const element = floor[index];
            floorColition = characterColition(barrel, floor[index],delta)
            if(floorColition)break
        }
        if(floorColition && character.vy != 0){
            level.y = 4
        }else {
            level.y = 0
        }
        barrel.y += barrel.vy
        barrel.vy += 1 * delta
}
function characterColition(character, element,delta) {
    let character_base = character.y + character.height + character.vy  +4

    if (character_base >= element.y) {
        character.vy = 0
        character.y = element.y - character.height + 4
        return true
    } else {
        return false
    }
}