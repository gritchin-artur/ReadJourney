import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <div>{isLoggedIn ? children : <Navigate to="/" />}</div>;
}
