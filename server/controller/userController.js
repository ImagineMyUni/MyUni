import routes from '../router/routes';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../database/models/User';
import async from 'async';
import bcrypt from 'bcrypt';

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
            await User.create(userId, userPassword, userName, 0);
            res.status(200).json({
                resultCode: 200,
                success:true,
                message: "JoinSuccess"
            });

        } else {
            /* 비밀번호가 일치하지 않았을 때 행동 */
            res.status(200).json({
                resultCode: 200,
                success: false,
                message: "JoinFail"
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            resultCode: 400,
            success: false,
            message: "JoinFail"
        })
    }

}

export const getLogin = (req, res) => {
    return res.render('login'); 
}

export const postLogin = async (req, res) => {
    // try {
    const { userId, userPassword } = req.body;
    async.waterfall([async (callback) => {
        const user = await User.findOne({
            userId
        });
        callback(null, user);
    }, async (user, callback) => {
            const result = await User.verifyPassword(user.userPassword, userPassword);
            callback(null, user, result);
    }, (user, result, callback) => {
        if (result === true) {
            const token = jwt.sign({
                id: user._id,
                userId
            }, process.env.JWT_TOKEN, {
                expiresIn: '7d',
                issuer: "MyUni",
                subject: 'userInfo'
            });
                
            return res.status(200).json({
                resultCode: 200,
                success: true,
                message: "LoginSucess",
                token
            })
        }

        else {
            return res.status(200).json({
                resultCode: 200,
                success: false,
                message: "LoginFail"
            });
        }
    }

    ], (err) => {
            console.log("error", err);
            return res.status(409).json({
                resultCode: 409,
                success: false,
                message: "LoginError"
            });
    })
}

export const getUserDetail = async (req, res) => {
    const {
        params: { id }
    } = req;

    return;
}

export const getEditProfile = (req, res) => {
    return res.render('editProfile');
}
export const postEditProfile = (req, res) => {
    return res.status(200).json({
        resultCode: 200,
        success: false,
        message: "EditProfileSuccess"
    })
}