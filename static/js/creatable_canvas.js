/**
 * creatable_canvas.js with sketch_rnn.js & p5.js & p5.svg.js
 * https://github.com/seong954t/RiddleDrawing
 *
 * Copyright 2019, Seungtae Kim
 * under the MIT license.
 */
(function() {
    function initialize(width, height){
        createCanvas(width, height);
    }

    function drawImage(imageData, color, weight){
        let x = canvas.width/4;
        let y = canvas.height/4;
        let dx, dy;
        let pen_down = 0, pen_up = 1, pen_end = 0;

        clear();
        for(let i=0; i<imageData.length; i++) {
            [dx, dy, pen_down, pen_up, pen_end] = imageData[i];
        
            if (pen_end == 1) {
                break;
            }
    
            if (pen_down == 1) {
                stroke(color);
                strokeWeight(weight);
                line(x, y, x+dx, y+dy);
            }
        
            x += dx;
            y += dy;
        }
    }

    const creatableCanvas = {
        initialize: initialize,
        drawImage: drawImage
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return creatableCanvas;
        });
    } else if (typeof module !== 'undefined') {
        module.exports = creatableCanvas;
    } else {
        window.creatableCanvas = creatableCanvas;
    }
})();
