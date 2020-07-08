import passport from 'passport';
import passport_jwt from 'passport-jwt';
import passport_local from 'passport-local';
import userModel from '../database/models/User'
import dotenv from 'dotenv';

dotenv.config();

const jwtStrategy = passport_jwt.Strategy;
const extractJwt = passport_jwt.ExtractJwt;
const localStrategy = passport_local.Strategy;

exports.passport.use(new localStrategy({
    usernameField: 'userId',
    passwordField: 'userPassword'
},
    async (id, password, done) => {
        return await userModel.findOne({
            id: userId,
            password: userPassword
        }).then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect id or password' });
            } else {
                return done(null, user, { message: "Login Success" });
            }
        }).catch(err => done(err));
    }
));

exports.passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.JWT_SECRET
},
    (jwtPayload, done) => {
        return userModel.findById(jwtPayload.id)
            .then(user => {
                return done(null, user);
            })
            .catch(err => done(err));
}))

