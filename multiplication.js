/* Multiplication Quiz by Mr. M.*/

main();
//var question = 0;

function main(){
	var question = 0; stop=false; again=true; wrongAnswers=0; bottomRange=0; topRange=0;again=false;
	var questions = setup();
	for (question = 1; question <= questions; question++) {
		wrongAnswers+=questioner();
	}
	endQuiz(wrongAnswers);
	// This is the end of the main() code.

	
	
	function setup() {
		questions = parseInt(prompt("*** MUTIPLICATION TABLE TRAINER ***\nHow many questions?"));
		bottomRange = parseInt(prompt("Lowest factor?"));
		topRange = parseInt(prompt("Highest factor?"));
		alert("Enter 'stop' to quit the program.");
		return questions;
	} // close setup

	function questioner(){
	   	let wrong=0;
		let x = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
	   	let y = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
		let equation=("What is "+x+" * "+y+"?");
		let solution=x*y;
		wrong = userInput(equation, solution);
		console.trace("Question "+question+": "+x+" * "+y+" with "+wrong+" wrong.");
		return wrong;
	} // close questioner

	function userInput(equation, solution){
		stop=false;
		let wrong=0;
		let input=0;
		while (input != solution && stop==false) {
			input = prompt(equation);
			if (input == "stop") {
				stop = true;
				questions = question;
			}
			else if (input == solution) alert("Correct!");
			else {
				alert("Incorrect solution. Try again.");
	 			wrong=1;
			}
		}
		return wrong;
	} // close userInput

	function endQuiz(wrongAnswers){
		if (wrongAnswers>0 || stop==true) {
			again = confirm("You had "+wrongAnswers+" wrong out of "+questions+".\n Do this some more?");
		}
		else again = confirm("Charlie, you've won! Try higher factors and do this some more?");
		if (again==true) main();
		else alert("Hope you learned your times tables!");
	} // close endQuiz
	
} // close main
