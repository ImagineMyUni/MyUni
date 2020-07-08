import routes from '../router/router';
import userModel from '../database/models/User';
import crypto from 'crypto';
import uuid4 from 'uuidv4';
import jwt from 'jsonwebtoken';

export const getLogin = (req, res) => {
    res.sendStatus(200);
}

export const postLogin = async (req, res) => {
    try {
        const { userId, userPassword } = req.query;
        console.log(`PostLogin : ${userId}, ${userPassword}`);
    
        const userResult = await userModel.findOne({
            userId: userId
        });

        const dbPassword = crypto.createHash("sha512").update(userResult.userPassword).digest("hex");

        if (dbPassword === userPassword) {
            console.log("Valid Password");

            const uuidNew = await uuid4.uuid();
            userModel.findOneAndUpdate({ userId: userId }, { $set: { uuid: uuidNew } });
        
            const token = await jwt.sign({
                userId
            }, process.env.JWT_SECRET, {
              expiresIn: 15,
                issuer: 'TL'
            });

            const payload = {
                user_id,
                uuid: uuidNew,
                token
            }
            res.status(200), json({
                resultCode: 200,
                message: "LoginSucess",
                payLoad
            })
        }

        else {
            console.log("InValid Password");
            res.status(200).json({
                resultCode: 200,
                message: "LoginFail"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(400);
    }
}