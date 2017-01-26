$("body").css("background-color","red");

for (var dots = 0; dots < 100; dots++) {
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
     $(this).css("font-size",(counter));
     $(this).css("transform","rotate("+ (counter/100)*360 + "deg)");
     $(this).css("top",Math.floor(Math.random()*$(window).height())); 
     $(this).css("left",Math.floor(Math.random()*$(window).width())); 
   counter++;
   //run this code
});

    