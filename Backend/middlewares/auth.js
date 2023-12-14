const { getUser } = require("../services/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const userToken = req.cookies?.token;

    if (!userToken) return res.status(401).json({ message: "Unauthorized" });
    const user = getUser(userToken);

    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userToken = req.cookies?.token;

    const user = getUser(userToken);

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};