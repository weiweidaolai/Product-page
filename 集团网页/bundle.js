/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*公用样式*/\r\n*{margin:0;\r\n  padding:0;\r\n  font-family: 微软雅黑;\r\n}\r\nbody{\r\n    background-color: #f3f3f3;\r\n}\r\n.container{\r\n    width: 1000px;\r\n    margin: 0 auto;\r\n}\r\n.title-bg {\r\n     height: 44px;\r\n     line-height: 48px;\r\n     background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../image/xinwentitle-bg.jpg\""); e.code = 'MODULE_NOT_FOUND';; throw e; }())) + ");\r\n    padding-left: 10px;\r\n }\r\n.title-bg h2 a{\r\n   text-decoration: none;\r\n    color: #787677;\r\n    font-size: 20px;\r\n}\r\n/*头部样式*/\r\ndiv#logo{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n\r\n}\r\ndiv#sousuo{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding-top: 46px;\r\n   float:right ;\r\n}\r\ninput[type=\"text\"] {\r\n    height: 40px;\r\n    font-size: 20px;\r\n    padding-left: 10px;\r\n    vertical-align: top;\r\n}\r\ninput[type=\"button\"] {\r\n    background-color: #3598db;\r\n    height: 44px;\r\n    color: white;\r\n    border: 0;\r\n    vertical-align: top;\r\n    width: 40px;\r\n    font-size: 18px;\r\n}\r\n/*导航样式*/\r\ndiv#nav nav li a {\r\n    text-decoration: none;\r\n     color: white;\r\n    line-height: 56px;\r\n    font-size: 20px;\r\n}\r\ndiv#nav {\r\n    height: 56px;\r\n    background-color: #3598db;\r\n\r\n}\r\ndiv#nav nav li {\r\n    display: inline-block;\r\n    height: 56px;\r\n    -webkit-transition:background 1s linear;\r\n    -moz-transition:background 1s linear;\r\n    -ms-transition:background 1s linear;\r\n    -o-transition:background 1s linear;\r\n    transition:background 1s linear;\r\n    border-right: solid 1px #2f89c5;\r\n    padding: 0 10px;\r\n}\r\ndiv#nav nav li.on,div#nav nav li:hover{\r\n    background-color:#2f89c5 ;\r\n    height: 56px;\r\n}\r\n/*轮播图样式*/\r\nsection#lunbotu {\r\n    margin-bottom: 20px;\r\n}\r\ndiv.wrap a{\r\n    color:#fff;\r\n}\r\ndiv#slide-holder {\r\n    width : 628px;\r\n    height : 278px;\r\n}\r\ndiv#slide-runner {\r\n    width : 628px;\r\n    height : 278px;\r\n    overflow : hidden;\r\n    position : absolute;\r\n}\r\ndiv#slide-holder img {\r\n    margin : 0;\r\n    display : none;\r\n    position : absolute;\r\n}\r\ndiv#slide-controls {\r\n    left : 0;\r\n    bottom : 0;\r\n    width : 628px;\r\n    height : 46px;\r\n    display : none;\r\n    position : absolute;\r\n}\r\ndiv#slide-controls p.text {\r\n    float : left;\r\n    color : #fff;\r\n    display : inline;\r\n    font-size : 10px;\r\n    line-height : 16px;\r\n    margin : 15px 0 0 20px;\r\n    text-transform : uppercase;\r\n}\r\np#slide-nav {\r\n    float : right;\r\n    height : 24px;\r\n    display : inline;\r\n    margin : 11px 15px 0 0;\r\n}\r\np#slide-nav a {\r\n    float : left;\r\n    width : 24px;\r\n    height : 24px;\r\n    display : inline;\r\n    font-size : 11px;\r\n    margin : 0 5px 0 0;\r\n    line-height : 24px;\r\n    font-weight : bold;\r\n    text-align : center;\r\n    text-decoration : none;\r\n    background-position : 0 0;\r\n    background-repeat : no-repeat;\r\n    background-image : url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../image/silde-nav.png\""); e.code = 'MODULE_NOT_FOUND';; throw e; }())) + ");\r\n}\r\np#slide-nav a.on {\r\n    background-position : 0 -24px;\r\n}\r\ndiv#body_wrapper {\r\n    margin-top: 25px;\r\n}\r\ndiv#slide-holder {\r\n    width: 628px;\r\n    height: 278px;\r\n    box-shadow: 1px 4px 15px #363ccc;\r\n}\r\ndiv#slide-runner {\r\n    width: 628px;\r\n    height: 278px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n}\r\n/*新闻样式*/\r\ndiv#body_wrapper article{\r\n    width: 628px;\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n.ms {\r\n    display: inline-block;\r\n    width: 275px;\r\n    height: 143px;\r\n    background: #2f89c5;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-decoration: none;\r\n    padding: 10px 20px;\r\n}\r\n\r\n#xinwen li{\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n}\r\n#xinwen li a h3 {\r\n    border-bottom: solid 1px #c7c3c2;\r\n    color: white;\r\n    height: 20px;\r\n    width: 274px;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 2;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#xinwen li a p {\r\n    color: #dcdcde;\r\n    height: 88px;\r\n    width: 274px;\r\n    overflow: hidden;\r\n\r\n}\r\n#xinwen li a img{\r\n    width:313px ;\r\n    height: 163px;\r\n}\r\n.sanjiao {\r\n    background: #2f89c5;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: relative;\r\n    -moz-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    top: 9px;\r\n    left: -31px;\r\n}\r\nsection#xinwen li a:first-child{\r\n    display: inline-block;\r\n    width: 311px;\r\n    overflow: hidden;\r\n}\r\n/*活动样式*/\r\nsection#huodong-a {\r\n    margin: 10px 0;\r\n        }\r\nsection#huodong-a li{\r\n    width:150px ;\r\n    height: 150px;\r\n    display: inline-block;\r\n    margin-right: 9px;\r\n}\r\nsection#huodong-a li:last-child{\r\n    margin-right: 0;\r\n}\r\n\r\nsection#huodong-a li img{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\nsection#huodong-b {\r\n    width: 464px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-right: 5px;\r\n}\r\nsection#huodong-b li:before {\r\n    content: counter(list);\r\n    background: #444444;\r\n    color: #ffffff;\r\n    padding: 3px 8px;\r\n}\r\nsection#huodong-b li {\r\n    display: inline-block;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding-bottom: 19px;\r\n    counter-increment: list;\r\n\r\n}\r\nsection#huodong-b li:hover{\r\n    text-shadow: 1px 1px 5px #444444;\r\n    -webkit-transition: text-shadow 1s linear ;\r\n    -moz-transition: text-shadow 1s linear ;\r\n    -ms-transition: text-shadow 1s linear ;\r\n    -o-transition: text-shadow 1s linear ;\r\n    transition: text-shadow 1s linear ;\r\n}\r\nsection#huodong-b li:nth-child(1):before,section#huodong-b li:nth-child(2):before,section#huodong-b li:nth-child(3):before{\r\n    background:#3598db;\r\n}\r\nsection#huodong-b li:last-child:before{\r\n    padding: 1px 3px;\r\n    font-size: 17px;\r\n}\r\nsection#huodong-b li a {\r\n     text-decoration: none;\r\n     color: #434343;\r\n    padding-left: 5px;\r\n }\r\nsection#huodong-c {\r\n    display: inline-block;\r\n    width: 150px;\r\n}\r\nsection#huodong-c li {\r\n    display: inline-block;\r\n    margin-left: 4px;\r\n}\r\n\r\nsection#huodong-c img{\r\n    width: 150px;\r\n    height: 204px;\r\n}\r\n/*博文*/\r\ndiv#body_wrapper aside{\r\n    width: 352px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\nsection#bowen-a li img{\r\n    width:174px ;\r\n    height: 113px;\r\n}\r\nsection#bowen-a li {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-top: 10px;\r\n    width: 174px;\r\n    text-align: center;\r\n}\r\nsection#bowen-a li:first-child{\r\n    margin-right: 4px;\r\n}\r\nsection#bowen-a li a{\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n}\r\n\r\nsection#bowen-a li a:first-child{\r\n    width: 174px;\r\n    height: 113px;\r\n    display: inline-block;\r\n}\r\nsection#bowen-b li:before {\r\n    content: counter(list);\r\n    background: #3598db;\r\n    color: #ffffff;\r\n    padding: 0 3px;\r\n    font-size: 10px;\r\n}\r\nsection#bowen-b li:first-child {\r\n    border-top: solid 1px #e1e1e1;\r\n    margin-top: 9px;\r\n    padding-top: 10px;\r\n}\r\nsection#bowen-b li {\r\n    display: inline-block;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    counter-increment: list;\r\n    font-size: 15px;\r\n}\r\nsection#bowen-b li:hover{\r\n    text-shadow: 1px 1px 5px #444444;\r\n    -webkit-transition: text-shadow 1s linear ;\r\n    -moz-transition: text-shadow 1s linear ;\r\n    -ms-transition: text-shadow 1s linear ;\r\n    -o-transition: text-shadow 1s linear ;\r\n    transition: text-shadow 1s linear ;\r\n}\r\nsection#bowen-b li a{\r\n    text-decoration: none;\r\n    color: #444444;\r\n    padding-left: 8px;\r\n}\r\n/*招聘*/\r\nsection#zhaopin {\r\n    margin-top: 14px;\r\n}\r\nsection#zhaopin li:before {\r\n    content: counter(list);\r\n    background: #3598db;\r\n    color: #ffffff;\r\n    padding: 0 3px;\r\n    font-size: 10px;\r\n}\r\nsection#zhaopin li:first-child {\r\n    margin-top: 8px;\r\n}\r\nsection#zhaopin li {\r\n    display: inline-block;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    counter-increment: list;\r\n    font-size: 15px;\r\n}\r\nsection#zhaopin li:hover{\r\n    text-shadow: 1px 1px 5px #444444;\r\n    -webkit-transition: text-shadow 1s linear ;\r\n    -moz-transition: text-shadow 1s linear ;\r\n    -ms-transition: text-shadow 1s linear ;\r\n    -o-transition: text-shadow 1s linear ;\r\n    transition: text-shadow 1s linear ;\r\n}\r\nsection#zhaopin li a{\r\n    text-decoration: none;\r\n    color: #444444;\r\n    padding-left: 8px;\r\n}\r\n/*联系*/\r\nsection#lianxi {\r\n    margin-top: 10px;\r\n}\r\n/*介绍*/\r\nsection#huiyuanjieshao {\r\n    margin-top: 12px;\r\n}\r\nsection#huiyuanjieshao li {\r\n    display: inline-block;\r\n    margin: 10px 0px;\r\n    padding: 5px 10px;\r\n    width: 330px;\r\n    height: 78px;\r\n}\r\nsection#huiyuanjieshao li a{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n}\r\nsection#huiyuanjieshao li h4 a{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    color:#787687;\r\n}\r\nsection#huiyuanjieshao li div a:first-child {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 149px;\r\n    height: 55px;\r\n}\r\nsection#huiyuanjieshao li div a:last-child {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    width: 155px;\r\n    height: 55px;\r\n    vertical-align: top;\r\n    overflow: hidden;\r\n    color: #7d7d7d;\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n}\r\nsection#huiyuanjieshao li:hover {\r\n    margin: 15px 10px;\r\n    border: solid 1px #3598DB;\r\n    -webkit-transition: margin 0.5s linear;\r\n    -moz-transition: margin 0.5s linear;\r\n    -ms-transition: margin 0.5s linear;\r\n    -o-transition: margin 0.5s linear;\r\n    transition: margin 0.5s linear;\r\n}\r\n/*底部*/\r\n#footer_wrapper{\r\n    background: #3598db;\r\n    color: #fffffd;\r\n}\r\n#footer_wrapper li{\r\n    display: inline-block;\r\n    border-right: solid 1px #ffffff;\r\n    padding-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n#footer_wrapper li:last-child{\r\n    border: 0;\r\n}\r\n\r\n#footer_wrapper li a{\r\n    text-decoration: none;\r\n    color: #fffffd;\r\n}\r\n#footer_wrapper footer {\r\n    text-align: center;\r\n    height: 100px;\r\n    padding-top: 30px;\r\n}\r\n#footer_wrapper p{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by xuwei on 2017/2/22.
 */
__webpack_require__(0);


/***/ })
/******/ ]);