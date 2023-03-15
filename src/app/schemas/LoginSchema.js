import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const LoginSchema = yup.object({
  checkEmail: yup.boolean(),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be valid and contain @"),
  password: yup
    .string()
    .matches(passwordRules, { message: "Invalid password" })
    .required("Password is required"),
});
