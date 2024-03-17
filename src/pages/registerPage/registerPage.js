import { useDispatch } from "react-redux";
import { MainContainer } from "./registerPage.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ShowRules } from "../../utils/showRules";
import { SignupSchema } from "utils/validationSchemas";
import authOperations from "../../redux/auth/auth-operations";

export default function RegisterPage() {
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
      name: "",
      email: "",
      password: "",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      dispatch(authOperations.register(values)).then((response) => {
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
              id="registerName"
              name="name"
              type="text"
              className={getInputClass("name")}
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            <span className="TextInput">Name:</span>
            {getInputAlert("name")}
          </div>
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
              Registeration
            </li>
            <li>
              <NavLink className="ButtonGoLogIn" to="/login">
                Already have an account?
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
