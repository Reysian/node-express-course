const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        req.status(400).send('Please provide name and password');
    } else {
        const token = jwt.sign({ name }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
        res.status(200).json({token: token});
    }
};

const hello = async (req, res) => {
    res.status(200).json({message: `Hello, ${req.user.name}.`});
};

module.exports = {
    logon,
    hello
};