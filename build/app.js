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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

var Body = function (variableName, type) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveQuery(className, methodName, {
            type: type,
            variableName: variableName
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
/*! exports provided: Body, IgnoreProperty, Query, Response, SwaggerModel */
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

/* harmony import */ var _swagger_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swagger_model */ "./src/decorators/swagger_model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return _swagger_model__WEBPACK_IMPORTED_MODULE_4__["SwaggerModel"]; });








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

var Query = function (variableName, type) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveQuery(className, methodName, {
            type: type,
            variableName: variableName
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
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Response = function (statusCode, value) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveResponse(className, value, {
            statusCode: statusCode,
            value: value
        });
    };
};


/***/ }),

/***/ "./src/decorators/swagger_model.ts":
/*!*****************************************!*\
  !*** ./src/decorators/swagger_model.ts ***!
  \*****************************************/
/*! exports provided: SwaggerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return SwaggerModel; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

// export const responseModel = (): ClassDecorator => {
//     return (target: any) => {
//         const className = target.name;
//         SwaggerHandler.saveModel({
//             classInstance: new target(),
//             className: className,
//             ignoredProperty: []
//         })
//     }
// }
var SwaggerModel = function (target) {
    var className = target.name;
    _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveModel({
        classInstance: new target(),
        className: className,
        ignoredProperty: []
    });
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

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.routes = [];
    return Global;
}());



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
        body: {},
        file: {},
        methodName: methodName,
        query: {},
        response: {}
    };
};
var SwaggerHandler = /** @class */ (function () {
    function SwaggerHandler() {
    }
    SwaggerHandler.saveResponse = function (className, methodName, response) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        if (value == null) {
            var worker = getNewWorker(methodName);
            worker.response = response;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) {
                savedWorker.response[response.statusCode] = response.value;
            }
        }
    };
    SwaggerHandler.saveQuery = function (className, methodName, query) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        if (value == null) {
            var worker = getNewWorker(methodName);
            worker.query = query;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) {
                savedWorker.query[query.variableName] = query.type;
            }
        }
    };
    SwaggerHandler.saveBody = function (className, methodName, body) {
        var value = swaggerRoutes.find(function (qry) { return qry.className === className; });
        if (value == null) {
            var worker = getNewWorker(methodName);
            worker.body = body;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            var savedWorker = value.workers.find(function (qry) { return qry.methodName === methodName; });
            if (savedWorker != null) {
                savedWorker.body[body.variableName] = body.type;
            }
        }
    };
    SwaggerHandler.saveModel = function (model) {
        var value = swaggerModels.find(function (qry) { return qry.className === model.className; });
        if (value == null) {
            swaggerModels.push(model);
        }
        else {
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Swagger, Body, IgnoreProperty, Query, Response, SwaggerModel, DATA_TYPE */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerModel", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["SwaggerModel"]; });

/* harmony import */ var _enums_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/index */ "./src/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums_index__WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"]; });






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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");
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
        var _this = _super.call(this) || this;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].routes = _this.routes;
        return _this;
    }
    Swagger.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("routes", _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].routes);
                console.log("models", _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].models);
                return [2 /*return*/];
            });
        });
    };
    return Swagger;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Router"]));



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Users\ujjwal\Documents\projects\Public\fortjs-swagger\src\index.ts */"./src/index.ts");


/***/ }),

/***/ "fortjs":
/*!*************************!*\
  !*** external "fortjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fortjs");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map