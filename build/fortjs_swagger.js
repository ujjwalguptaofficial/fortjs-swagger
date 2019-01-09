module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abstracts/index.ts":
/*!********************************!*\
  !*** ./src/abstracts/index.ts ***!
  \********************************/
/*! exports provided: SwaggerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swagger_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swagger_model */ "./src/abstracts/swagger_model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return _swagger_model__WEBPACK_IMPORTED_MODULE_0__["SwaggerModel"]; });




/***/ }),

/***/ "./src/abstracts/swagger_model.ts":
/*!****************************************!*\
  !*** ./src/abstracts/swagger_model.ts ***!
  \****************************************/
/*! exports provided: SwaggerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return SwaggerModel; });
var SwaggerModel = /** @class */ (function () {
    function SwaggerModel() {
    }
    return SwaggerModel;
}());



/***/ }),

/***/ "./src/decorators/body.ts":
/*!********************************!*\
  !*** ./src/decorators/body.ts ***!
  \********************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Body = function (value, description) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveBody(className, methodName, {
            value: value,
            variableName: "body",
            description: description
        });
    };
};


/***/ }),

/***/ "./src/decorators/ignore_property.ts":
/*!*******************************************!*\
  !*** ./src/decorators/ignore_property.ts ***!
  \*******************************************/
/*! exports provided: IgnoreProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgnoreProperty", function() { return IgnoreProperty; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var IgnoreProperty = function (target, propertyName, descriptor) {
    var className = target.constructor.name;
    _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].addIgnoreProperty(className, propertyName);
};


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: Body, IgnoreProperty, Query, Response, Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/decorators/body.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _body__WEBPACK_IMPORTED_MODULE_0__["Body"]; });

/* harmony import */ var _ignore_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ignore_property */ "./src/decorators/ignore_property.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IgnoreProperty", function() { return _ignore_property__WEBPACK_IMPORTED_MODULE_1__["IgnoreProperty"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "./src/decorators/query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _query__WEBPACK_IMPORTED_MODULE_2__["Query"]; });

/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response */ "./src/decorators/response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _response__WEBPACK_IMPORTED_MODULE_3__["Response"]; });

/* harmony import */ var _param__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./param */ "./src/decorators/param.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _param__WEBPACK_IMPORTED_MODULE_4__["Param"]; });








/***/ }),

/***/ "./src/decorators/param.ts":
/*!*********************************!*\
  !*** ./src/decorators/param.ts ***!
  \*********************************/
/*! exports provided: Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Param = function (variableName, value, description) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveParam(className, methodName, {
            value: value,
            variableName: variableName,
            description: description
        });
    };
};


/***/ }),

/***/ "./src/decorators/query.ts":
/*!*********************************!*\
  !*** ./src/decorators/query.ts ***!
  \*********************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Query = function (variableName, value, description) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveQuery(className, methodName, {
            value: value,
            variableName: variableName,
            description: description
        });
    };
};


/***/ }),

/***/ "./src/decorators/response.ts":
/*!************************************!*\
  !*** ./src/decorators/response.ts ***!
  \************************************/
/*! exports provided: Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");
/* harmony import */ var _helpers_extract_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/extract_model */ "./src/helpers/extract_model.ts");



var Response = function (statusCode, value, contentType) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var modelName = Object(_helpers_extract_model__WEBPACK_IMPORTED_MODULE_2__["extractAndSaveModel"])(value);
        var saveResponse = function (mimeType) {
            _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_1__["SwaggerHandler"].saveResponse(className, methodName, {
                contentType: mimeType,
                statusCode: statusCode,
                value: value
            });
        };
        if (modelName.length > 0) {
            saveResponse([fortjs__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json, fortjs__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xml]);
        }
        else {
            if (contentType == null) {
                contentType = fortjs__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text;
            }
            saveResponse([contentType]);
        }
    };
};


/***/ }),

/***/ "./src/enums/data_type.ts":
/*!********************************!*\
  !*** ./src/enums/data_type.ts ***!
  \********************************/
/*! exports provided: DATA_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return DATA_TYPE; });
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));


/***/ }),

/***/ "./src/enums/index.ts":
/*!****************************!*\
  !*** ./src/enums/index.ts ***!
  \****************************/
/*! exports provided: DATA_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_type */ "./src/enums/data_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _data_type__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"]; });




/***/ }),

/***/ "./src/handlers/swagger_handler.ts":
/*!*****************************************!*\
  !*** ./src/handlers/swagger_handler.ts ***!
  \*****************************************/
/*! exports provided: SwaggerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerHandler", function() { return SwaggerHandler; });
var swaggerRoutes = [];
var swaggerModels = [];
var getNewWorker = function (methodName) {
    return {
        body: null,
        file: null,
        methodName: methodName,
        queries: [],
        responses: [],
        params: []
    };
};
var SwaggerHandler = /** @class */ (function () {
    function SwaggerHandler() {
    }
    SwaggerHandler.saveResponse = function (className, methodName, response) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.responses.push(response);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) { // add query for that worker
                savedWorker.responses.push(response);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    };
    SwaggerHandler.saveQuery = function (className, methodName, query) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.queries.push(query);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) { // add query for that worker
                savedWorker.queries.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    };
    SwaggerHandler.saveParam = function (className, methodName, query) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.params.push(query);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) { // add query for that worker
                savedWorker.params.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    };
    SwaggerHandler.saveBody = function (className, methodName, body) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.body = body;
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) { // add query for that worker
                savedWorker.body = body;
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    };
    SwaggerHandler.saveModel = function (model) {
        var value = swaggerModels.find(function (qry) { return qry.className === model.className; });
        if (value == null) {
            swaggerModels.push(model);
        }
        else if (value.classInstance == null) {
            value.classInstance = model.classInstance;
        }
    };
    SwaggerHandler.addIgnoreProperty = function (className, propertyName) {
        var value = swaggerModels.find(function (qry) { return qry.className === className; });
        if (value == null) {
            swaggerModels.push({
                classInstance: null,
                className: className,
                ignoredProperty: [propertyName]
            });
        }
        else {
            value.ignoredProperty.push(propertyName);
        }
    };
    Object.defineProperty(SwaggerHandler, "routes", {
        get: function () {
            return swaggerRoutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwaggerHandler, "models", {
        get: function () {
            return swaggerModels;
        },
        enumerable: true,
        configurable: true
    });
    return SwaggerHandler;
}());



/***/ }),

/***/ "./src/helpers/code_reader.ts":
/*!************************************!*\
  !*** ./src/helpers/code_reader.ts ***!
  \************************************/
/*! exports provided: FORT_FILE_TYPE, CodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORT_FILE_TYPE", function() { return FORT_FILE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeReader", function() { return CodeReader; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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





var FORT_FILE_TYPE;
(function (FORT_FILE_TYPE) {
    FORT_FILE_TYPE["Controller"] = "controller";
    FORT_FILE_TYPE["Model"] = "model";
})(FORT_FILE_TYPE || (FORT_FILE_TYPE = {}));
var CodeReader = /** @class */ (function () {
    function CodeReader(contentPath) {
        this.srcFolder = contentPath;
        this.setClasses_();
    }
    CodeReader.prototype.setClasses_ = function () {
        // from routes
        var routeClasses = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].routes.map(function (val) {
            return val.className;
        });
        // from models
        var modelClasses = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].models.map(function (val) {
            return val.className;
        });
        this.classNames = routeClasses.concat(modelClasses);
    };
    CodeReader.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].getAllFilesFrom(this.srcFolder)];
                    case 1:
                        files = _a.sent();
                        console.log("list of files", files);
                        if (!(files.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAllFilesFromFolder(files)];
                    case 2:
                        files = _a.sent();
                        return [2 /*return*/, Promise.all(files.map(function (filePath) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.readFile(filePath)];
                                });
                            }); }))];
                    case 3: throw "No files found in directory - " + this.srcFolder;
                }
            });
        });
    };
    CodeReader.prototype.getAllFilesFromFolder = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var isFolderFound, newFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newFiles = [];
                        return [4 /*yield*/, Promise.all(files.map(function (filePath, index) { return __awaiter(_this, void 0, void 0, function () {
                                var isFolder, filesFromSubDirectory;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            filePath = path__WEBPACK_IMPORTED_MODULE_3__["join"](this.srcFolder, filePath);
                                            return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].isDirectory(filePath)];
                                        case 1:
                                            isFolder = _a.sent();
                                            if (!(isFolder === true)) return [3 /*break*/, 3];
                                            isFolderFound = true;
                                            return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].getAllFilesFrom(filePath)];
                                        case 2:
                                            filesFromSubDirectory = _a.sent();
                                            newFiles.push.apply(newFiles, filesFromSubDirectory.map(function (val) {
                                                return path__WEBPACK_IMPORTED_MODULE_3__["join"](filePath, val);
                                            }));
                                            return [3 /*break*/, 4];
                                        case 3:
                                            newFiles.push(filePath);
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        // console.log("files after getting from folders", newFiles);
                        if (isFolderFound === true) {
                            return [2 /*return*/, newFiles];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeReader.prototype.isNullOrEmpty_ = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNullOrEmpty(value);
    };
    CodeReader.prototype.reverse_ = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_1__["Util"].reverse(value);
    };
    CodeReader.prototype.readFile = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var isFolder, content, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("processing file path: ", path);
                        return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].isDirectory(path)];
                    case 1:
                        isFolder = _a.sent();
                        if (!(isFolder === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_extra__WEBPACK_IMPORTED_MODULE_4__["readFile"](path, {
                                encoding: 'utf-8'
                            })];
                    case 2:
                        content = _a.sent();
                        info = this.getCodeInfo(content);
                        console.log("info", info);
                        return [2 /*return*/, info];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    CodeReader.prototype.getCodeInfo = function (contents) {
        var _this = this;
        var classIndex = contents.lastIndexOf('class');
        if (classIndex < 0) {
            return null;
        }
        var contentLength = contents.length;
        var getClassName = function () {
            var className = "";
            var isCharFound = false;
            // get class index past the import  
            // let importIndex = contents.lastIndexOf('import');
            // if (importIndex > classIndex) {
            //     classIndex = contents.indexOf('class', classIndex);;
            //     importIndex = contents.indexOf('import', classIndex);
            // }
            for (var i = classIndex + 5; i < contentLength; i++) {
                switch (contents[i]) {
                    case " ":
                        if (isCharFound === true) {
                            return className;
                        }
                        break;
                    case "{": return className;
                    default:
                        className += contents[i];
                        isCharFound = true;
                }
            }
            return className;
        };
        var getFnName = function (commentEndIndex) {
            var indexOfBracket = contents.indexOf("{", commentEndIndex);
            var indexOfParanthesis = -1;
            for (var i = indexOfBracket; indexOfParanthesis <= -1; i--) {
                if (contents[i] === "(") {
                    indexOfParanthesis = i;
                }
            }
            // const indexOfParanthesis = contents.indexOf("(", commentEndIndex);
            var methodName = "";
            var isCharFound = false;
            for (var i = indexOfParanthesis; i > commentEndIndex; i--) {
                switch (contents[i]) {
                    case " ":
                        if (isCharFound === true) {
                            return _this.reverse_(methodName);
                        }
                        break;
                    default:
                        methodName += contents[i];
                        isCharFound = true;
                }
            }
            return _this.reverse_(methodName);
        };
        var className = getClassName();
        var info = {
            className: className,
            workerComment: {}
        };
        console.log('class name', className);
        console.log('allowed class:', this.classNames);
        if (this.classNames.indexOf(className) >= 0) {
            console.log('class name exist', className);
            var maxattempts = 100;
            if (contents.search(/@worker/i)) {
                info.type = FORT_FILE_TYPE.Controller;
            }
            else {
                info.type = FORT_FILE_TYPE.Model;
            }
            var index = 0;
            console.log("info inside", info, "conetent length", contentLength);
            do {
                index = contents.indexOf("/**", index);
                var commentEndIndex = contents.indexOf("*/", index);
                if (index >= 0 && commentEndIndex > index) {
                    var comment = contents.substring(index, commentEndIndex);
                    if (index < classIndex) { // comment is for class
                        info.classComment = comment;
                    }
                    else { // comment is for worker
                        var methodName = getFnName(commentEndIndex);
                        if (this.isNullOrEmpty_(methodName) === false) {
                            info.workerComment[methodName] = comment;
                        }
                    }
                }
                --maxattempts;
                console.log("index", index, "comment end index", commentEndIndex, "maxattempts", maxattempts);
                if (index >= 0) {
                    index = commentEndIndex;
                }
            } while (index >= 0 && index <= contentLength - 1 && maxattempts >= 0);
            return info;
        }
        return null;
    };
    return CodeReader;
}());



/***/ }),

/***/ "./src/helpers/extract_model.ts":
/*!**************************************!*\
  !*** ./src/helpers/extract_model.ts ***!
  \**************************************/
/*! exports provided: extractAndSaveModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractAndSaveModel", function() { return extractAndSaveModel; });
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");



var extractAndSaveModel = function (value) {
    var className = "";
    var type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
    var saveModelInfo = function (modelValue) {
        var model = getModelinfo(modelValue);
        if (model != null) {
            _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].saveModel(model);
            className = model.className;
        }
    };
    if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) {
        saveModelInfo(value);
    }
    else if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Array && value.length > 0) {
        var firstValue = value[0];
        if (Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(firstValue) === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) {
            saveModelInfo(firstValue);
        }
    }
    return className;
};
var getModelinfo = function (value) {
    try {
        var model = new value();
        var example = void 0;
        if (model.getExample) {
            example = model.getExample();
        }
        return {
            classInstance: example == null ? model : example,
            className: model.constructor.name,
            ignoredProperty: []
        };
    }
    catch (ex) {
        console.log("getModelinfo", ex);
    }
    return null;
};


/***/ }),

/***/ "./src/helpers/get_data_type.ts":
/*!**************************************!*\
  !*** ./src/helpers/get_data_type.ts ***!
  \**************************************/
/*! exports provided: getDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return getDataType; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");

var getDataType = function (value) {
    var type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return _enums__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"].Array;
            }
        default:
            return type;
    }
};


/***/ }),

/***/ "./src/helpers/get_param_schema.ts":
/*!*****************************************!*\
  !*** ./src/helpers/get_param_schema.ts ***!
  \*****************************************/
/*! exports provided: getParamSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParamSchema", function() { return getParamSchema; });
/* harmony import */ var _extract_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract_model */ "./src/helpers/extract_model.ts");
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.ts");



var getParamSchema = function (value) {
    var modelName = Object(_extract_model__WEBPACK_IMPORTED_MODULE_0__["extractAndSaveModel"])(value);
    var dataType = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_1__["getDataType"])(value);
    if (modelName.length > 0) { // value is model
        var modelRefString = "#/components/schemas/" + modelName;
        var refValue = {
            $ref: modelRefString
        };
        if (dataType === ___WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Function) {
            return refValue;
        }
        else {
            return {
                type: ___WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Array,
                items: refValue
            };
        }
    }
    else {
        return {
            type: dataType,
            example: value
        };
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Swagger, Body, IgnoreProperty, Query, Response, Param, DATA_TYPE, SwaggerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/index */ "./src/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swagger", function() { return _models_index__WEBPACK_IMPORTED_MODULE_0__["Swagger"]; });

/* harmony import */ var _decorators_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/index */ "./src/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IgnoreProperty", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["IgnoreProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Response"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Param"]; });

/* harmony import */ var _enums_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/index */ "./src/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums_index__WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"]; });

/* harmony import */ var _abstracts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstracts/index */ "./src/abstracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_3__["SwaggerModel"]; });







/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: Swagger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swagger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swagger */ "./src/models/swagger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swagger", function() { return _swagger__WEBPACK_IMPORTED_MODULE_0__["Swagger"]; });




/***/ }),

/***/ "./src/models/swagger.ts":
/*!*******************************!*\
  !*** ./src/models/swagger.ts ***!
  \*******************************/
/*! exports provided: Swagger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swagger", function() { return Swagger; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swagger_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swagger_formatter */ "./src/models/swagger_formatter.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var Swagger = /** @class */ (function (_super) {
    __extends(Swagger, _super);
    function Swagger() {
        return _super.call(this) || this;
        // Global.routes = this.routes;
    }
    Swagger.prototype.create = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var formatedData, isPathExist, swaggerConfigPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formatedData = new _swagger_formatter__WEBPACK_IMPORTED_MODULE_1__["SwaggerFormatter"]().format(option, this.routes);
                        return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].isPathExist(option.outputPath)];
                    case 1:
                        isPathExist = _a.sent();
                        if (!(isPathExist === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].createDir(option.outputPath)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        swaggerConfigPath = option.outputPath + "/swagger.json";
                        //  await writeFile(swaggerConfigPath, JSON.stringify(formmatedData), { flag: 'w' });
                        return [4 /*yield*/, fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].writeFile(swaggerConfigPath, JSON.stringify(formatedData))];
                    case 4:
                        //  await writeFile(swaggerConfigPath, JSON.stringify(formmatedData), { flag: 'w' });
                        _a.sent();
                        //copy swagger files
                        return [4 /*yield*/, this.copySwaggerAssets_(option.outputPath)];
                    case 5:
                        //copy swagger files
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Swagger.prototype.copySwaggerAssets_ = function (contentPath) {
        var assets = ['index.html', 'swagger.js'];
        return Promise.all(assets.map(function (asset) {
            return fortjs__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].copyFile(path__WEBPACK_IMPORTED_MODULE_2__["join"](__dirname, "swagger_ui/" + asset), contentPath + asset);
        }));
    };
    Swagger.prototype.getExtension_ = function (extension) {
        switch (extension) {
            case ".ts":
            case "ts":
                return ".ts";
            case ".js":
            case "js":
                return ".js";
        }
        return null;
    };
    return Swagger;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Router"]));



/***/ }),

/***/ "./src/models/swagger_formatter.ts":
/*!*****************************************!*\
  !*** ./src/models/swagger_formatter.ts ***!
  \*****************************************/
/*! exports provided: SWAGGER_OUTPUT_PARAM, SwaggerFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAGGER_OUTPUT_PARAM", function() { return SWAGGER_OUTPUT_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerFormatter", function() { return SwaggerFormatter; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/get_param_schema */ "./src/helpers/get_param_schema.ts");
/* harmony import */ var _helpers_get_data_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _helpers_code_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/code_reader */ "./src/helpers/code_reader.ts");





var SWAGGER_OUTPUT_PARAM;
(function (SWAGGER_OUTPUT_PARAM) {
    SWAGGER_OUTPUT_PARAM["Query"] = "query";
    SWAGGER_OUTPUT_PARAM["Path"] = "path";
    SWAGGER_OUTPUT_PARAM["Body"] = "body";
})(SWAGGER_OUTPUT_PARAM || (SWAGGER_OUTPUT_PARAM = {}));
var SwaggerFormatter = /** @class */ (function () {
    function SwaggerFormatter() {
    }
    SwaggerFormatter.prototype.format = function (option, routes) {
        var _this = this;
        var codeInfos = new _helpers_code_reader__WEBPACK_IMPORTED_MODULE_4__["CodeReader"](option.srcPath).read();
        var swaggerJson = {
            openapi: "3.0.0",
            info: option.appInfo,
            servers: option.servers,
            components: {
                schemas: this.getModels_()
            }
        };
        var swaggerPaths = {};
        routes.forEach(function (route) {
            var swaggerRouteData = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].routes.find(function (qry) { return qry.className === route.controllerName; });
            if (swaggerRouteData != null) {
                var pathName_1 = route.path;
                if (pathName_1[0] === "/") {
                    pathName_1 = route.path.substr(1);
                }
                route.workers.forEach(function (worker) {
                    var pattern = worker.pattern;
                    if (pattern[0] !== "/") {
                        pattern = "/" + pattern;
                    }
                    if (swaggerPaths[pattern] == null) {
                        swaggerPaths[pattern] = {};
                    }
                    // add multiple route for all http method allowed for a single path 
                    worker.methodsAllowed.forEach(function (httpMethod) {
                        swaggerPaths[pattern][httpMethod.toLowerCase()] = {
                            operationId: worker.workerName,
                            consumes: [fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Json, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Xml, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Html, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text, "*/*"],
                            parameters: _this.getParams_(route.controllerName, worker.workerName),
                            tags: [pathName_1],
                            responses: _this.getResponses_(route.controllerName, worker.workerName)
                        };
                    });
                });
            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
    };
    SwaggerFormatter.prototype.getModels_ = function () {
        var models = {};
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].models.forEach(function (model) {
            var obj = model.classInstance;
            var keys = Object.keys(obj);
            // remove ignored prop
            model.ignoredProperty.forEach(function (prop) {
                var index = keys.indexOf(prop);
                keys.splice(index, 1);
            });
            var properties = {};
            keys.forEach(function (key) {
                var propValue = obj[key];
                var dataType = Object(_helpers_get_data_type__WEBPACK_IMPORTED_MODULE_3__["getDataType"])(propValue);
                properties[key] = {
                    type: dataType
                };
            });
            models[model.className] = {
                required: keys,
                properties: properties
            };
        });
        return models;
    };
    SwaggerFormatter.prototype.getResponses_ = function (className, methodName) {
        var result = {};
        var workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].routes.find(function (qry) { return qry.className === className; }).
            workers.find(function (qry) { return qry.methodName === methodName; });
        workerInfo.responses.forEach(function (response) {
            result[response.statusCode] = { content: {} };
            response.contentType.forEach(function (contentType) {
                result[response.statusCode].content[contentType] = {
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(response.value)
                };
            });
        });
        return result;
    };
    SwaggerFormatter.prototype.getParams_ = function (className, methodName) {
        var params = [];
        var workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].routes.find(function (qry) { return qry.className === className; })
            .workers.find(function (qry) { return qry.methodName === methodName; });
        if (workerInfo != null) {
            // from route params
            workerInfo.params.forEach(function (param) {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Path,
                    name: param.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(param.value),
                    description: param.description
                });
            });
            // from query
            workerInfo.queries.forEach(function (query) {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Query,
                    name: query.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(query.value),
                    description: query.description
                });
            });
            // from body
            var body = workerInfo.body;
            if (body != null) {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Body,
                    name: body.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(body.value),
                    description: body.description
                });
            }
        }
        return params;
    };
    return SwaggerFormatter;
}());



/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isNullOrEmpty = function (value) {
        return value == null || value.length === 0;
    };
    Util.reverse = function (value) {
        return value.split("").reverse().join("");
    };
    return Util;
}());



/***/ }),

/***/ "fortjs":
/*!*************************!*\
  !*** external "fortjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fortjs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=fortjs_swagger.js.map