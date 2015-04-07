/**
 * Created by mattiden on 04.04.15.
 */
/// <reference path="./../typings/tsd.d.ts" />

import expect = require("expect.js");
import PtApi = require("./../app");
import http = require("supertest");

var port = 2500;
var apiUrl:String = "http://0.0.0.0:" + port;

describe("Server", () => {

    it("Should start server" , (done) => {
        var server = new PtApi('test', port);
        server.launch((info) => {
            console.log(info);
            expect(info).to.be.eql("Backend running on: " + port);
            server.quit();
            done();
        })
    });
    it("Should say hello to user when sending get to root", (done) => {
        var server = new PtApi('test', port);
        server.launch((info) => {
            expect(info).to.be.eql("Backend running on: " + port);
            http(apiUrl)
                .get('/')
                .end((err, res) => {
                    expect(res.body.message).to.be.eql("Hello");
                    server.quit();
                    done();
                })
        })

    })
});