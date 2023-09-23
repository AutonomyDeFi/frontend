/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon18 } from "../../icons/Icon18";
import { Icon9 } from "../../icons/Icon9";
import "./style.css";

export const Button = ({ labelText = "Label", style, stateProp, showIcon, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "tonal",
    state: stateProp || "disabled",
    showIcon: showIcon || true,
  });

  return (
    <button
      className={`button ${state.style} ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`state-layer state-${state.state} style-${state.style} show-icon-${state.showIcon}`}>
        {((state.showIcon && state.state === "disabled" && state.style === "elevated") ||
          (state.showIcon && state.state === "disabled" && state.style === "text") ||
          (state.showIcon && state.state === "disabled" && state.style === "tonal") ||
          (state.showIcon && state.state === "enabled") ||
          (state.showIcon && state.state === "focused") ||
          (state.showIcon && state.state === "hovered") ||
          (state.showIcon && state.state === "pressed")) && (
          <Icon9
            className="instance-node"
            color={
              state.state === "disabled"
                ? "#1D1B20"
                : (state.state === "enabled" && state.style === "tonal") ||
                  (state.state === "focused" && state.style === "tonal") ||
                  (state.state === "hovered" && state.style === "tonal") ||
                  (state.state === "pressed" && state.style === "tonal")
                ? "#1D192B"
                : state.style === "filled"
                ? "white"
                : "#6750A4"
            }
            opacity={state.state === "disabled" ? "0.38" : undefined}
          />
        )}

        {state.showIcon && state.state === "disabled" && ["filled", "outlined"].includes(state.style) && (
          <Icon18 className="instance-node" />
        )}

        <div className="text-wrapper">{labelText}</div>
      </div>
    </button>
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

Button.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["filled", "tonal", "elevated", "text", "outlined"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  showIcon: PropTypes.bool,
};
