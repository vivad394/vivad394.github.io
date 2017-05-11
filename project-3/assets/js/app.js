// TRANSITION IN TO HOMEPAGE --------------------------------------------------------------

setTimeout(function(){ 
	$(".pick").fadeIn();
}, 1000);

setTimeout(function(){
	console.log("fading in");
	$(".line").fadeIn();
},2000);

setTimeout(function(){ 
	$(".choices").fadeIn();
}, 500);

// HOMEPAGE---------------------------------------------------------------------------------

$(".one").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").fadeOut();
		$(".arrived").fadeIn();
		$(".line").fadeOut();
		$(".deported").hide();
	} else {
		console.log("try again...");
		$(".pick").fadeOut();
		$(".background-black").fadeIn();
		$(".arrived").hide();
		traveling();
	}
	$(".choices").fadeOut();

});

$(".two").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").fadeOut();
		$(".crossed").fadeIn();
		$(".line").fadeOut();

	} else {
		console.log("try again...");
		$(".pick").fadeOut();
		$(".caught").fadeIn();
		$(".background-black").fadeIn();
		traveling2();
	}
	$(".choices").hide();
});

$(".three").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").fadeOut();
		$(".swimming").fadeIn();
		$(".line").fadeOut();
	} else {
		console.log("try again...");
		$(".pick").fadeOut();
		$(".stopped").fadeIn();
		$(".background-black").fadeIn();	
	}
	$(".choices").hide();
});

$(".four").click(function() {
	var diceRoll = Math.floor(Math.random()*5);
	if (diceRoll < 1) {
		console.log("you made it");
		$(".pick").fadeOut();
		$(".flying").fadeIn();
		$(".line").fadeOut();
	} else {
		console.log("try again...");
		$(".pick").fadeOut();
		$(".staying").fadeIn();	
		$(".background-black").fadeIn();
	}
	$(".choices").hide();
});

$(".back").click(function() {
	$(".background-black").fadeOut();
	$(".choices").show();
	$(".pick").show();
	$(".deported").hide();	
	$(".caught").hide();
	$(".stopped").hide();
	$(".staying").hide();

});


function traveling() {
	var traveling = setTimeout(function(){ 
		$(".traveling").addClass('hide');
		$(".deported").fadeIn();	
	}, 1000);

}

function traveling2() {
	var traveling = setTimeout(function(){ 
		$(".traveling").addClass('hide');
		$(".caught").fadeIn();	
	}, 2000);

}


// JOBS--------------------------------------------------------------------------


$(".uno").click(function() {
	var diceRoll = Math.floor(Math.random()*10);
	if (diceRoll < 5) {
		console.log("you made it");
		$(".pick-jobs").fadeOut();
		$(".accepted").fadeIn();
		$(".background-jobs").fadeIn();	
	} else {
		console.log("try again...");
		$(".pick-jobs").fadeOut();
		$(".rejected").fadeIn();
}
	$(".jobs").fadeOut();
	$(".red").fadeOut();
});

$(".dos").click(function() {
	var diceRoll = Math.floor(Math.random()*10);
	if (diceRoll < 5) {
		console.log("you made it");
		$(".pick-jobs").fadeOut();
		$(".cooking").fadeIn();
		$(".background-jobs").fadeIn();
	} else {
		console.log("try again...");
		$(".pick-jobs").fadeOut();
		$(".waiting").fadeIn();
}
	$(".jobs").hide();{
		console.log("im hiding...");}
	$(".red").fadeOut();
});

$(".tres").click(function() {
	var diceRoll = Math.floor(Math.random()*10);
	if (diceRoll < 5) {
		console.log("you made it");
		$(".pick-jobs").fadeOut();
		$(".limpiando").fadeIn();
		$(".background-jobs").fadeIn();
	} else {
		console.log("try again...");
		$(".pick-jobs").fadeOut();
		$(".saliendo").fadeIn();
}
	$(".jobs").hide();{
		console.log("im hiding...");}
	$(".red").fadeOut();
});

$(".cuatro").click(function() {
	var diceRoll = Math.floor(Math.random()*10);
	if (diceRoll < 5) {
		console.log("you made it");
		$(".pick-jobs").fadeOut();
		$(".constructing").fadeIn();
		$(".background-jobs").fadeIn();
	} else {
		console.log("try again...");
		$(".pick-jobs").fadeOut();
		$(".not").fadeIn();
}
	$(".jobs").hide();{
		console.log("im hiding...");}
	$(".red").fadeOut();
});

$(".back2").click(function(){
	$(".pick-jobs").fadeIn();
	$(".jobs").fadeIn();
	$(".rejected").fadeOut();
	$(".waiting").fadeOut();
	$(".saliendo").fadeOut();
	$(".not").fadeOut();
	if ($('.red').hasClass('clicked')) {
		// dont do anything
	} else {
		$('.red').fadeIn();
	}
});

$(".red").click(function(){
	$(".red").hide().addClass('clicked');
});


