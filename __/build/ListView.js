"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var loader = require('znui-react-loader');

var ListView = React.createClass({
  displayName: 'ZRListView',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", _extends({}, this.props, {
      className: znui.react.classname("zr-list-view", this.props.className)
    }), this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, this.props));
  }
});
ListView.Item = require('./ListViewItem');
module.exports = ListView;