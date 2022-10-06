nosex = 0;
nosey = 0;
difference = 0;
left_wristx = 0;
right_wristx = 0;

function setup(){
   video = createCapture(VIDEO);
   video.size(550, 500);
   video.position(20, 150);

canvas = createCanvas(550, 500);
canvas.position(650, 150);

   poseNet = ml5.poseNet(video, modelLoded);
   poseNet.on("pose", gotPoses);
}
function modelLoded(){
 console.log("model is loaded");
}
function draw(){
  background("grey");
  fill("#71f5f5");
  textSize(difference);
  text("sai", nosex, nosey);
  document.getElementById("span1").innerHTML = "The width and height of the text is = " + difference + "px";
}
function gotPoses(results){
 if(results.length > 0){
 console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = " + nosex + "nosey = " + nosey);
left_wristx = results[0].pose.leftWrist.x;
right_wristx = results[0].pose.rightWrist.x;
console.log("leftWrist = " + left_wristx + "rightWrist = " + right_wristx + "difference= " + difference);
difference = floor(left_wristx - right_wristx);
 }
  }