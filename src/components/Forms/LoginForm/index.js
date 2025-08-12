import React, { useState } from "react";
import { LoginFormStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";
import { Buttons, Inputs } from "@/components";
import Image from "next/image";

const LoginForm = ({ onSubmit }) => {
  const [_step, _setStap] = useState(1);

  const schema =
    _step !== 1
      ? yup.object().shape({
          username: yup.string().required("New password is required"),
          password: yup.string().required("New password is required"),
        })
      : yup.object().shape({
          phone: yup
            .string()
            .required("กรุณากรอกเบอร์โทรศัพท์")
            .test("is-valid-phone", "เบอร์โทรศัพท์ไม่ถูกต้อง", (value) => {
              if (!value) return false;
              const digits = value.replace(/\D/g, "");
              return digits.length === 10;
            }),
        });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <LoginFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title_wrap">
          <div className="image_wrap">
            <Image src={"/images/icons/logo.png"} alt="" fill />
          </div>
          <h2 className="title">คุ้ม ปลอดภัย เข้าทันที ทุกเครือข่าย</h2>
        </div>
        {_step === 1 ? (
          <div className="otp_login_wrap">
            <div className="input_wrap mb_62">
              <Controller
                control={control}
                render={({ field }) => (
                  <Inputs.PhoneField
                    {...field}
                    placeholder="_ _ _ - _ _ _ - _ _ _ _"
                    errors={errors.phone?.message}
                  />
                )}
                name="phone"
                defaultValue=""
              />
            </div>
            <div className="filter_wrap">
              <div className="btn_wrap">
                <button className={`filter_btn ${_step !== 1 && "active"}`}>
                  รหัสผ่าน
                </button>
                <button className={`filter_btn ${_step === 1 && "active"}`}>
                  OTP
                </button>
              </div>
            </div>
            <div className="btn_wrap">
              <Buttons.BgStandard
                theme_grow_pink
                type="submit"
                className="btn_submit"
                label={"รับรหัส OTP"}
              />
            </div>
          </div>
        ) : (
          <div className="email_login_wrap">
            <div className="input_group">
              <label className="label">Username</label>
              <Controller
                control={control}
                render={({ field }) => (
                  <input {...field} placeholder="Username" />
                )}
                name="username"
                defaultValue=""
              />
            </div>
            <div className="input_group">
              <label className="label">Password</label>
              <div className="password_input">
                <Controller
                  control={control}
                  render={({ field }) => (
                    <input {...field} type="password" placeholder="Password" />
                  )}
                  name="password"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="check_group">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <button
              type="submit"
              className="btn_submit"
              disabled={isSubmitting || !isValid}
            >
              Login
            </button>
          </div>
        )}
      </form>
    </LoginFormStyled>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
