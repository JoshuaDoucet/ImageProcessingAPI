"use strict";
// images.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// Module for resizing images
var resizeImages_1 = __importDefault(require("../../../utilities/resizeImages"));
//Router to be exported
var routes = express_1.default.Router();
/*
// This route endpoint is used for the Image Resizing API
// The api/images API tool is used to resize and display images
//
// The API route has 3 main URL query parameters
//   jpgname - the filename, without an extensiono, that exists on the API server at the public/images/original dir
//   width - the desired width of the image specified by jpgname
//   height - the desired width of the image specified by jpgname
//
// This endpoint will result in 1 of 4 responses
//   1. The API documentation when no query params are provided
//   2. An existing originalimage in its original size. Use jpgname param
//   3. A generated resized image. Use jpgname, width, and height params
//   4. An error message for invalid params or image requests
//
// Example query 1: ?jpgname=fjord&width=500&height=200
// Example query 2: ?jpgname=encenadaport&width=200&height=200
// Example query 3: ?jpgname=palmtunnel&width=10&height=10
// Example query 4: ?jpgname=santamonica&width=10&height=100
// Example query 5: ?jpgname=icelandwaterfall&width=5000&height=5000
// Example query 6: ?jpgname=icelandwaterfall
*/
// API documentation strring display to user for visiting images root endpoint with no query params
var apiDocStr = '// This route is used for the Image Resizing API <br/> The api/images API tool is used to resize and display images <br/> <br/> The API route has 3 main URL query parameters<br/>   jpgname - the filename, without an extensiono, that exists on the API server at the public/images/original dir<br/>   width - the desired width of the image specified by jpgname<br/>   height - the desired width of the image specified by jpgname<br/><br/> This endpoint will result in 1 of 4 responses<br/>   1. The API documentation when no query params are provided<br/>   2. An existing originalimage in its original size. Use jpgname param <br/>   3. A generated resized image. Use jpgname, width, and height params<br/>   4. An error message for invalid params or image requests<br/><br/> Example query1: ?jpgname=fjord&width=500&height=200<br/> Example query 2: ?jpgname=encenadaport&width=200&height=200<br/> Example query 3: ?jpgname=palmtunnel&width=10&height=10<br/> Example query 4: ?jpgname=santamonica&width=10&height=100<br/> Example query 5: ?jpgname=icelandwaterfall&width=5000&height=5000<br/> Example query 6: ?jpgname=icelandwaterfall';
routes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dimsValid, jpgname, widthStr, heightStr, pathToImage, width, height, pathToFile, imgCreatedResult, imgCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dimsValid = true;
                jpgname = req.query.jpgname;
                widthStr = req.query.width;
                heightStr = req.query.height;
                if (!(jpgname == undefined && widthStr == undefined && heightStr == undefined)) return [3 /*break*/, 1];
                res.send(apiDocStr);
                return [3 /*break*/, 9];
            case 1:
                if (!(jpgname != undefined &&
                    widthStr == undefined &&
                    heightStr == undefined)) return [3 /*break*/, 2];
                pathToImage = path_1.default.resolve("public/images/original/".concat(jpgname, ".jpg"));
                // send image response
                res.sendFile(pathToImage);
                return [3 /*break*/, 9];
            case 2:
                if (!(jpgname != undefined &&
                    widthStr != undefined &&
                    heightStr != undefined)) return [3 /*break*/, 8];
                width = parseInt(widthStr);
                height = parseInt(heightStr);
                // check if width and height are numbers
                if (isNaN(width) || isNaN(height)) {
                    dimsValid = false;
                    // once conerted to numbers, ensure they are positive
                    if (width < 0 || height < 0) {
                        dimsValid = false;
                    }
                }
                if (!dimsValid) return [3 /*break*/, 6];
                pathToFile = path_1.default.resolve("public/images/generated/".concat(jpgname, "_").concat(width, "x").concat(height, ".jpg"));
                if (!fs_1.default.existsSync(pathToFile)) return [3 /*break*/, 3];
                res.sendFile(pathToFile);
                return [3 /*break*/, 5];
            case 3:
                imgCreatedResult = resizeImages_1.default.resizeJpg(jpgname, width, height);
                return [4 /*yield*/, imgCreatedResult.then(function (sucess) { return sucess; })];
            case 4:
                imgCreated = _a.sent();
                // if the scaled image task returned successful
                if (imgCreated) {
                    // send image response
                    console.log("New image generated at ".concat(pathToFile));
                    res.sendFile(pathToFile);
                }
                else {
                    res.send('Image API Error: provide a valid image name');
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.send('Image API Error: width or height URL parameters incorrect.' +
                    '\n For example: /api/images?jpgname=fjord&width=400&width=150');
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                res.send('Image API Error: check that you have entered the URL parameters correctly.' +
                    '<br/> For example: /api/images/?jpgname=fjord&width=500&height=250');
                _a.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
