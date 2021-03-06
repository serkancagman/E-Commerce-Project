import React from "react";
import RegisterStyle from "../style/loginorregister.module.css";
import { useFormik } from "formik";
import { BsGoogle } from "react-icons/bs";
import validationSchema from "Validations/RegisterValidation";
import { Form, Input, Alert, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import { registerUser } from "API/trendProductAPI";
import { FaFacebookF } from "react-icons/fa";
import { AuthLoginContext } from "context";
const Register = () => {
  const { loggedUser } = React.useContext(AuthLoginContext);
  const [checkPrivacy, setCheckPrivacy] = React.useState(true);
  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        try {
          const sendRegisterData = await registerUser({
            email: values.email,
            password: values.password,
          });
          loggedUser(sendRegisterData);
          console.log(sendRegisterData);
        } catch (err) {
          bag.setErrors({ serverError: err.response.data.message });
        }
      },
    }
  );

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  return (
    <section id="userLogin" className="py-4">
      {errors.serverError && (
        <div className="d-flex justify-content-center">
          <Alert message={errors.serverError} type="error" />
        </div>
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className={RegisterStyle.register}>
              <div className={RegisterStyle.registerHeader}>
                Sign Up{" "}
                <span className={RegisterStyle.registerSubHeader}>
                  Don't miss the best prices.
                </span>
              </div>
              <div className={RegisterStyle.registerForm}>
                <Form
                  onSubmitCapture={handleSubmit}
                  className=""
                  {...formItemLayout}
                >
                  <div className="d-flex justify-content-center">
                    <div className={RegisterStyle.useSocialGoogle}>
                      <BsGoogle
                        size={25}
                        className={RegisterStyle.socialIcon}
                      />
                      <span className={RegisterStyle.useSocialTitle}>
                        Register with Google
                      </span>
                    </div>
                    <div className={RegisterStyle.useSocialFacebook}>
                      <FaFacebookF
                        size={25}
                        className={RegisterStyle.socialIcon}
                      />
                      <span className={RegisterStyle.useSocialTitle}>
                        Register with Google
                      </span>
                    </div>
                  </div>
                  <Form.Item
                    help={errors.email && touched.email && errors.email}
                    hasFeedback
                    validateStatus={errors.email && touched.email && "error"}
                    label="E-mail"
                  >
                    <Input
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Password"
                    help={
                      errors.password && touched.password && errors.password
                    }
                    validateStatus={
                      errors.password && touched.password && "error"
                    }
                  >
                    <Input.Password
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="password"
                    />
                  </Form.Item>
                  <Form.Item
                    onChange={handleChange}
                    help={
                      errors.passwordConfirm &&
                      touched.passwordConfirm &&
                      errors.passwordConfirm
                    }
                    validateStatus={
                      errors.passwordConfirm &&
                      touched.passwordConfirm &&
                      "error"
                    }
                    label="Password Confirm"
                  >
                    <Input.Password
                      name="passwordConfirm"
                      onBlur={handleBlur}
                    />
                  </Form.Item>
                  <div className="d-flex justify-content-center">
                    <div className="">
                      <Checkbox
                        className="mb-3"
                        onChange={() => setCheckPrivacy(!checkPrivacy)}
                      >
                        I agree to Alisya Shop Conditions of Use and{" "}
                        <Link to="/">Privacy Notice.</Link>
                      </Checkbox>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-2">
                    <Button
                      onClick={handleSubmit}
                      disabled={checkPrivacy}
                      type="primary"
                    >
                      Create Account
                    </Button>
                  </div>
                </Form>
              </div>
              <h6 className="text-center my-3">
                Have you already an account ?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login.
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
