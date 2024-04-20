import { ModalFinishReadContainer } from "./modalFinishRead.styled";
import { ReactComponent as X } from "../../img/svg/x-2.svg";

export default function ModalFinishRead ({ handleClickClose }) {
    return (
        <ModalFinishReadContainer>
            <X className="CloseButton" onClick={handleClickClose}/>
            <div className="ContentContainer">
                <div className="BookImg"/>
                <h2 className="Title">The book is read</h2>
                <p className="Text">It was an <span className="PartText">exciting journey</span>, where each page revealed new horizons, and the characters became inseparable friends.</p>
            </div>
        </ModalFinishReadContainer>
    )
}