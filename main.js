Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach(camera);
function Tomar_foto(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
clasifica=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image');
 function modelLoaded (){
    console.log ("modelo cargado")
 }
 function Identifica(){
    img=document.getElementById("captured_image");
    clasifica.classify(img, gotResults );


 }
 function gotResults (error, Results){
    if(error){
        console.error(error);

    }
    else{
        console.log(Results);
        document.getElementById("object").innerHTML= Results[0].label;
        document.getElementById("precision").innerHTML= Results[0].confidence;
    }
 }