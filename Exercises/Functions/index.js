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





