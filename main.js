noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    Video = createCapture(VIDEO);
    Video.size(550,500);
    Canvas = createCanvas(550,500);
    Canvas.position(560,150);
    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX + "noseY = "+noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(rightWristX-leftWristX);
        console.log("rightWrist = "+rightWristX+ "leftWrist = "+leftWristX+"difference = "+difference);
    }
}
function draw(){
    background('#DCDCDC');
    document.getElementById("square_side").innerHTML ="Width and Height of a Square will be = "+difference+"px";
   word(Allen,noseX,noseY,difference);
  
}