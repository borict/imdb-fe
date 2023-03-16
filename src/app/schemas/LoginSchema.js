import * as yup from "yup";
import { passwordRegex } from "./constants/constants";

export const LoginSchema = yup.object({
  checkEmail: yup.boolean(),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be valid and contain @"),
  password: yup
    .string()
    .matches(passwordRegex, { message: "Invalid password" })
    .required("Password is required"),
});
