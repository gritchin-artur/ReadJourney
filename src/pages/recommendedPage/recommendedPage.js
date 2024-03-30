import { useDispatch, useSelector } from "react-redux";
import { RecommendedPageContainer } from "./recommendedPage.styled";
import { ReactComponent as Arrow } from "../../img/svg/log-in.svg";
import { ReactComponent as Prev } from "../../img/svg/chevron-left (1)-2.svg";
import { ReactComponent as Next } from "../../img/svg/chevron-left-2.svg";

import { useFormik } from "formik";
import { getRecommendBooks } from "../../redux/data/data-operation";
import { useEffect, useMemo, useState } from "react";

export default function RecommendedPage() {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector((state) => state.data.recommendedBooks);
  console.log(recommendedBooks);
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   const updatedBooks = recommendedBooks.results
  //     ? [...books, ...recommendedBooks.results]
  //     : [];
  //   const uniqueBooks = Array.from(
  //     new Set(updatedBooks.map((book) => book._id))
  //   ).map((_id) => {
  //     return updatedBooks.find((book) => book._id === _id);
  //   });

  //   setBooks(uniqueBooks);
  //   console.log(books);
  // }, [recommendedBooks.results]);

  useEffect(() => {
    const updatedBooks = recommendedBooks.results
      ? [...books, ...recommendedBooks.results]
      : [];
    const uniqueBooks = Array.from(
      new Set(updatedBooks.map((book) => book._id))
    ).map((_id) => {
      return updatedBooks.find((book) => book._id === _id);
    });

    setBooks((prevBooks) => {
      if (JSON.stringify(prevBooks) !== JSON.stringify(uniqueBooks)) {
        return uniqueBooks;
      } else {
        return prevBooks;
      }
    });
  }, [recommendedBooks.results, books]);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      author: "",
      page: 1,
      limit: 10,
    },

    onSubmit: (values) => {
      dispatch(getRecommendBooks(values));
    },
  });

  useEffect(() => {
    dispatch(getRecommendBooks(values));
  }, [dispatch, values]);

  let offset = 0;
  const sliderLine = document.querySelector(".BookList");
  const sliderWindow = document.querySelector(".BookListContainer");

  const handlePrevClick = () => {
    offset = offset - 157;
    if (offset < 0) {
      if (sliderWindow && sliderWindow.offsetWidth === 295) {
        offset = (books.length - 2) * 157;
      }
      if (sliderWindow && sliderWindow.offsetWidth === 610) {
        offset = (books.length / 2 - 4) * 157;
      }
      if (sliderWindow && sliderWindow.offsetWidth === 767) {
        offset = ((books.length - 10) / 2) * 157;
      }
    }
    sliderLine.style.left = -offset + "px";
  };

  const handleNextClick = () => {
    offset = offset + 157;
    if (
      (sliderWindow &&
        sliderWindow.offsetWidth === 295 &&
        offset === (books.length - 2) * 157) ||
      (sliderWindow &&
        sliderWindow.offsetWidth === 610 &&
        offset === ((books.length - 6) / 2) * 157) ||
      (sliderWindow &&
        sliderWindow.offsetWidth === 767 &&
        offset >= ((books.length - 8) / 2) * 157 - 18)
    ) {
      const updatedPage = values.page + 1;
      if (updatedPage > recommendedBooks.totalPages) {
        console.log("offset = 0");
        offset = 0;
      } else {
        handleChange({
          target: {
            name: "page",
            value: updatedPage,
          },
        });
      }
    }
    sliderLine.style.left = -offset + "px";
  };

  const renderedBooks = useMemo(() => {
    return books.map((book, item) => (
      <li key={item} className="BookItem">
        <img className="BookImg" src={book.imageUrl} alt={book.author} />
        <h2 className="BookTitle">{book.title}</h2>
        <p className="BookAuthor">{book.author}</p>
      </li>
    ));
  }, [books]);

  return (
    <RecommendedPageContainer $lengthbooks={books.length}>
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
        <div className="DesctopBookContainer">
          <div className="BooksPicture" />
          <p className="TextBook">
            "Books are <span className="PartTextBook">windows</span> to the
            world, and reading is a journey into the unknown."
          </p>
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
        {books && (
          <div className="BookListContainer">
            <ul className="BookList">{renderedBooks}</ul>
          </div>
        )}
      </div>
    </RecommendedPageContainer>
  );
}
