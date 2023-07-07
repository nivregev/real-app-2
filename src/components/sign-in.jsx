import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";
import { Formik, useFormik } from "formik";

const SignIn = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const errors = {};

      if (values.email === "") {
        errors.email = "email is required";
      } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com/g.test(values.email)) {
        errors.email = "please provide a valid email address";
      }
      if (values.password.length < 6) {
        errors.password = "password meeds to be at least 6 characters";
      }
      return errors;
    },
    onSubmit(values) {
      console.log("submitted", values);
    },
  });
  return (
    <>
      <PageHeader
        title="sign In With React App"
        description="fill up your details"
      />

      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <div className="alert alert-danger">Error</div>

        {/* email */}
        <FormInput
          type="email"
          label="Email"
          name="email"
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />

        {/* password */}
        <FormInput
          type="password"
          label="Password"
          name="password"
          required
          {...formik.getFieldProps("password")}
          error={formik.touched.password && formik.errors.password}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="btn btn-primary"
          >
            Sign-In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
