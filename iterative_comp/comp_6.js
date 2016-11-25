for (var dots = 0; dots <  120 ; dots++) {
    $(".wrapper").append("<div class='triangle'></div>");
}
$(".triangle").html("1");

var counter = 1;
var hasClicked = false;
var myColors = ["white","yellow","orange","purple","aqua","lime","pink","red"];
var lastColor = false;

$(".triangle").each(function() {
   console.log(counter);
   $(this).html(counter);

    

  counter++;
    
    //this code runs for each instance of circle
    
   




});


// $(".triangle").click(function() {
//     console.log("you clicked it...");
//     $(this).css("background-color","navy");
//     $(this).css("border-left","50px solid transparent");
//     $(this).css("border-right","50 px solid transparent");
//     $(this).css("border-bottom","100px solid navy");
// }); 



$(".triangle").click(function() {
    console.log(hasClicked);
    
    hasClicked = true;
    
    var newColor = myColors[Math.floor(Math.random()*myColors.length)];
    while (newColor == lastColor) {
        newColor = myColors[Math.floor(Math.random()*myColors.length)];
        console.log("getting new color...");
    }
    lastColor = newColor;
    $(this).css("border-left","50px solid transparent");
    $(this).css("border-right","50px solid transparent");
    $(this).css("border-bottom","100px solid transparent");
    $(this).css("background-color",newColor);
    
    
});