let names = ["Angela", "Ben", "Jason", "Cay", "Mery", "Jane", "Lara"];

function whosPaying(names) {
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];

    return randomPerson + "is going to buy kunch today!";

}
whosPaying(names);