var myArray = ["sol.jpg", "mano.jpg", "apache.jpg", "rosa.jpg", "calavera.jpg", 
"luna.jpg", "escalera.jpg", "sirena.jpg", "paraguas.jpg", "corazon.jpg", "sandia.jpg", "estrella.jpg"];


$(".deck").click(function() {
    console.log("you clicked it...");
    if (myArray.length > 0) {
        //run our script if there are still items in our array
        var randomCard = Math.floor(Math.random()*myArray.length);
        var newCards = myArray[randomCard];
        $(".deck").html('<img src="' + newCards + '" width="100%">');
        //remove the chosen card from the array
        myArray.splice(randomCard, 1);
    } else {
        // do something when there are no more cards in the array
        $(".end-message").show();
        
    }
});


$( ".draggable" ).draggable();
