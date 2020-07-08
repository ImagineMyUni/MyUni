import mongoose from "mongoose";
import bcrypt from "bcrypt";
// bcrypt는 crypto보다 보안 수준 높지만 느림 
// 그래서 비밀번호에만 쓸 예정
import async from 'async';
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    userPassword: { type: String, requried: true },
    userName: { type: String, required: true },
    admin: { type: Boolean, default: false }
});

//create new User document and save into Mongo DB
UserSchema.statics.create = async (userId, userPassword, userName) => {
    await bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userPassword, salt, (err, hash) => {
            console.log(hash);
            const newUser = new model({
                userId,
                userPassword: hash,
                userName
            })

            return newUser.save();
        })
    });
}

UserSchema.statics.findOneByUserId = async (userId) => {
    return await model.findOne({
        userId
    }).exec()
}

//verify password
UserSchema.statics.verifyPassword = async (dbPassword, userPassword) => {
    return await bcrypt.compareSync(userPassword, dbPassword, (err, result) => {
        if (err) console.log(err);
        return result;
    });
}

UserSchema.methods.assignAdmin = () => {
    this.admin = true;
    return this.save();
}

const model = mongoose.model("User", UserSchema);

export default model;