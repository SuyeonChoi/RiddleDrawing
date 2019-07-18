window.onload = function(){
    window.drawableCanvas.initialize('drawable_canvas', 300, 300);
    document.querySelector('#remove-btn').addEventListener('click', function(){
        window.drawableCanvas.clear();
    })
}