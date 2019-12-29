
//load an image and run the `setup` function when it's done
PIXI.loader
    .add("images/cat.png")
    .add("images/dog.png")
    .add("images/bird.png")
    .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

    //Create sprite
    let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
    let dog = new PIXI.Sprite(PIXI.loader.resources["images/dog.png"].texture);
    let bird = new PIXI.Sprite(PIXI.loader.resources["images/bird.png"].texture);

    //Add img a stage
    app.stage.addChild(cat);
    app.stage.addChild(dog);
    app.stage.addChild(bird);

    // remover img
    app.stage.removeChild(dog)
    // hidde img
    bird.visible = false;
}