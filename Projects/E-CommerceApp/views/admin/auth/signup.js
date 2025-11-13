const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        content:
            `
        <h2 class="mb-3">Sign Up</h2>
                <form method="POST">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                        <div id="emailHelp" class="form-text">${getError(errors, 'email')}</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password">
                        <div id="passwordHelp" class="form-text">${getError(errors, 'password')}</div>
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordConfirmation" class="form-label">Password
                            Confirmation</label>
                        <input type="password" class="form-control" id="passwordConfirmation"
                            name="passwordConfirmation" placeholder="Password Confirmation">
                        <div id="passwordConfirmationHelp" class="form-text">${getError(errors, 'passwordConfirmation')}</div>
                    </div>
                    <button type="submit" class="btn btn-success">Sign Up</button>
                    <div id="signin" class="form-text"><a href="/signin">Have an account? Sign In</a></div>
                </form>
    `});
};