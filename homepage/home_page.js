var myArray = ["sol.jpg", "mano.jpg", "apache.jpg", "rosa.jpg", "calavera.jpg", 
"luna.jpg", "escalera.jpg", "sirena.jpg", "paraguas.jpg", "corazon.jpg", "sandia.jpg", "estrella.jpg"];


$(".deck").click(function() {
    console.log("you clicked it...");
    var newCards = myArray[Math.floor(Math.random()*myArray.length)];
    $(".deck").html('<img src="' + newCards + '" width="100%">');
 
});


$( ".draggable" ).draggable();
