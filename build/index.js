"use strict";
// index.ts
// Application entry point. This is where the Express server is started
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// get server routes
var index_1 = __importDefault(require("./routes/index"));
// Express server application object
var app = (0, express_1.default)();
// Port for application server
var port = 3000;
// Link routes to server
app.use('/', index_1.default);
// link static assets to server
app.use(express_1.default.static('public'));
// listen on port
app.listen(port, function () {
    console.log("Server started at localhost:".concat(port));
});
exports.default = app;
