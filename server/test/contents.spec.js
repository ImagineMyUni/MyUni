import assert from 'assert';
import chai, { expect } from 'chai';
import app from '../app';
import mongoose from 'mongoose';
chai.use(chaiHttp);
import userController from '../controller/userController';
import apiController from '../controller/apiController';
import contentsController from '../controller/contentsController';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
dotenv.config();

const University = mongoose.model('University');
const User = mongoose.model('User');

/* Converter Test */
describe('Converter Test', () => {
    var database = null;

    before('Before Convert, Make Record', (done) => {
        mongoose.connect(process.env.MONGO_TEST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'conneciton error'));
        db.once('open', () => {
            console.log('Connected to Test DB');
            done();
        });
    });
    describe('Test Database', () => {
        it('University Record Create', (done) => {
            const univeristy = new University({
                universityName: "Sogang",
                gradeBenchmark: [
                    { score: 90, grade: 3 },
                    { score: 85, grade: 4 },
                    { score: 80, grade: 5 },
                    { score: 75, grade: 6 }
                ]
            });

            univeristy.save(done);
        });

        it('Dont save Incorrect Record into DB', (done) => {
            const wrong = new University({
                univ: "Not Univ"
            });

            wrong.save(err => {
                if (err) { return done(); }
                throw new Error('Should Error breaks out!');
            });
        });

        it('University Read Test', (done) => {
            University.find({
                universityName: "Sogang"
            }, (err, result) => {
                    console.log("RESULT", result);
                    console.log("RESULT", result[0].gradeBenchmark[0]);
                    if (err) throw err;
                    expect(result[0]).to.have.property('universityName');
                    expect(result[0]).to.have.property('gradeBenchmark');
                    done();
            });
        });

        it('POST /converter Test', done => {
            chai.request(app)
                 .post('/api/converter')
                .send({
                    universityName: "Sogang",
                    score: [90,80,70,60,70,80,80]
                 })
                 .end((err, res) => {
                     expect(res).to.have.status(200);
                     done();
                 });

        })
    });
    
    after((done) => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done);
        });
    })
});
    // it('POST /converter Should Return 200, Message', done => {
    //             //     });
