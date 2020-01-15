main();
var q = 0;

function main(){
	//var q = 0;
	let wrong=0;
	for (q=1;q<=qs;q++){
		console.log(q+" out of "+qs)
		wrong+= questioner(q);
	}
	alert("You got "+wrong+" wrong.");
	
	
}

function questioner(){
		let equation = "Question "+q;
		let wrong=userInput(equation);
		return wrong;
	}

	function userInput(equation){
		let wrong=0;
		let input = prompt(equation);
		if (input == "s") q = qs+1;
		else if (input!=9) wrong=1;
		return wrong;
	}
