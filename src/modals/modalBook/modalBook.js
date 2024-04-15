import { useDispatch, useSelector } from "react-redux";
import { ModalBookContainer } from "./modalBook.styled";
import { addBooks } from "../../redux/data/data-operation";
import Default from "../../img/png/default-Img.jpg";

export default function ModalBook({ handleClickClose }) {
  const dispatch = useDispatch();

  const bookContent = useSelector((state) => state.modal.bookContent);
  console.log(bookContent);
  const handleAddToLibrary = (id) => {
        dispatch(addBooks(id)).then((response) => {
        response.payload.author && handleClickClose();
      });
}
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
        <button className="ButtonAdd" onClick={()=>handleAddToLibrary(bookContent._id)}>Add to library</button>
      </div>
    </ModalBookContainer>
  );
}
