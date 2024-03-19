import { useDispatch, useSelector } from "react-redux";
import { RecommendedPageContainer } from "./recommendedPage.styled";
import { ReactComponent as Arrow } from "../../img/svg/log-in.svg";
import { ReactComponent as Prev } from "../../img/svg/chevron-left (1)-2.svg";
import { ReactComponent as Next } from "../../img/svg/chevron-left-2.svg";
import { useFormik } from "formik";
import { getRecommendBooks } from "../../redux/data/data-operation";
import { useEffect, useState } from "react";

export default function RecommendedPage() {
  //   const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const recommendedBooks = useSelector((state) => state.data.recommendedBooks);
  console.log(recommendedBooks);

  let offset = 0;
  const sliderLine = document.querySelector(".BookList");

  const handlePrevClick = () => {
    offset = offset - 157;
    if (offset < 0) {
      offset = (recommendedBooks.results.length - 2) * 157;
    }
    sliderLine.style.left = -offset + "px";
  };

  const handleNextClick = () => {
    offset = offset + 157;
    if (offset > (recommendedBooks.results.length - 2) * 157) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  };

  useEffect(() => {
    dispatch(getRecommendBooks());
  }, [dispatch]);

  const {
    values,
    // errors,
    // touched,
    // isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: "",
      author: "",
      page: 1,
      limit: 10,
    },

    // validationSchema: SigninSchema,

    onSubmit: (values) => {
      console.log(values);
      dispatch(getRecommendBooks(values));
    },
  });

  return (
    <RecommendedPageContainer>
      <div className="FormContainer">
        <div>
          <form className="Form">
            <p className="FormTitle">Filters:</p>
            <div className="DivInput">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter text"
                className="TitleInput"
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
              />
              <span className="TextInput">Book title:</span>
            </div>
            <div className="DivInput">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Enter text"
                className="AuthorInput"
                onChange={handleChange}
                value={values.author}
                onBlur={handleBlur}
              />
              <span className="TextInput">The author:</span>
            </div>
          </form>
          <button
            className="ButtonToApply"
            type="submit"
            onClick={handleSubmit}
          >
            To apply
          </button>
        </div>
        <div className="StartWorkContainer">
          <h2 className="Title">Start your workout</h2>
          <ul className="WorkOutList">
            <li className="WorkOutElement">
              <span className="WorkOutNumber">1</span>
              <p className="WorkOutText">
                Create a personal library:
                <span className="WorkOutPartText">
                  add the books you intend to read to it.
                </span>
              </p>
            </li>
            <li className="WorkOutElement">
              <span className="WorkOutNumber">2</span>
              <p className="WorkOutText">
                Create your first workout:
                <span className="WorkOutPartText">
                  define a goal, choose a period, start training.
                </span>
              </p>
            </li>
          </ul>
          <ul className="ButtonList">
            <li className="ButtonMyLibrary">My library</li>
            <li>
              <Arrow className="ArrowNext" />
            </li>
          </ul>
        </div>
      </div>
      <div className="RecommendedboksContainer">
        <div className="TitleButtonContainer">
          <h2 className="RecommendedboksTitle">Recommended</h2>
          <ul className="PrevNextButtonList">
            <li className="PrevNextButton" onClick={handlePrevClick}>
              <Prev className="Arrow" />
            </li>
            <li className="PrevNextButton" onClick={handleNextClick}>
              <Next className="Arrow" />
            </li>
          </ul>
        </div>
        {recommendedBooks && recommendedBooks.results && (
          <div className="BookListContainer">
            <ul className="BookList">
              {recommendedBooks.results.map((book, item) => (
                <li key={item} className="BookItem">
                  <img
                    className="BookImg"
                    src={book.imageUrl}
                    alt={book.author}
                  />
                  <h2 className="BookTitle">{book.title}</h2>
                  <p className="BookAuthor">{book.author}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </RecommendedPageContainer>
  );
}
