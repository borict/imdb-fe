import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const RegisterSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email adress"),
  password: yup
    .string()
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
