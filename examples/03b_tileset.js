PIXI.loader
    .add("images/Jungle-Tileset.json")
    .load(setup);

function fmY(cantidad){return 80 * cantidad}
function fmX(cantidad){return 160 + 80 * cantidad}

function umY(cantidad){return 400 + 146 * cantidad}

function setup() {
    // get a reference to the sprite sheet we've just loaded:
    let textures = PIXI.loader.resources["images/Jungle-Tileset.json"].textures;
    
    // initialize background sprite
    let tx_floor_tipLeft = textures["Jungle-Tileset_0002_floor_tip.png"];
    let tx_floor = textures["Jungle-Tileset_0004_floor.png"];
    let tx_floor_cornerUp = textures["Jungle-Tileset_0001_floor_cornerUp.png"];
    let tx_floor_diagonal = textures["Jungle-Tileset_0003_floor_diagonal.png"];
    let tx_floor_under = textures["Jungle-Tileset_0000_floor_under.png"];
    let tx_floor_tipRight = textures["Jungle-Tileset_0002_floor_tip2.png"];
    let tx_floor_tipUnderRight = textures["Jungle-Tileset_0007_floor_underTip2.png"];
    
    let tx_under = textures["Jungle-Tileset_0012_under.png"];
    let tx_under_tipLeft = textures["Jungle-Tileset_0018_under_tip2.png"];
    let tx_under_tipRight = textures["Jungle-Tileset_0017_under_tip1.png"];
    let tx_character = textures["Jungle-Tileset_0008_barrel.png"];

    
    let floor_tipLeft = new PIXI.Sprite(tx_floor_tipLeft);
    let floor = new PIXI.Sprite(tx_floor);
    let floor_cornerUp = new PIXI.Sprite(tx_floor_cornerUp);
    let floor_diagonal = new PIXI.Sprite(tx_floor_diagonal);
    let floor_under = new PIXI.Sprite(tx_floor_under);
    let floor_tipRight = new PIXI.Sprite(tx_floor_tipRight);

    let floor2 = new PIXI.Sprite(tx_floor);
    let floor_underTipRight = new PIXI.Sprite(tx_floor_tipUnderRight);

    floor_tipLeft.y = fmY(4)
    floor_tipLeft.x = fmX(0)
    floor.y = fmY(4)
    floor.x = fmX(1)
    floor_cornerUp.y = fmY(4)
    floor_cornerUp.x= fmX(2)
    floor_diagonal.y = fmY(3)
    floor_diagonal.x= fmX(2)
    floor2.y = fmY(3)
    floor2.x = fmX(3)
    floor_under.y = fmY(4)
    floor_under.x = fmX(3)
    floor_tipRight.y = fmY(3)
    floor_tipRight.x = fmX(4)
    floor_underTipRight.y = fmY(4)
    floor_underTipRight.x = fmX(4)

    

    let under = new PIXI.Sprite(tx_under);
    under.y = umY(0)
    under.x = 250
    let under_tipLeft = new PIXI.Sprite(tx_under_tipLeft);
    under_tipLeft.y = umY(0) -4  
    under_tipLeft.x = 190
    let under_tipRight = new PIXI.Sprite(tx_under_tipRight);
    under_tipRight.y = umY(0)-4
    under_tipRight.x = 400
    
    let character = new PIXI.Sprite(tx_character);
    character.y = fmY(2)+4
    character.x = fmX(3)


    // add it to the stage
    app.stage.addChild(floor_tipLeft);
    app.stage.addChild(floor);
    app.stage.addChild(floor_cornerUp);
    app.stage.addChild(floor_diagonal);
    app.stage.addChild(floor2);
    app.stage.addChild(floor_under);
    app.stage.addChild(floor_tipRight);
    app.stage.addChild(floor_underTipRight);

    app.stage.addChild(under_tipLeft);
    app.stage.addChild(under_tipRight);
    app.stage.addChild(under);
    
    app.stage.addChild(character);
}