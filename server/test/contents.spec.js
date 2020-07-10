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

/* Converter Test */
describe('Converter Test', () => {
        it('GET /converter Should Return 200', done => {
            chai.request(app)
                .get('/converter')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
    });
   
        it('POST /converter Should Return 200, Message', done => {
            chai.request(app)
                .post('/converter')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
});
