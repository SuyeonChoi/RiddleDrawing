window.onload = function(){
    window.drawableCanvas.initialize('drawable_canvas');
    document.querySelector('#remove-btn').addEventListener('click', function(){
        window.drawableCanvas.clear();
    })
