import React, { useState } from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { OtpFieldStyled } from "./styled";
import OtpInput from "react-otp-input";

const OtpField = ({
  theme_standard,
  label,
  disabled,
  errors,
  onChange,
  onChangeCus,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [_otp, _setOtp] = useState("");

  const _onChange = (e) => {
    if (!disabled) {
      _setOtp(e);
      if (e && e.length === 6) {
        onChange && onChange(e);
        onChangeCus && onChangeCus(e);
      } else {
        onChange("");
        onChangeCus && onChangeCus("");
      }
    } else {
      _setOtp("");
    }
  };
  return (
    <OtpFieldStyled disabled={disabled} isErr={errors}>
      <div className={`otp_input_container ${customClass}`}>
        {label && <div className="label">{label}</div>}
        <OtpInput
          containerStyle="otp_input"
          inputStyle={"input_item"}
          value={_otp}
          onChange={_onChange}
          numInputs={6}
          isDisabled={disabled}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        {errors && <div className="errors">{errors}</div>}
      </div>
    </OtpFieldStyled>
  );
};

export default OtpField;
