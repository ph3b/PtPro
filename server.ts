/// <reference path="typings/tsd.d.ts" />
import serverModule = require("./app");
var TodoListBackend = serverModule.TodoListBackend;

var TodoListServer = new TodoListBackend('dev', 3000);

TodoListServer.launch((info) => {
    console.log(info);
});
