for (var dots = 0; dots <  120 ; dots++) {
    $(".wrapper").append("<div class='circle'></div>");
}
$(".circle").html("1");

var counter = 1;
$(".circle").each(function() {
   console.log(counter);
   $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("height",(100+counter));
    $(this).css("width",(100+counter));
    $(this).css("transform","rotate("+ (counter/120)*360 + "deg)");
    $(this).css("top",Math.floor(Math.random()*$(window).height())); 
     $(this).css("left",Math.floor(Math.random()*$(window).width())); 
   counter++;
   //run this code
});

var hasClicked = false;
var myColors = ["blue","red","lime","grey"];
var lastColor = false;


$(".circle").click(function() {
    console.log(hasClicked);
    
    
    hasClicked = true;
    
    var newColor = myColors[Math.floor(Math.random()*myColors.length)];
    while (newColor == lastColor) {
        newColor = myColors[Math.floor(Math.random()*myColors.length)];
        console.log("getting new color...");
    }
    lastColor = newColor;
    $(".circle").css("background-color",newColor);
    
    $(".circle").css("color","blue");
    $(".body").css("background-color","red");
  
});

