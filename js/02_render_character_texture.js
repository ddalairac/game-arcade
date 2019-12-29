
//load an image and run the `setup` function when it's done
PIXI.Loader.shared
    .add("images/cat.png")
    .add("images/dog.png")
    .add("images/bird.png")
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {

    //Display the file `url` currently being loaded
    console.log("loading: " + resource.url);

    //Display the percentage of files currently loaded
    console.log("progress: " + loader.progress + "%");

    //If you gave your files names as the first argument 
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);
}

function setup() {
    console.log("All files loaded");

    //Create sprite
    let cat = new PIXI.Sprite(PIXI.Loader.shared.resources["images/cat.png"].texture);
    cat.x = 96;
    cat.y = 96;
    cat.width = 60;
    cat.height = 60;
    // cat.scale.x = 0.5;
    // cat.scale.y = 0.5;
    // cat.scale.set(0.5, 0.5);
    cat.rotation = 3
    cat.anchor.x = 0.5;// centro del eje de giro
    cat.anchor.y = 0.5;
    cat.pivot.set(0.5, 0.5)



    //Add img a stage
    app.stage.addChild(cat);

}