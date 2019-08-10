var temperature = 0.9;
const z_0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let answerClassName;
let point = 10;
let totalPoint;
let totalPointElement;

let answerElement;
let createdCanvas;
var classList = [
    'ant',
    'antyoga',
    'alarm_clock',
    'ambulance',
    'angel',
    'backpack',
    'barn',
    'basket',
    'bear',
    'bee',
    'beeflower',
    'bicycle',
    'bird',
    'book',
    'brain',
    'bridge',
    'bulldozer',
    'bus',
    'butterfly',
    'cactus',
    'calendar',
    'castle',
    'cat',
    'catbus',
    'catpig',
    'chair',
    'couch',
    'crab',
    'crabchair',
    'crabrabbitfacepig',
    'cruise_ship',
    'diving_board',
    'dog',
    'dogbunny',
    'dolphin',
    'duck',
    'elephant',
    'elephantpig',
    'eye',
    'face',
    'fan',
    'fire_hydrant',
    'firetruck',
    'flamingo',
    'flower',
    'floweryoga',
    'frog',
    'frogsofa',
    'garden',
    'hand',
    'hedgeberry',
    'hedgehog',
    'helicopter',
    'kangaroo',
    'key',
    'lantern',
    'lighthouse',
    'lion',
    'lionsheep',
    'lobster',
    'map',
    'mermaid',
    'monapassport',
    'monkey',
    'mosquito',
    'octopus',
    'owl',
    'paintbrush',
    'palm_tree',
    'parrot',
    'passport',
    'peas',
    'penguin',
    'pig',
    'pigsheep',
    'pineapple',
    'pool',
    'postcard',
    'power_outlet',
    'rabbit',
    'rabbitturtle',
    'radio',
    'radioface',
    'rain',
    'rhinoceros',
    'rifle',
    'roller_coaster',
    'sandwich',
    'scorpion',
    'sea_turtle',
    'sheep',
    'skull',
    'snail',
    'snowflake',
    'speedboat',
    'spider',
    'squirrel',
    'steak',
    'stove',
    'strawberry',
    'swan',
    'swing_set',
    'the_mona_lisa',
    'tiger',
    'toothbrush',
    'toothpaste',
    'tractor',
    'trombone',
    'truck',
    'whale',
    'windmill',
    'yoga',
    'yogabicycle'
];

window.onload = function(){
    totalPointElement = document.querySelector("#score");
    answerElement = document.querySelector("#input-answer");
    totalPoint = 0;
    updateTotalPoint();
    
    $("#startModal").modal();
    answerElement.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            if(answerClassName === answerElement.value.toLowerCase()){
                answerElement.style.color = "green";
                totalPoint += point;
                point += 10;
            } else{
                answerElement.style.color = "red";
                answerElement.value = answerClassName;
                point = 10;
            }
            updateTotalPoint();
            setTimeout(function(){
                generateImage();
            }, 1000);
        }
    })
    $('#startGame').on("click", function(){
        if(modelArray.length > 0){
            $("#startModal").modal("hide");
            Timer(document.querySelector("#timer").innerText, document.querySelector("#timer").innerText, $('#timer'), timeover);
            generateImage();
        }
    });

    function Timer(timeleft, timetotal, $element, callback){
        $element.html(timeleft%61);
        if(timeleft > 0) {
            setTimeout(function() {
                Timer(timeleft - 1, timetotal, $element, callback);
            },1000);
        }
        else{
          setTimeout(function() {
              callback();
          },1000);
        }
    };

    function timeover(){
        $("#endModal").modal("show");
        answerElement.disabled = true;
        document.querySelector(".total-score div").innerText = totalPoint;
    }

    document.querySelector(".btn-primary").addEventListener("click", function(){
        upload(document.querySelector("#user-name").value, totalPoint, "guess").then(function(){
            getData(popupRankBox, "guess");
        });
    });
    
    document.querySelector(".btn-danger").addEventListener("click", function(){
        getData(popupRankBox, "guess");
    });

    document.querySelector("#out-btn").addEventListener("click", function(){
        location.href = "./index.html";
    })
}

function updateTotalPoint(){
    totalPointElement.innerText = "Total Score : "+totalPoint+" points";
}

function setup(){
    createdCanvas = creatableCanvas.initialize(400, 400);
    createdCanvas.parent("ai_canvas");
    createSelectedDrawing();
}

function generateRandomNum() {
    return Math.floor((Math.random() * classList.length) + 0);
}

function createSelectedDrawing() {
    if(modelArray.length < 3 && classList.length > 0){
        var pickedIndex = generateRandomNum();
        console.log(pickedIndex);
        addImageData(classList[pickedIndex]);
        classList.splice(pickedIndex,1);
    }
}

const modelArray = [];
const answerArray = [];

function addImageData(type){
    $.ajax({
        dataType: "json",
        url: "https://s3.ap-northeast-2.amazonaws.com/elice-project-drawsomething/"+type+".vae.json",
    }).done(function(data){
        modelArray.push(new SketchRNN(JSON.parse(JSON.stringify(data))));
        answerArray.push(type.replace(/_/gi, " "));
        createSelectedDrawing();
    });
}

function generateImage(){
    answerElement.style.color = "black";
    answerElement.value = "";
    createSelectedDrawing();
    let model = modelArray.shift();
    let drawing = model.decode(z_0, temperature);
    drawing = model.scale_drawing(drawing, 90);
    drawing = model.center_drawing(drawing);
    creatableCanvas.drawImage(drawing, 'black', 5);
    answerClassName = answerArray.shift();
    answerElement.placeholder = answerClassName[0];
}