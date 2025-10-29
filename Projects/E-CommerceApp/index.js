const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRepo = require('./repositories/users');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
        <div>
        <form method="POST">
        <input type="email" name="email">
        <input type="password" name="password">
        <input type="password" name="passwordConfirmation">
        <button>Sign Up</button>
        </form>
        </div>
    `)
});

app.post('/', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser  = await usersRepo.getOneBy({email: email});

    if (existingUser) {
        return res.send('Email already registered.')
    }

    if (password !== passwordConfirmation) {
        return res.send('Password must match. Please type again.')
    }

    res.send('Account created!');
})

app.listen(3000, () => {
    console.log(`Listening on PORT: 3000`)
})