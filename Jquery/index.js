
$("h1").addClass("big-title");

$("h1").text("bla bla");

$("button").html("<em>Click me</em>");

$("input").keydown(function(Event){
    $("h1").text(Event.key);
});