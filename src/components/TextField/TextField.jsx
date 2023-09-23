/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon29 } from "../../icons/Icon29";
import { Icon44 } from "../../icons/Icon44";
import { Icon46 } from "../../icons/Icon46";
import { IconButton } from "../IconButton";
import "./style.css";

export const TextField = ({
  inputText = "Input",
  supportingText = "Supporting text",
  labelText = "Label",
  placeholderText = "Placeholder",
  showSupportingText = true,
  style,
  stateProp,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  textFieldClassName,
  iconButtonIcon = <Icon44 className="icon-2" color="#49454F" />,
  hasLabelText = true,
  activeIndicator = "/img/active-indicator.svg",
  inputType = "text",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    state: stateProp || "disabled",
    textConfigurations: textConfigurations || "placeholder-text",
    leadingIcon: leadingIcon || true,
    trailingIcon: trailingIcon || false,
  });

  return (
    <div
      className={`text-field state-3-${state.state} style-4-${state.style} ${state.textConfigurations} leading-icon-${state.leadingIcon} trailing-icon-${state.trailingIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.style === "outlined" && (
        <div
          className={`state-layer-wrapper ${
            state.state === "disabled" && state.textConfigurations === "placeholder-text"
              ? textFieldClassName
              : undefined
          }`}
        >
          <div className="div">
            {state.leadingIcon && (
              <IconButton
                className={`${state.state === "disabled" && "class"}`}
                icon={
                  <Icon29
                    className="icon-2"
                    color={
                      state.state === "disabled"
                        ? "#1D1B20"
                        : ["enabled", "error", "focused", "hovered"].includes(state.state)
                        ? "#49454F"
                        : undefined
                    }
                  />
                }
                stateProp="enabled"
                style="standard"
              />
            )}

            <div className="content">
              {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                (state.state === "disabled" && state.textConfigurations === "placeholder-text") ||
                (state.state === "enabled" && state.textConfigurations === "input-text") ||
                (state.state === "enabled" && state.textConfigurations === "placeholder-text") ||
                (state.state === "error" && state.textConfigurations === "input-text") ||
                (state.state === "error" && state.textConfigurations === "placeholder-text") ||
                state.state === "focused" ||
                (state.state === "hovered" && state.textConfigurations === "input-text") ||
                (state.state === "hovered" && state.textConfigurations === "placeholder-text")) && (
                <div className="placeholder-text-2">
                  {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                    (state.state === "enabled" && state.textConfigurations === "input-text") ||
                    (state.state === "hovered" && state.textConfigurations === "input-text") ||
                    state.textConfigurations === "placeholder-text") && (
                    <div className="placeholder-text-3">
                      {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}

                      {state.textConfigurations === "input-text" && <>{inputText}</>}
                    </div>
                  )}

                  {state.textConfigurations === "label-text" && (
                    <img className="caret" alt="Caret" src="/img/caret.svg" />
                  )}

                  {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                    <>
                      <input className="input" placeholder={inputText} type={inputType} />
                      <img
                        className="img"
                        alt="Caret"
                        src={state.state === "focused" ? "/img/caret.svg" : "/img/caret-1.svg"}
                      />
                    </>
                  )}
                </div>
              )}

              {((!state.leadingIcon &&
                state.state === "disabled" &&
                state.textConfigurations === "placeholder-text" &&
                !state.trailingIcon) ||
                (!state.leadingIcon && state.state === "focused" && state.textConfigurations === "label-text") ||
                (!state.leadingIcon && state.state === "focused" && state.textConfigurations === "placeholder-text") ||
                (!state.leadingIcon && state.textConfigurations === "input-text") ||
                (state.leadingIcon && state.state === "disabled" && state.textConfigurations === "input-text") ||
                (state.leadingIcon && state.state === "disabled" && state.textConfigurations === "placeholder-text") ||
                (state.leadingIcon && state.state === "enabled" && state.textConfigurations === "input-text") ||
                (state.leadingIcon && state.state === "error" && state.textConfigurations === "input-text") ||
                (state.leadingIcon && state.state === "focused") ||
                (state.leadingIcon && state.state === "hovered" && state.textConfigurations === "input-text") ||
                (state.state === "enabled" && state.textConfigurations === "placeholder-text") ||
                (state.state === "error" && state.textConfigurations === "placeholder-text") ||
                (state.state === "hovered" && state.textConfigurations === "placeholder-text")) && (
                <div className="label-text-wrapper">
                  <div className="label-text-2">{labelText}</div>
                </div>
              )}

              {((state.state === "disabled" && state.textConfigurations === "label-text") ||
                (state.state === "enabled" && state.textConfigurations === "label-text") ||
                (state.state === "error" && state.textConfigurations === "label-text") ||
                (state.state === "hovered" && state.textConfigurations === "label-text")) && (
                <div className="div-wrapper">
                  <div className="label-text-3">{labelText}</div>
                </div>
              )}

              {state.textConfigurations === "placeholder-text" &&
                state.trailingIcon &&
                state.state === "disabled" &&
                !state.leadingIcon && (
                  <>
                    <>
                      {hasLabelText && (
                        <div className="label-text-4">
                          <div className="label-text-5">{labelText}</div>
                        </div>
                      )}
                    </>
                  </>
                )}
            </div>
            {state.trailingIcon && state.leadingIcon && (
              <IconButton
                className={`${state.state === "disabled" && "class"}`}
                icon={
                  state.state === "error" ? (
                    <Icon46 className="icon-2" />
                  ) : (
                    <Icon44
                      className="icon-2"
                      color={
                        state.state === "disabled"
                          ? "#1D1B20"
                          : ["enabled", "focused", "hovered"].includes(state.state)
                          ? "#49454F"
                          : undefined
                      }
                    />
                  )
                }
                stateProp="enabled"
                style="standard"
              />
            )}

            {state.trailingIcon && !state.leadingIcon && (
              <IconButton
                className={`${state.state === "disabled" && "class"}`}
                icon={
                  state.state === "error" ? (
                    <Icon46 className="icon-2" />
                  ) : (
                    <Icon44
                      className="icon-2"
                      color={
                        ["enabled", "focused", "hovered"].includes(state.state)
                          ? "#49454F"
                          : state.state === "disabled"
                          ? "#1D1B20"
                          : undefined
                      }
                    />
                  )
                }
                stateProp="enabled"
                style="standard"
              />
            )}
          </div>
        </div>
      )}

      {state.style === "filled" && state.state === "disabled" && (
        <>
          <div className="disabled-sate-color" />
          <div className="state-layer-wrapper-2">
            <div className="state-layer-2">
              {state.leadingIcon && (
                <IconButton icon={<Icon29 className="icon-2" color="#1D1B20" />} stateProp="enabled" style="standard" />
              )}

              <div className="content">
                <div className="div-wrapper">
                  <div className="label-text-6">{labelText}</div>
                </div>
                {["input-text", "placeholder-text"].includes(state.textConfigurations) && (
                  <div className="placeholder-text-wrapper">
                    <div className="placeholder-text-4">
                      {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}

                      {state.textConfigurations === "input-text" && <>{inputText}</>}
                    </div>
                  </div>
                )}
              </div>
              {state.trailingIcon && (
                <IconButton icon={<Icon44 className="icon-2" color="#1D1B20" />} stateProp="enabled" style="standard" />
              )}
            </div>
          </div>
          <img className="active-indicator" alt="Active indicator" src="/img/active-indicator-3.svg" />
        </>
      )}

      {(state.style === "outlined" || (state.state === "disabled" && state.style === "filled")) && (
        <>
          <>
            {showSupportingText && (
              <div className="supporting-text">
                <div className="supporting-text-2">{supportingText}</div>
              </div>
            )}
          </>
        </>
      )}

      {((state.state === "enabled" && state.style === "filled") ||
        (state.state === "error" && state.style === "filled") ||
        (state.state === "focused" && state.style === "filled") ||
        (state.state === "hovered" && state.style === "filled")) && (
        <>
          <div className={`state-layer-wrapper-3 ${textFieldClassName}`}>
            <div className="state-layer-3">
              {state.leadingIcon && (
                <IconButton icon={<Icon29 className="icon-2" color="#49454F" />} stateProp="enabled" style="standard" />
              )}

              <div className="content">
                <div className="div-wrapper">
                  <div className="label-text-7">{labelText}</div>
                </div>
                {((!state.leadingIcon &&
                  state.state === "enabled" &&
                  state.textConfigurations === "input-text" &&
                  !state.trailingIcon) ||
                  (!state.leadingIcon &&
                    state.state === "error" &&
                    state.textConfigurations === "input-text" &&
                    !state.trailingIcon) ||
                  (!state.leadingIcon &&
                    state.state === "error" &&
                    state.textConfigurations === "placeholder-text" &&
                    !state.trailingIcon) ||
                  (!state.leadingIcon &&
                    state.state === "hovered" &&
                    state.textConfigurations === "input-text" &&
                    !state.trailingIcon) ||
                  (state.leadingIcon && state.state === "enabled" && state.textConfigurations === "input-text") ||
                  (state.leadingIcon &&
                    state.state === "enabled" &&
                    state.textConfigurations === "placeholder-text" &&
                    state.trailingIcon) ||
                  (state.leadingIcon && state.state === "error" && state.textConfigurations === "input-text") ||
                  (state.leadingIcon && state.state === "error" && state.textConfigurations === "placeholder-text") ||
                  (state.leadingIcon && state.state === "focused" && state.trailingIcon) ||
                  (state.leadingIcon && state.state === "hovered" && state.textConfigurations === "input-text") ||
                  (state.leadingIcon &&
                    state.state === "hovered" &&
                    state.textConfigurations === "placeholder-text" &&
                    state.trailingIcon) ||
                  (state.state === "enabled" &&
                    state.textConfigurations === "placeholder-text" &&
                    !state.trailingIcon) ||
                  (state.state === "focused" && !state.trailingIcon) ||
                  (state.state === "hovered" &&
                    state.textConfigurations === "placeholder-text" &&
                    !state.trailingIcon)) && (
                  <div className="placeholder-text-5">
                    {["input-text", "placeholder-text"].includes(state.textConfigurations) && (
                      <div className="input-text-2">
                        {state.textConfigurations === "input-text" && <>{inputText}</>}

                        {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}
                      </div>
                    )}

                    {state.textConfigurations === "label-text" && (
                      <img className="caret-2" alt="Caret" src="/img/caret.svg" />
                    )}

                    {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                      <img
                        className="img"
                        alt="Caret"
                        src={state.state === "focused" ? "/img/caret.svg" : "/img/caret-1.svg"}
                      />
                    )}
                  </div>
                )}

                {((!state.leadingIcon &&
                  state.state === "focused" &&
                  state.textConfigurations === "label-text" &&
                  state.trailingIcon) ||
                  (!state.leadingIcon && state.textConfigurations === "input-text" && state.trailingIcon) ||
                  (!state.leadingIcon && state.textConfigurations === "placeholder-text" && state.trailingIcon)) && (
                  <>
                    <>
                      {hasLabelText && (
                        <div className="placeholder-text-6">
                          {["input-text", "placeholder-text"].includes(state.textConfigurations) && (
                            <div className="input-text-3">
                              {state.textConfigurations === "input-text" && <>{inputText}</>}

                              {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}
                            </div>
                          )}

                          {state.textConfigurations === "label-text" && (
                            <img className="caret-2" alt="Caret" src="/img/caret.svg" />
                          )}

                          {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                            <img
                              className="img"
                              alt="Caret"
                              src={state.state === "focused" ? "/img/caret.svg" : "/img/caret-1.svg"}
                            />
                          )}
                        </div>
                      )}
                    </>
                  </>
                )}
              </div>
              {state.trailingIcon && state.leadingIcon && (
                <IconButton
                  icon={
                    state.state === "error" ? (
                      <Icon46 className="icon-2" />
                    ) : (
                      <Icon44 className="icon-2" color="#49454F" />
                    )
                  }
                  stateProp="enabled"
                  style="standard"
                />
              )}

              {state.trailingIcon && !state.leadingIcon && (
                <IconButton icon={iconButtonIcon} stateProp="enabled" style="standard" />
              )}
            </div>
          </div>
          <img
            className="active-indicator-2"
            alt="Active indicator"
            src={
              state.state === "error"
                ? "/img/active-indicator-4.svg"
                : state.state === "hovered" ||
                  (state.leadingIcon &&
                    !state.trailingIcon &&
                    state.state === "enabled" &&
                    state.textConfigurations === "label-text")
                ? "/img/active-indicator-5.svg"
                : state.state === "focused"
                ? "/img/active-indicator-6.svg"
                : activeIndicator
            }
          />
          <>
            {showSupportingText && (
              <div className="supporting-text-wrapper">
                <div className="supporting-text-3">{supportingText}</div>
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "filled" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "filled",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        state: "focused",
      };
  }

  return state;
}

TextField.propTypes = {
  inputText: PropTypes.string,
  supportingText: PropTypes.string,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  showSupportingText: PropTypes.bool,
  style: PropTypes.oneOf(["filled", "outlined"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  hasLabelText: PropTypes.bool,
  activeIndicator: PropTypes.string,
  inputType: PropTypes.string,
};
