import routes from '../router/router';
import userModel from '../database/models/User';
import crypto from 'crypto';

export const getLogin = (req, res) => {
    res.sendStatus(200);
}

export const postLogin = async (req, res) => {
    const { userId, userPassword } = req.query;
    console.log(`PostLogin : ${userId}, ${userPassword}`);
    
    const userResult = await userModel.findOne({
        userId: userId
    });

    const dbPassword = crypto.createHash("sha512").update(userResult.userPassword).digest("hex");

    if (dbPassword === userPassword) {
        console.log("Valid Password");
        res.cookie("user", userId, {
            expires: new Date(Date.now() + 10000),
            httpOnly:true
        })
        res.redirect(routes.home);
    }

    else {
        console.log("InValid Password");
        res.redirect(routes.login);
    }
}

