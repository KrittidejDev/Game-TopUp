import { useState } from "react";
import { CheckboxContainer } from "./styled";
import cx from "classnames";
import { Icons } from "@/components";

const Checkbox = ({
  theme_standard,
  label,
  linkLabel,
  value,
  onChange,
  onClickLink,
  errors,
  iconColor = "#FFF",
  disabled,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const _onChange = () => {
    if (disabled) return;
    onChange(value ? false : true);
  };

  return (
    <CheckboxContainer className={customClass}>
      <div className="checkbox_container">
        <div onClick={_onChange}>
          {value ? (
            <Icons.Checkbox isActive color={iconColor} />
          ) : (
            <Icons.Checkbox color={disabled ? "#B0B0B0" : iconColor} />
          )}
        </div>
        <div className="checkbox_label">
          <span onClick={_onChange}>{label}</span>
          {linkLabel ? (
            <span className="cb_link" onClick={onClickLink}>
              {linkLabel}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {errors && <div className="errors">{errors}</div>}
    </CheckboxContainer>
  );
};

export default Checkbox;
