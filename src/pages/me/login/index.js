import { Forms, Mainlayouts } from "@/components";
import React, { useState } from "react";
import { LoginContainer } from "./styled";
import { useRouter } from "next/router";
import { setReduxAuthen } from "@/store/reducers/authenReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const [_userData, _setUserData] = useState();
  const [_otpStep, _setOtpStep] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const _handleSubmit = (value) => {
    if (value.email) {
      router.push("/");
    } else {
      _setUserData({ ...value });
      _setOtpStep(true);
    }
  };

  const _handleSubmitOtpLogin = () => {
    dispatch(
      setReduxAuthen({
        phone: _userData.phone,
        name: "ธนูธวย คงควรคอย",
        email: "test@mail.com",
      })
    );

    router.push("/");
  };

  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <LoginContainer>
        {!_otpStep && <Forms.LoginForm onSubmit={_handleSubmit} />}
        {_otpStep && <Forms.OTPLoginForm onSubmit={_handleSubmitOtpLogin} />}
      </LoginContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default Login;
