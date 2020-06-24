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
  displayName: 'ZRList',
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
  displayName: 'ZRListView',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9MaXN0Vmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJzZWxlY3RNb2RlIiwidGV4dEtleSIsInZhbHVlS2V5IiwiZGF0YVR5cGUiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZSIsIl9faW5pdFZhbHVlIiwiX3ZhbHVlIiwicHJvcHMiLCJwYXJzZVZhbHVlIiwid2luZG93IiwidmFsdWVPZiIsIkVycm9yIiwiX19pc0NoZWNrZWQiLCJpdGVtIiwiaW5kZXgiLCJ6biIsImlzIiwic3RhdGUiLCJpbmRleE9mIiwiX19pdGVtQ2xpY2siLCJldmVudCIsIl9yZXR1cm4iLCJvbkl0ZW1DbGljayIsIl9fY2xpY2tEZWZhdWx0IiwiX2RhdGEiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImZvcmNlVXBkYXRlIiwib25DaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInJlbmRlciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJMaXN0VmlldyIsIkl0ZW0iLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJfX29uQ2xpY2siLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsNENBQUQsQ0FBcEI7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsS0FBSyxDQUFDTSxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsUUFEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxnQkFBVSxFQUFFLFFBRE47QUFDZ0I7QUFDdEJDLGFBQU8sRUFBRSxNQUZIO0FBR05DLGNBQVEsRUFBRSxPQUhKO0FBSU5DLGNBQVEsRUFBRTtBQUpKLEtBQVA7QUFNQSxHQVRpQztBQVVsQ0MsaUJBQWUsRUFBRSwyQkFBVTtBQUMxQixXQUFPO0FBQ05DLFdBQUssRUFBRTtBQURELEtBQVA7QUFHQSxHQWRpQztBQWVsQ0MsYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFFBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUNBLFFBQUcsS0FBS0MsS0FBTCxDQUFXSCxLQUFYLEtBQXFCLElBQXhCLEVBQTZCO0FBQzVCRSxZQUFNLEdBQUcsS0FBS0MsS0FBTCxDQUFXSCxLQUFwQjtBQUNBLEtBRkQsTUFFSztBQUNKLFVBQUcsS0FBS0csS0FBTCxDQUFXUixVQUFYLElBQXlCLFFBQTVCLEVBQXFDO0FBQ3BDTyxjQUFNLEdBQUcsRUFBVDtBQUNBLE9BRkQsTUFFTztBQUNOQSxjQUFNLEdBQUcsRUFBVDtBQUNBO0FBQ0Q7O0FBRUQsV0FBT0EsTUFBUDtBQUNBLEdBNUJpQztBQTZCbENFLFlBQVUsRUFBRSxvQkFBVUosS0FBVixFQUFnQjtBQUMzQixRQUFHSyxNQUFNLENBQUMsS0FBS0YsS0FBTCxDQUFXTCxRQUFaLENBQVQsRUFBK0I7QUFDOUIsYUFBUSxJQUFJTyxNQUFNLENBQUMsS0FBS0YsS0FBTCxDQUFXTCxRQUFaLENBQVYsQ0FBZ0NFLEtBQWhDLENBQUQsQ0FBeUNNLE9BQXpDLEVBQVA7QUFDQTs7QUFFRCxVQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0EsR0FuQ2lDO0FBb0NsQ0MsYUFBVyxFQUFFLHFCQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUFzQjtBQUNsQyxRQUFJUixNQUFNLEdBQUdPLElBQUksQ0FBQyxLQUFLTixLQUFMLENBQVdOLFFBQVosQ0FBakI7O0FBQ0EsUUFBR2MsRUFBRSxDQUFDQyxFQUFILENBQU0sS0FBS0MsS0FBTCxDQUFXYixLQUFqQixFQUF3QixPQUF4QixDQUFILEVBQW9DO0FBQ25DLFVBQUcsS0FBS2EsS0FBTCxDQUFXYixLQUFYLENBQWlCYyxPQUFqQixDQUF5QlosTUFBekIsS0FBb0MsQ0FBQyxDQUF4QyxFQUEwQztBQUN6QyxlQUFPLElBQVA7QUFDQSxPQUZELE1BRUs7QUFDSixlQUFPLEtBQVA7QUFDQTtBQUNELEtBTkQsTUFNSztBQUNKLFVBQUdBLE1BQU0sS0FBSyxLQUFLVyxLQUFMLENBQVdiLEtBQXpCLEVBQStCO0FBQzlCLGVBQU8sSUFBUDtBQUNBLE9BRkQsTUFFSztBQUNKLGVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0EsR0FyRGlDO0FBc0RsQ2UsYUFBVyxFQUFFLHFCQUFVQyxLQUFWLEVBQWlCTixLQUFqQixFQUF1QjtBQUNuQyxRQUFJTyxPQUFPLEdBQUcsS0FBS2QsS0FBTCxDQUFXZSxXQUFYLElBQTBCLEtBQUtmLEtBQUwsQ0FBV2UsV0FBWCxDQUF1QkYsS0FBdkIsRUFBOEIsSUFBOUIsQ0FBeEM7O0FBQ0EsUUFBR0MsT0FBTyxJQUFJLElBQWQsRUFBb0I7QUFDbkIsV0FBS0UsY0FBTCxDQUFvQkgsS0FBcEI7QUFDQTtBQUNELEdBM0RpQztBQTREbENHLGdCQUFjLEVBQUUsd0JBQVVILEtBQVYsRUFBZ0I7QUFDL0IsUUFBSUksS0FBSyxHQUFHSixLQUFLLENBQUNLLElBQWxCO0FBQUEsUUFDQ25CLE1BQU0sR0FBR2tCLEtBQUssQ0FBQyxLQUFLakIsS0FBTCxDQUFXTixRQUFaLENBRGY7O0FBRUEsUUFBRyxLQUFLTSxLQUFMLENBQVdSLFVBQVgsSUFBeUIsUUFBNUIsRUFBc0M7QUFDckMsV0FBS2tCLEtBQUwsQ0FBV2IsS0FBWCxHQUFtQkUsTUFBbkI7QUFDQSxLQUZELE1BRU8sSUFBR1MsRUFBRSxDQUFDQyxFQUFILENBQU0sS0FBS0MsS0FBTCxDQUFXYixLQUFqQixFQUF3QixPQUF4QixDQUFILEVBQXFDO0FBQzNDLFVBQUcsS0FBS2EsS0FBTCxDQUFXYixLQUFYLENBQWlCYyxPQUFqQixDQUF5QlosTUFBekIsS0FBb0MsQ0FBQyxDQUF4QyxFQUEwQztBQUN6QyxhQUFLVyxLQUFMLENBQVdiLEtBQVgsQ0FBaUJzQixNQUFqQixDQUF3QixLQUFLVCxLQUFMLENBQVdiLEtBQVgsQ0FBaUJjLE9BQWpCLENBQXlCWixNQUF6QixDQUF4QixFQUEwRCxDQUExRDtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtXLEtBQUwsQ0FBV2IsS0FBWCxDQUFpQnVCLElBQWpCLENBQXNCckIsTUFBdEI7QUFDQTtBQUNEOztBQUNEYyxTQUFLLENBQUNoQixLQUFOLEdBQWMsS0FBS2EsS0FBTCxDQUFXYixLQUF6QjtBQUNBLFNBQUt3QixXQUFMO0FBQ0EsU0FBS3JCLEtBQUwsQ0FBV3NCLFFBQVgsSUFBdUIsS0FBS3RCLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JULEtBQXBCLEVBQTJCLElBQTNCLENBQXZCO0FBQ0EsR0EzRWlDO0FBNEVsQ1UsY0FBWSxFQUFFLHNCQUFVakIsSUFBVixFQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFDbkMsUUFBRyxDQUFDQyxFQUFFLENBQUNDLEVBQUgsQ0FBTUgsSUFBTixFQUFZLFFBQVosQ0FBSixFQUEwQjtBQUN6QixVQUFJa0IsS0FBSyxHQUFHO0FBQUVqQixhQUFLLEVBQUVBO0FBQVQsT0FBWjtBQUNBaUIsV0FBSyxDQUFDLEtBQUt4QixLQUFMLENBQVdQLE9BQVosQ0FBTCxHQUE0QitCLEtBQUssQ0FBQyxLQUFLeEIsS0FBTCxDQUFXTixRQUFaLENBQUwsR0FBNkJZLElBQXpEO0FBQ0FBLFVBQUksR0FBR2tCLEtBQVA7QUFDQSxLQUpELE1BSUs7QUFDSmxCLFVBQUksQ0FBQ0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0E7O0FBRUQsUUFBSU8sT0FBTyxHQUFHLEtBQUtkLEtBQUwsQ0FBV3lCLFVBQVgsSUFBeUIsS0FBS3pCLEtBQUwsQ0FBV3lCLFVBQVgsQ0FBc0JuQixJQUF0QixFQUE0QkMsS0FBNUIsQ0FBdkM7O0FBQ0EsUUFBRyxDQUFDTyxPQUFKLEVBQWE7QUFDWkEsYUFBTyxHQUFHUixJQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXUCxPQUFaLENBQWQ7QUFDQTs7QUFDRCx3QkFBTztBQUFJLFNBQUcsRUFBRWMsS0FBVDtBQUFnQixlQUFTLEVBQUV2QixJQUFJLENBQUMwQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUIsY0FBckIsRUFBc0MsS0FBS3RCLFdBQUwsQ0FBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixJQUE4QixTQUE5QixHQUF3QyxFQUE5RSxDQUEzQjtBQUErRyxhQUFPLEVBQUUsaUJBQUNNLEtBQUQsRUFBUztBQUNySUEsYUFBSyxDQUFDSyxJQUFOLEdBQWFaLElBQWI7QUFDQU8sYUFBSyxDQUFDTixLQUFOLEdBQWNBLEtBQWQ7O0FBQ0EsYUFBSSxDQUFDSyxXQUFMLENBQWlCQyxLQUFqQixFQUF3Qk4sS0FBeEI7QUFDQTtBQUpJLE9BS0xPLE9BTEssQ0FBUDtBQU9BLEdBaEdpQztBQWlHbENjLFFBQU0sRUFBRSxrQkFBVTtBQUNqQix3QkFDQztBQUFJLFdBQUssRUFBRSxLQUFLNUIsS0FBTCxDQUFXNkIsS0FBdEI7QUFBNkIsZUFBUyxFQUFFN0MsSUFBSSxDQUFDMEMsS0FBTCxDQUFXQyxTQUFYLENBQXFCLGdDQUFyQixFQUF1RCxLQUFLM0IsS0FBTCxDQUFXOEIsU0FBbEU7QUFBeEMsT0FDRSxLQUFLOUIsS0FBTCxDQUFXK0IsUUFEYixlQUVDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksUUFBWjtBQUFxQixVQUFJLEVBQUUsS0FBSy9CLEtBQUwsQ0FBV2tCLElBQXRDO0FBQTRDLGdCQUFVLEVBQUUsS0FBS0s7QUFBN0QsTUFGRCxDQUREO0FBTUE7QUF4R2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFJeEMsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsNENBQUQsQ0FBcEI7O0FBRUEsSUFBSStDLFFBQVEsR0FBR2pELEtBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUNoQ0MsYUFBVyxFQUFDLFlBRG9CO0FBRWhDc0MsUUFBTSxFQUFFLGtCQUFVO0FBQ2pCLHdCQUNDLHdDQUFTLEtBQUs1QixLQUFkO0FBQXFCLGVBQVMsRUFBRWhCLElBQUksQ0FBQzBDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixjQUFyQixFQUFxQyxLQUFLM0IsS0FBTCxDQUFXOEIsU0FBaEQ7QUFBaEMsUUFDRSxLQUFLOUIsS0FBTCxDQUFXK0IsUUFEYixlQUVDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksUUFBWixFQUF5QixLQUFLL0IsS0FBOUIsQ0FGRCxDQUREO0FBTUE7QUFUK0IsQ0FBbEIsQ0FBZjtBQVlBZ0MsUUFBUSxDQUFDQyxJQUFULEdBQWdCaEQsbUJBQU8sQ0FBQyx5Q0FBRCxDQUF2QjtBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI0QyxRQUFqQixDOzs7Ozs7Ozs7OztBQ2pCQSxJQUFJakQsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0I7QUFDbENDLGFBQVcsRUFBQyxnQkFEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOMkMsYUFBTyxFQUFFLEtBREg7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FBUDtBQUlBLEdBUGlDO0FBUWxDQyxXQUFTLEVBQUUsbUJBQVV2QixLQUFWLEVBQWdCO0FBQzFCLFNBQUtiLEtBQUwsQ0FBV3FDLE9BQVgsSUFBc0IsS0FBS3JDLEtBQUwsQ0FBV3FDLE9BQVgsQ0FBbUJ4QixLQUFuQixFQUEwQixJQUExQixDQUF0QjtBQUNBLEdBVmlDO0FBV2xDZSxRQUFNLEVBQUUsa0JBQVU7QUFDakIsd0JBQ0M7QUFBSyxXQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBVzZCLEtBQXZCO0FBQThCLGVBQVMsRUFBRTdDLElBQUksQ0FBQzBDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixtQkFBckIsRUFBMEMsS0FBSzNCLEtBQUwsQ0FBVzhCLFNBQXJELENBQXpDO0FBQ0Msc0JBQWMsS0FBSzlCLEtBQUwsQ0FBV2tDLE9BRDFCO0FBRUMsdUJBQWUsS0FBS2xDLEtBQUwsQ0FBV21DLFFBRjNCO0FBR0MsYUFBTyxFQUFFLEtBQUtDO0FBSGYsT0FJRSxLQUFLcEMsS0FBTCxDQUFXK0IsUUFKYixDQUREO0FBUUE7QUFwQmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkE1QyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixVQUFRSCxtQkFBTyxDQUFDLHlCQUFELENBREY7QUFFYixjQUFZQSxtQkFBTyxDQUFDLGlDQUFELENBRk47QUFHYixrQkFBZ0JBLG1CQUFPLENBQUMseUNBQUQ7QUFIVixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMaXN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0TW9kZTogJ3NpbmdsZScsIC8vIHNpbmdsZSwgbXVsdGlwbGUsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RNb2RlID09ICdzaW5nbGUnKXtcblx0XHRcdFx0X3ZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdmFsdWUgPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RNb2RlID09ICdzaW5nbGUnKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX3ZhbHVlO1xuXHRcdH0gZWxzZSBpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0cmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1saXN0LWl0ZW0nLCAodGhpcy5fX2lzQ2hlY2tlZChpdGVtLCBpbmRleCk/J2NoZWNrZWQnOicnKSl9IG9uQ2xpY2s9eyhldmVudCk9Pntcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRcdFx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdFx0XHRcdHRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGluZGV4KVxuXHRcdFx0XHR9fT5cblx0XHRcdHtfcmV0dXJufVxuXHRcdDwvbGk+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWxpc3QgenItbGlzdC1zdHlsZS1mbGV4LXJvd1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbnZhciBMaXN0VmlldyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdFZpZXcnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1saXN0LXZpZXdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbkxpc3RWaWV3Lkl0ZW0gPSByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RWaWV3O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGlzdFZpZXdJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1saXN0LXZpZXctaXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdMaXN0JzogcmVxdWlyZSgnLi9MaXN0JyksXG4gICAgJ0xpc3RWaWV3JzogcmVxdWlyZSgnLi9MaXN0VmlldycpLFxuICAgICdMaXN0Vmlld0l0ZW0nOiByZXF1aXJlKCcuL0xpc3RWaWV3SXRlbScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==