"use strict";

(function() {


// Break and Continue - Exercise #2
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
// user if they enter invalid input.


    do {
        var numberPicked = prompt("Pick an odd number between 1 and 50");
   //       console.log(isNaN(numberPicked));
        if (isNaN(numberPicked)) {
            alert((numberPicked + " is not a number, please pick again"));
        } else if (numberPicked < 1 || numberPicked > 50) {
            alert(numberPicked + " is not between 1 and 50");
        } else if (numberPicked % 2 === 0) {
            alert(numberPicked + " is not odd, please pick again.");
        } else {
            alert("Congrats you picked the right number");
            break;
        }
    } while(true);

//Break and continue - Exercise #3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

    var yikes = function(skip) {
        for(var i = 1; i < 50; i += 2) {
            if (numberPicked === i) {
                console.log("Yikes! Skipping number: " + numberPicked);
                continue;
            }
        console.log("Here is an odd number: " + i)
        }
    };

    console.log("Here is the number you picked: " + yikes(numberPicked));


})();