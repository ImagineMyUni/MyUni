import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.auth, process.env.JWT_SECRET);
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