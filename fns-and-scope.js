//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if(name === 'Tyler') {
		return true;
	} else {
		return false;
	}
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var greeting = "What is your Name?"

function getName(name) {
	var name = prompt(greeting);
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
 functon welcome() {
  var personName = getName();
  alert('Welcome, ' + personName);

 }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
 Parameters re used as placeholdersor arguments that have no value and are mutable. Arguments represent actual values that are entered into there parameter.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
falsy values are 0, empty strings, null, undefined, NaN, and false. Use and if statement to check if something is falsy.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "Zac";
  }  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
alert(myNewName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return function person() {
    return 'Zac';
  };
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
