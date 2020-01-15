

/*  initializations */
main();

/* code */
function main(){
	var question = 0;
	var stop=false;
	var again=true;
	var wrongAnswers=0;
	var bottomRange=0;
	var topRange=0;
	var questions = setup();
	for (question = 1; question <= questions; question++) {
		wrongAnswers+=questioner(question);
	}
	endQuiz(wrongAnswers);
	// This is the end of the main() code.

	/* Main Code child functions */

	function setup() {
		questions = parseInt(prompt("*** MUTIPLICATION TABLE TRAINER ***\nHow many questions?"));
		bottomRange = parseInt(prompt("Lowest factor?"));
		topRange = parseInt(prompt("Highest factor?"));
		alert("Enter 'stop' to quit the program.");
		return questions;
	} // close setup

	function questioner(){
	   	let wrong=0;
		x = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
	   	y = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
		let equation=("What is "+x+" * "+y+"?");
		let solution=x*y;
		wrong = userInput(equation, solution);
		console.trace("multiPractice: ",x," * ",y," with ",wrong," wrong.");
		return wrong;
	} // close questioner

	function userInput(equation, solution){
		stop=false;
		console.log("Question "+question);
		let wrong=0;
		let input=0;
		while (input != solution && stop==false) {
			input = prompt(equation);
			if (input == "stop") {
				stop = true;
				questions = question;
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
	} // close userInput

	function endQuiz(wrongAnswers){
		if (wrongAnswers>0 || stop==true) {
			again = confirm("You had "+wrongAnswers+" wrong out of "+questions+".\n Do this some more?");
		}
		else again = confirm("Charlie, you've won! Try a higher factor and do this some more?");
		if (again==true) main();
		else alert("Hope you learned your times tables!");
	}
} // close main


