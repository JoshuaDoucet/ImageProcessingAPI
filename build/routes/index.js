"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./api/api"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send("Root route visited");
});
routes.use('/api', api_1.default);
exports.default = routes;
