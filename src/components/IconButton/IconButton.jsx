/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsSettings24Px } from "../../icons/IconsSettings24Px";
import "./style.css";

export const IconButton = ({
  style,
  stateProp,
  icon = <IconsSettings24Px className="icons-settings-24px" color="#49454F" />,
  className,
  containerClassName,
  hasStateLayer = true,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    state: stateProp || "disabled",
  });

  return (
    <div
      className={`icon-button state-1-${state.state} style-1-${state.style} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`container ${containerClassName}`}>
        {hasStateLayer && <div className="icon-wrapper">{icon}</div>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

IconButton.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined", "tonal", "standard"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  hasStateLayer: PropTypes.bool,
};
