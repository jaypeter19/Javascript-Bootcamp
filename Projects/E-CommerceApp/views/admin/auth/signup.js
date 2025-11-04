const layout = require('../layout');

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg
    } catch (err) {
        return '';
    }
};

module.exports = ({ req, errors }) => {
    return layout({
        content:
            `
        <h1>${req.session.userId}</h1>
        <form method="POST">
                    <div class="row justify-content-center mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" id="email" name="email">
                        </div>
                        ${getError(errors, 'email')}
                    </div>
                    <div class="row justify-content-center mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                        ${getError(errors, 'password')}
                    </div>
                    <div class="row justify-content-center mb-3">
                        <label for="passwordConfirmation" class="col-sm-2 col-form-label">Password Confirmation</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" id="passwordConfirmation"
                                name="passwordConfirmation">
                        </div>
                        ${getError(errors, 'passwordConfirmation')}
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
        </form>
    `});
};