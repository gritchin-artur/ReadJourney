import { ModalFinishReadContainer } from "./modalFinishRead.styled";
import { ReactComponent as X } from "../../img/svg/x-2.svg";

export default function ModalFinishRead ({ handleClickClose }) {
    return (
        <ModalFinishReadContainer>
            <X className="CloseButton" onClick={handleClickClose}/>
            <div>modalFinishRead</div>
        </ModalFinishReadContainer>
    )
}