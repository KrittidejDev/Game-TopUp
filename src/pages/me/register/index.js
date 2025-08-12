import React, { useState } from "react";
import { RegisterPageContainer } from "./styled";
import { Forms, Mainlayouts } from "@/components";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setReduxAuthen } from "@/store/reducers/authenReducer";

const RegisterPage = () => {
  const [_step, _setStep] = useState(1);
  const [_phone, _setPhone] = useState();

  const router = useRouter();
  const dispatch = useDispatch();

  const _handleSubmitOTPReq = (data) => {
    _setPhone(data.phone);
    _setStep(2);
  };

  const _handleClickPdpa = () => {};

  const _handleSubmitRegister = () => {
    dispatch(
      setReduxAuthen({
        phone: _phone,
        name: "ธนูธวย คงควรคอย",
        email: "test@mail.com",
      })
    );

    router.push("/");
  };

  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <RegisterPageContainer>
        {_step === 1 && <Forms.RegisterForm onSubmit={_handleSubmitOTPReq} />}
        {_step === 2 && (
          <Forms.OTPVerifyForm
            phoneNumber={_phone}
            onPdpa={_handleClickPdpa}
            onSubmit={_handleSubmitRegister}
          />
        )}
      </RegisterPageContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default RegisterPage;
