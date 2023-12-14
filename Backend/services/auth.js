const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const setUser = (user) => {
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY);
    return token;
}

const getUser = (token) => {
    if (!token) return null;

    try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;

    } catch (error) {
        return null;
    }
}

module.exports = { setUser, getUser };