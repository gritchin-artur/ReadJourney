import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Arrow } from "../../img/svg/log-in.svg";
import { ReactComponent as SwitchInput } from "../../img/svg/chevron-down-2.svg";
import { ReactComponent as Trash } from "../../img/svg/block-2.svg";
import Default from "../../img/png/default-Img.jpg";
import { useFormik } from "formik";
import {
  getOwnBooks,
  getRecommendBooks,
  postAddOwnBook,
  removeBooks,
} from "../../redux/data/data-operation";
import { useEffect, useMemo, useState } from "react";
import { openModalBook } from "../../redux/modals/modal-slice";
import { MyLibraryPageContainer } from "./myLibraryPage.styled";
import { NavLink } from "react-router-dom";
import { AddBookSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";

export default function MyLibraryPage() {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector((state) => state.data.recommendedBooks);
  const ownBooks = useSelector((state) => state.data.ownBooks);
  const isAddBook = useSelector((state) => state.data.isAddBook);
  const isDeleteBook = useSelector((state) => state.data.isDeleteBook);
  const [books, setBooks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [trashHovered, setTrashHovered] = useState(true);
  const [bookStatus, setStatus] = useState("");
  const [page, setPage] = useState({
    title: "",
    author: "",
    page: 1,
    limit: 10,
  });
  const status = ["in-progress", "unread", "done"];

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

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      author: "",
      totalPages: null,
    },

    validationSchema: AddBookSchema,

    onSubmit: (values) => {
      dispatch(postAddOwnBook(values)).then((response) => {
        response.payload.title && resetForm();
        console.log(response.payload);
      });
    },
  });

  useEffect(() => {
    dispatch(getRecommendBooks(page));
    dispatch(getOwnBooks(isAddBook || isDeleteBook));
  }, [dispatch, page, isDeleteBook, isAddBook]);

  const sliderLine = document.querySelector(".BookListLibrary");
  const sliderWindow = document.querySelector(".BookListLibraryContainer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newOffset = offset + 91;
      if (
        sliderWindow &&
        books.length &&
        sliderWindow.offsetWidth > (books.length * 91) / 2 + 4
      ) {
        newOffset = 0;
      }
      if (
        sliderWindow &&
        (sliderWindow.offsetWidth === 279 || 292) &&
        newOffset === (books.length - 3) * 91
      ) {
        const updatedPage = page.page + 1;
        if (updatedPage > recommendedBooks.totalPages) {
          newOffset = 0;
        } else {
          setPage((prevPage) => ({
            ...prevPage,
            page: updatedPage,
          }));
        }
      }
      setOffset(newOffset);
      if (sliderLine) {
        sliderLine.style.left = -offset + "px";
      }
    }, 3000);

    return () => clearInterval(intervalId);
  });

  const renderedBooks = useMemo(() => {
    return books && books.length !== 0 ? (
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
  }, [books, dispatch]);

  const renderedOwnBooks = useMemo(() => {
    const SortStatus =
      bookStatus === ""
        ? ownBooks
        : ownBooks.filter((element) => element.status === bookStatus);
    return ownBooks && SortStatus.length !== 0 ? (
      SortStatus.map((book, item) => (
        <li
          id="ownBook"
          key={item}
          className="BookOwnItem"
          onClick={() => trashHovered && dispatch(openModalBook(book))}
        >
          <img
            className="BookOwnImg"
            src={book.imageUrl ? book.imageUrl : Default}
            alt={book.author}
          />
          <div className="BookOwnContainer">
            <div className="BookOwnTitleContainer">
              <h2 className="BookOwnTitle">{book.title}</h2>
              <p className="BookOwnAuthor">{book.author}</p>
            </div>
            <Trash
              id="deleteOwnBook"
              className="DeleteBookIcon"
              onClick={() => dispatch(removeBooks(book._id))}
              onMouseEnter={() => setTrashHovered(false)}
              onMouseLeave={() => setTrashHovered(true)}
            />
          </div>
        </li>
      ))
    ) : (
      <div className="EmptyContainer">
        <div className="EmptyOwnBookContainer">
          <div className="ImagContainer">
            <div className="EmptyBookImg" />
          </div>
          <p className="TextAddBook">
            To start training, add{" "}
            <span className="PartText">some of your books</span> or from the
            recommended ones
          </p>
        </div>
      </div>
    );
  }, [ownBooks, dispatch, trashHovered, bookStatus]);

  useEffect(() => {
    const customInput = document.querySelector(".custom-input");
    const input = customInput.querySelector(".InputAllBooks");
    const dropdown = customInput.querySelector(".dropdown");
    const dropdownItems = dropdown.querySelectorAll(".ListItem");

    const handleClick = () => {
      dropdown.style.display = "grid";
    };

    const handleDropdownItemClick = (item) => {
      input.value = item.textContent;
      dropdown.style.display = "none";
    };

    const handleDocumentClick = (e) => {
      if (!customInput.contains(e.target)) {
        dropdown.style.display = "none";
      }
    };

    input.addEventListener("click", handleClick);

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => handleDropdownItemClick(item));
    });

    document.addEventListener("click", handleDocumentClick);

    return () => {
      input.removeEventListener("click", handleClick);
      dropdownItems.forEach((item) =>
        item.removeEventListener("click", handleDropdownItemClick)
      );
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);

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
                className={getInputClass("title")}
                // className="TitleInput"
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
              />
              <span className="TextInput">Book title:</span>
              {getInputAlert("title")}
            </div>
            <div className="DivInput">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Enter text"
                className={getInputClass("author")}
                // className="AuthorInput"
                onChange={handleChange}
                value={values.author}
                onBlur={handleBlur}
              />
              <span className="TextInput">The author:</span>
              {getInputAlert("author")}
            </div>

            <div className="DivInput">
              <input
                id="totalPages"
                name="totalPages"
                type="text"
                placeholder="Enter text"
                className={getInputClass("totalPages")}
                // className="AuthorInput"
                onChange={handleChange}
                value={values.totalPages}
                onBlur={handleBlur}
              />

              <span className="TextInput">Number of pages:</span>
              {getInputAlert("totalPages")}
            </div>
          </form>
          <button
            className="ButtonAddBook"
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
            <li>
              <NavLink className="ButtonHome" to="/recommended">
                Home
              </NavLink>
            </li>
            <li>
              <Arrow className="ArrowNext" />
            </li>
          </ul>
        </div>
      </div>
      <div className="RecommendedboksContainer">
        <div className="TitleButtonContainer">
          <h2 className="RecommendedboksTitle">My library</h2>
          <div className="custom-input">
            <SwitchInput className="IconSwitch" />
            <input className="InputAllBooks" placeholder="All books" />
            <ul className="dropdown">
              <li className="ListItem" onClick={() => setStatus("")}>
                All books
              </li>
              {status ? (
                status.map((item) => (
                  <li
                    className="ListItem"
                    key={item}
                    onClick={() => setStatus(item)}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </ul>
          </div>
        </div>
        <ul className="BookOwnListLibrary">{renderedOwnBooks}</ul>
      </div>
    </MyLibraryPageContainer>
  );
}
