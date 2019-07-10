/**
 * creatable_canvas.js with sketch_rnn.js & p5.js & p5.svg.js
 * https://github.com/seong954t/RiddleDrawing
 *
 * Copyright 2019, Seungtae Kim
 * under the MIT license.
 */
(function() {
    function initialize(width, height){

    }

    function drawImage(imageData, color){

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