import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModalBook, closeModalFinishRead, closeModalMobile } from "../redux/modals/modal-slice";
import MobileModal from "./mobileModal/mobileModal";
import { BackdropStyle } from "./modals.styled";
import ModalBook from "./modalBook/modalBook";
import ModalFinishRead from "./modalFinishRead/modalFinishRead";

const modalRoot = document.querySelector("#modal-root");

export default function Modals() {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenBook = useSelector((state) => state.modal.isModalOpenBook);
  const isModalOpenFinishRead = useSelector((state)=>state.modal.isModalOpenFinishRead)

  const handleClickClose = useCallback(() => {
    dispatch(closeModalMobile());
    dispatch(closeModalBook());
    dispatch(closeModalFinishRead())
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
  }, [isMobileModalOpen, isModalOpenBook, isModalOpenFinishRead, handleClickClose, dispatch]);
  return createPortal(
    <>
      {(isMobileModalOpen || isModalOpenBook || isModalOpenFinishRead) && (
        <BackdropStyle onClick={handleBackdropClick}>
          {isMobileModalOpen && (
            <MobileModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenBook && <ModalBook handleClickClose={handleClickClose} />}
          {isModalOpenFinishRead && <ModalFinishRead handleClickClose={handleClickClose}/>}
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
