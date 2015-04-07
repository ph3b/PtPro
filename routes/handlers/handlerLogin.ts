/**
 * Created by mattiden on 07.04.15.
 */
/// <reference path="./../../typings/tsd.d.ts" />
import express = require('express');
import dbModule = require('./../../config/db.js');

function login(req: express.Request, res: express.Response): void{
    var username:String = req.body.username;
    var password:String = req.body.password;

    var user = {
        "username" : "mathias",
        "password" : "hawaii"
    };
    if(username === user.username && password === user.password){
        res.send({"message": "success", "status": 200});
    } else {
        res.send({"message": "fail", "status": 401})
    }
}
export = login;