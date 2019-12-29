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
app.renderer.autoDensity = true;
app.renderer.resize(window.innerWidth, window.innerHeight)

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);





//Aliases
let Application = PIXI.Application
let loader = PIXI.Loader.shared
let resources = PIXI.Loader.shared.resources
let Sprite = PIXI.Sprite
let TextureCache = PIXI.utils.TextureCache
let Rectangle = PIXI.Rectangle