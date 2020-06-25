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

    var _return = this.props.itemRender && this.props.itemRender(item, index);

    if (!_return && this.props.textKey) {
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
  render: function render() {
    return /*#__PURE__*/React.createElement("ul", {
      style: this.props.style,
      className: znui.react.classname("zr-list", this.props.className)
    }, this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      responseHandler: this.props.responseHandler
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

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJzZWxlY3RNb2RlIiwidGV4dEtleSIsInZhbHVlS2V5IiwiZGF0YVR5cGUiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZSIsIl9faW5pdFZhbHVlIiwiX3ZhbHVlIiwicHJvcHMiLCJwYXJzZVZhbHVlIiwid2luZG93IiwidmFsdWVPZiIsIkVycm9yIiwiX19pc0NoZWNrZWQiLCJpdGVtIiwiaW5kZXgiLCJ6biIsImlzIiwic3RhdGUiLCJpbmRleE9mIiwiX19pdGVtQ2xpY2siLCJldmVudCIsIl9yZXR1cm4iLCJvbkl0ZW1DbGljayIsIl9fY2xpY2tEZWZhdWx0IiwiX2RhdGEiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImZvcmNlVXBkYXRlIiwib25DaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJmb3JtYXQiLCJyZWFjdCIsImNsYXNzbmFtZSIsInJlbmRlciIsInN0eWxlIiwiY2hpbGRyZW4iLCJyZXNwb25zZUhhbmRsZXIiLCJMaXN0VmlldyIsIkl0ZW0iLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJfX29uQ2xpY2siLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QkFBVTtBQUNqQix3QkFDQztBQUFLLFdBQUssRUFBRSxLQUFLN0IsS0FBTCxDQUFXOEIsS0FBdkI7QUFBOEIsZUFBUyxFQUFFOUMsSUFBSSxDQUFDMkMsS0FBTCxDQUFXQyxTQUFYLENBQXFCLG1CQUFyQixFQUEwQyxLQUFLNUIsS0FBTCxDQUFXVCxTQUFyRCxDQUF6QztBQUNDLHNCQUFjLEtBQUtTLEtBQUwsQ0FBV21DLE9BRDFCO0FBRUMsdUJBQWUsS0FBS25DLEtBQUwsQ0FBV29DLFFBRjNCO0FBR0MsYUFBTyxFQUFFLEtBQUtDO0FBSGYsT0FJRSxLQUFLckMsS0FBTCxDQUFXK0IsUUFKYixDQUREO0FBUUE7QUFwQmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkE3QyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixVQUFRRixtQkFBTyxDQUFDLHlCQUFELENBREY7QUFFYixjQUFZQSxtQkFBTyxDQUFDLGlDQUFELENBRk47QUFHYixrQkFBZ0JBLG1CQUFPLENBQUMseUNBQUQ7QUFIVixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMaXN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiBcInpyLWxpc3Qtc3R5bGUtZmxleC1yb3dcIixcblx0XHRcdHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGUsIG11bHRpcGxlLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT09IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdGlmKHRoaXMucHJvcHMuc2VsZWN0TW9kZSA9PSAnc2luZ2xlJyl7XG5cdFx0XHRcdF92YWx1ZSA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3ZhbHVlID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSBpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih0aGlzLnByb3BzLnNlbGVjdE1vZGUgPT0gJ3NpbmdsZScpIHtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSBfdmFsdWU7XG5cdFx0fSBlbHNlIGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuICYmIHRoaXMucHJvcHMudGV4dEtleSkge1xuXHRcdFx0aWYodGhpcy5wcm9wcy50ZXh0S2V5LmluZGV4T2YoJ3snKSE9LTEgJiYgdGhpcy5wcm9wcy50ZXh0S2V5LmluZGV4T2YoJ30nKSE9LTEpe1xuXHRcdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0S2V5LmZvcm1hdChpdGVtKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWxpc3QtaXRlbScsICh0aGlzLl9faXNDaGVja2VkKGl0ZW0sIGluZGV4KT8nY2hlY2tlZCc6JycpKX0gb25DbGljaz17KGV2ZW50KT0+e1xuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdFx0XHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0dGhpcy5fX2l0ZW1DbGljayhldmVudCwgaW5kZXgpXG5cdFx0XHRcdH19PlxuXHRcdFx0e19yZXR1cm59XG5cdFx0PC9saT47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItbGlzdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpc3RWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMaXN0VmlldycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGUsIG11bHRpcGxlLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBudWxsXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1saXN0LXZpZXdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbkxpc3RWaWV3Lkl0ZW0gPSByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RWaWV3O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdFZpZXdJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1saXN0LXZpZXctaXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdMaXN0JzogcmVxdWlyZSgnLi9MaXN0JyksXG4gICAgJ0xpc3RWaWV3JzogcmVxdWlyZSgnLi9MaXN0VmlldycpLFxuICAgICdMaXN0Vmlld0l0ZW0nOiByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==