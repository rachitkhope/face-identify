//https://teachablemachine.withgoogle.com/models/OrsxU7ofW/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality :90
});
Webcam.attach('#camera');
camera = document.getElementById("camera");


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5.version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yo09L9WMOD/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelloded");
}

function gotresult(error,results){
    if(error){
        console.error(error);    }
    else{
        document.getElementById("result_label").innerHTML= results[0].label;
        document.getElementById("result_Accuracy").innerHTML= results[0].confidence.toFixed(3);

    }
}

function check(){
    img=document.getElementById("captured_image");
   classifier.classify (img,gotresult) 
}