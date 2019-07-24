
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
<<<<<<< HEAD
Timer(60,60,$('#time'));
=======
Timer(10,10,$('#time'));
>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60



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
<<<<<<< HEAD
progress("60", "60", $('#progressBar'));
=======
progress(10, 10, $('#progressBar'));
>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60


//원그래프 CountDown
