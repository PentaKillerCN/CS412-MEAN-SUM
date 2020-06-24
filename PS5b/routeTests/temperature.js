const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {describe, it} = require('mocha');
const {expect} = require('chai');

chai.use(chaiHttp);

describe('PS4 Weather API Testing', () => {
    it('Return 200 success code when given form data', function (done) {
        chai.request(app)
            .post('/ps4')
            .type('form')
            .send({
                'city': 'boston',
            })
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });

    it('Return 404 error code when requested with GET method', function (done) {
        chai.request(app)
            .get('/ps4')
            .type('form')
            .send({
                'city': 'boston',
            })
            .end((err, response) => {
                expect(response).to.have.status(404);
                done();
            })
    });

    it('Return 404 error code when requested with PUT method', function (done) {
        chai.request(app)
            .put('/ps4')
            .set('X-API-Key', 'foobar')
            .send({ password: '123', confirmPassword: '123' })
            .end((err, response) => {
                expect(response).to.have.status(404);
                done();
            })
    });
})