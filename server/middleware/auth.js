import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {

    const token = req.headers['x-access-token'] || req.query.token;

    if (!token) {
        return res.status(403).json({
            success: false,
            message: 'NoToken'
        });
    }
    try {
        req.decoded = jwt.verify(token, process.env.JWT_SECRET);
        return next(); 
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(419).json({
                resultCode: 419,
                message: "TokenExpired"
            });
        }

        return res.status(401).json({
            resultCode: 401,
            message: "InvalidToken"
        })
    }
}

/* Only Public can access */ 
export const onlyPublic = (req, res, next) => {
    console.log(req.body);
    next();
}