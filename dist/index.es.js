import React from 'react';

const Popup = props => {
  return props.trigger ? /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "popup-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: () => props.setTrigger(false)
  }, "X"), props.children)) : "";
};

export { Popup };
