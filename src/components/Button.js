import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};
