function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(seconds);
        if (--timer < 0) {
            //timer = duration;
            display.text("GameOver");
        }
    }, 1000);
}

jQuery(function ($) {
    var GameTime = 60,
        display = $('#time');
    startTimer(GameTime, display);
});
