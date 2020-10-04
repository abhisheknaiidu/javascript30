function countdown() {
  var today = new Date();
  var eventDate = new Date("December 25, 2020 00:00:00");
  //Change eventDate to add new date for countdown in the format "Month DD, YYYY HH:MM:SS"
  var currentTime = today.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTime;

  var secs = Math.floor(remTime / 1000);
  var mins = Math.floor(secs / 60);
  var hrs = Math.floor(mins / 60);
  var days = Math.floor(hrs / 24);

  hrs = hrs % 24;
  mins %= 60;
  secs %= 60;

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  document.getElementById("secs").innerHTML = secs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("days").innerHTML = days;

  setInterval(countdown, 1000);
}

countdown();
