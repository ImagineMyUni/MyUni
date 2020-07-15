import passport from 'passport';
import passportJwt from 'passport-jwt';

import User from './database/models/User';
import dotenv from 'dotenv'

dotenv.config();

// const JwtStrategy = passportJwt.Strategy;
// const ExtractJwt = passportJwt.ExtractJwt;

// const jwtOptions = {
//     // header의 bearToken 해석할 예정.
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
//     secretOrKey: process.env.JWT_TOKEN // 복호화 방법
// };

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());