"use strict";

var React = znui.React || require('react');

var loader = require('znui-react-loader');

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