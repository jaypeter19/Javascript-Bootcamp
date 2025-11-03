const layout = require('../layout')

module.exports = ({ req }) => {
    return layout({
        content: `
        <h1>${req.session.userId}</h1>
        <form method="POST">
                    <div class="row justify-content-center mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" id="email">
                        </div>
                    </div>
                    <div class="row justify-content-center mb-3">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                    </div>
                    <div class="row justify-content-center mb-3">
                        <label for="passwordConfirmation" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" id="passwordConfirmation"
                                name="passwordConfirmation">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
    </form>
    `});
};