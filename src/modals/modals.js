import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModalBook, closeModalMobile } from "../redux/modals/modal-slice";
import MobileModal from "./mobileModal/mobileModal";
import { BackdropStyle } from "./modals.styled";
import ModalBook from "./modalBook/modalBook";

const modalRoot = document.querySelector("#modal-root");

export default function Modals() {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenBook = useSelector((state) => state.modal.isModalOpenBook);

  const handleClickClose = useCallback(() => {
    dispatch(closeModalMobile());
    dispatch(closeModalBook());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [isMobileModalOpen, isModalOpenBook, handleClickClose, dispatch]);
  return createPortal(
    <>
      {(isMobileModalOpen || isModalOpenBook) && (
        <BackdropStyle onClick={handleBackdropClick}>
          {isMobileModalOpen && (
            <MobileModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenBook && <ModalBook handleClickClose={handleClickClose} />}
        </BackdropStyle>
      )}
      {/* {isModalOpenClickWord && (
        <BackdropClickWord onClick={handleBackdropClick}>
          <ClickWord handleClickClose={handleClickClose} />
        </BackdropClickWord>
      )} */}
    </>,
    modalRoot
  );
}
