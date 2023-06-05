(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/DataLoader.js":
/*!****************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/DataLoader.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRDataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'primary',
      size: 'size-large',
      className: 'primary'
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size),
      style: this.props.style
    }, React.createElement("div", {
      className: "loader-loading",
      "data-loader": this.props.loader
    }), !!this.props.title && React.createElement("span", {
      className: "title"
    }, this.props.title));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/Loader.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/Loader.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var DataLoader = __webpack_require__(/*! ./DataLoader */ "../node_modules/znui-react-loader/__/build/DataLoader.js");

module.exports = React.createClass({
  displayName: 'ZRLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'white',
      content: 'Loading...',
      className: 'white-background',
      size: 'size-large',
      layout: 'flex-row'
    };
  },
  render: function render() {
    return React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname("zr-loader", this.props.className, this.props.color, this.props.layout)
    }, React.createElement(DataLoader, {
      className: this.props.dataLoaderClassName,
      loader: this.props.loader,
      color: this.props.color,
      size: this.props.size
    }), React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/Loading.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/Loading.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var Loader = __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-loader/__/build/Loader.js");

module.exports = React.createClass({
  displayName: 'ZRLoading',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: 'Loading...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(Loader, this.props);
    }
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'DataLoader': __webpack_require__(/*! ./DataLoader */ "../node_modules/znui-react-loader/__/build/DataLoader.js"),
  'Loader': __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-loader/__/build/Loader.js"),
  'Loading': __webpack_require__(/*! ./Loading */ "../node_modules/znui-react-loader/__/build/Loading.js")
};

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css":
/*!************************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/production/index.bundle.js":
/*!****************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/production/index.bundle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(e,t){for(var r in t)e[r]=t[r]})(this,function(r){var a={};function o(e){if(a[e]){return a[e].exports}var t=a[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,o);t.l=true;return t.exports}o.m=r;o.c=a;o.d=function(e,t,r){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(t,e){if(e&1)t=o(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);o.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r};o.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};o.d(e,"a",e);return e};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";return o(o.s=3)}([function(e,t){(function(){e.exports=this["React"]})()},function(e,t,r){var a=znui.React||r(0);e.exports=a.createClass({displayName:"ZRDataLoader",getDefaultProps:function e(){return{loader:"timer",color:"primary",size:"size-large",className:"primary"}},render:function e(){return a.createElement("div",{className:znui.react.classname("zr-data-loader",this.props.className,this.props.color,this.props.size),style:this.props.style},a.createElement("div",{className:"loader-loading","data-loader":this.props.loader}),!!this.props.title&&a.createElement("span",{className:"title"},this.props.title))}})},function(e,t,r){var a=znui.React||r(0);var o=r(1);e.exports=a.createClass({displayName:"ZRLoader",getDefaultProps:function e(){return{loader:"timer",color:"white",content:"Loading...",className:"white-background",size:"size-large",layout:"flex-row"}},render:function e(){return a.createElement("div",{style:this.props.style,className:znui.react.classname("zr-loader",this.props.className,this.props.color,this.props.layout)},a.createElement(o,{className:this.props.dataLoaderClassName,loader:this.props.loader,color:this.props.color,size:this.props.size}),a.createElement("div",{className:"content"},this.props.content))}})},function(e,t,r){e.exports={DataLoader:r(1),Loader:r(2),Loading:r(4)}},function(e,t,r){var a=znui.React||r(0);var o=r(2);e.exports=a.createClass({displayName:"ZRLoading",getDefaultProps:function e(){return{data:null,loader:"timer",content:"Loading..."}},render:function e(){if(this.props.data){return this.props.children}else{return a.createElement(o,this.props)}}})}]));

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-loader/index.js":
/*!**************************************************!*\
  !*** ../node_modules/znui-react-loader/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(/*! znui-react */ "znui-react");
if(process && process.env && "development") {
    if(true) {
        __webpack_require__(/*! ./__/dist/development/index.style.bundle.css */ "../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css");
        module.exports = __webpack_require__(/*! ./__/build/index */ "../node_modules/znui-react-loader/__/build/index.js");
    }else{}
}else {
    __webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css");
    module.exports = __webpack_require__(/*! ./__/dist/production/index.bundle.js */ "../node_modules/znui-react-loader/__/dist/production/index.bundle.js");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/Page.js":
/*!*********************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/Page.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'Page',
  __onClick: function __onClick() {
    if (this.props.isDisabled) {
      return false;
    }

    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    return /*#__PURE__*/React.createElement("li", {
      onClick: this.__onClick,
      className: 'zr-pager-page ' + (this.props.className || '') + ' ' + (this.props.isActive ? "active" : "") + ' ' + (this.props.isDisabled ? "" : "enabled")
    }, this.props.children);
  }
});

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/Pager.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/Pager.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var Page = __webpack_require__(/*! ./Page */ "../node_modules/znui-react-pager/__/build/Page.js");

function range(start, end) {
  var res = [];

  for (var i = start; i < end; i++) {
    res.push(i);
  }

  return res;
}

module.exports = React.createClass({
  displayName: 'Pager',
  getDefaultProps: function getDefaultProps() {
    return {
      total: 0,
      count: 0,
      current: 0,
      visiblePages: 5,
      className: '',
      texts: {
        page: '页',
        record: '条'
      }
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  handleFirstPage: function handleFirstPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(1);
  },
  handlePreviousPage: function handlePreviousPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(this.props.current - 1);
  },
  handleNextPage: function handleNextPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.current + 1);
  },
  handleLastPage: function handleLastPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.total);
  },
  handleMorePrevPages: function handleMorePrevPages() {
    this.handlePageChanged(this.props.current - 1);
  },
  handleMoreNextPages: function handleMoreNextPages() {
    var blocks = this.calcBlocks();
    this.handlePageChanged(blocks.current * blocks.size + 1);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    this.props.onPageChanged && this.props.onPageChanged(pageIndex);
  },
  calcBlocks: function calcBlocks() {
    return {
      total: Math.ceil(this.props.total / this.props.visiblePages),
      current: Math.ceil(this.props.current / this.props.visiblePages),
      size: this.props.visiblePages
    };
  },
  isPrevDisabled: function isPrevDisabled() {
    return this.props.current <= 1;
  },
  isNextDisabled: function isNextDisabled() {
    return this.props.current >= this.props.total;
  },
  isPrevMoreHidden: function isPrevMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 1 || blocks.current === 1;
  },
  isNextMoreHidden: function isNextMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 0 || blocks.current === blocks.total;
  },
  visibleRange: function visibleRange() {
    var blocks = this.calcBlocks(),
        start = (blocks.current - 1) * blocks.size,
        delta = this.props.total - start,
        end = start + (delta > blocks.size ? blocks.size : delta);
    return [start + 1, end + 1];
  },

  /**
      * ### renderPages()
      * Renders block of pages' buttons with numbers.
      * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
      * @return {React.Element[]} - array of React nodes.
      */
  renderPages: function renderPages(pair) {
    return range(pair[0], pair[1]).map(function (pageIndex, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement(Page, {
        key: index,
        isActive: this.props.current === pageIndex,
        className: "btn-numbered-page",
        onClick: function onClick() {
          return _this.handlePageChanged(pageIndex);
        }
      }, pageIndex);
    }.bind(this));
  },
  __renderIcon: function __renderIcon(value) {
    switch (value) {
      case 'first':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-backward",
          className: "icon svg-inline--fa fa-step-backward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
        }));

      case 'prev':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-left",
          className: "icon svg-inline--fa fa-arrow-left fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        }));

      case 'prevSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-backward",
          className: "icon svg-inline--fa fa-fast-backward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"
        }));

      case 'nextSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-forward",
          className: "icon svg-inline--fa fa-fast-forward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
        }));

      case 'next':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-right",
          className: "icon svg-inline--fa fa-arrow-right fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
        }));

      case 'last':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-forward",
          className: "icon svg-inline--fa fa-step-forward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
        }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, this.__renderIcon('first')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, this.__renderIcon('prev')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-more",
      isHidden: this.isPrevMoreHidden(),
      onClick: this.handleMorePrevPages
    }, this.__renderIcon('prevSet')), this.renderPages(this.visibleRange()), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-more",
      isHidden: this.isNextMoreHidden(),
      onClick: this.handleMoreNextPages
    }, this.__renderIcon('nextSet')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, this.__renderIcon('next')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, this.__renderIcon('last'))), /*#__PURE__*/React.createElement("div", {
      className: "number"
    }, !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/PagerBar.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/PagerBar.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'PagerBar',
  __onClick: function __onClick() {
    if (this.props.isDisabled) {
      return false;
    }

    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-pager-bar ' + (this.props.className || '') + ' ' + (this.props.isActive ? "active" : "") + ' ' + (this.props.isDisabled ? "" : "enabled")
    }, this.props.children);
  }
});

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/PagerView.js":
/*!**************************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/PagerView.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Pager = __webpack_require__(/*! ./Pager */ "../node_modules/znui-react-pager/__/build/Pager.js");

var loader = __webpack_require__(/*! znui-react-loader */ "../node_modules/znui-react-loader/index.js");

module.exports = React.createClass({
  displayName: 'PagerView',
  getDefaultProps: function getDefaultProps() {
    return {
      pageIndex: 1,
      pageSize: 10,
      visiblePage: 5,
      dataFixed: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      count: 0,
      current: 1,
      data: [],
      total: 0,
      pageIndex: this.props.pageIndex
    };
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);

    if (_return !== false) {
      this.setPageIndex(newPage);
    }
  },
  setPageIndex: function setPageIndex(pageIndex) {
    if (this.data) {
      this.state.pageIndex = pageIndex;
      this.data.refresh();
    }
  },
  __viewRender: function __viewRender(response) {
    var _view = znui.react.createReactElement(this.props.view || this.props.viewRender, zn.extend({
      response: response,
      pagerView: this
    }, this.state));

    return /*#__PURE__*/React.createElement("div", {
      className: "view-content"
    }, _view);
  },
  __onDataLoaded: function __onDataLoaded(data) {
    var _return = this.props.dataHandler && this.props.dataHandler(data, this);

    if (_return !== false) {
      if (_typeof(_return) == 'object') {
        this.setState(_return);
      } else {//TODO: 
      }
    }
  },
  __onDataLoading: function __onDataLoading(data, lifycycle) {
    var _method = data.method || 'post',
        _params = {},
        _keyMaps = zn.deepAssign({
      total: "total",
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      data: 'data'
    }, this.props.keyMaps);

    _params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
    _params[_keyMaps.pageSize] = this.props.pageSize || 10;

    if (_method == 'get') {
      data = zn.deepAssign(data, {
        params: _params
      });
    } else {
      data = zn.deepAssign(data, {
        data: _params
      });
    }

    this.state.keyMaps = _keyMaps;
    return data;
  },
  __onDataCreated: function __onDataCreated(data, lifycycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this);
  },
  __loadingRender: function __loadingRender() {
    return /*#__PURE__*/React.createElement(loader.DataLoader, {
      loader: "wave",
      title: "Loading..."
    });
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-pager-view", this.props.className),
      style: znui.react.style(this.props.style),
      "data-fixed": this.props.dataFixed
    }, this.props.data && /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      data: this.props.data,
      render: this.__viewRender,
      loadingRender: function loadingRender() {
        return _this.__loadingRender();
      },
      onLoading: this.__onDataLoading,
      onDataCreated: this.__onDataCreated,
      onFinished: this.__onDataLoaded
    }), /*#__PURE__*/React.createElement("div", {
      className: "view-pager"
    }, /*#__PURE__*/React.createElement(Pager, {
      total: Math.ceil(this.state.count / this.props.pageSize),
      count: this.state.count,
      current: this.state.pageIndex,
      pageSize: this.props.pageSize,
      visiblePages: this.props.visiblePages,
      onPageChanged: this.__handlePageChanged
    })));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/SimplePager.js":
/*!****************************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/SimplePager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var Page = __webpack_require__(/*! ./Page */ "../node_modules/znui-react-pager/__/build/Page.js");

module.exports = React.createClass({
  displayName: 'SimplePager',
  getDefaultProps: function getDefaultProps() {
    return {
      total: 0,
      count: 0,
      current: 0,
      className: '',
      texts: {
        page: '页',
        record: '条'
      },
      icons: {
        first: 'faStepBackward',
        prev: 'faArrowLeft',
        next: 'faArrowRight',
        last: 'faStepForward'
      }
    };
  },
  handleFirstPage: function handleFirstPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(1);
  },
  handlePreviousPage: function handlePreviousPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(this.props.current - 1);
  },
  handleNextPage: function handleNextPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.current + 1);
  },
  handleLastPage: function handleLastPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.total);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    this.props.onPageChanged && this.props.onPageChanged(pageIndex);
  },
  isPrevDisabled: function isPrevDisabled() {
    return this.props.current <= 1;
  },
  isNextDisabled: function isNextDisabled() {
    return this.props.current >= this.props.total;
  },
  __renderIcon: function __renderIcon(value) {
    switch (value) {
      case 'first':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-backward",
          className: "icon svg-inline--fa fa-step-backward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
        }));

      case 'prev':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-left",
          className: "icon svg-inline--fa fa-arrow-left fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        }));

      case 'prevSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-backward",
          className: "icon svg-inline--fa fa-fast-backward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"
        }));

      case 'nextSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-forward",
          className: "icon svg-inline--fa fa-fast-forward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
        }));

      case 'next':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-right",
          className: "icon svg-inline--fa fa-arrow-right fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
        }));

      case 'last':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-forward",
          className: "icon svg-inline--fa fa-step-forward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
        }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-simple-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, this.__renderIcon('first')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, this.__renderIcon('prev')), /*#__PURE__*/React.createElement("li", {
      className: "number"
    }, !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, this.__renderIcon('next')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, this.__renderIcon('last'))));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-pager/__/build/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-pager/__/build/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Page: __webpack_require__(/*! ./Page */ "../node_modules/znui-react-pager/__/build/Page.js"),
  Pager: __webpack_require__(/*! ./Pager */ "../node_modules/znui-react-pager/__/build/Pager.js"),
  PagerBar: __webpack_require__(/*! ./PagerBar */ "../node_modules/znui-react-pager/__/build/PagerBar.js"),
  PagerView: __webpack_require__(/*! ./PagerView */ "../node_modules/znui-react-pager/__/build/PagerView.js"),
  SimplePager: __webpack_require__(/*! ./SimplePager */ "../node_modules/znui-react-pager/__/build/SimplePager.js")
};

/***/ }),

/***/ "../node_modules/znui-react-pager/__/dist/production/index.style.bundle.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/znui-react-pager/__/dist/production/index.style.bundle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-pager/index.js":
/*!*************************************************!*\
  !*** ../node_modules/znui-react-pager/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! znui-react */ "znui-react");
__webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-pager/__/dist/production/index.style.bundle.css");
module.exports = znui.react.loadedComponents[__webpack_require__(/*! ./package.json */ "../node_modules/znui-react-pager/package.json").name] = __webpack_require__(/*! ./__/build/index.js */ "../node_modules/znui-react-pager/__/build/index.js");

/***/ }),

/***/ "../node_modules/znui-react-pager/package.json":
/*!*****************************************************!*\
  !*** ../node_modules/znui-react-pager/package.json ***!
  \*****************************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, email, license, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"znui-react-pager\",\"version\":\"2.0.10\",\"description\":\"Web pager component.\",\"main\":\"index.js\",\"scripts\":{\"clean-example\":\"rimraf ./example/www\",\"clean-exports\":\"rimraf ./__/build/ && rimraf ./__/dist/\",\"zr.start\":\"rimraf ./example/www && webpack-dev-server --config ./example/development.js --znui-react.path ../../ --watch\",\"zr.example\":\"rimraf ./example/www && webpack --config ./example/production.js --znui-react.path ../../\",\"zr.prod.dist\":\"rimraf ./__/dist/production && webpack --config ./__/production.js --znui-react.path ../../ --uglify\",\"zr.prod.dist.watch\":\"rimraf ./__/dist/production && webpack --config ./__/production.js --znui-react.path ../../  --uglify --watch\",\"zr.prod.build\":\"rimraf ./__/build && babel src -d __/build/\",\"zr.prod.build.watch\":\"rimraf ./__/build && babel src -d __/build/ --watch\",\"zr.dev.dist\":\"rimraf ./__/dist/development && webpack --config ./__/development.js --znui-react.path ../../\",\"zr.dev.dist.watch\":\"rimraf ./__/dist/development && webpack --config ./__/development.js --znui-react.path ../../ --watch\",\"zr.release\":\"npm run zr.prod.build && npm run zr.prod.dist && npm run zr.dev.dist\",\"zr.release.watch\":\"npm run zr.prod.build.watch && npm run zr.prod.dist.watch && npm run zr.dev.dist.watch\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/znui/znui-react-pager.git\"},\"keywords\":[\"web component\",\"pager\"],\"author\":\"yangyxu\",\"email\":\"xuyy0618@qq.com\",\"license\":\"MIT\",\"dependencies\":{\"znui-react\":\"latest\",\"znui-react-loader\":\"latest\"}}");

/***/ }),

/***/ "./List.js":
/*!*****************!*\
  !*** ./List.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRList',
  getDefaultProps: function getDefaultProps() {
    return {
      className: "zr-list-style-flex-row",
      selectMode: 'single',
      // single, multiple,
      textKey: 'text',
      valueKey: 'value',
      dataType: 'String'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  __initValue: function __initValue() {
    var _value = null;

    if (this.props.value !== null) {
      _value = this.props.value;
    } else {
      if (this.props.selectMode == 'single') {
        _value = '';
      } else {
        _value = [];
      }
    }

    return _value;
  },
  parseValue: function parseValue(value) {
    if (window[this.props.dataType]) {
      return new window[this.props.dataType](value).valueOf();
    }

    throw new Error('Data Type Of List Is Null.');
  },
  __isChecked: function __isChecked(item, index) {
    var _value = item[this.props.valueKey];

    if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        return true;
      }
    } else {
      if (_value === this.state.value) {
        return true;
      }
    }

    return false;
  },
  __itemClick: function __itemClick(event, index) {
    var _return = this.props.onItemClick && this.props.onItemClick(event, this);

    if (_return == null) {
      this.__clickDefault(event);
    }
  },
  __clickDefault: function __clickDefault(event) {
    var _data = event.data,
        _value = _data[this.props.valueKey];

    if (this.props.selectMode == 'single') {
      this.state.value = _value;
    } else if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        this.state.value.splice(this.state.value.indexOf(_value), 1);
      } else {
        this.state.value.push(_value);
      }
    }

    event.value = this.state.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    if (!zn.is(item, 'object')) {
      var _temp = {
        index: index
      };
      _temp[this.props.textKey] = _temp[this.props.valueKey] = item;
      item = _temp;
    } else {
      item.index = index;
    }

    var _return = this.props.itemRender && this.props.itemRender(item, index, this);

    if (_return == null && this.props.textKey) {
      if (this.props.textKey.indexOf('{') != -1 && this.props.textKey.indexOf('}') != -1) {
        _return = this.props.textKey.format(item);
      } else {
        _return = item[this.props.textKey];
      }
    }

    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: znui.react.classname('zr-list-item', this.__isChecked(item, index) ? 'checked' : ''),
      onClick: function onClick(event) {
        event.data = item;
        event.index = index;

        _this.__itemClick(event, index);
      }
    }, _return);
  },
  __dataRender: function __dataRender(data) {
    return /*#__PURE__*/React.createElement("ul", {
      style: this.props.style,
      className: znui.react.classname("zr-list", this.props.className)
    }, this.props.children, data.map(this.__itemRender));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(znui.react.DataView, _extends({}, this.props, {
      dataRender: this.__dataRender
    }));
  }
});

/***/ }),

/***/ "./ListPager.js":
/*!**********************!*\
  !*** ./ListPager.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var pager = __webpack_require__(/*! znui-react-pager */ "../node_modules/znui-react-pager/index.js");

module.exports = React.createClass({
  displayName: 'ZRListPager',
  getDefaultProps: function getDefaultProps() {
    return {
      pageSize: 10,
      textKey: 'Name'
    };
  },
  getInitialState: function getInitialState() {
    return {
      count: 0,
      current: 1,
      data: null,
      total: 0,
      pageIndex: this.props.pageIndex || 1
    };
  },
  setPageIndex: function setPageIndex(pageIndex) {
    if (this.data) {
      this.state.pageIndex = pageIndex;
      this.state.current = pageIndex;
      this.forceUpdate();
      this.data._argv = this.__onDataInitial(this.props.data);
      this.data.refresh();
    }
  },
  refresh: function refresh() {
    if (this.data) {
      this.data.refresh();
    }
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);

    if (_return !== false) {
      this.setPageIndex(newPage);
    }
  },
  __onDataInitial: function __onDataInitial(data) {
    var _method = data.method || 'post',
        _params = {},
        _keyMaps = zn.deepAssign({
      total: "total",
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      data: 'data'
    }, this.props.keyMaps);

    _params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
    _params[_keyMaps.pageSize] = this.props.pageSize || 10;

    if (_method == 'get') {
      data = zn.deepAssign(data, {
        params: _params
      });
    } else {
      data = zn.deepAssign(data, {
        data: _params
      });
    }

    return this.state.keyMaps = _keyMaps, data;
  },
  __onLoadFinished: function __onLoadFinished(data) {
    if (this.props.zxnz !== false) {
      if (zn.is(data, 'object') && data.code != 200) {
        return console.error(data.detail), false;
      }

      if (!zn.is(data, 'array')) {
        return console.error("TablePager Component Data Type Error."), false;
      }

      var _data = data[0],
          _pagerCount = data[1][0].count;

      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, this);

      if (_return === false) {
        return false;
      }

      this.setState({
        data: _data,
        total: Math.ceil(_pagerCount / this.props.pageSize),
        count: _pagerCount,
        current: this.state.current
      });
    } else {
      if (zn.is(data, 'array')) {
        return console.error('The data is array, but it need return object'), false;
      }

      var _data = data.data;

      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, this);

      if (_return === false) {
        return false;
      }

      this.setState({
        data: _data[this.state.keyMaps.data],
        total: Math.ceil(_data[this.state.keyMaps.total] / this.props.pageSize),
        count: _data[this.state.keyMaps.total],
        current: _data[this.state.keyMaps.pageIndex]
      });
    }
  },
  __renderPager: function __renderPager() {
    if (!this.state.data || !this.state.data.length) {
      return null;
    }

    var _state = this.state,
        _element = null,
        _pagerProps = {
      total: _state.total,
      count: _state.count,
      current: _state.current,
      onPageChanged: this.__handlePageChanged
    },
        _Component = this.props.pager || pager.Pager;

    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    } else if (zn.is(_Component, 'object') && _Component.component) {
      _element = znui.react.createReactElement(_Component.component, zn.extend({}, _Component, _pagerProps), this.props.context);
    }

    if (this.props.pagerRender) {
      _element = znui.react.createReactElement(this.props.pagerRender, _pagerProps, this.props.context);
    }

    if (!_element && _Component && zn.is(_Component, 'function')) {
      _element = /*#__PURE__*/React.createElement(_Component, _pagerProps);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "list-pager"
    }, _element);
  },
  __onItemClick: function __onItemClick(event, item, index) {
    this.props.onItemClick && this.props.onItemClick(event, item, index);
  },
  __renderItem: function __renderItem(item, index) {
    var _this = this;

    item.index = index;

    var _element = znui.react.createReactElement(this.props.itemRender, {
      data: item
    }, this.props.context);

    if (!_element) {
      _element = /*#__PURE__*/React.createElement("li", {
        key: index,
        onClick: function onClick(event) {
          return _this.__onItemClick(event, item, index);
        },
        className: "list-item"
      }, item[this.props.textKey]);
    }

    return _element;
  },
  __render: function __render(data) {
    if (!this.state.data) {
      return /*#__PURE__*/React.createElement("div", {
        className: "no-data"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-spinner"
      }), /*#__PURE__*/React.createElement("span", null, "\u52A0\u8F7D\u4E2D..."));
    }

    if (this.state.data.length) {
      var _element = znui.react.createReactElement(this.props.dataRender, {
        data: this.state.data,
        listPager: this
      }, this.props.context);

      if (!_element) {
        _element = /*#__PURE__*/React.createElement("ul", {
          className: "list-data"
        }, this.state.data.map(this.__renderItem));
      }

      return _element;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "no-data"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-desktop"
      }), /*#__PURE__*/React.createElement("span", null, "\u6682\u65E0\u6570\u636E"));
    }
  },
  __onDataCreated: function __onDataCreated(data, lifecycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this, lifecycle);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-list-pager', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      data: this.__onDataInitial(this.props.data),
      dataRender: this.__render,
      loadingEnabled: this.props.loadingEnabled || false,
      onFinished: this.__onLoadFinished,
      onDataCreated: this.__onDataCreated,
      responseHandler: this.props.responseHandler,
      onLoading: this.props.onLoading,
      onError: this.props.onLoadError
    }), this.__renderPager());
  }
});

/***/ }),

/***/ "./ListView.js":
/*!*********************!*\
  !*** ./ListView.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ListView = React.createClass({
  displayName: 'ZRListView',
  getDefaultProps: function getDefaultProps() {
    return {
      selectMode: 'single',
      // single, multiple,
      textKey: 'text',
      valueKey: 'value',
      dataType: 'String'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-list-view", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, this.props));
  }
});
ListView.Item = __webpack_require__(/*! ./ListViewItem */ "./ListViewItem.js");
module.exports = ListView;

/***/ }),

/***/ "./ListViewItem.js":
/*!*************************!*\
  !*** ./ListViewItem.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRListViewItem',
  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      disabled: false
    };
  },
  __onClick: function __onClick(event) {
    this.props.onClick && this.props.onClick(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname('zr-list-view-item', this.props.className),
      "data-checked": this.props.checked,
      "data-disabled": this.props.disabled,
      onClick: this.__onClick
    }, this.props.children);
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  List: __webpack_require__(/*! ./List */ "./List.js"),
  ListPager: __webpack_require__(/*! ./ListPager */ "./ListPager.js"),
  ListView: __webpack_require__(/*! ./ListView */ "./ListView.js"),
  ListViewItem: __webpack_require__(/*! ./ListViewItem */ "./ListViewItem.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "znui-react":
/*!*********************!*\
  !*** external "zr" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LWxvYWRlci9fXy9idWlsZC9EYXRhTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vYnVpbGQvTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vYnVpbGQvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtbG9hZGVyL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtbG9hZGVyL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBhZ2VyL19fL2J1aWxkL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBhZ2VyL19fL2J1aWxkL1BhZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wYWdlci9fXy9idWlsZC9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcGFnZXIvX18vYnVpbGQvUGFnZXJWaWV3LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wYWdlci9fXy9idWlsZC9TaW1wbGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcGFnZXIvX18vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBhZ2VyL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0LmpzIiwid2VicGFjazovLy8uL0xpc3RQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6clwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInNlbGVjdE1vZGUiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsImdldEluaXRpYWxTdGF0ZSIsInZhbHVlIiwiX19pbml0VmFsdWUiLCJfdmFsdWUiLCJwcm9wcyIsInBhcnNlVmFsdWUiLCJ3aW5kb3ciLCJ2YWx1ZU9mIiwiRXJyb3IiLCJfX2lzQ2hlY2tlZCIsIml0ZW0iLCJpbmRleCIsInpuIiwiaXMiLCJzdGF0ZSIsImluZGV4T2YiLCJfX2l0ZW1DbGljayIsImV2ZW50IiwiX3JldHVybiIsIm9uSXRlbUNsaWNrIiwiX19jbGlja0RlZmF1bHQiLCJfZGF0YSIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiZm9yY2VVcGRhdGUiLCJvbkNoYW5nZSIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImZvcm1hdCIsInJlYWN0IiwiY2xhc3NuYW1lIiwiX19kYXRhUmVuZGVyIiwic3R5bGUiLCJjaGlsZHJlbiIsIm1hcCIsInJlbmRlciIsInBhZ2VyIiwicGFnZVNpemUiLCJjb3VudCIsImN1cnJlbnQiLCJ0b3RhbCIsInBhZ2VJbmRleCIsInNldFBhZ2VJbmRleCIsIl9hcmd2IiwiX19vbkRhdGFJbml0aWFsIiwicmVmcmVzaCIsIl9faGFuZGxlUGFnZUNoYW5nZWQiLCJuZXdQYWdlIiwib25QYWdlQ2hhbmdlZCIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJkZWVwQXNzaWduIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25Mb2FkRmluaXNoZWQiLCJ6eG56IiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsImRldGFpbCIsIl9wYWdlckNvdW50Iiwib25EYXRhTG9hZGVkIiwic2V0U3RhdGUiLCJNYXRoIiwiY2VpbCIsIl9fcmVuZGVyUGFnZXIiLCJsZW5ndGgiLCJfc3RhdGUiLCJfZWxlbWVudCIsIl9wYWdlclByb3BzIiwiX0NvbXBvbmVudCIsIlBhZ2VyIiwicGF0aCIsImNvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsImV4dGVuZCIsImNvbnRleHQiLCJwYWdlclJlbmRlciIsIl9fb25JdGVtQ2xpY2siLCJfX3JlbmRlckl0ZW0iLCJfX3JlbmRlciIsImRhdGFSZW5kZXIiLCJsaXN0UGFnZXIiLCJfX29uRGF0YUNyZWF0ZWQiLCJsaWZlY3ljbGUiLCJvbkRhdGFDcmVhdGVkIiwibG9hZGluZ0VuYWJsZWQiLCJyZXNwb25zZUhhbmRsZXIiLCJvbkxvYWRpbmciLCJvbkxvYWRFcnJvciIsIkxpc3RWaWV3IiwiSXRlbSIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIl9fb25DbGljayIsIm9uQ2xpY2siLCJMaXN0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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7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QUFDMUIsU0FBS2IsS0FBTCxDQUFXK0YsT0FBWCxJQUFzQixLQUFLL0YsS0FBTCxDQUFXK0YsT0FBWCxDQUFtQmxGLEtBQW5CLEVBQTBCLElBQTFCLENBQXRCO0FBQ0EsR0FWaUM7QUFXbENvQixRQUFNLEVBQUUsa0JBQVU7QUFDakIsd0JBQ0M7QUFBSyxXQUFLLEVBQUUsS0FBS2pDLEtBQUwsQ0FBVzhCLEtBQXZCO0FBQThCLGVBQVMsRUFBRTlDLElBQUksQ0FBQzJDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixtQkFBckIsRUFBMEMsS0FBSzVCLEtBQUwsQ0FBV1QsU0FBckQsQ0FBekM7QUFDQyxzQkFBYyxLQUFLUyxLQUFMLENBQVc0RixPQUQxQjtBQUVDLHVCQUFlLEtBQUs1RixLQUFMLENBQVc2RixRQUYzQjtBQUdDLGFBQU8sRUFBRSxLQUFLQztBQUhmLE9BSUUsS0FBSzlGLEtBQUwsQ0FBVytCLFFBSmIsQ0FERDtBQVFBO0FBcEJpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0ZBN0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2I2RyxNQUFJLEVBQUUvRyxtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYmdILFdBQVMsRUFBRWhILG1CQUFPLENBQUMsbUNBQUQsQ0FGTDtBQUdieUcsVUFBUSxFQUFFekcsbUJBQU8sQ0FBQyxpQ0FBRCxDQUhKO0FBSWJpSCxjQUFZLEVBQUVqSCxtQkFBTyxDQUFDLHlDQUFEO0FBSlIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsNkJBQTZCLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkRhdGFMb2FkZXInLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGVyOiAndGltZXInLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIHNpemU6ICdzaXplLWxhcmdlJyxcbiAgICAgIGNsYXNzTmFtZTogJ3ByaW1hcnknXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWRhdGEtbG9hZGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLmNvbG9yLCB0aGlzLnByb3BzLnNpemUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJsb2FkZXItbG9hZGluZ1wiLFxuICAgICAgXCJkYXRhLWxvYWRlclwiOiB0aGlzLnByb3BzLmxvYWRlclxuICAgIH0pLCAhIXRoaXMucHJvcHMudGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlKSk7XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBEYXRhTG9hZGVyID0gcmVxdWlyZSgnLi9EYXRhTG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTG9hZGVyJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRlcjogJ3RpbWVyJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgY29udGVudDogJ0xvYWRpbmcuLi4nLFxuICAgICAgY2xhc3NOYW1lOiAnd2hpdGUtYmFja2dyb3VuZCcsXG4gICAgICBzaXplOiAnc2l6ZS1sYXJnZScsXG4gICAgICBsYXlvdXQ6ICdmbGV4LXJvdydcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sb2FkZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuY29sb3IsIHRoaXMucHJvcHMubGF5b3V0KVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YUxvYWRlciwge1xuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmRhdGFMb2FkZXJDbGFzc05hbWUsXG4gICAgICBsb2FkZXI6IHRoaXMucHJvcHMubG9hZGVyLFxuICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3IsXG4gICAgICBzaXplOiB0aGlzLnByb3BzLnNpemVcbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSk7XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuL0xvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkxvYWRpbmcnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGxvYWRlcjogJ3RpbWVyJyxcbiAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJ1xuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAnRGF0YUxvYWRlcic6IHJlcXVpcmUoJy4vRGF0YUxvYWRlcicpLFxuICAnTG9hZGVyJzogcmVxdWlyZSgnLi9Mb2FkZXInKSxcbiAgJ0xvYWRpbmcnOiByZXF1aXJlKCcuL0xvYWRpbmcnKVxufTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIihmdW5jdGlvbihlLHQpe2Zvcih2YXIgciBpbiB0KWVbcl09dFtyXX0pKHRoaXMsZnVuY3Rpb24ocil7dmFyIGE9e307ZnVuY3Rpb24gbyhlKXtpZihhW2VdKXtyZXR1cm4gYVtlXS5leHBvcnRzfXZhciB0PWFbZV09e2k6ZSxsOmZhbHNlLGV4cG9ydHM6e319O3JbZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMsbyk7dC5sPXRydWU7cmV0dXJuIHQuZXhwb3J0c31vLm09cjtvLmM9YTtvLmQ9ZnVuY3Rpb24oZSx0LHIpe2lmKCFvLm8oZSx0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTp0cnVlLGdldDpyfSl9fTtvLnI9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIFN5bWJvbCE9PVwidW5kZWZpbmVkXCImJlN5bWJvbC50b1N0cmluZ1RhZyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KX07by50PWZ1bmN0aW9uKHQsZSl7aWYoZSYxKXQ9byh0KTtpZihlJjgpcmV0dXJuIHQ7aWYoZSY0JiZ0eXBlb2YgdD09PVwib2JqZWN0XCImJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO28ucihyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTp0cnVlLHZhbHVlOnR9KTtpZihlJjImJnR5cGVvZiB0IT1cInN0cmluZ1wiKWZvcih2YXIgYSBpbiB0KW8uZChyLGEsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxhKSk7cmV0dXJuIHJ9O28ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24gZSgpe3JldHVybiB0W1wiZGVmYXVsdFwiXX06ZnVuY3Rpb24gZSgpe3JldHVybiB0fTtvLmQoZSxcImFcIixlKTtyZXR1cm4gZX07by5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfTtvLnA9XCJcIjtyZXR1cm4gbyhvLnM9Myl9KFtmdW5jdGlvbihlLHQpeyhmdW5jdGlvbigpe2UuZXhwb3J0cz10aGlzW1wiUmVhY3RcIl19KSgpfSxmdW5jdGlvbihlLHQscil7dmFyIGE9em51aS5SZWFjdHx8cigwKTtlLmV4cG9ydHM9YS5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkRhdGFMb2FkZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24gZSgpe3JldHVybntsb2FkZXI6XCJ0aW1lclwiLGNvbG9yOlwicHJpbWFyeVwiLHNpemU6XCJzaXplLWxhcmdlXCIsY2xhc3NOYW1lOlwicHJpbWFyeVwifX0scmVuZGVyOmZ1bmN0aW9uIGUoKXtyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWRhdGEtbG9hZGVyXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUsdGhpcy5wcm9wcy5jb2xvcix0aGlzLnByb3BzLnNpemUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJsb2FkZXItbG9hZGluZ1wiLFwiZGF0YS1sb2FkZXJcIjp0aGlzLnByb3BzLmxvYWRlcn0pLCEhdGhpcy5wcm9wcy50aXRsZSYmYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJ0aXRsZVwifSx0aGlzLnByb3BzLnRpdGxlKSl9fSl9LGZ1bmN0aW9uKGUsdCxyKXt2YXIgYT16bnVpLlJlYWN0fHxyKDApO3ZhciBvPXIoMSk7ZS5leHBvcnRzPWEuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJMb2FkZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24gZSgpe3JldHVybntsb2FkZXI6XCJ0aW1lclwiLGNvbG9yOlwid2hpdGVcIixjb250ZW50OlwiTG9hZGluZy4uLlwiLGNsYXNzTmFtZTpcIndoaXRlLWJhY2tncm91bmRcIixzaXplOlwic2l6ZS1sYXJnZVwiLGxheW91dDpcImZsZXgtcm93XCJ9fSxyZW5kZXI6ZnVuY3Rpb24gZSgpe3JldHVybiBhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6dGhpcy5wcm9wcy5zdHlsZSxjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sb2FkZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSx0aGlzLnByb3BzLmNvbG9yLHRoaXMucHJvcHMubGF5b3V0KX0sYS5jcmVhdGVFbGVtZW50KG8se2NsYXNzTmFtZTp0aGlzLnByb3BzLmRhdGFMb2FkZXJDbGFzc05hbWUsbG9hZGVyOnRoaXMucHJvcHMubG9hZGVyLGNvbG9yOnRoaXMucHJvcHMuY29sb3Isc2l6ZTp0aGlzLnByb3BzLnNpemV9KSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiY29udGVudFwifSx0aGlzLnByb3BzLmNvbnRlbnQpKX19KX0sZnVuY3Rpb24oZSx0LHIpe2UuZXhwb3J0cz17RGF0YUxvYWRlcjpyKDEpLExvYWRlcjpyKDIpLExvYWRpbmc6cig0KX19LGZ1bmN0aW9uKGUsdCxyKXt2YXIgYT16bnVpLlJlYWN0fHxyKDApO3ZhciBvPXIoMik7ZS5leHBvcnRzPWEuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJMb2FkaW5nXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uIGUoKXtyZXR1cm57ZGF0YTpudWxsLGxvYWRlcjpcInRpbWVyXCIsY29udGVudDpcIkxvYWRpbmcuLi5cIn19LHJlbmRlcjpmdW5jdGlvbiBlKCl7aWYodGhpcy5wcm9wcy5kYXRhKXtyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbn1lbHNle3JldHVybiBhLmNyZWF0ZUVsZW1lbnQobyx0aGlzLnByb3BzKX19fSl9XSkpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwicmVxdWlyZSgnem51aS1yZWFjdCcpO1xuaWYocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmVxdWlyZSgnLi9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2J1aWxkL2luZGV4Jyk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMnKTtcbiAgICB9XG59ZWxzZSB7XG4gICAgcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZScsXG4gIF9fb25DbGljazogZnVuY3Rpb24gX19vbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzSGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLl9fb25DbGljayxcbiAgICAgIGNsYXNzTmFtZTogJ3pyLXBhZ2VyLXBhZ2UgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAnICcgKyAodGhpcy5wcm9wcy5pc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiKSArICcgJyArICh0aGlzLnByb3BzLmlzRGlzYWJsZWQgPyBcIlwiIDogXCJlbmFibGVkXCIpXG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmVzLnB1c2goaSk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICB0ZXh0czoge1xuICAgICAgICBwYWdlOiAn6aG1JyxcbiAgICAgICAgcmVjb3JkOiAn5p2hJ1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgaGFuZGxlRmlyc3RQYWdlOiBmdW5jdGlvbiBoYW5kbGVGaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gIH0sXG4gIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNQYWdlKCkge1xuICAgIGlmICh0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICB9LFxuICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gaGFuZGxlTmV4dFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50ICsgMSk7XG4gIH0sXG4gIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiBoYW5kbGVMYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgfSxcbiAgaGFuZGxlTW9yZVByZXZQYWdlczogZnVuY3Rpb24gaGFuZGxlTW9yZVByZXZQYWdlcygpIHtcbiAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICB9LFxuICBoYW5kbGVNb3JlTmV4dFBhZ2VzOiBmdW5jdGlvbiBoYW5kbGVNb3JlTmV4dFBhZ2VzKCkge1xuICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKGJsb2Nrcy5jdXJyZW50ICogYmxvY2tzLnNpemUgKyAxKTtcbiAgfSxcbiAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIGhhbmRsZVBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCkge1xuICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgfSxcbiAgY2FsY0Jsb2NrczogZnVuY3Rpb24gY2FsY0Jsb2NrcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWw6IE1hdGguY2VpbCh0aGlzLnByb3BzLnRvdGFsIC8gdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgY3VycmVudDogTWF0aC5jZWlsKHRoaXMucHJvcHMuY3VycmVudCAvIHRoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgIHNpemU6IHRoaXMucHJvcHMudmlzaWJsZVBhZ2VzXG4gICAgfTtcbiAgfSxcbiAgaXNQcmV2RGlzYWJsZWQ6IGZ1bmN0aW9uIGlzUHJldkRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgfSxcbiAgaXNOZXh0RGlzYWJsZWQ6IGZ1bmN0aW9uIGlzTmV4dERpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgfSxcbiAgaXNQcmV2TW9yZUhpZGRlbjogZnVuY3Rpb24gaXNQcmV2TW9yZUhpZGRlbigpIHtcbiAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgcmV0dXJuIGJsb2Nrcy50b3RhbCA9PT0gMSB8fCBibG9ja3MuY3VycmVudCA9PT0gMTtcbiAgfSxcbiAgaXNOZXh0TW9yZUhpZGRlbjogZnVuY3Rpb24gaXNOZXh0TW9yZUhpZGRlbigpIHtcbiAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgcmV0dXJuIGJsb2Nrcy50b3RhbCA9PT0gMCB8fCBibG9ja3MuY3VycmVudCA9PT0gYmxvY2tzLnRvdGFsO1xuICB9LFxuICB2aXNpYmxlUmFuZ2U6IGZ1bmN0aW9uIHZpc2libGVSYW5nZSgpIHtcbiAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCksXG4gICAgICAgIHN0YXJ0ID0gKGJsb2Nrcy5jdXJyZW50IC0gMSkgKiBibG9ja3Muc2l6ZSxcbiAgICAgICAgZGVsdGEgPSB0aGlzLnByb3BzLnRvdGFsIC0gc3RhcnQsXG4gICAgICAgIGVuZCA9IHN0YXJ0ICsgKGRlbHRhID4gYmxvY2tzLnNpemUgPyBibG9ja3Muc2l6ZSA6IGRlbHRhKTtcbiAgICByZXR1cm4gW3N0YXJ0ICsgMSwgZW5kICsgMV07XG4gIH0sXG5cbiAgLyoqXG4gICAgICAqICMjIyByZW5kZXJQYWdlcygpXG4gICAgICAqIFJlbmRlcnMgYmxvY2sgb2YgcGFnZXMnIGJ1dHRvbnMgd2l0aCBudW1iZXJzLlxuICAgICAgKiBAcGFyYW0ge051bWJlcltdfSByYW5nZSAtIHBhaXIgb2YgW3N0YXJ0LCBmcm9tXSwgYGZyb21gIC0gbm90IGluY2x1c2l2ZS5cbiAgICAgICogQHJldHVybiB7UmVhY3QuRWxlbWVudFtdfSAtIGFycmF5IG9mIFJlYWN0IG5vZGVzLlxuICAgICAgKi9cbiAgcmVuZGVyUGFnZXM6IGZ1bmN0aW9uIHJlbmRlclBhZ2VzKHBhaXIpIHtcbiAgICByZXR1cm4gcmFuZ2UocGFpclswXSwgcGFpclsxXSkubWFwKGZ1bmN0aW9uIChwYWdlSW5kZXgsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBpc0FjdGl2ZTogdGhpcy5wcm9wcy5jdXJyZW50ID09PSBwYWdlSW5kZXgsXG4gICAgICAgIGNsYXNzTmFtZTogXCJidG4tbnVtYmVyZWQtcGFnZVwiLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBwYWdlSW5kZXgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG4gIF9fcmVuZGVySWNvbjogZnVuY3Rpb24gX19yZW5kZXJJY29uKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgICAgIFwiZGF0YS1pY29uXCI6IFwic3RlcC1iYWNrd2FyZFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtYmFja3dhcmQgZmEtdy0xNCBcIixcbiAgICAgICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgdmlld0JveDogXCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICBkOiBcIk02NCA0NjhWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnYxNzYuNGwxOTUuNS0xODFDMzUyLjEgMjIuMyAzODQgMzYuNiAzODQgNjR2Mzg0YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDEzNiAyOTIuN1Y0NjhjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ6XCJcbiAgICAgICAgfSkpO1xuXG4gICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgICAgICBcImRhdGEtaWNvblwiOiBcImFycm93LWxlZnRcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIsXG4gICAgICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZDogXCJNMjU3LjUgNDQ1LjFsLTIyLjIgMjIuMmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMNyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIwMS40IDQ0LjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuMiAyMi4yYzkuNSA5LjUgOS4zIDI1LS40IDM0LjNMMTM2LjYgMjE2SDQyNGMxMy4zIDAgMjQgMTAuNyAyNCAyNHYzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMzYuNmwxMjAuNSAxMTQuOGM5LjggOS4zIDEwIDI0LjguNCAzNC4zelwiXG4gICAgICAgIH0pKTtcblxuICAgICAgY2FzZSAncHJldlNldCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICAgICAgXCJkYXRhLWljb25cIjogXCJmYXN0LWJhY2t3YXJkXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1iYWNrd2FyZCBmYS13LTE2IFwiLFxuICAgICAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgIGQ6IFwiTTAgNDM2Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTUxLjlMMjM1LjUgNzEuNEMyNTYuMSA1NC4zIDI4OCA2OC42IDI4OCA5NnYxMzEuOUw0NTkuNSA3MS40QzQ4MC4xIDU0LjMgNTEyIDY4LjYgNTEyIDk2djMyMGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwyODggMjg1LjNWNDE2YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDY0IDI4NS4zVjQzNmMwIDYuNi01LjQgMTItMTIgMTJIMTJjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIlxuICAgICAgICB9KSk7XG5cbiAgICAgIGNhc2UgJ25leHRTZXQnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgICAgIFwiZGF0YS1pY29uXCI6IFwiZmFzdC1mb3J3YXJkXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1mb3J3YXJkIGZhLXctMTYgXCIsXG4gICAgICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZDogXCJNNTEyIDc2djM2MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJWMjg0LjFMMjc2LjUgNDQwLjZjLTIwLjYgMTcuMi01Mi41IDIuOC01Mi41LTI0LjZWMjg0LjFMNTIuNSA0NDAuNkMzMS45IDQ1Ny44IDAgNDQzLjQgMCA0MTZWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMjI0IDIyNi44Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDQ0OCAyMjYuOFY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEyelwiXG4gICAgICAgIH0pKTtcblxuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICAgICAgXCJkYXRhLWljb25cIjogXCJhcnJvdy1yaWdodFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctMTQgXCIsXG4gICAgICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZDogXCJNMTkwLjUgNjYuOWwyMi4yLTIyLjJjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMNDQxIDIzOWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyNDYuNiA0NjcuM2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjItMjIuMmMtOS41LTkuNS05LjMtMjUgLjQtMzQuM0wzMTEuNCAyOTZIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0di0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgyODcuNEwxOTAuOSAxMDEuMmMtOS44LTkuMy0xMC0yNC44LS40LTM0LjN6XCJcbiAgICAgICAgfSkpO1xuXG4gICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgICAgICBcImRhdGEtaWNvblwiOiBcInN0ZXAtZm9yd2FyZFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtZm9yd2FyZCBmYS13LTE0IFwiLFxuICAgICAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0NDggNTEyXCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgIGQ6IFwiTTM4NCA0NHY0MjRjMCA2LjYtNS40IDEyLTEyIDEyaC00OGMtNi42IDAtMTItNS40LTEyLTEyVjI5MS42bC0xOTUuNSAxODFDOTUuOSA0ODkuNyA2NCA0NzUuNCA2NCA0NDhWNjRjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMzEyIDIxOS4zVjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCJcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ6ci1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicGFnZXNcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tZmlyc3QtcGFnZVwiLFxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc1ByZXZEaXNhYmxlZCgpLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVGaXJzdFBhZ2VcbiAgICB9LCB0aGlzLl9fcmVuZGVySWNvbignZmlyc3QnKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tcHJldi1wYWdlXCIsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzUHJldkRpc2FibGVkKCksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVByZXZpb3VzUGFnZVxuICAgIH0sIHRoaXMuX19yZW5kZXJJY29uKCdwcmV2JykpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYnRuLXByZXYtbW9yZVwiLFxuICAgICAgaXNIaWRkZW46IHRoaXMuaXNQcmV2TW9yZUhpZGRlbigpLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVNb3JlUHJldlBhZ2VzXG4gICAgfSwgdGhpcy5fX3JlbmRlckljb24oJ3ByZXZTZXQnKSksIHRoaXMucmVuZGVyUGFnZXModGhpcy52aXNpYmxlUmFuZ2UoKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tbmV4dC1tb3JlXCIsXG4gICAgICBpc0hpZGRlbjogdGhpcy5pc05leHRNb3JlSGlkZGVuKCksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU1vcmVOZXh0UGFnZXNcbiAgICB9LCB0aGlzLl9fcmVuZGVySWNvbignbmV4dFNldCcpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge1xuICAgICAgY2xhc3NOYW1lOiBcImJ0bi1uZXh0LXBhZ2VcIixcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNOZXh0RGlzYWJsZWQoKSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlTmV4dFBhZ2VcbiAgICB9LCB0aGlzLl9fcmVuZGVySWNvbignbmV4dCcpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge1xuICAgICAgY2xhc3NOYW1lOiBcImJ0bi1sYXN0LXBhZ2VcIixcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNOZXh0RGlzYWJsZWQoKSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlTGFzdFBhZ2VcbiAgICB9LCB0aGlzLl9fcmVuZGVySWNvbignbGFzdCcpKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJudW1iZXJcIlxuICAgIH0sICEhdGhpcy5wcm9wcy50b3RhbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInBhZ2UtbnVtYmVyXCJcbiAgICB9LCB0aGlzLnByb3BzLmN1cnJlbnQsIFwiIC8gXCIsIHRoaXMucHJvcHMudG90YWwsIFwiIFwiLCB0aGlzLnByb3BzLnRleHRzLnBhZ2UpLCAhIXRoaXMucHJvcHMuY291bnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjb3VudC1udW1iZXJcIlxuICAgIH0sIHRoaXMucHJvcHMuY291bnQsIFwiIFwiLCB0aGlzLnByb3BzLnRleHRzLnJlY29yZCkpKTtcbiAgfVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZXJCYXInLFxuICBfX29uQ2xpY2s6IGZ1bmN0aW9uIF9fb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiAnenItcGFnZXItYmFyICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpICsgJyAnICsgKHRoaXMucHJvcHMuaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIikgKyAnICcgKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkID8gXCJcIiA6IFwiZW5hYmxlZFwiKVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBQYWdlciA9IHJlcXVpcmUoJy4vUGFnZXInKTtcblxudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VyVmlldycsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlSW5kZXg6IDEsXG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICB2aXNpYmxlUGFnZTogNSxcbiAgICAgIGRhdGFGaXhlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY291bnQ6IDAsXG4gICAgICBjdXJyZW50OiAxLFxuICAgICAgZGF0YTogW10sXG4gICAgICB0b3RhbDogMCxcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXhcbiAgICB9O1xuICB9LFxuICBfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiBfX2hhbmRsZVBhZ2VDaGFuZ2VkKG5ld1BhZ2UpIHtcbiAgICB2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cbiAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0UGFnZUluZGV4KG5ld1BhZ2UpO1xuICAgIH1cbiAgfSxcbiAgc2V0UGFnZUluZGV4OiBmdW5jdGlvbiBzZXRQYWdlSW5kZXgocGFnZUluZGV4KSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5zdGF0ZS5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgICB0aGlzLmRhdGEucmVmcmVzaCgpO1xuICAgIH1cbiAgfSxcbiAgX192aWV3UmVuZGVyOiBmdW5jdGlvbiBfX3ZpZXdSZW5kZXIocmVzcG9uc2UpIHtcbiAgICB2YXIgX3ZpZXcgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnZpZXcgfHwgdGhpcy5wcm9wcy52aWV3UmVuZGVyLCB6bi5leHRlbmQoe1xuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgcGFnZXJWaWV3OiB0aGlzXG4gICAgfSwgdGhpcy5zdGF0ZSkpO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ2aWV3LWNvbnRlbnRcIlxuICAgIH0sIF92aWV3KTtcbiAgfSxcbiAgX19vbkRhdGFMb2FkZWQ6IGZ1bmN0aW9uIF9fb25EYXRhTG9hZGVkKGRhdGEpIHtcbiAgICB2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuZGF0YUhhbmRsZXIgJiYgdGhpcy5wcm9wcy5kYXRhSGFuZGxlcihkYXRhLCB0aGlzKTtcblxuICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgaWYgKF90eXBlb2YoX3JldHVybikgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShfcmV0dXJuKTtcbiAgICAgIH0gZWxzZSB7Ly9UT0RPOiBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9fb25EYXRhTG9hZGluZzogZnVuY3Rpb24gX19vbkRhdGFMb2FkaW5nKGRhdGEsIGxpZnljeWNsZSkge1xuICAgIHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2QgfHwgJ3Bvc3QnLFxuICAgICAgICBfcGFyYW1zID0ge30sXG4gICAgICAgIF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG4gICAgICB0b3RhbDogXCJ0b3RhbFwiLFxuICAgICAgcGFnZUluZGV4OiAncGFnZUluZGV4JyxcbiAgICAgIHBhZ2VTaXplOiAncGFnZVNpemUnLFxuICAgICAgZGF0YTogJ2RhdGEnXG4gICAgfSwgdGhpcy5wcm9wcy5rZXlNYXBzKTtcblxuICAgIF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMuc3RhdGUucGFnZUluZGV4IHx8IDE7XG4gICAgX3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXG4gICAgaWYgKF9tZXRob2QgPT0gJ2dldCcpIHtcbiAgICAgIGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcbiAgICAgICAgcGFyYW1zOiBfcGFyYW1zXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuICAgICAgICBkYXRhOiBfcGFyYW1zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcztcbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbiAgX19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiBfX29uRGF0YUNyZWF0ZWQoZGF0YSwgbGlmeWN5Y2xlKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMpO1xuICB9LFxuICBfX2xvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIF9fbG9hZGluZ1JlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobG9hZGVyLkRhdGFMb2FkZXIsIHtcbiAgICAgIGxvYWRlcjogXCJ3YXZlXCIsXG4gICAgICB0aXRsZTogXCJMb2FkaW5nLi4uXCJcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZXItdmlld1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogem51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKSxcbiAgICAgIFwiZGF0YS1maXhlZFwiOiB0aGlzLnByb3BzLmRhdGFGaXhlZFxuICAgIH0sIHRoaXMucHJvcHMuZGF0YSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCh6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUsIHtcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIHJlbmRlcjogdGhpcy5fX3ZpZXdSZW5kZXIsXG4gICAgICBsb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiBsb2FkaW5nUmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX19sb2FkaW5nUmVuZGVyKCk7XG4gICAgICB9LFxuICAgICAgb25Mb2FkaW5nOiB0aGlzLl9fb25EYXRhTG9hZGluZyxcbiAgICAgIG9uRGF0YUNyZWF0ZWQ6IHRoaXMuX19vbkRhdGFDcmVhdGVkLFxuICAgICAgb25GaW5pc2hlZDogdGhpcy5fX29uRGF0YUxvYWRlZFxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwidmlldy1wYWdlclwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZXIsIHtcbiAgICAgIHRvdGFsOiBNYXRoLmNlaWwodGhpcy5zdGF0ZS5jb3VudCAvIHRoaXMucHJvcHMucGFnZVNpemUpLFxuICAgICAgY291bnQ6IHRoaXMuc3RhdGUuY291bnQsXG4gICAgICBjdXJyZW50OiB0aGlzLnN0YXRlLnBhZ2VJbmRleCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnByb3BzLnBhZ2VTaXplLFxuICAgICAgdmlzaWJsZVBhZ2VzOiB0aGlzLnByb3BzLnZpc2libGVQYWdlcyxcbiAgICAgIG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuICAgIH0pKSk7XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NpbXBsZVBhZ2VyJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHRleHRzOiB7XG4gICAgICAgIHBhZ2U6ICfpobUnLFxuICAgICAgICByZWNvcmQ6ICfmnaEnXG4gICAgICB9LFxuICAgICAgaWNvbnM6IHtcbiAgICAgICAgZmlyc3Q6ICdmYVN0ZXBCYWNrd2FyZCcsXG4gICAgICAgIHByZXY6ICdmYUFycm93TGVmdCcsXG4gICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uIGhhbmRsZUZpcnN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgfSxcbiAgaGFuZGxlUHJldmlvdXNQYWdlOiBmdW5jdGlvbiBoYW5kbGVQcmV2aW91c1BhZ2UoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gIH0sXG4gIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiBoYW5kbGVOZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgfSxcbiAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uIGhhbmRsZUxhc3RQYWdlKCkge1xuICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICB9LFxuICBoYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gaGFuZGxlUGFnZUNoYW5nZWQocGFnZUluZGV4KSB7XG4gICAgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICB9LFxuICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gaXNQcmV2RGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA8PSAxO1xuICB9LFxuICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gaXNOZXh0RGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA+PSB0aGlzLnByb3BzLnRvdGFsO1xuICB9LFxuICBfX3JlbmRlckljb246IGZ1bmN0aW9uIF9fcmVuZGVySWNvbih2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2ZpcnN0JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgICAgICBcImRhdGEtaWNvblwiOiBcInN0ZXAtYmFja3dhcmRcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWJhY2t3YXJkIGZhLXctMTQgXCIsXG4gICAgICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZDogXCJNNjQgNDY4VjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTc2LjRsMTk1LjUtMTgxQzM1Mi4xIDIyLjMgMzg0IDM2LjYgMzg0IDY0djM4NGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwxMzYgMjkyLjdWNDY4YzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEyelwiXG4gICAgICAgIH0pKTtcblxuICAgICAgY2FzZSAncHJldic6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICAgICAgXCJkYXRhLWljb25cIjogXCJhcnJvdy1sZWZ0XCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctbGVmdCBmYS13LTE0IFwiLFxuICAgICAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0NDggNTEyXCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgIGQ6IFwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIlxuICAgICAgICB9KSk7XG5cbiAgICAgIGNhc2UgJ3ByZXZTZXQnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgICAgIFwiZGF0YS1pY29uXCI6IFwiZmFzdC1iYWNrd2FyZFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtYmFja3dhcmQgZmEtdy0xNiBcIixcbiAgICAgICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICBkOiBcIk0wIDQzNlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjE1MS45TDIzNS41IDcxLjRDMjU2LjEgNTQuMyAyODggNjguNiAyODggOTZ2MTMxLjlMNDU5LjUgNzEuNEM0ODAuMSA1NC4zIDUxMiA2OC42IDUxMiA5NnYzMjBjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMjg4IDI4NS4zVjQxNmMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkw2NCAyODUuM1Y0MzZjMCA2LjYtNS40IDEyLTEyIDEySDEyYy02LjYgMC0xMi01LjQtMTItMTJ6XCJcbiAgICAgICAgfSkpO1xuXG4gICAgICBjYXNlICduZXh0U2V0JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgICAgICBcImRhdGEtaWNvblwiOiBcImZhc3QtZm9yd2FyZFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtZm9yd2FyZCBmYS13LTE2IFwiLFxuICAgICAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgIGQ6IFwiTTUxMiA3NnYzNjBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEyVjI4NC4xTDI3Ni41IDQ0MC42Yy0yMC42IDE3LjItNTIuNSAyLjgtNTIuNS0yNC42VjI4NC4xTDUyLjUgNDQwLjZDMzEuOSA0NTcuOCAwIDQ0My40IDAgNDE2Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDIyNCAyMjYuOFY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkw0NDggMjI2LjhWNzZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnpcIlxuICAgICAgICB9KSk7XG5cbiAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgICAgIFwiZGF0YS1pY29uXCI6IFwiYXJyb3ctcmlnaHRcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1yaWdodCBmYS13LTE0IFwiLFxuICAgICAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0NDggNTEyXCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICAgIGQ6IFwiTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxLjJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zelwiXG4gICAgICAgIH0pKTtcblxuICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICAgICAgXCJkYXRhLWljb25cIjogXCJzdGVwLWZvcndhcmRcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWZvcndhcmQgZmEtdy0xNCBcIixcbiAgICAgICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgdmlld0JveDogXCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICBkOiBcIk0zODQgNDR2NDI0YzAgNi42LTUuNCAxMi0xMiAxMmgtNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYyOTEuNmwtMTk1LjUgMTgxQzk1LjkgNDg5LjcgNjQgNDc1LjQgNjQgNDQ4VjY0YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDMxMiAyMTkuM1Y0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEyelwiXG4gICAgICAgIH0pKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwienItc2ltcGxlLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJwYWdlc1wiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge1xuICAgICAgY2xhc3NOYW1lOiBcImJ0bi1maXJzdC1wYWdlXCIsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzUHJldkRpc2FibGVkKCksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUZpcnN0UGFnZVxuICAgIH0sIHRoaXMuX19yZW5kZXJJY29uKCdmaXJzdCcpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge1xuICAgICAgY2xhc3NOYW1lOiBcImJ0bi1wcmV2LXBhZ2VcIixcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNQcmV2RGlzYWJsZWQoKSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlUHJldmlvdXNQYWdlXG4gICAgfSwgdGhpcy5fX3JlbmRlckljb24oJ3ByZXYnKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIm51bWJlclwiXG4gICAgfSwgISF0aGlzLnByb3BzLnRvdGFsICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicGFnZS1udW1iZXJcIlxuICAgIH0sIHRoaXMucHJvcHMuY3VycmVudCwgXCIgLyBcIiwgdGhpcy5wcm9wcy50b3RhbCwgXCIgXCIsIHRoaXMucHJvcHMudGV4dHMucGFnZSksICEhdGhpcy5wcm9wcy5jb3VudCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvdW50LW51bWJlclwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb3VudCwgXCIgXCIsIHRoaXMucHJvcHMudGV4dHMucmVjb3JkKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tbmV4dC1wYWdlXCIsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzTmV4dERpc2FibGVkKCksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU5leHRQYWdlXG4gICAgfSwgdGhpcy5fX3JlbmRlckljb24oJ25leHQnKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tbGFzdC1wYWdlXCIsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzTmV4dERpc2FibGVkKCksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUxhc3RQYWdlXG4gICAgfSwgdGhpcy5fX3JlbmRlckljb24oJ2xhc3QnKSkpKTtcbiAgfVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQYWdlOiByZXF1aXJlKCcuL1BhZ2UnKSxcbiAgUGFnZXI6IHJlcXVpcmUoJy4vUGFnZXInKSxcbiAgUGFnZXJCYXI6IHJlcXVpcmUoJy4vUGFnZXJCYXInKSxcbiAgUGFnZXJWaWV3OiByZXF1aXJlKCcuL1BhZ2VyVmlldycpLFxuICBTaW1wbGVQYWdlcjogcmVxdWlyZSgnLi9TaW1wbGVQYWdlcicpXG59OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwicmVxdWlyZSgnem51aS1yZWFjdCcpO1xucmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xubW9kdWxlLmV4cG9ydHMgPSB6bnVpLnJlYWN0LmxvYWRlZENvbXBvbmVudHNbcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKS5uYW1lXSA9IHJlcXVpcmUoJy4vX18vYnVpbGQvaW5kZXguanMnKTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogXCJ6ci1saXN0LXN0eWxlLWZsZXgtcm93XCIsXG5cdFx0XHRzZWxlY3RNb2RlOiAnc2luZ2xlJywgLy8gc2luZ2xlLCBtdWx0aXBsZSxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih0aGlzLnByb3BzLnNlbGVjdE1vZGUgPT0gJ3NpbmdsZScpe1xuXHRcdFx0XHRfdmFsdWUgPSAnJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF92YWx1ZSA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0aWYoX3ZhbHVlID09PSB0aGlzLnN0YXRlLnZhbHVlKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RNb2RlID09ICdzaW5nbGUnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX3ZhbHVlO1xuXHRcdH0gZWxzZSBpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09IG51bGwgJiYgdGhpcy5wcm9wcy50ZXh0S2V5KSB7XG5cdFx0XHRpZih0aGlzLnByb3BzLnRleHRLZXkuaW5kZXhPZigneycpIT0tMSAmJiB0aGlzLnByb3BzLnRleHRLZXkuaW5kZXhPZignfScpIT0tMSl7XG5cdFx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHRLZXkuZm9ybWF0KGl0ZW0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItbGlzdC1pdGVtJywgKHRoaXMuX19pc0NoZWNrZWQoaXRlbSwgaW5kZXgpPydjaGVja2VkJzonJykpfSBvbkNsaWNrPXsoZXZlbnQpPT57XG5cdFx0XHRcdFx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRcdFx0XHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0XHR0aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpbmRleClcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0e19yZXR1cm59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH0sXG5cdF9fZGF0YVJlbmRlcjogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1saXN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGF0YS5tYXAodGhpcy5fX2l0ZW1SZW5kZXIpXG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YVJlbmRlcj17dGhpcy5fX2RhdGFSZW5kZXJ9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdFBhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0dGV4dEtleTogJ05hbWUnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHRvdGFsOiAwLFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleCB8fCAxXG5cdFx0fTtcblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnQgPSBwYWdlSW5kZXg7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHR0aGlzLmRhdGEuX2FyZ3YgPSB0aGlzLl9fb25EYXRhSW5pdGlhbCh0aGlzLnByb3BzLmRhdGEpO1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHR9XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblx0fSxcblx0X19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUluaXRpYWw6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgMTA7XG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XG5cdH0sXG5cdF9fb25Mb2FkRmluaXNoZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZih0aGlzLnByb3BzLnp4bnogIT09IGZhbHNlKXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUgIT0gMjAwKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoZGF0YS5kZXRhaWwpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKCF6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKFwiVGFibGVQYWdlciBDb21wb25lbnQgRGF0YSBUeXBlIEVycm9yLlwiKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RhdGEgPSBkYXRhWzBdLFxuXHRcdFx0XHRfcGFnZXJDb3VudCA9IGRhdGFbMV1bMF0uY291bnQ7XG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogX2RhdGEsXG5cdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5wcm9wcy5wYWdlU2l6ZSksXG5cdFx0XHRcdGNvdW50OiBfcGFnZXJDb3VudCxcblx0XHRcdFx0Y3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LFxuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMuZGF0YV0sXG5cdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnRvdGFsXS90aGlzLnByb3BzLnBhZ2VTaXplKSxcblx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhIHx8ICF0aGlzLnN0YXRlLmRhdGEubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHRcdF9lbGVtZW50ID0gbnVsbCxcblx0XHRcdF9wYWdlclByb3BzID0ge1xuXHRcdFx0XHR0b3RhbDogX3N0YXRlLnRvdGFsLFxuXHRcdFx0XHRjb3VudDogX3N0YXRlLmNvdW50LFxuXHRcdFx0XHRjdXJyZW50OiBfc3RhdGUuY3VycmVudCxcblx0XHRcdFx0b25QYWdlQ2hhbmdlZDogdGhpcy5fX2hhbmRsZVBhZ2VDaGFuZ2VkXG5cdFx0XHR9LFxuXHRcdFx0X0NvbXBvbmVudCA9IHRoaXMucHJvcHMucGFnZXIgfHwgcGFnZXIuUGFnZXI7XG5cdFx0aWYoem4uaXMoX0NvbXBvbmVudCwgJ3N0cmluZycpKXtcblx0XHRcdF9Db21wb25lbnQgPSB6bi5wYXRoKHdpbmRvdywgX0NvbXBvbmVudCk7XG5cdFx0fWVsc2UgaWYoem4uaXMoX0NvbXBvbmVudCwgJ29iamVjdCcpICYmIF9Db21wb25lbnQuY29tcG9uZW50KXtcblx0XHRcdF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX0NvbXBvbmVudC5jb21wb25lbnQsIHpuLmV4dGVuZCh7fSwgX0NvbXBvbmVudCwgX3BhZ2VyUHJvcHMpLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucGFnZXJSZW5kZXIpe1xuXHRcdFx0X2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnBhZ2VyUmVuZGVyLCBfcGFnZXJQcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpc3QtcGFnZXJcIj57X2VsZW1lbnR9PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCk7XG5cdH0sXG5cdF9fcmVuZGVySXRlbTogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5pdGVtUmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0XG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG5cdFx0XHRcdFx0e2l0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XX1cblx0XHRcdFx0PC9saT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9lbGVtZW50O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyXCIgLz5cblx0XHRcdFx0PHNwYW4+5Yqg6L295LitLi4uPC9zcGFuPlxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLmRhdGEubGVuZ3RoKSB7XG5cdFx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmRhdGFSZW5kZXIsIHtcblx0XHRcdFx0ZGF0YTogdGhpcy5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRsaXN0UGFnZXI6IHRoaXNcblx0XHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0XHRpZighX2VsZW1lbnQpe1xuXHRcdFx0XHRfZWxlbWVudCA9IChcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1kYXRhXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YS5tYXAodGhpcy5fX3JlbmRlckl0ZW0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1kZXNrdG9wXCIgLz5cblx0XHRcdFx0PHNwYW4+5pqC5peg5pWw5o2uPC9zcGFuPlxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmZWN5Y2xlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGhpcywgbGlmZWN5Y2xlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWxpc3QtcGFnZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLl9fb25EYXRhSW5pdGlhbCh0aGlzLnByb3BzLmRhdGEpfVxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9e3RoaXMuX19yZW5kZXJ9XG5cdFx0XHRcdFx0bG9hZGluZ0VuYWJsZWQ9e3RoaXMucHJvcHMubG9hZGluZ0VuYWJsZWR8fGZhbHNlfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vbkxvYWRGaW5pc2hlZH1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5wcm9wcy5vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5wcm9wcy5vbkxvYWRFcnJvcn0gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJQYWdlcigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpc3RWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMaXN0VmlldycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGUsIG11bHRpcGxlLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBudWxsXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1saXN0LXZpZXdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbkxpc3RWaWV3Lkl0ZW0gPSByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RWaWV3O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdFZpZXdJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1saXN0LXZpZXctaXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIExpc3Q6IHJlcXVpcmUoJy4vTGlzdCcpLFxuICAgIExpc3RQYWdlcjogcmVxdWlyZSgnLi9MaXN0UGFnZXInKSxcbiAgICBMaXN0VmlldzogcmVxdWlyZSgnLi9MaXN0VmlldycpLFxuICAgIExpc3RWaWV3SXRlbTogcmVxdWlyZSgnLi9MaXN0Vmlld0l0ZW0nKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wienJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==