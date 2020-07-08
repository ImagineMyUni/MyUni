import mongoose from "mongoose";
import bcrypt from "bcrypt";
// bcrypt는 crypto보다 보안 수준 높지만 느림 
// 그래서 비밀번호에만 쓸 예정
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    userPassword: { type: String, requried: true },
    userName: { type: String, required: true }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "userId" });

const model = mongoose.model("User", UserSchema);

export default model;