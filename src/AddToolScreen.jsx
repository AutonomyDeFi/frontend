import React from "react";
import { Button } from "./components/Button";
import { Chip } from "./components/Chip";
import { Icon } from "./components/Icon";
import { TextField } from "./components/TextField";
import { Arrowdropupfilled } from "./icons/Arrowdropupfilled";
import { Closefilled } from "./icons/Closefilled";
import { Icon44 } from "./icons/Icon44";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="div-2">
       
        <TextField
          className="text-field-instance"
          iconButtonIcon={<Icon44 className="icon-44" color="#49454F" />}
          inputText="Enter"
          labelText="Model Name"
          leadingIcon={false}
          showSupportingText={false}
          stateProp="enabled"
          style="filled"
          textConfigurations="input-text"
          textFieldClassName="text-field-2"
          trailingIcon
        />
        <TextField
          className="text-field-3"
          iconButtonIcon={<Icon44 className="icon-44" color="#49454F" />}
          inputText="Enter"
          labelText="Owner Name"
          leadingIcon={false}
          showSupportingText={false}
          stateProp="enabled"
          style="filled"
          textConfigurations="input-text"
          textFieldClassName="text-field-2"
          trailingIcon
        />
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <TextField
              activeIndicator="/img/active-indicator-2.svg"
              className="text-field-4"
              hasLabelText={false}
              iconButtonIcon={<Icon44 className="icon-44" color="#49454F" />}
              labelText="Description"
              leadingIcon={false}
              showSupportingText={false}
              stateProp="enabled"
              style="filled"
              textConfigurations="input-text"
              textFieldClassName="text-field-5"
              trailingIcon
            />
            <div className="text-wrapper-4">Enter</div>
          </div>
        </div>
        <div className="autocomplete">
          <div className="select">
            <div className="input-2">
              <div className="container-2">
                <div className="autocomplete-tag">
                  <Chip
                    className="chip-instance"
                    color="default"
                    label="Chip"
                    size="small"
                    state="enabled"
                    variant="filled"
                  />
                  <Chip
                    className="chip-instance"
                    color="default"
                    label="Chip"
                    size="small"
                    state="enabled"
                    variant="filled"
                  />
                </div>
                <div className="min-height" />
                <div className="text-wrapper-5">Search</div>
                <div className="min-width" />
                <Arrowdropupfilled className="arrow-drop-up-filled" />
                <Icon className="autocomplete-close" icon={<Closefilled className="close-filled" />} size="small" />
              </div>
              <div className="label-container">
                <div className="text-wrapper-6">Tools</div>
              </div>
            </div>
          </div>
        </div>
        <Button className="button-2" labelText="Create model" showIcon={false} stateProp="hovered" style="outlined" />
        <div className="content-container">
          <header className="header">
            <div className="content-2">
              <div className="text">
                <div className="header-2">Create Your Own Model</div>
                <div className="subhead">Join the community.</div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
export default MacbookAir;