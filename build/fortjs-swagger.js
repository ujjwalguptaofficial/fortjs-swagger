/*!
 * @license :fortjs-swagger - V1.3.0 - 29/12/2023
 * https://github.com/ujjwalguptaofficial/fortjs-swagger
 * Copyright (c) 2023 @Ujjwal Gupta; Licensed MIT
 */
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
/* harmony import */ var _helpers_extract_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/extract_model */ "./src/helpers/extract_model.ts");


var Body = function (value, description) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        Object(_helpers_extract_model__WEBPACK_IMPORTED_MODULE_1__["extractAndSaveModel"])(value);
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveBody(className, methodName, {
            value: value,
            variableName: "body",
            description: description
        });
    };
};


/***/ }),

/***/ "./src/decorators/description.ts":
/*!***************************************!*\
  !*** ./src/decorators/description.ts ***!
  \***************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Description = function (value) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveDescription(className, methodName, value);
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

var IgnoreProperty = function (target, propertyName) {
    var className = target.constructor.name;
    _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].addIgnoreProperty(className, propertyName);
};


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: Body, IgnoreProperty, Query, Response, Param, Summary, Description, OptionalProperty, Security, Tag */
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

/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary */ "./src/decorators/summary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return _summary__WEBPACK_IMPORTED_MODULE_5__["Summary"]; });

/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description */ "./src/decorators/description.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return _description__WEBPACK_IMPORTED_MODULE_6__["Description"]; });

/* harmony import */ var _optional_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./optional_property */ "./src/decorators/optional_property.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionalProperty", function() { return _optional_property__WEBPACK_IMPORTED_MODULE_7__["OptionalProperty"]; });

/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security */ "./src/decorators/security.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Security", function() { return _security__WEBPACK_IMPORTED_MODULE_8__["Security"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tag */ "./src/decorators/tag.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_9__["Tag"]; });













/***/ }),

/***/ "./src/decorators/optional_property.ts":
/*!*********************************************!*\
  !*** ./src/decorators/optional_property.ts ***!
  \*********************************************/
/*! exports provided: OptionalProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalProperty", function() { return OptionalProperty; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var OptionalProperty = function (target, propertyName) {
    var className = target.constructor.name;
    _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].addOptional(className, propertyName);
};


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

/***/ "./src/decorators/security.ts":
/*!************************************!*\
  !*** ./src/decorators/security.ts ***!
  \************************************/
/*! exports provided: Security */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Security", function() { return Security; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Security = function (type, scopes) {
    return function (target) {
        var className = target.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveSecurity(className, type, scopes);
    };
};


/***/ }),

/***/ "./src/decorators/summary.ts":
/*!***********************************!*\
  !*** ./src/decorators/summary.ts ***!
  \***********************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Summary = function (value) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveSummary(className, methodName, value);
    };
};


/***/ }),

/***/ "./src/decorators/tag.ts":
/*!*******************************!*\
  !*** ./src/decorators/tag.ts ***!
  \*******************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");

var Tag = function (name, description) {
    return function (target) {
        var className = target.name;
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveTag(className, name, description);
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

/***/ "./src/enums/swagger_output_param.ts":
/*!*******************************************!*\
  !*** ./src/enums/swagger_output_param.ts ***!
  \*******************************************/
/*! exports provided: SWAGGER_OUTPUT_PARAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAGGER_OUTPUT_PARAM", function() { return SWAGGER_OUTPUT_PARAM; });
var SWAGGER_OUTPUT_PARAM;
(function (SWAGGER_OUTPUT_PARAM) {
    SWAGGER_OUTPUT_PARAM["Query"] = "query";
    SWAGGER_OUTPUT_PARAM["Path"] = "path";
    SWAGGER_OUTPUT_PARAM["Body"] = "body";
})(SWAGGER_OUTPUT_PARAM || (SWAGGER_OUTPUT_PARAM = {}));


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
var swaggerControllerInfos = [];
var swaggerModels = [];
// used to save description and summary of props and class   
var classInfos = [];
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
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.responses.push(response);
        if (value == null) {
            swaggerControllerInfos.push({
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
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.queries.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
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
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.params.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
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
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        var worker = getNewWorker(methodName);
        worker.body = body;
        if (value == null) {
            swaggerControllerInfos.push({
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
            if (model.ignoredProperty == null) {
                model.ignoredProperty = [];
            }
            if (model.optionals == null) {
                model.optionals = [];
            }
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
                ignoredProperty: [propertyName],
                optionals: []
            });
        }
        else {
            value.ignoredProperty.push(propertyName);
        }
    };
    SwaggerHandler.addOptional = function (className, propertyName) {
        var value = swaggerModels.find(function (qry) { return qry.className === className; });
        if (value == null) {
            swaggerModels.push({
                classInstance: null,
                className: className,
                ignoredProperty: [],
                optionals: [propertyName]
            });
        }
        else {
            value.optionals.push(propertyName);
        }
    };
    Object.defineProperty(SwaggerHandler, "controllers", {
        get: function () {
            return swaggerControllerInfos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwaggerHandler, "models", {
        get: function () {
            return swaggerModels.filter(function (model) {
                if (model.classInstance != null) {
                    return model;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    SwaggerHandler.saveSummary = function (className, propName, summary) {
        var savedClass = classInfos.find(function (qry) { return qry.className === className; });
        if (savedClass == null) {
            classInfos.push({
                className: className,
                props: [{
                        description: null,
                        propName: propName,
                        summary: summary
                    }]
            });
        }
        else {
            var savedProp = savedClass.props.find(function (qry) { return qry.propName === propName; });
            if (savedProp == null) {
                savedClass.props.push({
                    description: null,
                    propName: propName,
                    summary: summary
                });
            }
            else {
                savedProp.summary = summary;
            }
        }
    };
    SwaggerHandler.saveDescription = function (className, propName, description) {
        var savedClass = classInfos.find(function (qry) { return qry.className === className; });
        if (savedClass == null) {
            classInfos.push({
                className: className,
                props: [{
                        description: description,
                        propName: propName,
                        summary: null
                    }]
            });
        }
        else {
            var savedProp = savedClass.props.find(function (qry) { return qry.propName === propName; });
            if (savedProp == null) {
                savedClass.props.push({
                    description: description,
                    propName: propName,
                    summary: null
                });
            }
            else {
                savedProp.description = description;
            }
        }
    };
    Object.defineProperty(SwaggerHandler, "classInfos", {
        get: function () {
            return classInfos;
        },
        enumerable: false,
        configurable: true
    });
    SwaggerHandler.saveSecurity = function (className, type, scopes) {
        if (scopes == null) {
            scopes = [];
        }
        var security = {
            type: type,
            scopes: scopes
        };
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [],
                security: [security]
            });
        }
        else {
            if (value.security != null) {
                value.security.push(security);
            }
            else {
                value.security = [security];
            }
        }
    };
    SwaggerHandler.saveTag = function (className, name, description) {
        var value = swaggerControllerInfos.find(function (qry) { return qry.className === className; });
        var tag = {
            name: name,
            description: description
        };
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [],
                tag: tag
            });
        }
        else {
            value.tag = tag;
        }
    };
    SwaggerHandler.isModelExist = function (className) {
        return SwaggerHandler.models.findIndex(function (q) { return q.className === className; }) >= 0;
    };
    return SwaggerHandler;
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
/* harmony import */ var _is_custom_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is_custom_class */ "./src/helpers/is_custom_class.ts");




var extractAndSaveModel = function (value) {
    var className = "";
    var type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
    var saveModelInfo = function (modelValue) {
        var model = getModelinfo(modelValue, type);
        if (model != null) {
            _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].saveModel(model);
            className = model.className;
        }
    };
    if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) { // means its class
        saveModelInfo(value);
    }
    else if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Array && value.length > 0) { // means its array of class
        var firstValue = value[0];
        if (Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(firstValue) === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) { // it is class
            type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(firstValue);
            saveModelInfo(firstValue);
        }
    }
    else {
        if (Object(_is_custom_class__WEBPACK_IMPORTED_MODULE_3__["isCustomClass"])(value)) {
            saveModelInfo(value);
        }
    }
    return className;
};
var getObject = function (value, type) {
    switch (type) {
        case _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function:
            return new value();
        case _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object:
            return value;
    }
};
var getModelinfo = function (value, type) {
    try {
        var model = getObject(value, type);
        if (model == null) {
            return;
        }
        var example = void 0;
        if (model.getExample != null) {
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

/***/ "./src/helpers/get_class_name.ts":
/*!***************************************!*\
  !*** ./src/helpers/get_class_name.ts ***!
  \***************************************/
/*! exports provided: getClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return getClassName; });
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _is_custom_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is_custom_class */ "./src/helpers/is_custom_class.ts");



var getClassName = function (value) {
    var type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
    if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) { // means its class
        return (new value()).constructor.name;
    }
    else {
        if (Object(_is_custom_class__WEBPACK_IMPORTED_MODULE_2__["isCustomClass"])(value)) {
            return value.constructor.name;
        }
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
        var modelRefString = "#/components/schemas/".concat(modelName);
        var refValue = {
            $ref: modelRefString
        };
        if (dataType === ___WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Function || dataType === ___WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Object) { // it is class
            return refValue;
        }
        else { // it is array of class
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

/***/ "./src/helpers/is_custom_class.ts":
/*!****************************************!*\
  !*** ./src/helpers/is_custom_class.ts ***!
  \****************************************/
/*! exports provided: isCustomClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCustomClass", function() { return isCustomClass; });
var isCustomClass = function (value) {
    var constructorName = value.constructor.name;
    switch (constructorName) {
        case "Array":
        case "String":
        case "Object":
            // case "Function":
            return false;
        default:
            return true;
    }
};


/***/ }),

/***/ "./src/helpers/swagger_formatter.ts":
/*!******************************************!*\
  !*** ./src/helpers/swagger_formatter.ts ***!
  \******************************************/
/*! exports provided: SwaggerFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerFormatter", function() { return SwaggerFormatter; });
/* harmony import */ var _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/swagger_handler */ "./src/handlers/swagger_handler.ts");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/get_param_schema */ "./src/helpers/get_param_schema.ts");
/* harmony import */ var _helpers_get_data_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/swagger_output_param */ "./src/enums/swagger_output_param.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _get_class_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get_class_name */ "./src/helpers/get_class_name.ts");
/* harmony import */ var _is_custom_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is_custom_class */ "./src/helpers/is_custom_class.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");










var SwaggerFormatter = /** @class */ (function () {
    function SwaggerFormatter() {
        this.tags_ = [];
    }
    SwaggerFormatter.prototype.getTags_ = function () {
        var _this = this;
        var tags = [];
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.forEach(function (val) {
            if (val && val.tag) {
                tags.push(val.tag);
                _this.tags_.push(val);
            }
        });
        return tags;
    };
    SwaggerFormatter.prototype.format = function (option) {
        var _this = this;
        var routes = _global__WEBPACK_IMPORTED_MODULE_4__["Global"].routes;
        var swaggerJson = {
            openapi: "3.0.0",
            info: option.appInfo,
            servers: option.servers,
            tags: this.getTags_(),
            components: {
                schemas: this.getModels_(),
                securitySchemes: option.securitySchemes
            }
        };
        var swaggerPaths = {};
        routes.forEach(function (route) {
            var swaggerRouteData = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(function (qry) { return qry.className === route.controllerName; });
            if (swaggerRouteData != null) {
                var pathName_1 = route.path;
                if (pathName_1[0] === "/") {
                    pathName_1 = route.path.substr(1);
                }
                var controllerSecurity_1 = _this.getControllerSecurity_(route.controllerName);
                route.workersAsArray.forEach(function (worker) {
                    var pattern = worker.pattern;
                    if (pattern[0] !== "/") {
                        pattern = "/".concat(pattern);
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
                            tags: _this.getTag_(route.controllerName, pathName_1),
                            responses: _this.getResponses_(route.controllerName, worker.workerName),
                            summary: _this.getSummary_(route.controllerName, worker.workerName),
                            description: _this.getDescription_(route.controllerName, worker.workerName),
                            security: controllerSecurity_1
                        };
                    });
                });
            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
    };
    SwaggerFormatter.prototype.getTag_ = function (className, defaultTag) {
        var tag = this.tags_.find(function (q) { return q.className === className; });
        if (tag) {
            return [tag.tag.name];
        }
        return [defaultTag];
    };
    SwaggerFormatter.prototype.getControllerSecurity_ = function (className) {
        var controller = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(function (qry) { return qry.className === className; });
        if (controller != null) {
            var securities = controller.security;
            if (securities != null) {
                var outputSecurity_1 = [];
                securities.forEach(function (security) {
                    var _a;
                    outputSecurity_1.push((_a = {},
                        _a[security.type] = security.scopes,
                        _a));
                });
                return outputSecurity_1;
            }
        }
        return null;
    };
    SwaggerFormatter.prototype.getSummary_ = function (className, propName) {
        var classInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].classInfos.find(function (qry) { return qry.className === className; });
        if (classInfo != null) {
            var savedProp = classInfo.props.find(function (qry) { return qry.propName === propName; });
            if (savedProp != null) {
                return savedProp.summary;
            }
        }
        return null;
    };
    SwaggerFormatter.prototype.getDescription_ = function (className, propName) {
        var classInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].classInfos.find(function (qry) { return qry.className === className; });
        if (classInfo != null) {
            var savedProp = classInfo.props.find(function (qry) { return qry.propName === propName; });
            if (savedProp != null) {
                return savedProp.description;
            }
        }
        return null;
    };
    SwaggerFormatter.prototype.getModels_ = function () {
        var modelsInfo = {};
        var createSwaggerModelSchemas = function (model) {
            if (Object(_is_custom_class__WEBPACK_IMPORTED_MODULE_8__["isCustomClass"])(model.classInstance)) {
                var obj_1 = model.classInstance;
                var keys_1 = Object.keys(obj_1);
                // remove ignored prop
                model.ignoredProperty.forEach(function (prop) {
                    var index = keys_1.indexOf(prop);
                    if (index >= 0) {
                        keys_1.splice(index, 1);
                    }
                });
                var properties_1 = {};
                keys_1.forEach(function (key) {
                    var propValue = obj_1[key];
                    var dataType = Object(_helpers_get_data_type__WEBPACK_IMPORTED_MODULE_3__["getDataType"])(propValue);
                    var paramInfo = {
                        type: dataType
                    };
                    if (dataType === _enums__WEBPACK_IMPORTED_MODULE_6__["DATA_TYPE"].Array && propValue.length > 0) {
                        var firstItem = propValue[0];
                        var clasName = Object(_get_class_name__WEBPACK_IMPORTED_MODULE_7__["getClassName"])(firstItem);
                        if (clasName && !_handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].isModelExist(clasName)) {
                            var modelInfo = {
                                classInstance: firstItem,
                                className: clasName,
                                ignoredProperty: [],
                                optionals: []
                            };
                            _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].saveModel(modelInfo);
                            createSwaggerModelSchemas(modelInfo);
                        }
                        paramInfo.items = Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(firstItem);
                    }
                    properties_1[key] = paramInfo;
                });
                model.optionals.forEach(function (optional) {
                    var index = keys_1.indexOf(optional);
                    if (index >= 0) {
                        keys_1.splice(index, 1);
                    }
                });
                modelsInfo[model.className] = {
                    required: keys_1,
                    properties: properties_1
                };
            }
        };
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].models.forEach(createSwaggerModelSchemas);
        return modelsInfo;
    };
    SwaggerFormatter.prototype.getResponses_ = function (className, methodName) {
        var result = {};
        var workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(function (qry) { return qry.className === className; }).
            workers.find(function (qry) { return qry.methodName === methodName; });
        if (workerInfo != null) {
            workerInfo.responses.forEach(function (response) {
                result[response.statusCode] = { content: {} };
                response.contentType.forEach(function (contentType) {
                    result[response.statusCode].content[contentType] = {
                        schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(response.value)
                    };
                });
            });
        }
        else {
            _utils__WEBPACK_IMPORTED_MODULE_9__["SwaggerLogger"].warning("No response is defined for worker - \"".concat(methodName, "\" inside controller \"").concat(className, "\"."));
        }
        return result;
    };
    SwaggerFormatter.prototype.getParams_ = function (className, methodName) {
        var params = [];
        var workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(function (qry) { return qry.className === className; })
            .workers.find(function (qry) { return qry.methodName === methodName; });
        if (workerInfo != null) {
            // from route params
            workerInfo.params.forEach(function (param) {
                params.push({
                    in: _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__["SWAGGER_OUTPUT_PARAM"].Path,
                    name: param.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(param.value),
                    description: param.description
                });
            });
            // from query
            workerInfo.queries.forEach(function (query) {
                params.push({
                    in: _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__["SWAGGER_OUTPUT_PARAM"].Query,
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
                    in: _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__["SWAGGER_OUTPUT_PARAM"].Body,
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Swagger, Body, IgnoreProperty, Query, Response, Param, Summary, Description, OptionalProperty, Security, Tag, DATA_TYPE, SwaggerModel */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Summary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Description"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionalProperty", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["OptionalProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Security", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Security"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["Tag"]; });

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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_swagger_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/swagger_formatter */ "./src/helpers/swagger_formatter.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    }
    Swagger.create = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var formatedData, isPathExist, swaggerConfigPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].routes = this.instance.routesAsArray;
                        formatedData = new _helpers_swagger_formatter__WEBPACK_IMPORTED_MODULE_3__["SwaggerFormatter"]().format(option);
                        return [4 /*yield*/, fs_extra__WEBPACK_IMPORTED_MODULE_2__["pathExists"](option.outputPath)];
                    case 1:
                        isPathExist = _a.sent();
                        if (!(isPathExist === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_extra__WEBPACK_IMPORTED_MODULE_2__["mkdir"](option.outputPath)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        swaggerConfigPath = "".concat(option.outputPath, "/swagger.json");
                        return [4 /*yield*/, fs_extra__WEBPACK_IMPORTED_MODULE_2__["writeFile"](swaggerConfigPath, JSON.stringify(formatedData))];
                    case 4:
                        _a.sent();
                        //copy swagger files
                        return [4 /*yield*/, this.instance.copySwaggerAssets_(option.outputPath)];
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
            return fs_extra__WEBPACK_IMPORTED_MODULE_2__["copy"](path__WEBPACK_IMPORTED_MODULE_4__["join"](__dirname, "swagger_ui/".concat(asset)), contentPath + asset);
        }));
    };
    Swagger.instance = new Swagger();
    return Swagger;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Router"]));



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: SwaggerLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/utils/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerLogger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["SwaggerLogger"]; });




/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/*! exports provided: SwaggerLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerLogger", function() { return SwaggerLogger; });
var SwaggerLogger = /** @class */ (function () {
    function SwaggerLogger() {
    }
    SwaggerLogger.warning = function (msg) {
        console.log('Swagger Warning !', msg);
    };
    return SwaggerLogger;
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
//# sourceMappingURL=fortjs-swagger.js.map