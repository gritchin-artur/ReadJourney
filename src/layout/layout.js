import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import authOperations from "../redux/auth/auth-operations";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <div style={{ display: isLoggedIn ? "block" : "none" }}>
        <NavLink to="/recommended">Home</NavLink>
        {/* <NavLink to="/recommended">recommended</NavLink> */}
        <NavLink to="/library">My library</NavLink>
        {/* <NavLink to="/reading">reading</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log in</NavLink> */}
        <button
          onClick={() =>
            dispatch(authOperations.logOut()).then(navigate("/login"))
          }
        >
          Log out
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
