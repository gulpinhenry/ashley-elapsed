
var m = $("#num-minutes");
var s = $("#num-seconds");

function update()
{
    setInterval(function(){

        var d = moment().diff(moment("08/21/2021", "MM/DD/YYYY"), 'days');
        var h = moment();
        var m = moment();
        var s = moment();
        $("#num-days").text(d);
        $("#num-hours").text(h.format("HH"));
        $("#num-minutes").text(m.format("mm"));
        $("#num-seconds").text(s.format("ss"));
    },500);
}

update();