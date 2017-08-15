let countdown = 25;
let breaktime = 5;
let timer = 25 + ':00';
let pause = null;
let counting;
let seconds = '00';
let minutes = null;

$(document).ready(function() {
  $('#timer').html(timer);
})

$('body').on('click', '.breakminus', function() {
  if (breaktime > 1) {
    breaktime--;
    $('#break').html(breaktime);
    if ($('#title').text() === 'Session') {
      return;
    } else {
      minutes = breaktime;
      if (seconds == 0) {
        seconds = "00";
      }
      $('#timer').html(breaktime + ":" + seconds);
    }
  }
})

$('body').on('click', '.breakplus', function() {
  breaktime++;
  $('#break').html(breaktime);
  if ($('#title').text() === 'Session') {
    return;
  } else {
    minutes = breaktime;
    if (seconds == 0) {
      seconds = "00";
    }
    $('#timer').html(breaktime + ":" + seconds);
  }
})

$('body').on('click', '.sessionminus', function() {
  if (countdown > 1) {
    countdown--;
    $('#session').html(countdown);
    if ($('#title').text() === 'Session') {
      $('#timer').html(countdown + ":" + seconds);

      if (minutes !== null) {
        minutes = countdown;
      }

    } else {
      return;
    }
  }
})

$('body').on('click', '.sessionplus', function() {
  countdown++;
  $('#session').html(countdown);
  if ($('#title').text() === 'Session') {
    $('#timer').html(countdown + ":" + seconds);

    if (minutes !== null) {
      minutes = countdown;
    }

  } else {
    return;
  }
})

$('body').on('click', '.clock', function() {
  if (pause || pause === null) {
    counting = setInterval(counter, 1000);
    pause = false;
  } else {
    clearInterval(counting);
    pause = true;
  }
})

$('body').on('click', '.reset', function() {
  seconds = 0;
  if (!pause) {
    clearInterval(counting);
    pause = true;
  }
  $('#timer').html(minutes + ":0" + seconds);
})

counter = () => {
  if (minutes === 0 && seconds === 0) {

    if ($('#title').text() === 'Session') {
      alert("Time's up! Go to break.");
      $('#title').html("Break");
      minutes = breaktime;
      seconds = 60;
      $('#timer').html(minutes + ':00');

    } else if ($('#title').text() === 'Break') {
      alert("Time's up! Get back to work.");
      $('#title').html("Session");
      minutes = countdown;
      seconds = 60;
      $('#timer').html(minutes + ':00');
    }

  } else {

    if (minutes == null) {
      minutes = countdown;
      minutes--;
      seconds = 59;
      $('#timer').html(minutes + ':' + seconds);

    } else if (seconds > 10 && seconds !== 60) {
      seconds--;
      $('#timer').html(minutes + ':' + seconds);

    } else if (seconds <= 10 && seconds !== 0) {
      seconds--;
      $('#timer').html(minutes + ':0' + seconds);

    } else if (seconds === 0 || seconds === 60) {
      minutes--;
      seconds = 59;
      $('#timer').html(minutes + ':' + seconds);
    }
  }
}
