import { NavLink, useNavigate } from "react-router-dom";
import { ModalDiv } from "./mobileModal.styled";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

export default function MobileModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ModalDiv>
      <div className="HeaderOfModal">
        <div className="ButtonClose" onClick={handleClickClose} />
      </div>
      <ul className="NavList">
        <li>
          <NavLink className="NavElement" to="/recommended">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="NavElement" to="/library">
            Ma library
          </NavLink>
        </li>
      </ul>
      <button
        className="ButtonLogOut"
        onClick={() =>
          dispatch(authOperations.logOut()).then(navigate("/login"))
        }
      >
        Log out
      </button>
    </ModalDiv>
  );
}
