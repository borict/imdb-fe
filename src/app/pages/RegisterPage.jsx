import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { register } from "../store/auth";

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      const mappedValues = {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmed_password: values.confirmPassword,
      };
      dispatch(register(mappedValues));
      window.location.replace("/movies");
    },
  });

  return (
    <div>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
        <button type="submit" value="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
