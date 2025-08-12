import { MemberLoggedWidgetStyled } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Icons } from "@/components";
import { useRouter } from "next/router";
import { useComponentVisible } from "@/utils/functions/detectClickOutside";
import { setLogoutThunk } from "@/store/reduxThunks/logoutThunk";

const MemberLoggedWidget = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const authenRedux = useSelector((state) => state.authenRedux);

  const _handleClickOpenMenu = () => {
    setIsComponentVisible(true);
  };

  const _handleClickLogout = async () => {
    setIsComponentVisible(false);
    let res = await dispatch(setLogoutThunk());
    if (res && res.payload) {
      toast.success("ออกจากระบบสำเร็จ");
      router.push("/");
    }
  };

  const _handleLogin = () => {
    router.push("/me/login");
  };

  return (
    <MemberLoggedWidgetStyled
      ref={ref}
      onClick={authenRedux ? _handleClickOpenMenu : _handleLogin}
    >
      <div className="mbl_left_col">
        <Icons.Avatar />
      </div>
      <div className="mbl_right_col">
        <div className="name_label">
          {authenRedux ? authenRedux.name : "Login/Register"}
        </div>
      </div>
      {isComponentVisible && (
        <div className="btn_logout" onClick={_handleClickLogout}>
          Logout
        </div>
      )}
    </MemberLoggedWidgetStyled>
  );
};

export default MemberLoggedWidget;
