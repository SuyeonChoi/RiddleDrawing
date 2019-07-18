window.onload = function(){
    window.drawableCanvas.initialize('drawable-canvas', 400, 400);
    document.querySelector('#clear-btn').addEventListener('click', function(){
        window.drawableCanvas.clear();
    })
}