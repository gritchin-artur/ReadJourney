import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./Routes/PrivatRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

const Layout = lazy(() => import("layout/layout"));
const LogInPage = lazy(() => import("pages/loginPage/loginPage"));
const RegisterPage = lazy(() => import("pages/registerPage/registerPage"));
const RecommendedPage = lazy(() =>
  import("pages/recommendedPage/recommendedPage")
);
const MyLibraryPage = lazy(() => import("pages/myLibraryPage/myLibraryPage"));
const MyReadingPage = lazy(() => import("pages/myReadingPage/myReadingPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    (state) => state.auth.isFetchingCurrentUser
  );

  const isInitial = useSelector((state)=> state.auth.isInitial)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

    useEffect(() => {
    if(isInitial){
       console.log("refreshTokenUser")
      dispatch(authOperations.refreshTokenUser());
    }
  }, [dispatch, isInitial]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1 style={{color:"white", textAlign:"center"}}>...Loading</h1>
      ) : (
        <Suspense fallback={<p style={{color:"white", textAlign:"center"}}>Загружаем...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                exact
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="recommended"
                element={
                  <PrivateRoute>
                    <RecommendedPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="library"
                element={
                  <PrivateRoute>
                    <MyLibraryPage />
                  </PrivateRoute>
                }
              />
              <Route path="reading" element={ <PrivateRoute>
                    <MyReadingPage />
                  </PrivateRoute>} />
              {/* <Route path="register" element={<RegisterPage />} /> */}
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LogInPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <GlobalStyled />
      <Toaster />
    </>
  );
};
