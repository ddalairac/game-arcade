PIXI.Loader.shared
    .add("images/Jungle-Tileset.json")
    .load(setup);


function setup() {
    // get a reference to the sprite sheet we've just loaded:
    let textures = PIXI.Loader.shared.resources["images/Jungle-Tileset.json"].textures;
    
    // set textures
    let tx_floor = textures["Jungle-Tileset_0004_floor.png"];
    let tx_under = textures["Jungle-Tileset_0012_under.png"];
    let tx_background = textures["Jungle-Tileset_0010_bg_trees.png"];
    let tx_background2 = textures["Jungle-Tileset_0011_bg.png"];
    let tx_barrel = textures["Jungle-Tileset_0008_barrel.png"];

    let background2 = []
    for (let index = 0; index < 12; index++) {
        background2.push(new PIXI.Sprite(tx_background2))
        const bg2 = background2[index];
        bg2.y = 0    
        bg2.x = 421 *index
        app.stage.addChild(bg2);
    }
    let background = []
    for (let index = 0; index < 12; index++) {
        background.push(new PIXI.Sprite(tx_background))
        const bg = background[index];
        bg.y = 0    
        bg.x = 418 * index
        app.stage.addChild(bg);
    }
    let floor = []
    for (let index = 0; index < 12; index++) {
        floor.push(new PIXI.Sprite(tx_floor))
        const f = floor[index];
        f.y = 234   
        f.x = 80 *index
        app.stage.addChild(f);
    }
    let under = []
    for (let index = 0; index < 12; index++) {
        under.push(new PIXI.Sprite(tx_under))
        const u = under[index];
        u.y = 316
        u.x = 155 * index
        app.stage.addChild(u);
    }
    let barrel = new PIXI.Sprite(tx_barrel);
    barrel.y = 160
    barrel.x = window.innerWidth / 2 
    barrel.vx = 0;
    barrel.vy = 0;
    
    app.stage.addChild(barrel);
    app.ticker.add(delta => gameLoop(barrel));
}

function gameLoop(barrel){
    // move Horizontal
    barrel.x += 4;
    if(barrel.x > window.innerWidth){
        barrel.x = -80
    }
    
    // move Vertical
    barrel.vy += 1
    if(barrel.y > 160 ){
        barrel.vy = -15
        barrel.y = 160
    }
    barrel.y += barrel.vy

  }