import { ModalAddBBookContainer } from "./modalAddBBook.styled";
import { ReactComponent as X } from "../../img/svg/x-2.svg";


export default function ModalAddBBook ({ handleClickClose }) {
    return (
        <ModalAddBBookContainer>
            <X className="CloseButton" onClick={handleClickClose}/>
            <div className="ContentContainer">
                <div className="BookImg"/>
                <h2 className="Title">Good job</h2>
                <p className="Text">Your book is now in<span className="PartText"> the library!</span> The joy knows no bounds and now you can start your training</p>
            </div>
        </ModalAddBBookContainer>
    )
}