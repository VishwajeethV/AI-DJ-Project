song1=""
song2=""
rightwristx=""
rightwristy=""
leftwristx=""
leftwristy=""
leftwristscore=""

function preload() {
    song1=loadSound("music.mp3");  
    song2=loadSound("music2.mp3");  
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
        document.getElementById("123").innerHTML="Name of the song :- Peter pan";
        circle(leftwristX,leftwristY,20);   
        if(song1.isPlaying()==true) {
            song1.stop();
            song2.play();
        }
        else{
            song2.play();
        }
 }

    if(rightwristscore>0.2) {
         document.getElementById("123").innerHTML="Name of the song :- Harry potter theme song";
        circle(rightwristX,rightwristY,20);   
        if(song2.isPlaying()==true) {
            song2.stop();
            song1.play();
        }
        else{
            song1.play();
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