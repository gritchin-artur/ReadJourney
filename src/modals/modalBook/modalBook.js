import { useSelector } from "react-redux";
import { ModalBookContainer } from "./modalBook.styled";

export default function ModalBook({ handleClickClose }) {
  const bookContent = useSelector((state) => state.modal.bookContent);
  console.log(bookContent);
  return (
    <ModalBookContainer>
      <div className="ButtonClose" onClick={handleClickClose} />

      <div className="ContentContainer">
        <img
          className="BookImg"
          src={bookContent.imageUrl}
          alt={bookContent.author}
        />
        <h2 className="BookTitle">{bookContent.title}</h2>
        <p className="BookAuthor">{bookContent.author}</p>
        <p className="BookPages">{bookContent.totalPages} pages</p>
        <button className="ButtonAdd">Add to library</button>
      </div>
    </ModalBookContainer>
  );
}
