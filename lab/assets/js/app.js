// anything in quotes is a string
// boolean ture/false statements
// array ex: ['socks', 'shirts', 'pants', 'stuff i dont wear'];
// how to pull something from the array [3] (this will pull out 'stuff i dont wear')
// 0 is the bade number, 0 have a value in programing
// anything can be a variable ex: var name of variable
// variable is a comtainer
// var container = 'string';

var container = ["some value"];

var cash = 1000;

function update_wallet(value){
	$('.wallet').html(value);
}

function charge_card(){
	if (cash >= amount) {

 		cash = cash - amount;
 		update_wallet(cash);
 		$('.purchases').append(item + ',');

 	} 

 	else{
 		alert('not enough money.');
 	}
}

$('.item').click(function() {
 var amount = $(this).data('amount');
 var item = $(this).data('.item');

 	console.log(cash);
 	console.log(amount);
 	console.log(cash < amount);


 	if (cash >= amount) {

 		cash = cash - amount;
 		update_wallet(cash);
 		$('.purchases').append(item + ',');

 	} 

 	else{
 		alert('not enough money.');
 	}
 	
});

update_wallet(cash);
