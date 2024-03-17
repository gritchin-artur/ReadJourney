import { NavLink } from "react-router-dom";
import { ModalDiv } from "./mobileModal.styled";

export default function MobileModal({ handleClickClose }) {
  return (
    <ModalDiv>
      <div className="HeaderOfModal">
        <div className="ButtonClose" onClick={handleClickClose} />
      </div>
      <ul className="NavList">
        <li>
          <NavLink className="NavElement" to="/dictionary">
            Dictionary
          </NavLink>
        </li>
        <li>
          <NavLink className="NavElement" to="/recommend">
            Recommend
          </NavLink>
        </li>
        <li>
          <NavLink className="NavElement" to="/training">
            Training
          </NavLink>
        </li>
      </ul>
      <div className="Img" />
    </ModalDiv>
  );
}
