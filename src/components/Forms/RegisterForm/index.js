import React from "react";
import { RegisterFormStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Buttons, Inputs } from "@/components";

const RegisterForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
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
    <RegisterFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">กรอกเบอร์โทรศัพท์ของคุณ</h2>
        <div className="sub_title">
          คุณจะได้รับรหัส OTP เพื่อยืนยันตัวตนผ่านเบอร์โทรศัพท์นี้
        </div>
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
        <div className="btn_wrap">
          <Buttons.BgStandard
            theme_grow_pink
            type="submit"
            className="btn_submit"
            label={"รับรหัส OTP"}
          />
        </div>
      </form>
    </RegisterFormStyled>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
