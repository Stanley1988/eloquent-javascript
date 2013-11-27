console.log(confirm("Shall we, then?"));

var theNumber = Number(prompt("Pick a number", ""));
console.log("Your number is the square root of " +
      (theNumber * theNumber));


//trick to find 2 power 10 = 1024	  
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);



//trick to draw triangle	  
var counter = 0;
var line = "";
while (counter < 10) {
  counter = counter + 1;
  line = line + "#";
  console.log(line);
}//if you put "console.log(line);" out of braces will print horizontal line

var line = "";//by use of for
for(counter = 0; counter < 10; counter = counter +1){
console.log(line);
line = line + "#";
}

//below 20 divisible by 3 and 4
for(number = 0; number < 20; number = number + 1){
if(number % 3 == 0 && number % 4 == 0){
console.log(number);
}
}

//below 20 and add brackets to not dvisible by 4
for(number = 0; number < 20; number = number + 1){
if(number % 4 != 0){
console.log("(" + number + ")");
}else{
console.log(number);
}
}

//prompt
var answer = prompt("You! What is the value of 2 + 2?", "");
if (answer == "4")
  alert("You must be a genius or something.");
else if (answer == "3" || answer == "5")
  alert("Almost!");
else
  alert("You're an embarrassment.");

  
var answer;
while (true) {
	answer = prompt("You! What is the value of 2 + 2?", "");
	if (answer == "4") {
		alert("You must be a genius or something.");
		break;
	}
	else if (answer == "3" || answer == "5") {
		alert("Almost!");
	}
	else {
		alert("You're an embarrassment.");
	}
}

///very good
var input = prompt("What is your name?", "Kilgore Trout");
console.log("Well hello " + (input || "dear"));
