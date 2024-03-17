import * as Yup from "yup";

const passwordRules = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;
const emailRules = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const EnWord = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const UaWord = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/;

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

const LessonSchema = Yup.object().shape({
  reason: Yup.string().required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string()
    .matches(/^\d+$/)
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const AddWordSchema = Yup.object().shape({
  en: Yup.string().matches(EnWord, "Must be en letter").required("Required"),
  ua: Yup.string().matches(UaWord, "Must be ua letter").required("Required"),
  category: Yup.string().required("Required"),
});

const EditWordSchema = Yup.object().shape({
  en: Yup.string().matches(EnWord, "Must be en letter").required("Required"),
  ua: Yup.string().matches(UaWord, "Must be ua letter").required("Required"),
});

export {
  SignupSchema,
  SigninSchema,
  LessonSchema,
  AddWordSchema,
  EditWordSchema,
};
