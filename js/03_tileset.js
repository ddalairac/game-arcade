//load an image and run the `setup` function when it's done
PIXI.Loader.shared
    .add("images/Jungle-Tileset.jpg")
    .load(setup);

//This `setup` function will run when the image has loaded
function setup() {
    //Create the `tileset` sprite from the texture
    let texture =  PIXI.utils.TextureCache["images/Jungle-Tileset.jpg"];

    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`) 
    let rectangle = new PIXI.Rectangle(110, 133, 80, 80);//x, y, width, height

    //Tell the texture to use that rectangular section
    texture.frame = rectangle;

    //Create the sprite from the texture
    let fllorTip = new PIXI.Sprite(texture);

    //Position the fllorTip sprite on the canvas
    fllorTip.x = 32;
    fllorTip.y = 32;

    //Add the fllorTip to the stage
    app.stage.addChild(fllorTip);

    //Render the stage   
    app.renderer.render(app.stage);
}