import { useFormik } from "formik";
import { MainContainer } from "./myReadingPage.styled";
import { useDispatch, useSelector } from "react-redux";
import Default from "../../img/png/default-Img.jpg";
import {
  finishReadingBook,
  startReadingBook,
} from "../../redux/data/data-operation";
import { useState } from "react";

export default function MyReadingPage() {
  const dispatch = useDispatch();

  const bookContent = useSelector((state) => state.modal.bookContent);
  const readPage = bookContent.progress[bookContent.progress.length - 1];
  console.log(bookContent);
  const [reading, setReading] = useState(
    bookContent.progress.length === 0 ? false : readPage.status === "active" ? true : false
  );
  console.log(bookContent, reading);
  const {
    values,
    // touched,
    // errors,
    handleBlur,
    handleChange,
    handleSubmit,
    // resetForm,
  } = useFormik({
    initialValues: {
      id: bookContent._id,
      page: bookContent.progress.length ? 
(readPage.status === "active" ? readPage.startPage : readPage.finishPage)
      : 0,
    },

    // validationSchema: AddBookSchema,

    onSubmit: (values) => {
      console.log(values);
      if (!reading) {
        dispatch(startReadingBook(values)).then((response) => {
          response.payload.title && setReading(true);
        });
      }
      if (reading) {
        dispatch(finishReadingBook(values)).then((response) => {
          response.payload.title && setReading(false);
        });
      }
    },
  });
  return (
    <MainContainer $reading={reading}>
      <div className="ControlBookContainer">
        <form className="Form">
          <p className="FormTitle">Filters:</p>
          <div className="DivInput">
            <input
              id="page"
              name="page"
              type="number"
              // className={getInputClass("title")}
              onChange={handleChange}
              value={values.page}
              onBlur={handleBlur}
            />
            <span className="TextInput">Page number:</span>
            {/* {getInputAlert("title")} */}
          </div>
          <button className="ButtonToStart" onClick={handleSubmit}>
            {reading ? "To stop" : "To start"}
          </button>
        </form>

        {reading ? (
          <div>rfgefdsv</div>
        ) : (
          <>
            <div className="ProgressContainer">
              <h2 className="TitleProgress">Progress</h2>
              <p className="ProgressText">
                Here you will see when and how much you read. To record, click
                on the red button above.
              </p>
            </div>
            <div className="ImgContainer">
              <div className="ImgStar" />
            </div>
          </>
        )}
      </div>
      <div className="OwnBookContainer">
        <h2 className="TitleMyReading">My reading</h2>

        <div className="BookContainer">
          <div className="ContentContainer">
            <img
              className="BookImg"
              src={bookContent.imageUrl ? bookContent.imageUrl : Default}
              alt={bookContent.author}
            />
            <h2 className="BookTitle">{bookContent.title}</h2>
            <p className="BookAuthor">{bookContent.author}</p>
            <div className="RecordButtonContainer">
              <div className="RecordButton" />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
