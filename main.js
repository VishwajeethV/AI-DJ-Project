song=""
rightwristx=""
rightwristy=""
leftwristx=""
leftwristy=""
leftwristscore=""

function preload() {
    song=loadSound("music.mp3");  
    song=loadSound("music2.mp3");  
}
function setup() {
    canvas=createCanvas(400,300);
    canvas.position(450,225);
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses());
}

function modelLoaded() {
    console.log("posenet is initialized");
}


function draw() {
    image(video,0,0,400,300);

    circle(leftwristx,leftwristy,20);

    if(leftwristscore>0.2) {
        circle(leftwristX,leftwristY,20);   
        if(song="music.mp3") {
            song.stop("music.mp3");
            song.play("music2.mp3");
        }
        else{
            song.stop("music2.mp3");
            song.play("music.mp3");
        }
 }
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        leftwristscore=results[0].pose.keypoints[9].score;
        rightwristscore=results[0].pose.keypoints[10].score;
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
   
        console.log("left wrist X =" + leftwristX);
        console.log("left wrist Y =" + leftwristY);
        console.log("right wrist X=" + rightwristX);
        console.log("right wrist Y=" + rightwristY);
    }
}