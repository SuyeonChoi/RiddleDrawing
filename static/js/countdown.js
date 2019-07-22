
/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(seconds);
        if (--timer < 0) {
            display.text("GameOver");
        }
    }, 1000);
}
jQuery(function ($) {
    var GameTime = 60,
        display = $('#time');
    startTimer(GameTime, display);
});

*/
//기본 초 카운트 다운
function Timer(timeleft, timetotal, $element){
  $element.html(timeleft%60);
  if(timeleft > 0) {
      setTimeout(function() {
          Timer(timeleft - 1, timetotal, $element);
      }, 1000);
    }
};
Timer(10,10,$('#time'));



//Bar CountDown
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};
progress("10", "10", $('#progressBar'));


//원그래프 CountDown
