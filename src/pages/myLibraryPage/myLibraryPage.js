import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Arrow } from "../../img/svg/log-in.svg";
import { ReactComponent as Prev } from "../../img/svg/chevron-left (1)-2.svg";
import { ReactComponent as Next } from "../../img/svg/chevron-left-2.svg";
import { useFormik } from "formik";
import { getRecommendBooks } from "../../redux/data/data-operation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { openModalBook } from "../../redux/modals/modal-slice";
import { MyLibraryPageContainer } from "./myLibraryPage.styled";

export default function MyLibraryPage() {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector((state) => state.data.recommendedBooks);

  const [books, setBooks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hideButtons, setHideButtons] = useState(false);
  const [page, setPage] = useState({
    title: "",
    author: "",
    number: null,
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    if (recommendedBooks.totalPages < 3) {
      setBooks(recommendedBooks.results);
    } else {
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
    }
  }, [recommendedBooks, books]);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      author: "",
      page: 1,
      limit: 10,
    },

    onSubmit: (values) => {
      handleChange({
        target: {
          name: "page",
          value: 1,
        },
      });
      dispatch(getRecommendBooks(values));
    },
  });

  useEffect(() => {
    setPage((prevState) => ({
      ...prevState,
      page: values.page,
    }));
  }, [values.page]);

  useEffect(() => {
    dispatch(getRecommendBooks(page));
  }, [dispatch, page]);

  const sliderLine = document.querySelector(".BookListLibrary");
  const sliderWindow = document.querySelector(".BookListLibraryContainer");

  //   const handlePrevClick = () => {
  //     let newOffset = offset - 91;
  //     if (newOffset < 0) {
  //       if (sliderWindow && sliderWindow.offsetWidth === 279) {
  //         newOffset = (books.length - 3) * 91;
  //       }
  //       if (sliderWindow && sliderWindow.offsetWidth === 634) {
  //         newOffset = (books.length / 2 - 4) * 91;
  //       }
  //       if (sliderWindow && sliderWindow.offsetWidth === 789) {
  //         newOffset = ((books.length - 10) / 2) * 91;
  //       }
  //     }
  //     setOffset(newOffset);
  //   };

  const handleNextClick = () => {
    let newOffset = offset + 91;
    console.log(newOffset);
    if (
      sliderWindow &&
      books.length &&
      sliderWindow.offsetWidth > (books.length * 91) / 2 + 4
    ) {
      newOffset = 0;
    }

    if (
      (sliderWindow &&
        sliderWindow.offsetWidth === 279 &&
        newOffset === (books.length - 3) * 91) ||
      (sliderWindow &&
        sliderWindow.offsetWidth === 634 &&
        newOffset === ((books.length - 6) / 2) * 91) ||
      (sliderWindow &&
        sliderWindow.offsetWidth === 789 &&
        newOffset >= ((books.length - 8) / 2) * 91)
    ) {
      console.log("updatedPage");
      const updatedPage = values.page + 1;
      if (updatedPage > recommendedBooks.totalPages) {
        newOffset = 0;
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

  //   useEffect(() => {
  //     if (sliderLine) {
  //       console.log("sliderLine", -offset + "px");
  //       sliderLine.style.left = -offset + "px";
  //     }
  //   }, [offset, sliderLine]);

  const renderedBooks = useMemo(() => {
    return recommendedBooks.results && recommendedBooks.results.length !== 0 ? (
      books.map((book, item) => (
        <li
          key={item}
          className="BookItem"
          onClick={() => dispatch(openModalBook(book))}
        >
          <img className="BookImg" src={book.imageUrl} alt={book.author} />
          <h2 className="BookTitle">{book.title}</h2>
          <p className="BookAuthor">{book.author}</p>
        </li>
      ))
    ) : (
      <h2 style={{ fontSize: "40px", color: "white", whiteSpace: "nowrap" }}>
        Not found
      </h2>
    );
  }, [books, recommendedBooks, dispatch]);

  //   useEffect(() => {
  //     const shouldHideButtons =
  //       (sliderWindow && sliderWindow.offsetWidth === 279 && books.length < 2) ||
  //       (sliderWindow && sliderWindow.offsetWidth === 634 && books.length < 8) ||
  //       (sliderWindow && sliderWindow.offsetWidth === 789 && books.length < 10);

  //     setHideButtons(shouldHideButtons);

  //     hideButtons && handleNextClick();
  //   }, [books, sliderWindow, hideButtons, sliderLine, handleNextClick]);

  return (
    <MyLibraryPageContainer $lengthbooks={books.length}>
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

            <div className="DivInput">
              <input
                id="number"
                name="number"
                type="number"
                placeholder="Enter text"
                className="AuthorInput"
                onChange={handleChange}
                value={values.number}
                onBlur={handleBlur}
              />
              <span className="TextInput">Number of pages:</span>
            </div>
          </form>
          <button
            className="ButtonToApply"
            type="submit"
            onClick={handleSubmit}
          >
            Add book
          </button>
        </div>
        <div className="StartWorkContainer">
          <h2 className="Title">Recommended books</h2>

          {books && (
            <div className="BookListLibraryContainer">
              <ul className="BookListLibrary">{renderedBooks}</ul>
            </div>
          )}
          <ul className="ButtonList">
            <li className="ButtonMyLibrary">Home</li>
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
          <h2 className="RecommendedboksTitle">My library</h2>
          <input className="InputAllBooks" />
        </div>
      </div>
    </MyLibraryPageContainer>
  );
}
