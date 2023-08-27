
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(10,150)

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

    
}

function draw(){
    background('#969A97');
    value1 = document.getElementById("value_user").value;

    document.getElementById("square_side").innerHTML = "size of text = "+difference +"px";
    fill('#F90093');
    
    textSize(difference);
    text(value1,noseX, noseY);
    
}

function modelLoaded()
{
    console.log('poseNet is Initilized');
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX =0;

function gotPoses(results)
{

    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = "+noseX+"nose Y ="+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX ="+rightWristX+"difference = "+difference);
    }
}