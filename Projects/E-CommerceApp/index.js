const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');
const users = require('./repositories/users');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
    keys: ['mycookie']
}))

app.get('/signup', (req, res) => {

    res.send(`
        <div>
        ${req.session.userId}
        <form method="POST">
        <input type="email" name="email">
        <input type="password" name="password">
        <input type="password" name="passwordConfirmation">
        <button>Sign Up</button>
        </form>
        </div>
    `)
});

app.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser = await usersRepo.getOneBy({ email: email });

    if (existingUser) {
        return res.send('Email already registered.')
    }

    if (password !== passwordConfirmation) {
        return res.send('Password must match. Please type again.')
    }

    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;
    

    res.send('Account created!');
})

app.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out')
})

app.get('/signin', (req, res) => {
    res.send(`
        <div>
        <form method="POST">
        <input type="email" name="email">
        <input type="password" name="password">
        <button>Sign In</button>
        </form>
        </div>
    `)
})

app.post('/signin', async (req, res) => {
    const {email, password } = req.body;

    const user = await usersRepo.getOneBy({email});

    if (!user) {
        return res.send('Email not found');
    }

    const validPassword = await usersRepo.comparePasswords(user.password, password)

    if (!validPassword) {
        return res.send('Invalid Password')
    }

    req.session.userId = user.id;

    res.send('You are signed in!!')
})


app.listen(3000, () => {
    console.log(`Listening on PORT: 3000`)
})