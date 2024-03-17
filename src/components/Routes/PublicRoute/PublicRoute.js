import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const shouldRedirect = isLoggedIn && restricted;
  return <div>{isLoggedIn ? <Navigate to="/recommended" /> : children}</div>;
}
