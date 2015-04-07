/// <reference path="typings/tsd.d.ts" />
import TodoListBackend = require("./app");

var TodoListServer = new TodoListBackend('dev', 3000);

TodoListServer.launch((info) => {
    console.log(info);
});
