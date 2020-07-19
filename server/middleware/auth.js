import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import routes from '../router/routes';

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
    // 로그인 된 사람이면 home으로 돌려보내기
    if (req.isAuthenticated()) {
        res.redirect(routes.home);
    } else {
    // 로그인 안 된 사람이면 입장~
        next();
    }
}

/* Only Private can access (Login)*/
export const onlyPrivate = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect(routes.login);
    };
};

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "MyUni";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};
