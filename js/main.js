$(document).ready(function(){
    var arrival = new Date(2019, 11, 01);
    var dateNow = new Date();

    var diff = new Date(arrival - dateNow);

    var days, hours, minutes, seconds;

    days = Math.floor(diff / 86400000);
    diff %= 86400000;
    hours = Math.floor(diff / 3600000);
    diff %= 3600000;
    minutes = Math.floor(diff / (3600000/60));
    diff %= 3600000/60;
    seconds = Math.floor(diff / ((3600000/60) / 60));
    console.log("day: " + days + "hours: " + hours + "mins: " + minutes + "secs: " + seconds);


    $("#day").text(days);
    $("#hour").text(hours);
    $("#minute").text(minutes);
    $("#second").text(seconds);
}); 