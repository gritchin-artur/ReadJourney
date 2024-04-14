import * as Yup from "yup";

const passwordRules = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;
const emailRules = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// const EnWord = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
// const UaWord = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRules, "Must be @ and .com or any")
    .required("Required"),
  password: Yup.string()
    .min(7, "Must be at least 7 characters")
    .max(7, "Too Long!")
    .matches(passwordRules, "Must be min 6 A-z, 1 num, letter = 7")
    .required("Required"),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRules, "Must be @ and .com or any")
    .required("Required"),
  password: Yup.string()
    .min(7, "Must be at least 7 characters")
    .max(7, "Too Long!")
    .matches(passwordRules, "Must be min 6 A-z, 1 num, letter = 7")
    .required("Required"),
});


const AddBookSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  author: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  totalPages: Yup.number()
    .min(5, "A few!")
    .max(5000, "Too mach!")
    .required("Required"),
});

export {
  SignupSchema,
  SigninSchema,
  AddBookSchema,
};
