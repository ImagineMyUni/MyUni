import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from './database/models/User';
import dotenv from 'dotenv';
import { googleLoginCallback } from './controller/userController';
import routes from './router/routes';

dotenv.config();

// get --> authenticate --> anyway callback function call
passport.use(
    new GoogleStrategy(
        {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: routes.googleCallback,
    scope: ["email", "profile"]
        },
        
    googleLoginCallback
        // Use the profile information (mainly profile id) to check 
        // whether the user is registered in db
));

// Normally, just take user's id for minimalizing Cookie.
// Ex) passport.serializeuser((user,done)=> (done, user.id))
passport.serializeUser((user, done) => done(null, user));

// We get User's info in 'req.user'
passport.deserializeUser((user, done) => done(null, user));


