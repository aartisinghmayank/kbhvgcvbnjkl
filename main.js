var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bf59916-5120-4102-9a3f-6721b47ba8b8/de4dsix-f049094d-4f66-4ec9-bbc7-c86108d6710e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiZjU5OTE2LTUxMjAtNDEwMi05YTNmLTY3MjFiNDdiYThiOFwvZGU0ZHNpeC1mMDQ5MDk0ZC00ZjY2LTRlYzktYmJjNy1jODYxMDhkNjcxMGUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gfdxd-ZQiDPiONzQ432JefJtf6FzDXI-BP05iK9z-aY";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://media0.giphy.com/media/yXPquATCb8kGk/200w.gif?cid=6c09b952p0fvhjzidhu45db2318k0egboy5zogas9vfi52t2&ep=v1_gifs_search&rid=200w.gif&ct=g";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://i.pinimg.com/originals/10/64/53/1064531ddbb6c82b5c87adac0c6af29e.gif";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://static.vecteezy.com/system/resources/previews/009/456/852/original/a-cute-cow-says-moo-farm-animals-speech-bubble-children-s-cards-children-s-teaching-flat-illustration-vector.jpg";
                        
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://media0.giphy.com/media/IfxBjGrbIK3vwkODkA/200w.gif?cid=6c09b952ss7ny3rnaqo3lr3ecg6mmpfhhweuducg94c8az2d&ep=v1_gifs_search&rid=200w.gif&ct=g";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}