import { useDispatch, useSelector } from "react-redux";
import { ModalBookContainer } from "./modalBook.styled";
import { addBooks } from "../../redux/data/data-operation";
import Default from "../../img/png/default-Img.jpg";
import { useNavigate } from "react-router-dom";

export default function ModalBook({ handleClickClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookContent = useSelector((state) => state.modal.bookContent);
  const handleAddToLibrary = (id) => {
    dispatch(addBooks(id)).then((response) => {
      response.payload.author && handleClickClose();
    });
  };
  const handleClick = () => {
    bookContent.progress
      ? navigate("/reading") || handleClickClose()
      : handleAddToLibrary(bookContent._id);
  };
  return (
    <ModalBookContainer>
      <div className="ButtonClose" onClick={handleClickClose} />

      <div className="ContentContainer">
        <img
          className="BookImg"
          src={bookContent.imageUrl ? bookContent.imageUrl : Default}
          alt={bookContent.author}
        />
        <h2 className="BookTitle">{bookContent.title}</h2>
        <p className="BookAuthor">{bookContent.author}</p>
        <p className="BookPages">{bookContent.totalPages} pages</p>
        <button className="ButtonAdd" onClick={handleClick}>
          {bookContent.progress ? "Start reading" : "Add to library"}
        </button>
      </div>
    </ModalBookContainer>
  );
}
