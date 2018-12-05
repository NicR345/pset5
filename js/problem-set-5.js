/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  while (true) {
    height = prompt("Please enter an integer between 1-23");
    height = Number(height);
    if (height <= 23 && height >= 1 && Number.isInteger(height) && !Number.isNaN(height)) {
      break;
  }
}
let input = 1;
let value = "#";
let vertical = "<code>";
let blank = height-2;

while (input <= height){
  let a = "";
  for (let count=0; count <= blank; count++) {
    a+='&nbsp;';
  }
  blank--;
  value = value + "#";
  vertical = vertical + a + value + "</br>";
  input++;
}
 var div = document.getElementById("mario-easy-output")
div.innerHTML= vertical; vertical + "<code>";
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
  while (true) {
    height = prompt("Please enter an integer between 1-23");
    height = Number(height);
    if (height <= 23 && height >= 1 && Number.isInteger(height) && !Number.isNaN(height)) {
      break;
  }
}
let input = 1;
let value = "#";
let vertical = "<code>";
let blankbefore = height-2;
let blankafter = '&nbsp' + '&nbsp';
while (input <= height){
  let a = "";
  for (let count=0; count <= blankbefore; count++) {
    a+='&nbsp;';
  }
  blankbefore--;
  value = value + "#";
  vertical = vertical + a + value + blankafter + value + "</br>";
  input++;
}
 var div = document.getElementById("mario-hard-output")
div.innerHTML= vertical; vertical + "<code>";
  // WRITE YOUR EXERCISE 2 CODE HERE

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
  let sum1 = 0;
  let sum2 = 0;
 while (true){
   card = prompt("Enter your credit card number: ");
    if (Number.isInteger(Number(card))){
     break;
 }
   if(card === null){
   break;
       }
     }
  if (card !== null) {
     for (let card1 = card.length - 2; card1 >= 0; card1 -= 2) {
     let number = Number(card[card1]) * 2;
     let numberCard = number.toString();
    let numberCardTotal = 0;
    for (let card2 = 0 ; card2 < numberCard.length; card2++){
     numberCardTotal = numberCardTotal + Number(numberCard[card2]);
         }
    sum1 = numberCardTotal + sum1;
    console.log(sum1);
       }
    for (let card3 = card.length-1; card3 >= 0; card3 -= 2){
      sum2 = sum2 + Number(card[card3])
       }
        console.log(sum2);
        if (card.length == 15 && (card[0] == 3 &&(card[1] == 7 || card[1] == 4)) && (sum1 + sum2 )% 10 == 0){
         let div = document.getElementById("credit-output")
         div.innerHTML = "<img src ='./images/amex.png'/>";
       }
       else if ((card.length == 13 || card.length == 16) && card[0] == 4 && (sum1 + sum2) % 10 == 0){
         let div = document.getElementById("credit-output")
         div.innerHTML = "<img src ='./images/visa.png'/>";
       }
       else if (card.length == 16 && (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 4 || card[1] == 5)) && (sum1 + sum2) % 10 == 0){
         let div = document.getElementById("credit-output")
         div.innerHTML = "<img src ='./images/mastercard.png'/>";
       }
       else {
        let div = document.getElementById("credit-output")
        div.innerHTML = "<img src ='./images/invalid.png'/>";
       }
        card=Number(card);
     } else {
       let div = document.getElementById("credit-output")
       div.innerHTML = "";
     }
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
let gNumber = (Math.floor((Math.random() * 1000) + 1)).toFixed(0);
let answer = prompt("Guess The Number!");
let counter = 0;
while (answer != gNumber) {
  while (answer <= 1000 && answer >= 1) {
  if (answer > gNumber) {
    counter++;
    answer = prompt("Guess Lower!");
  } else if (answer < gNumber) {
    counter++;
    answer = prompt("Guess Higher!");
  } else if (answer == gNumber) {
    break;
  }
  if (answer > 1000 || answer < 1 || answer % 1 != 0) {
    answer = prompt("Try a valid input between 1 and 1000!");
  }
}}

  counter++;
  var div = document.getElementById("guess-output");
  div.innerHTML = "Congrats! You are Correct! It took you " + counter + " guess(es)!";

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
let stormType;

while (windspeed % 1 != 0) {
windspeed = prompt("Enter A Valid Windspeed");
}
if (windspeed <39) {
  stormType = ("The skies are calm...")
}
else if (windspeed >=39 && windspeed <=73) {
  stormType = ("Tropical Storm.")
}
else if (windspeed >=74 && windspeed <=95) {
  stormType = ("Category 1 Hurricane.")
}
else if (windspeed >=96 && windspeed <=110) {
  stormType = ("Category 2 Hurricane.")
}
else if (windspeed >=111 && windspeed <=129) {
  stormType = ("Category 3 Hurricane.")
}
else if (windspeed >=130 && windspeed <=156) {
  stormType = ("Category 4 Hurricane.")
}
else if (windspeed >=157) {
  stormType = ("Category 5 Hurricane.")
}
var div = document.getElementById("hurricane-output");
windspeed = Number(windspeed);
div.innerHTML = (stormType);
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
do {
  score1 = Number(prompt("Enter a number between 0.0 and 10.0"))

} while (score1 < 0.0 || score1 > 10.0 || !Number.isInteger(score1)); {
scores.push(score1);
}
do {
  score2 = Number(prompt("Enter a number between 0.0 and 10.0"))
} while (score2 < 0.0 || score2 > 10.0 || !Number.isInteger(score2)); {
scores.push(score2);
}
do {
  score3 = Number(prompt("Enter a number between 0.0 and 10.0"))
} while (score3 < 0.0 || score3 > 10.0 || !Number.isInteger(score3)); {
scores.push(score3);
}
do {
  score4 = Number(prompt("Enter a number between 0.0 and 10.0"))
} while (score4 < 0.0 || score4 > 10.0 || !Number.isInteger(score4)); {
scores.push(score4);
}
do {
  score5 = Number(prompt("Enter a number between 0.0 and 10.0"))
} while (score5 < 0.0 || score5 > 10.0 || !Number.isInteger(score5)); {
scores.push(score5);
}
do {
  score6 = Number(prompt("Enter a number between 0.0 and 10.0"))
} while (score6 < 0.0 || score6 > 10.0 || !Number.isInteger(score6)); {
scores.push(score6);
}
let tot = Number(score1) + Number(score2) + Number(score3) + Number(score4) + Number(score5) + Number(score6);
 let avg = (tot - Math.max(score1, score2, score3, score4, score5, score6) - Math.min(score1, score2, score3, score4, score5, score6)) / 4;
var div = document.getElementById("gymnastics-output");
div.innerHTML = "Discarded: " + Math.min(score1, score2, score3, score4, score5, score6) + ", " + Math.max(score1, score2, score3, score4, score5, score6) + "<br />Score: " + avg.toFixed(2);
  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  let testPoints;
  let quizPoints;
  let homeworkPoints;
  let testAvg;
  let quizAvg;
  let homeworkAvg;
  let averg;
  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
   //

    /*
     * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
     *       representative of the number of tests, quizzes, and homework
     *       grades the user enters, respectively.
     */

  testPoints = prompt("Enter a valid score between 0.0 and 100.0 for tests, if you are done with this category enter -1");
     while (testPoints) {
       testscore = parseFloat(testPoints);
    if (testPoints == -1){
      testPoints = false;
      break;
    }
  else if(testPoints <= 100.00 && 0.0 <= testPoints)
    {
      tests += 1;
      testTotal += testPoints;
    }
    else{
    }
    testPoints = prompt("Enter a valid score between 0.0 and 100.0 for tests, if you are done with this category enter -1")
  }
  quizPoints = prompt("Enter a valid score between 0.0 and 100.0 for quizzes, if you are done with this category enter -1");
  while (quizPoints) {
    quizPoints = parseFloat(quizPoints);
  if (quizPoints == -1){
   quizPoints = false;
   break;
    }
   else if(quizPoints <= 100.00 && 0.0 <= quizPoints)
  {
   quizzes += 1;
   quizTotal += quizPoints;
  }
   else{
  }
  quizPoints = prompt("Enter a valid score between 0.0 and 100.0 for quizzes, if you are done with this category enter -1")
  }
  homeworkPoints = prompt("Enter a valid score between 0.0 and 100.0 for homework, if you are done with this category enter -1");
  while (homeworkPoints) {
    homeworkPoints = parseFloat(homeworkPoints);
  if (homeworkPoints == -1){
   homeworkPoints = false;
   break;
  }
   else if(homeworkPoints <= 100.00 && 0.0 <= homeworkPoints)
  {
   homeworks += 1;
   homeworkTotal += homeworkPoints;
  }
  else{
  }
   homeworkPoints = prompt("Enter a valid score between 0.0 and 100.0 for homework, if you are done with this category enter -1")
  }

  testAvg = testTotal/tests;
  quizAvg = quizTotal/quizzes;
  homeworkAvg = homeworkTotal/homeworks;
  averg = (testAvg * 0.6) + (quizAvg * 0.3) + (homeworkAvg * 0.1);

  var div = document.getElementById("report-card-output")
  div.innerHTML = "Tests: " + testAvg.toFixed(2) + "</br>Quizzes: " + quizAvg.toFixed(2) + "</br>Homework: " + homeworkAvg.toFixed(2) + "</br>Grade: " + averg.toFixed(2);


   /////////////////////// DO NOT MODIFY
   check('report-card', // DO NOT MODIFY
     testTotal, ////////// DO NOT MODIFY
     tests, ////////////// DO NOT MODIFY
     quizTotal, ////////// DO NOT MODIFY
     quizzes, //////////// DO NOT MODIFY
     homeworkTotal, ////// DO NOT MODIFY
     homeworks /////////// DO NOT MODIFY
   ); //////////////////// DO NOT MODIFY
   /////////////////////// DO NOT MODIFY
}
