const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            const { name } = decoded;
            req.user = { name };
            next();
        } catch (error) {
            console.log('verification error');
            res.status(401).json({message: 'unauthorized'});
        }
    } else {
        console.log('no token provided');
        res.status(401).json({message: 'unauthorized'});
    }
};

module.exports = authMiddleware;