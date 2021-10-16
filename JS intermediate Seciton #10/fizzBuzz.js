// let guestList = ["Angela", "Nura", "Jack", "Lara", "Dani", "Jason"];
// let guestName = prompt("What is your name?");
// if (guestList.includes(guestName)) {
//     alert("Welcome!");
// } else {
//     alert("Sorry, maybe next time.");
// }


// console.log(guestList[0]);


// let output = [];
// let count = 1;

// function fizzBuzz(count) {

//     if (count % 3 === 0) {
//         output.push("Fizz");
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
// }
// fizzBuzz();

let output = [];
let count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("Fizz");
        }
        if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }

        count++;
    }
    console.log(output);
}
fizzBuzz();