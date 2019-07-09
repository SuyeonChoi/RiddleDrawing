/**
 * drawable_canvas.js with fabric.js
 * https://github.com/seong954t/RiddleDrawing
 *
 * Copyright 2019, Seungtae Kim
 * under the MIT license.
 */
(function() {
    let canvas;

    function initialize(id){
        canvas = window._canvas = new fabric.Canvas(id);
        setBackgroundColor('#ffffff');
        setBrushColor('#000000');
        setBrushWidth(10);
        setDrawingMode(true);
        setWidth(300);
        setHeight(300);
        canvas.renderAll();
        
        canvas.freeDrawingBrush.width = 10;
    }

    function setDrawingMode(isDrawable){
        if(isDrawable){
            canvas.isDrawingMode = 1;
        }else{
            canvas.isDrawingMode = 0;
        }
    }

    function setBackgroundColor(color){
        canvas.backgroundColor = color;
        canvas.renderAll();
    }

    function setBrushWidth(width){
        canvas.freeDrawingBrush.width = width;
    }

    function setBrushColor(color){
        canvas.freeDrawingBrush.color = color;
    }

    function setHeight(height){
        canvas.setHeight(height);
    }

    function setWidth(width){
        canvas.setWidth(width);
    }

    // const event = {
    //     mouse: {
    //         down: mouseDownHandler,
    //         up: mouseUpHandler,
    //         move: mouseMoveHandler
    //     }
    // }

    const drawableCanvas = {
        initialize: initialize,
        // event: event,
        setDrawingMode: setDrawingMode,
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