import routes from '../router/routes';
import userModel from '../database/models/User';
import crypto from 'crypto';
import uuid4 from 'uuidv4';
import jwt from 'jsonwebtoken';
import User from '../database/models/User';

export const getJoin = (_, res) => {
    return res.render('join');
}

export const postJoin = async (req, res) => {
    try {
        const {
            body: { userId, userName, userPassword, userPassword2 }
        } = req;

        if (userPassword === userPassword2) { // 회원가입 조건 충족했을 떄, 비밀번호는 하나의 예시일 뿐
        /* 비밀 번호 일치했을 때 행동 */
            console.log(userId);
            await User.create(userId, userPassword, userName, 0);
            res.status(200).json({
                resultCode: 200,
                message: "JoinSuccess"
            });

        } else {
            /* 비밀번호가 일치하지 않았을 때 행동 */
            res.status(200).json({
                resultCode: 200,
                message: "JoinFail"
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            resultCode: 400,
            message: "JoinFail"
        })
    }

}

export const getLogin = (req, res) => {
    return res.render('login'); 
}

export const postLogin = async (req, res) => {
    try {
        const { userId, userPassword } = req.body;
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