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

    function isDrawingMode(isDrawable){
        
    }

    function setBackgroundColor(color){

    }

    function setBrushWidth(width){

    }

    function setBrushColor(color){

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
        event: event,
        isDrawingMode: isDrawingMode,
        setBackgroundColor: setBackgroundColor,
        setBrushWidth: setBrushWidth,
        setBrushColor: setBrushColor
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