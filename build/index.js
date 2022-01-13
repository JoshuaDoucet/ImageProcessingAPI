"use strict";
// index.ts
// Application entry point. This is where the Express server is started
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Express server application object
var app = (0, express_1.default)();
// Port for application server
var port = 3000;
//Create endpoint for root route
app.get('/', function (req, res) {
    res.send("Root Visited");
});
app.listen(port, function () {
    console.log("Server started at localhost:".concat(port));
});
exports.default = app;
//-----------------------------------------------
//Debug for pretty and ESLint
/*
console.log('Hello')
const studentName = "Josh"

//DEBUG for Jasmine test
const printAndUpper = (msg: string): string => {
    console.log(msg);
    return msg.toUpperCase();
};

export default {
    printAndUpper
};
*/
