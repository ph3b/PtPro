/**
* Created by mattiden on 07.04.15.
*/
/// <reference path="./../typings/tsd.d.ts" />
import express = require("express");
import loginHandler = require("./handlers/handlerLogin")
import newUserHandler = require("./handlers/handlerLogin");

var router = express.Router();

router.get('/', (req, res) => {
    res.send({"message": "Hello"});

});

router.post('/login', loginHandler);
router.post('/user/new', newUserHandler);

export = router;

