var temperature = 0.1;
const z_0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
window.onload = function(){
    setup();
}
function generateSpider(){
    $.ajax({
        dataType: "json",
        url: "https://s3.ap-northeast-2.amazonaws.com/elice-project-drawsomething/spider.vae.json",
    }).done(function(data){
        let model = new SketchRNN(JSON.parse(JSON.stringify(data)));
        
        let drawing = model.decode(z_0, temperature);
        drawing = model.scale_drawing(drawing, 90);
        drawing = model.center_drawing(drawing);
        
        creatableCanvas.drawImage(drawing, 'black', 10);
    });
}

function setup(){
    creatableCanvas.initialize(480, 320);
}