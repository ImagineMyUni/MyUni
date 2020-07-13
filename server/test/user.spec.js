import assert from 'assert';
import chai, { expect } from 'chai';
import app from '../app';

chai.use(chaiHttp);
import userController from '../controller/userController';
import apiController from '../controller/apiController';
import contentsController from '../controller/contentsController';

import model from '../database/models/User';
import University from '../database/models/University';
import chaiHttp from 'chai-http';

/* databse test */
describe('User Schema Test', () => {
    it('create should be invalid if userId or userName, userPassword are empty', (done) => {
        var m = new model();
        m.validate(err => {
            chai.expect(err.errors.userId).to.exist;
            done();
        });        
    });
})

/* Login Test */
describe('Login Test ', () => {
    describe('GET /login', () => {
        it('it should return 200 STATUS', done => {
            chai.request(app)
                .get('/login')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
    describe('POST /login', () => {
        it('Should Return 200 Status, message', () => {
            chai.request(app)
                .post('/login')
                .send({
                    userId: 'test',
                    userPassword: 'test'
                })
                .end((err, res) => {
                    expect(res).to.have.status(404);
            })
        });
    }) 
})

/* Join Test */
describe('Join Test', () => {
    describe('Join Post Test', () => {
        it('Should Return 200 Status, Message', done => {
            chai.request(app)
                .post('/join')
                .send({
                    userId: 'test',
                    userName: 'test',
                    userPassword: 'test',
                    userPassword2: 'test'
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.resultCode).to.equal(200);
                    expect(res.body.success).to.equal(true);
                    expect(res.body.message).to.equal("JoinSuccess");

                    done();
                })
        });
    });

    describe('Join Get Test', () => {
        it('Should Return 200 Status', done => {
            chai.request(app)
                .get('/join')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
            })
        })
    })
});
