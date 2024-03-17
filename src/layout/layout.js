import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import authOperations from "../redux/auth/auth-operations";
import { LayoutContainer } from "./layout.styled";
import Modals from "modals/modals";
import { openModalMobile } from "../redux/modals/modal-slice";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.auth.name);
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  return (
    <>
      <LayoutContainer display={isLoggedIn ? "flex" : "none"}>
        <div className="ImgLogo" />

        <ul className="ListButton">
          <li>
            <NavLink className="Link" to="/recommended">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/library">
              My library
            </NavLink>
          </li>
        </ul>
        <div className="RightSideContainer">
          <div className="UserNameContainer">
            <div className="UserNameIcon">{name && name[0].toUpperCase()}</div>
            <p className="UserName">{name}</p>
          </div>

          <div
            className="BurgerImg"
            onClick={() => dispatch(openModalMobile())}
          />
          <button
            className="ButtonLogOut"
            onClick={() =>
              dispatch(authOperations.logOut()).then(navigate("/login"))
            }
          >
            Log out
          </button>
        </div>
      </LayoutContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {isMobileModalOpen && <Modals />}
    </>
  );
}
