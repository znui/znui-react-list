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

/***/ "./List.js":
/*!*****************!*\
  !*** ./List.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'List',
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
      } else {
        return false;
      }
    } else {
      if (_value === this.state.value) {
        return true;
      } else {
        return false;
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

    var _return = this.props.itemRender && this.props.itemRender(item, index);

    if (!_return) {
      _return = item[this.props.textKey];
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
  render: function render() {
    return /*#__PURE__*/React.createElement("ul", {
      style: this.props.style,
      className: znui.react.classname("zr-list zr-list-style-flex-row", this.props.className)
    }, this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),

/***/ "./ListView.js":
/*!*********************!*\
  !*** ./ListView.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

var ListView = React.createClass({
  displayName: 'List',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", _extends({}, this.props, {
      className: znui.react.classname("zr-list-view", this.props.className)
    }), this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, this.props));
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
  displayName: 'ListViewItem',
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
  'List': __webpack_require__(/*! ./List */ "./List.js"),
  'ListView': __webpack_require__(/*! ./ListView */ "./ListView.js"),
  'ListViewItem': __webpack_require__(/*! ./ListViewItem */ "./ListViewItem.js")
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

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJzZWxlY3RNb2RlIiwidGV4dEtleSIsInZhbHVlS2V5IiwiZGF0YVR5cGUiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZSIsIl9faW5pdFZhbHVlIiwiX3ZhbHVlIiwicHJvcHMiLCJwYXJzZVZhbHVlIiwid2luZG93IiwidmFsdWVPZiIsIkVycm9yIiwiX19pc0NoZWNrZWQiLCJpdGVtIiwiaW5kZXgiLCJ6biIsImlzIiwic3RhdGUiLCJpbmRleE9mIiwiX19pdGVtQ2xpY2siLCJldmVudCIsIl9yZXR1cm4iLCJvbkl0ZW1DbGljayIsIl9fY2xpY2tEZWZhdWx0IiwiX2RhdGEiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImZvcmNlVXBkYXRlIiwib25DaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInJlbmRlciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJMaXN0VmlldyIsIkl0ZW0iLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJfX29uQ2xpY2siLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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Q0FERjtBQUViLGNBQVlBLG1CQUFPLENBQUMsaUNBQUQsQ0FGTjtBQUdiLGtCQUFnQkEsbUJBQU8sQ0FBQyx5Q0FBRDtBQUhWLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidMaXN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0TW9kZTogJ3NpbmdsZScsIC8vIHNpbmdsZSwgbXVsdGlwbGUsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RNb2RlID09ICdzaW5nbGUnKXtcblx0XHRcdFx0X3ZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdmFsdWUgPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RNb2RlID09ICdzaW5nbGUnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX3ZhbHVlO1xuXHRcdH0gZWxzZSBpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0cmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1saXN0LWl0ZW0nLCAodGhpcy5fX2lzQ2hlY2tlZChpdGVtLCBpbmRleCk/J2NoZWNrZWQnOicnKSl9IG9uQ2xpY2s9eyhldmVudCk9Pntcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRcdFx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdFx0XHRcdHRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGluZGV4KVxuXHRcdFx0XHR9fT5cblx0XHRcdHtfcmV0dXJufVxuXHRcdDwvbGk+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWxpc3QgenItbGlzdC1zdHlsZS1mbGV4LXJvd1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbnZhciBMaXN0VmlldyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0xpc3QnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1saXN0LXZpZXdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbkxpc3RWaWV3Lkl0ZW0gPSByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RWaWV3O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0xpc3RWaWV3SXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItbGlzdC12aWV3LWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdMaXN0JzogcmVxdWlyZSgnLi9MaXN0JyksXG4gICAgJ0xpc3RWaWV3JzogcmVxdWlyZSgnLi9MaXN0VmlldycpLFxuICAgICdMaXN0Vmlld0l0ZW0nOiByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==