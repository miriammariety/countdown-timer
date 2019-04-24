updateTimer();

$(document).ready(function(){
    setInterval(updateTimer, 1000)
}); 

function updateTimer(){
    var arrival = new Date(2019, 11, 01);
    var dateNow = new Date();

    var diff = new Date(arrival - dateNow);

    days = Math.floor(diff / 86400000);
    diff %= 86400000;
    hours = Math.floor(diff / 3600000);
    diff %= 3600000;
    minutes = Math.floor(diff / (3600000/60));
    diff %= 3600000/60;
    seconds = Math.floor(diff / ((3600000/60) / 60));


    $("#day").text(days);
    $("#hour").text(hours);
    $("#minute").text(minutes);
    $("#second").text(seconds);
}