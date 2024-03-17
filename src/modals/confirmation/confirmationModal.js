import { ModalContainer } from "./confirmationModal.styled";
import { deleteWord } from "../../redux/data/data-operation";
import { useDispatch, useSelector } from "react-redux";

export function ConfirmationModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const clickWordId = useSelector((state) => state.modal.clickWordId);

  const handleDeleteWord = () => {
    dispatch(deleteWord(clickWordId)).then((response) => {
      !response.error && handleClickClose();
    });
  };
  return (
    <ModalContainer>
      <h2 className="Title">
        Are you sure you want to delete {clickWordId.en}?
      </h2>
      <ul className="ListButton">
        <li className="ButtonYes" onClick={handleDeleteWord}>
          Yes
        </li>
        <li className="ButtonNo" onClick={() => handleClickClose()}>
          No
        </li>
      </ul>
    </ModalContainer>
  );
}
