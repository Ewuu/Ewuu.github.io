function time() {
  var data = new Date();

  var day = data.getDate();
  var month = data.getMonth() + 1;
  var year = data.getFullYear();

  var hour = data.getHours();
  var minute = data.getMinutes();
  var second = data.getSeconds();

  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  document.getElementById("zegarLayer").innerHTML =
    day + "." + month + "." + year + " | " + hour + ":" + minute + ":" + second;


}

setInterval("time()", 1000);