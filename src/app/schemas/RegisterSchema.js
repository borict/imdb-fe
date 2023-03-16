import * as yup from "yup";
import { passwordRegex } from "./constants/constants";

export const RegisterSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email adress"),
  password: yup
    .string()
    .matches(passwordRegex, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
