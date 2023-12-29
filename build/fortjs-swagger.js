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
class SwaggerModel {
}


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


const Body = (value, description) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
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

const Description = (value) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
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

const IgnoreProperty = (target, propertyName) => {
    const className = target.constructor.name;
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

const OptionalProperty = (target, propertyName) => {
    const className = target.constructor.name;
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

const Param = (variableName, value, description) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
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

const Query = (variableName, value, description) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
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



const Response = (statusCode, value, contentType) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
        const modelName = Object(_helpers_extract_model__WEBPACK_IMPORTED_MODULE_2__["extractAndSaveModel"])(value);
        const saveResponse = (mimeType) => {
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

const Security = (type, scopes) => {
    return (target) => {
        const className = target.name;
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

const Summary = (value) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
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

const Tag = (name, description) => {
    return (target) => {
        const className = target.name;
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
class Global {
}
Global.routes = [];


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
const swaggerControllerInfos = [];
const swaggerModels = [];
// used to save description and summary of props and class   
const classInfos = [];
const getNewWorker = (methodName) => {
    return {
        body: null,
        file: null,
        methodName: methodName,
        queries: [],
        responses: [],
        params: []
    };
};
class SwaggerHandler {
    static saveResponse(className, methodName, response) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.responses.push(response);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.responses.push(response);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }
    static saveQuery(className, methodName, query) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.queries.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.queries.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }
    static saveParam(className, methodName, query) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.params.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.params.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }
    static saveBody(className, methodName, body) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.body = body;
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.body = body;
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }
    static saveModel(model) {
        const value = swaggerModels.find(qry => qry.className === model.className);
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
    }
    static addIgnoreProperty(className, propertyName) {
        const value = swaggerModels.find(qry => qry.className === className);
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
    }
    static addOptional(className, propertyName) {
        const value = swaggerModels.find(qry => qry.className === className);
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
    }
    static get controllers() {
        return swaggerControllerInfos;
    }
    static get models() {
        return swaggerModels.filter(model => {
            if (model.classInstance != null) {
                return model;
            }
        });
    }
    static saveSummary(className, propName, summary) {
        const savedClass = classInfos.find(qry => qry.className === className);
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
            const savedProp = savedClass.props.find(qry => qry.propName === propName);
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
    }
    static saveDescription(className, propName, description) {
        const savedClass = classInfos.find(qry => qry.className === className);
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
            const savedProp = savedClass.props.find(qry => qry.propName === propName);
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
    }
    static get classInfos() {
        return classInfos;
    }
    static saveSecurity(className, type, scopes) {
        if (scopes == null) {
            scopes = [];
        }
        const security = {
            type: type,
            scopes: scopes
        };
        const value = swaggerControllerInfos.find(qry => qry.className === className);
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
    }
    static saveTag(className, name, description) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const tag = {
            name,
            description
        };
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [],
                tag
            });
        }
        else {
            value.tag = tag;
        }
    }
    static isModelExist(className) {
        return SwaggerHandler.models.findIndex(q => q.className === className) >= 0;
    }
}


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




const extractAndSaveModel = (value) => {
    let className = "";
    let type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
    const saveModelInfo = (modelValue) => {
        const model = getModelinfo(modelValue, type);
        if (model != null) {
            _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_2__["SwaggerHandler"].saveModel(model);
            className = model.className;
        }
    };
    if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function) { // means its class
        saveModelInfo(value);
    }
    else if (type === _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Array && value.length > 0) { // means its array of class
        const firstValue = value[0];
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
const getObject = (value, type) => {
    switch (type) {
        case _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function:
            return new value();
        case _enums__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object:
            return value;
    }
};
const getModelinfo = (value, type) => {
    try {
        const model = getObject(value, type);
        if (model == null) {
            return;
        }
        let example;
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



const getClassName = (value) => {
    const type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
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

const getDataType = (value) => {
    const type = typeof value;
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



const getParamSchema = (value) => {
    const modelName = Object(_extract_model__WEBPACK_IMPORTED_MODULE_0__["extractAndSaveModel"])(value);
    const dataType = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_1__["getDataType"])(value);
    if (modelName.length > 0) { // value is model
        const modelRefString = `#/components/schemas/${modelName}`;
        const refValue = {
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
const isCustomClass = (value) => {
    const constructorName = value.constructor.name;
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










class SwaggerFormatter {
    constructor() {
        this.tags_ = [];
    }
    getTags_() {
        const tags = [];
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.forEach(val => {
            if (val && val.tag) {
                tags.push(val.tag);
                this.tags_.push(val);
            }
        });
        return tags;
    }
    format(option) {
        const routes = _global__WEBPACK_IMPORTED_MODULE_4__["Global"].routes;
        const swaggerJson = {
            openapi: "3.0.0",
            info: option.appInfo,
            servers: option.servers,
            tags: this.getTags_(),
            components: {
                schemas: this.getModels_(),
                securitySchemes: option.securitySchemes
            }
        };
        const swaggerPaths = {};
        routes.forEach(route => {
            const swaggerRouteData = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(qry => qry.className === route.controllerName);
            if (swaggerRouteData != null) {
                let pathName = route.path;
                if (pathName[0] === "/") {
                    pathName = route.path.substr(1);
                }
                const controllerSecurity = this.getControllerSecurity_(route.controllerName);
                route.workersAsArray.forEach(worker => {
                    let pattern = worker.pattern;
                    if (pattern[0] !== "/") {
                        pattern = `/${pattern}`;
                    }
                    if (swaggerPaths[pattern] == null) {
                        swaggerPaths[pattern] = {};
                    }
                    // add multiple route for all http method allowed for a single path 
                    worker.methodsAllowed.forEach(httpMethod => {
                        swaggerPaths[pattern][httpMethod.toLowerCase()] = {
                            operationId: worker.workerName,
                            consumes: [fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Json, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Xml, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Html, fortjs__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text, "*/*"],
                            parameters: this.getParams_(route.controllerName, worker.workerName),
                            tags: this.getTag_(route.controllerName, pathName),
                            responses: this.getResponses_(route.controllerName, worker.workerName),
                            summary: this.getSummary_(route.controllerName, worker.workerName),
                            description: this.getDescription_(route.controllerName, worker.workerName),
                            security: controllerSecurity
                        };
                    });
                });
            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
    }
    getTag_(className, defaultTag) {
        const tag = this.tags_.find(q => q.className === className);
        if (tag) {
            return [tag.tag.name];
        }
        return [defaultTag];
    }
    getControllerSecurity_(className) {
        const controller = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(qry => qry.className === className);
        if (controller != null) {
            const securities = controller.security;
            if (securities != null) {
                const outputSecurity = [];
                securities.forEach(security => {
                    outputSecurity.push({
                        [security.type]: security.scopes
                    });
                });
                return outputSecurity;
            }
        }
        return null;
    }
    getSummary_(className, propName) {
        const classInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].classInfos.find(qry => qry.className === className);
        if (classInfo != null) {
            const savedProp = classInfo.props.find(qry => qry.propName === propName);
            if (savedProp != null) {
                return savedProp.summary;
            }
        }
        return null;
    }
    getDescription_(className, propName) {
        const classInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].classInfos.find(qry => qry.className === className);
        if (classInfo != null) {
            const savedProp = classInfo.props.find(qry => qry.propName === propName);
            if (savedProp != null) {
                return savedProp.description;
            }
        }
        return null;
    }
    getModels_() {
        const modelsInfo = {};
        const createSwaggerModelSchemas = (model) => {
            if (Object(_is_custom_class__WEBPACK_IMPORTED_MODULE_8__["isCustomClass"])(model.classInstance)) {
                const obj = model.classInstance;
                const keys = Object.keys(obj);
                // remove ignored prop
                model.ignoredProperty.forEach(prop => {
                    const index = keys.indexOf(prop);
                    if (index >= 0) {
                        keys.splice(index, 1);
                    }
                });
                const properties = {};
                keys.forEach(key => {
                    const propValue = obj[key];
                    const dataType = Object(_helpers_get_data_type__WEBPACK_IMPORTED_MODULE_3__["getDataType"])(propValue);
                    const paramInfo = {
                        type: dataType
                    };
                    if (dataType === _enums__WEBPACK_IMPORTED_MODULE_6__["DATA_TYPE"].Array && propValue.length > 0) {
                        const firstItem = propValue[0];
                        const clasName = Object(_get_class_name__WEBPACK_IMPORTED_MODULE_7__["getClassName"])(firstItem);
                        if (clasName && !_handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].isModelExist(clasName)) {
                            const modelInfo = {
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
                    properties[key] = paramInfo;
                });
                model.optionals.forEach(optional => {
                    const index = keys.indexOf(optional);
                    if (index >= 0) {
                        keys.splice(index, 1);
                    }
                });
                modelsInfo[model.className] = {
                    required: keys,
                    properties: properties
                };
            }
        };
        _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].models.forEach(createSwaggerModelSchemas);
        return modelsInfo;
    }
    getResponses_(className, methodName) {
        const result = {};
        const workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(qry => qry.className === className).
            workers.find(qry => qry.methodName === methodName);
        if (workerInfo != null) {
            workerInfo.responses.forEach(response => {
                result[response.statusCode] = { content: {} };
                response.contentType.forEach(contentType => {
                    result[response.statusCode].content[contentType] = {
                        schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(response.value)
                    };
                });
            });
        }
        else {
            _utils__WEBPACK_IMPORTED_MODULE_9__["SwaggerLogger"].warning(`No response is defined for worker - "${methodName}" inside controller "${className}".`);
        }
        return result;
    }
    getParams_(className, methodName) {
        const params = [];
        const workerInfo = _handlers_swagger_handler__WEBPACK_IMPORTED_MODULE_0__["SwaggerHandler"].controllers.find(qry => qry.className === className)
            .workers.find(qry => qry.methodName === methodName);
        if (workerInfo != null) {
            // from route params
            workerInfo.params.forEach(param => {
                params.push({
                    in: _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__["SWAGGER_OUTPUT_PARAM"].Path,
                    name: param.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(param.value),
                    description: param.description
                });
            });
            // from query
            workerInfo.queries.forEach(query => {
                params.push({
                    in: _enums_swagger_output_param__WEBPACK_IMPORTED_MODULE_5__["SWAGGER_OUTPUT_PARAM"].Query,
                    name: query.variableName,
                    required: true,
                    schema: Object(_helpers_get_param_schema__WEBPACK_IMPORTED_MODULE_2__["getParamSchema"])(query.value),
                    description: query.description
                });
            });
            // from body
            const body = workerInfo.body;
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
    }
}


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





class Swagger extends fortjs__WEBPACK_IMPORTED_MODULE_0__["Router"] {
    constructor() {
        super();
    }
    static async create(option) {
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].routes = this.instance.routesAsArray;
        const formatedData = new _helpers_swagger_formatter__WEBPACK_IMPORTED_MODULE_3__["SwaggerFormatter"]().format(option);
        //console.log("formmated data", JSON.stringify(formmatedData));
        const isPathExist = await fs_extra__WEBPACK_IMPORTED_MODULE_2__["pathExists"](option.outputPath);
        if (isPathExist === false) {
            await fs_extra__WEBPACK_IMPORTED_MODULE_2__["mkdir"](option.outputPath);
        }
        const swaggerConfigPath = `${option.outputPath}/swagger.json`;
        await fs_extra__WEBPACK_IMPORTED_MODULE_2__["writeFile"](swaggerConfigPath, JSON.stringify(formatedData));
        //copy swagger files
        await this.instance.copySwaggerAssets_(option.outputPath);
    }
    copySwaggerAssets_(contentPath) {
        const assets = ['index.html', 'swagger.js'];
        return Promise.all(assets.map(asset => {
            return fs_extra__WEBPACK_IMPORTED_MODULE_2__["copy"](path__WEBPACK_IMPORTED_MODULE_4__["join"](__dirname, `swagger_ui/${asset}`), contentPath + asset);
        }));
    }
}
Swagger.instance = new Swagger();


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
class SwaggerLogger {
    static warning(msg) {
        console.log('Swagger Warning !', msg);
    }
}


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