/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon9 = ({ color = "#6750A4", opacity = "unset", className }) => {
  return (
    <svg
      className={`icon-9 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

Icon9.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
