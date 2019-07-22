window.onload = function(){
    window.drawableCanvas.initialize('drawable-canvas', 400, 400);
    window.
    document.querySelector('#clear-btn').addEventListener('click', function(){
        window.drawableCanvas.clear();
    })

    function Timer(timeleft, timetotal, $element){
      $element.html(timeleft%61);
      if(timeleft > 0) {
          setTimeout(function() {
              Timer(timeleft - 1, timetotal, $element);
          }, 1000);
        }
    };
    Timer(document.querySelector("#timer").innerText,document.querySelector("#timer").innerText,$('#timer'));
}
