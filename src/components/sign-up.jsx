import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";
import { Formik, useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
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
        errors.password = "password needs to be at least 6 characters";
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
        title="sign Up With This React App"
        description="fill up your details "
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

        {/* name */}
        <FormInput
          type="text"
          label="Name"
          name="name"
          required
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="btn btn-primary"
          >
            Sign-Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
