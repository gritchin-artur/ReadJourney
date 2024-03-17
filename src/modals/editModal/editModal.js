import { ModalContainer } from "./editModal.styled";
import { ReactComponent as ButtonClose } from "../../img/x-modal.svg";
import { ReactComponent as Ukraine } from "../../img/ukraine.svg";
import { ReactComponent as England } from "../../img/united kingdom.svg";
import { ShowRules } from "utils/showRules";
import { useFormik } from "formik";
import { EditWordSchema } from "utils/validationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { editWord } from "../../redux/data/data-operation";

export function EditModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const clickWordId = useSelector((state) => state.modal.clickWordId);
  console.log(clickWordId);
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      en: `${clickWordId.en}`,
      ua: `${clickWordId.ua}`,
      category: clickWordId.category,
      isIrregular: clickWordId.isIrregular,
    },

    validationSchema: EditWordSchema,

    onSubmit: (values) => {
      console.log({ edit: values, id: clickWordId._id });
      dispatch(editWord({ edit: values, id: clickWordId._id })).then(
        (response) => {
          !response.error && handleClickClose();
        }
      );
    },
  });

  const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);
  return (
    <ModalContainer>
      <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      <form className="Form">
        <div className="UkrainianContainer" id="ukrainian">
          <div className="InputImagContainer">
            <Ukraine className="IconCountry" /> Ukrainian
          </div>
          <input
            id="ukrainian"
            className={getInputClass("Ua")}
            type="text"
            placeholder="Слово Українською"
            name="ua"
            value={values.ua}
            onChange={handleChange}
            required
          />
          {getInputAlert("ua")}
        </div>
        <div className="EnglishContainer">
          <div className="InputImagContainer">
            <England className="IconCountry" /> English
          </div>
          <input
            id="english"
            className={getInputClass("En")}
            type="text"
            placeholder="Word in English"
            name="en"
            value={values.en}
            onChange={handleChange}
            required
          />
          {getInputAlert("en")}
        </div>

        <ul className="ButtonList">
          <li
            className="ButtonAdd"
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Save
          </li>
          <li className="ButtonCancel" onClick={handleClickClose}>
            Cancel
          </li>
        </ul>
      </form>
    </ModalContainer>
  );
}
