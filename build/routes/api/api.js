"use strict";
// api.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API endpoint that lists the available API tools
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./images/images"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('API Table of Contents <br/> Visit /api/images to use the image resizing API tool.');
});
routes.use('/images', images_1.default);
exports.default = routes;
