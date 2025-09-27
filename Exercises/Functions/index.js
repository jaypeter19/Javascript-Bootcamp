//Function Challenge 1

function isValidPassword(username, password) {

    if (password.length < 8 || password.includes(' ') || password.includes(username)) {
        return false;
    } else {
        return true;
    }

}

isValidPassword('joao.telles', '191000');


//Function Challenge 2

function averageArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = + array[i];
    }
    const average = sum / array.length;
    return average;
}

averageArr([0, 50]);

// Function Challenge 3

function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
        if (string.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

isPangram('the wick brown fox jumps over the lazy dog');

// Function Challenge 4

function getCard() {

    const randomValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const randomSuit = ['clubs', 'spades', 'hearts', 'diamonds']; 

    const randomNumber = Math.floor(Math.random() * (13 - 0 + 1) + 0);
    const randomNumber2 = Math.floor(Math.random() * (3 - 0 + 1) + 0);

    const object = {
        value: randomValue[randomNumber],
        suit: randomSuit[randomNumber2]
    }

    return object;
}


// Keyword this example

function sayHi() {
    console.log('Hi');
    // The keyword this refers to the windows global object in this scenario. This always return an object
    console.log(this);
}


const person = {
    first: "Cherylin", 
    last: "Sarkisian",
    nickname: "Cher", 
    fullName() {
        console.log(`${this.first} ${this.last} ${this.nickname}`);
    }
}