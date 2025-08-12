import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { PhoneFieldStyled } from "./styled";

const PhoneField = ({
  theme_standard,
  label,
  disabled,
  errors,
  value,
  require,
  onChangeCus,
  onChange,
  ...props
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <PhoneFieldStyled
      className={customClass}
      disabled={disabled}
      isError={errors ? true : false}
    >
      {label && (
        <div className="label">
          {label} {require && <span>*</span>}
        </div>
      )}
      <input
        {...props}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value);
          onChangeCus && onChangeCus(e.target.value);
        }}
      />
      {errors && <div className="errors">{errors}</div>}
    </PhoneFieldStyled>
  );
};

PhoneField.propTypes = {};

export default PhoneField;
