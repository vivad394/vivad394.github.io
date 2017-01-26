var numOfClicks = 0;

$(".button").mousemove(function() {
    // do stuff...
    numOfClicks++;
    $(".body").append("you clicked it...");
    
});