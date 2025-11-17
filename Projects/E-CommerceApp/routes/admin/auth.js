const express = require('express');
const { handleErrors } = require('./middlewares');
const { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser } = require('./validators');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }))
});

router.post('/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    handleErrors(signinTemplate),
    async (req, res) => {

        const { email, password, passwordConfirmation } = req.body;
        const user = await usersRepo.create({ email, password });

        req.session.userId = user.id;

        res.redirect('admin/products');
    });

router.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/signin')
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate({ req }));
});

router.post('/signin',
    [requireEmailExists, requireValidPasswordForUser],
    handleErrors(signinTemplate),
    async (req, res) => {

        const { email } = req.body;
        const user = await usersRepo.getOneBy({ email })

        req.session.userId = user.id;

        res.redirect('admin/products');
    });


module.exports = router;
