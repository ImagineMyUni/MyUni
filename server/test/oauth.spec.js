import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

import router from '../router/routes';
import app from '../app';

import model from '../database/models/User';
chai.use(chaiHttp);


