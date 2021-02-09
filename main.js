music1Peterpan="music2.mp3"
music2harrypotterthemesong="music.mp3"
rightwristx=""
rightwristy=""
leftwristx=""
leftwristy=""


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
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("posenet is initialized");
}


function draw() {
    image(video,0,0,400,300);
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