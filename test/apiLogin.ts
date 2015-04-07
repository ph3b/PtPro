/**
 * Created by mattiden on 07.04.15.
 */
/// <reference path="./../typings/tsd.d.ts" />
///<reference path="../typings/superagent/superagent.d.ts"/>

import expect = require("expect.js");
import PtApi = require("./../app");
import http = require("supertest");

var port:Number = 3000;
var apiUrl:String = "http://0.0.0.0:" + port;
var server = new PtApi('test', port);

describe('Login http route',() => {
    before((done) =>{
        server.launch(() =>{
            done();
        })
    });
    after((done) => {
        server.quit();
        done();
    });
    it('Should return token when user logs in with valid credentials',(done) => {
        var user = {
            "username" : "mathias",
            "password" : "hawaii"
        };
        http(apiUrl)
            .post('/login')
            .send(user)
            .end((err, res) => {
                expect(res.body.status).to.be(200);
                expect(res.body.message).to.be.eql('success');
                done();
            })
    });
    it('Should return token when user logs in with valid credentials',(done) => {
        var user = {
            "username" : "mathias",
            "password" : "tennis"
        };
        http(apiUrl)
            .post('/login')
            .send(user)
            .end((err, res) => {
                expect(res.body.status).to.be(401);
                expect(res.body.message).to.be.eql('fail');
                done();
            })
    })
});