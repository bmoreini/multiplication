
/* MULTIPLICATION QUIZ KATA */

/*  global initializations 
 * topRange: integer - start at 9
 * bottomRange: integer - start at 1
 * wrongAnswers: integer - start at 0
 * stop: boolean - start at false
 * again: boolean - start a true
 */ 

/* main code 
 * use a while loop to keep calling main function while again = true. 
 */

/* functions */

/* function main
 * call setup to set top and bottom range and return number of questions 
 * run a For loop for each question. 
 * call questioner, which returns 0 or 1 wrong
 * add questioner return value to wrongAnswers
 * report on results
 * @param none
 * @return again (boolean)
 */ 

/* function setup
 * set bottomRange
 * set topRange
 * set questions (how many?) 
 * @param: none
 * @return: questions
 */
 
/* function questioner 
 * generate X and Y factors
 * concatenate X & Y for equation (a string prompt)
 * calculate solution
 * call userInput, sending equation and solution
 * userInput returns # wrong (0 or 1) so take this and return it to main function
 * @param none
 * @return wrong
 */

/* function userInput
 * prompt the equation to the user, take input
 * if input equals "stop" set stop as true, otherwise
 * check if input equals solution (say "correct!" and return wrong)
 * Add 1 to wrong if incorrect and say "incorrect. try again. enter 'stop' to quit trying"
 * keep asking until solution entered
 * return 0 if 0 wrong, 1 if 1 or more wrong.
 * @param equation (string) 
 * @param solution (integer)
 * @return wrong (integer, 0 or 1)
 */ 
