Webcam.set({
width: 310,
height: 300,
image_format: 'png',
png_quality: 90,

constraints: { 
    facingMode: "environment"
 }
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
 function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
     });
 }
 console.log('ml5 virsion', ml5.virsion);
 classifier=ml5.imageClassifier('Mobilnet',modelLoaded);
 function modelLoaded(){
     console.log('model is loaded');
 }
  function check(){
       img=document.getElementById('captured_image');
       classifier.classify(img, gotResult);
  }
  function gotResult(error, results){
      if(error){
          console.error(error);
      }
      else{
          console.log(results);
          document.getElementById("display").innerHTML=result[0].label;
      }
  }