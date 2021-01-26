function setup() {
    canvas=createCanvas(400,300);
    canvas.position(450,225);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,300);
}