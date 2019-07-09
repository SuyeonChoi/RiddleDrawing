/**
 * drawable_canvas.js with fabric.js
 * https://github.com/seong954t/RiddleDrawing
 *
 * Copyright 2019, Seungtae Kim
 * under the MIT license.
 */
(function() {

    function initialize(id){

    }

    const event = {
        mouse: {
            down: mouseDownHandler,
            up: mouseUpHandler,
            move: mouseMoveHandler
        }
    }
    const drawableCanvas = {
        initialize: initialize,
        event: event
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return drawableCanvas;
        });
    } else if (typeof module !== 'undefined') {
        module.exports = drawableCanvas;
    } else {
        window.drawableCanvas = drawableCanvas;
    }
})();