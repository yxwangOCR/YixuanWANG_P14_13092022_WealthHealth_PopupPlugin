'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Popup = props => {
  return props.trigger ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "popup"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "popup-inner"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "close-btn",
    onClick: () => props.setTrigger(false)
  }, "X"), props.children)) : "";
};

exports.Popup = Popup;
