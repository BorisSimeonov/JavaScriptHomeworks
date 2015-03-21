function pad(num) {
    var size = 2;
    var checker = num + "";
    while (checker.length < size) checker = "0" + checker;
    return checker;
}
function getDateNow(){
    var d = new Date();
    var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Dec"];
    console.log(dayNames[d.getUTCDay()] + ", "
    + pad(d.getUTCDate()) + " " + monthNames[d.getUTCMonth()] + " " + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) +
    ":" + pad(d.getUTCSeconds()) + " UTC/GTM");
}

//setInterval(function(){getDateNow()}, 1000);   //Clock-like function
getDateNow();