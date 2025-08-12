import React, { useState, useEffect } from "react";
import { OTPVerifyFormStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";
import { Buttons, Icons, Inputs } from "@/components";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const MOCK_OTP = "123456"; // กำหนด OTP mockup

const OTPVerifyForm = ({ onSubmit, phoneNumber, onPdpa }) => {
  const schema = yup.object().shape({
    otp: yup.string().required("OTP is required"),
    is_accept: yup.boolean().oneOf([true], "กรุณายอมรับข้อกำหนดและเงื่อนไข"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation(["common", "form"]);

  const [_resendBtnDisabled, _setResendBtnDisabled] = useState(true);
  const [_isOTPVerify, _setIsOTPVerify] = useState(false);
  const [_isCaptchaChecked, _setIsCaptchaChecked] = useState(false);

  // เริ่มต้นด้วยการขอ OTP mock
  useEffect(() => {
    _requestMockOTP();
  }, []);

  const _requestMockOTP = () => {
    toast.success(`รหัส OTP ถูกส่งแล้ว: mockup ${MOCK_OTP}`);
    _setResendBtnDisabled(true);
  };

  const _onCompleteCoutdownOTP = () => {
    _setResendBtnDisabled(false);
  };

  const _onClickResendOTP = () => {
    _requestMockOTP();
  };

  const _handleVerifyOTP = (val) => {
    if (val.length === 6) {
      if (val === MOCK_OTP) {
        _setIsOTPVerify(true);
        toast.success("OTP ถูกต้อง");
      } else {
        _setIsOTPVerify(false);
        toast.error("OTP ไม่ถูกต้อง");
      }
    } else {
      _setIsOTPVerify(false);
    }
  };

  const _handleCaptchaChange = () => {
    _setIsCaptchaChecked(true);
  };

  return (
    <OTPVerifyFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">ยืนยันตัวตนด้วยรหัส OTP</div>
        <div className="sub_title">
          กรุณาใส่รหัส OTP ที่ถูกส่งไปยังหมายเลข
          <br />
          {phoneNumber}
          <br />
          ทางกล่องข้อความ
        </div>
        <div className="sub_title">รหัสอ้างอิง: kVSqX</div>
        {_resendBtnDisabled && (
          <Countdown
            date={Date.now() + 30000} // 30 วิ
            renderer={({ minutes, seconds }) => (
              <div className="count_down_label">
                <Icons.Clock />
                {` 0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
              </div>
            )}
            onComplete={_onCompleteCoutdownOTP}
          />
        )}

        <div className="input_wrap">
          <Controller
            control={control}
            name="otp"
            defaultValue=""
            render={({ field }) => (
              <Inputs.OtpField
                {...field}
                // label="OTP"
                disabled={false}
                onChangeCus={_handleVerifyOTP}
                errors={errors.otp?.message}
              />
            )}
          />
        </div>
        <div className="req_again">
          {!_resendBtnDisabled && (
            <>
              <div className="req_title">ขอรหัส OTP ใหม่</div>
              <div className="req_btn_wrap">
                <Buttons.BgStandard
                  theme_grow_pink
                  label={"ขอรหัส OTP ใหม่"}
                  onClick={_onClickResendOTP}
                />
              </div>
            </>
          )}
        </div>
        <div className="input_wrap checkbox">
          <Controller
            control={control}
            render={({ field }) => (
              <Inputs.Checkbox
                {...field}
                label={
                  <div
                    style={{
                      color: `${!_isOTPVerify ? "#B0B0B0" : "#fff"}`,
                      width: "100%",
                    }}
                  >
                    การดำเนินการต่อหมายถึง คุณยอมรับ{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        color: `${!_isOTPVerify ? "#B0B0B0" : "#02FFFF"}`,
                      }}
                      onClick={onPdpa}
                    >
                      ข้อกำหนดและเงื่อนไข
                    </span>{" "}
                    และนโยบายความเป็นส่วนตัว ของเรา
                  </div>
                }
                disabled={!_isOTPVerify}
                onClickLink={() => {}}
                errors={errors.is_accept?.message}
              />
            )}
            name="is_accept"
            defaultValue={false}
          />
        </div>
        <div className="capcha_wrap">
          <ReCAPTCHA
            sitekey="6Lfn9qMrAAAAAGaD_bsZFhfMTpoC__8MxbCwqUGe"
            onChange={_handleCaptchaChange}
            onExpired={() => _setIsCaptchaChecked(false)}
          />
        </div>
        <Buttons.BgStandard
          theme_grow_pink
          type="submit"
          label={t("Create account", { ns: "common" })}
          disabled={
            isSubmitting || !isValid || !_isOTPVerify || !_isCaptchaChecked
          }
        />
      </form>
    </OTPVerifyFormStyled>
  );
};

export default OTPVerifyForm;
