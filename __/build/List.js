"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

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