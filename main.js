function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OHRRH9cxz/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results){
if(error){
    console.error(error);
}
else {
    console.log(results);

    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ results[0].label;
    document.getElementById("result_count").innerHTML = "Detected Dog Sound - "+ dog + "Detcted Cat Sound - "+ cat + "Detected Cow Sound - "+ cow + "Deteced Lion Sound - "+lion;
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";


    img = document.getElementById('earimg');

    
    if(results[0].label=="Cat"){
        img.src = 'cartooncatgif.gif';
        cat = cat+1;
    
    }

    else if(results[0].label=="Dog"){
        img.src = 'cartoondoggif.gif';
        dog = dog+1;
    }

    else if(results[0].label=="Cow"){
        img.src = 'cartooncowgif.gif';
        cow = cow+1;
    }

    else if(results[0].label=="Lion"){
        img.src = 'cartoonliongif.gif';
        lion = lion+1;
    }

    else{
        img.src = 'earimg.gif'
    }
}}
