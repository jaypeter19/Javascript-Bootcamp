const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
        <div>
        <form method="POST">
        <input type="email" name="email">
        <input type="password" name="password">
        <button>Sign Up</button>
        </form>
        </div>
    `)
});

app.post('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body)
    res.send('Account created!');
})

app.listen(3000, () => {
    console.log(`Listening on PORT: 3000`)
})