import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import { BodyEmptyStyled } from "./styled";
import { Icons } from "@/components";
import cx from "classnames";

const BodyEmpty = ({
  isShowModal,
  isCloseBtn,
  onCloseModal,
  children,
  isForceAction,
  theme_standard,
  theme_btm0,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_btm0: theme_btm0,
  });

  useEffect(() => {
    if (isShowModal) {
      _handleClickEnbModal();
    } else {
      _handleClickDisModal();
    }
  }, [isShowModal]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleClickEnbModal = () => {};

  const _handleClickDisModal = () => {
    if (!isForceAction) {
      onCloseModal && onCloseModal();
    }
  };

  return !isShowModal ? (
    <></>
  ) : (
    <BodyEmptyStyled className={customClass}>
      <div className="backdrop" onClick={_handleClickDisModal} />
      <div className="modal_body_layout">
        {isCloseBtn && (
          <div className="btn_close_modal" onClick={onCloseModal}>
            <Icons.Close />
          </div>
        )}
        {children}
      </div>
    </BodyEmptyStyled>
  );
};

BodyEmpty.propTypes = {};

export default BodyEmpty;
