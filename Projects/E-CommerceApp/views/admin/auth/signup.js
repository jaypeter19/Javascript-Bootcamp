module.exports = ({ req }) => {
    return `
    <div>
        ${req.session.userId}
        <form method="POST">
        <input type="email" name="email">
        <input type="password" name="password">
        <input type="password" name="passwordConfirmation">
        <button>Sign Up</button>
        </form>
    </div>
    `;
};