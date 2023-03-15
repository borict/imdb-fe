import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { LoginSchema } from "../schemas/LoginSchema";
import { login, selectAuthError } from "../store/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(selectAuthError);

  const submit = (values, setSubmitting) => {
    dispatch(login(values));
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => submit(values, setSubmitting)}
      >
        {({ errors, touched, isSubmitting }) => (
          <div>
            <article>
              <Form autoComplete="off">
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    class-name="form-control"
                  />
                  <br />
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
                  <br />
                  {touched.password && errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
                <br />

                {loginError && (
                  <p className="text-danger">Wrong email or password</p>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </Form>
            </article>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
