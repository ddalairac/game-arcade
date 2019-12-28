//Create a Pixi Application
// http://pixijs.download/release/docs/PIXI.Application.html
let app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});

// Fit windows size
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

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