import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ShowRules } from "../../utils/showRules";
import { SigninSchema } from "utils/validationSchemas";
import { MainContainer } from "./loginPage.styled";
import authOperations from "../../redux/auth/auth-operations";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {
      console.log(values);
      dispatch(authOperations.logIn(values)).then((response) => {
        response.payload.name && navigate("/recommended");
      });
    },
  });

  const {
    showPassword,
    getInputAlert,
    getHidePassword,
    getInputClass,
  } = ShowRules(values, touched, errors);
  return (
    <MainContainer>
      <div className="RegisterContainer">
        <div className="ImgLogo" />
        <h2 className="Title">
          Expand your mind, reading{" "}
          <span
            className="PartText
      "
          >
            a book
          </span>
        </h2>
        <form className="Form">
          <div className="DivInput">
            <input
              id="registerEmail"
              name="email"
              type="email"
              className={getInputClass("email")}
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <span className="TextInput">Mail:</span>
            {getInputAlert("email")}
          </div>
          <div className="DivInput" id="password">
            <input
              id="registerPassword"
              name="password"
              type={showPassword ? "text" : "password"}
              className={getInputClass("password")}
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <span className="TextInput">Password:</span>
            {getInputAlert("password")}
            {values.password && getHidePassword()}
          </div>
          <ul className="ButtonList">
            <li
              className="ButtonSubmit"
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Log in
            </li>
            <li>
              <NavLink className="ButtonGoLogIn" to="/register">
                Don’t have an account?
              </NavLink>
            </li>
          </ul>
        </form>
      </div>
      <div className="IphoneImgContainer">
        <div className="IphoneImg" />
      </div>
    </MainContainer>
  );
}
