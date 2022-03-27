function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Initialized");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x - 20;
    noseY = results[0].pose.nose.y - 7;
  }
  }


  noseX = 0;
  noseY = 0;
function draw(){
image(video,0,0,300,300);
image(moustache,noseX,noseY,50,50);
}

function take_snapshot(){
    save("MyFilter.png");
}

function preload(){
    moustache = loadImage("https://i.postimg.cc/CxkG4yHB/moustache.png");
}
