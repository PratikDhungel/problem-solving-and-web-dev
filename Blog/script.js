
var star = '*';
var output = [];

for (var i = 0 ; i < 3; i++) {

		for (var j = 1; j <= 6; j++) {

			// console.log(star.repeat(j));
			output.push(star.repeat(j));

		}

		for (var j =  5; j >= 1; j--) {

			// console.log(star.repeat(j));
			output.push(star.repeat(j));

		}

}

i = 0;
console.log(output.length);

var myLoop = setInterval( function printStar(){

	console.log (output[i]);
	i++;

	if (i > output.length){

		clearInterval(myLoop)
	}

}, 100)




// console.log(output[3]);




	












// var a = prompt("Enter a number");
// var b = prompt("Enter a second number");


// c = addNumbers(a , b);
// alert (c);

// function addNumbers(a, b){


// 	var c = parseInt(a) + parseInt(b);
// 	return c;


// }



// newStr = kebabToSnake("Hello-World")

// function kebabToSnake(str){
		
// 	var newStr = str.replace( - , "_")
// 	return newStr;
// }

// console.log(newStr);


// var todoList = [];

// while(taskType != 'quit'){

// 	var taskType = prompt("What would you like to do???");
// 	taskType = taskType.toLowerCase();


// 	if (taskType == 'new'){

// 	var newTask = prompt('Enter a new Todo List');
// 	todoList.push(newTask);

// 	}

// 	else if (taskType == 'list'){

// 		console.log(todoList) ;
	
// 	}

// }

// alert('Quitting');

















