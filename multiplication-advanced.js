
/* MULTIPLICATION QUIZ KATA */

/* PART 1 */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.

/*  initializations */
var topRange=0;bottomRange=0;wrongAnswers=0;stop=false;again=true;
while (again==true) {
	again=main();
}

/* code */
function main(){
	let questions = setup();
	for (question = 1; question <= questions; question++) {
		wrongAnswers+=questioner();
		if (stop == true) question = questions;
		console.log("wrong answers: "+wrongAnswers);
	} 
	if (wrongAnswers>0) {
	   again = confirm("You had "+wrongAnswers+" wrong answers out of "+questions+ " questions, with factors up to "+topRange+".\nDo this some more?");
	}
	else again = confirm("Charlie, you've won! Try a higher factor and do this some more?");
	return again;
}

// FUNCTIONS

function setup() {
	let questions = parseInt(prompt("*** MUTIPLICATION TABLE TRAINER ***\nHow many questions?"));
	bottomRange = parseInt(prompt("Lowest factor?"));
	topRange = parseInt(prompt("Highest factor?"));
	alert("Enter 'stop' to quit the program.");
	return questions;
}

function userInput(equation, solution){
	let wrong=0;
	let input=0;
	while (input != solution && stop==false) {
		input = prompt(equation);
      	if (input == "stop") {
      		stop = true;
      		return wrong;
      	}
		else if (input == solution) alert("Correct!");
      	else {
			alert("Incorrect solution. Try again.");
 			wrong++;
      	} 
   }
   if (wrong > 0) wrong = 1;
   return wrong;
}

function questioner(){
   	let wrong=0; 
	x = Math.floor(Math.random()*(topRange-bottomRange))+bottomRange;
   	y = Math.floor(Math.random()*(topRange-bottomRange))+bottomRange;
	equation=("What is "+x+" * "+y+"?");
	let solution=x*y; 
	wrong = userInput(equation,solution);
	console.trace("multiPractice: ",x," * ",y," with ",wrong," wrong.");
	if (stop==true) {
		return wrong;
	}
	return wrong; 
}
