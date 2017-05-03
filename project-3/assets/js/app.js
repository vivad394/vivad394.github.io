setTimeout(function(){ 
	$(".pick").fadeIn();
}, 500);

setTimeout(function(){ 
	$(".choices").fadeIn();
}, 1000);

$(".one").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").hide();
		$(".arrived").show();
		$(".line").hide();
	} else {
		console.log("try again...");
		$(".pick").hide();
		$(".deported").show();	
	}
	$(".choices").hide();
});

$(".two").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").hide();
		$(".crossed").show();
		$(".line").hide();
	} else {
		console.log("try again...");
		$(".pick").hide();
		$(".caught").show();	
	}
	$(".choices").hide();
});

$(".three").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").hide();
		$(".swimming").show();
		$(".line").hide();
	} else {
		console.log("try again...");
		$(".pick").hide();
		$(".stopped").show();	
	}
	$(".choices").hide();
});

$(".back").click(function() {
	$(".choices").show();
	$(".pick").show();
	$(".deported").hide();	
	$(".caught").hide();
	$(".stopped").hide();

})