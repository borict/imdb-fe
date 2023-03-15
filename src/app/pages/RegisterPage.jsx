import { Field, Form, Formik } from "formik";
import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { register, selectAuthError } from "../store/auth";
import auth from "../store/auth/slice";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const emailError = useSelector(selectAuthError);
  const submit = (values, setSubmitting) => {
    const mappedValues = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmed_password: values.confirmPassword,
    };
    dispatch(register(mappedValues));
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting }) => submit(values, setSubmitting)}
      >
        {({ errors, touched, isSubmitting }) => (
          <div>
            <article>
              <Form autoComplete="off">
                <div className="form-group">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    class-name="form-control"
                  />
                  {touched.name && errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <br />

                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    class-name="form-control"
                  />
                  {touched.email && errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <br />

                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    class-name="form-control"
                  />
                  {touched.password && errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
                <br />

                <div className="form-group">
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter your password"
                    class-name="form-control"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <small className="text-danger">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>
                <br />
                {emailError && (
                  <p className="text-danger">Email is already taken</p>
                )}
                <button disabled={isSubmitting} type="submit">
                  Register
                </button>
              </Form>
            </article>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
