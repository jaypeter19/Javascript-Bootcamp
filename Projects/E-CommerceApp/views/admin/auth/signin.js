const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
    <h2 class="mb-3">Sign In</h2>
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
                    <button type="submit" class="btn btn-success">Submit</button>
                    <div id="emailHelp" class="form-text"><a href="/signup">Need an account? Sign Up</a></div>
                </form>
    `});
};