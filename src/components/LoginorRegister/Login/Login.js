import React from "react";
import RegisterStyle from "../style/loginorregister.module.css";
import { useFormik } from "formik";
import { BsGoogle } from "react-icons/bs";
import validationSchema from "Validations/LoginValidation";
import { Form, Input, Alert, Button } from "antd";
import { Link } from "react-router-dom";
import { loginUser } from "API/trendProductAPI";
import { FaFacebookF } from "react-icons/fa";
import { AuthLoginContext } from "context";

const Login = () => {
  const { loggedUser } = React.useContext(AuthLoginContext);
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
          const sendLoginData = await loginUser({
            email: values.email,
            password: values.password,
          });
          loggedUser(sendLoginData);
          console.log(sendLoginData);
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
                Login{" "}
                <span className={RegisterStyle.registerSubHeader}>
                  Don't miss the best prices.
                </span>
              </div>
              <div className={RegisterStyle.registerForm}>
                <Form onSubmitCapture={handleSubmit} {...formItemLayout}>
                  <div className="d-flex justify-content-center">
                    <div className={RegisterStyle.useSocialGoogle}>
                      <BsGoogle
                        size={25}
                        className={RegisterStyle.socialIcon}
                      />
                      <span className={RegisterStyle.useSocialTitle}>
                        Login with Google
                      </span>
                    </div>
                    <div className={RegisterStyle.useSocialFacebook}>
                      <FaFacebookF
                        size={25}
                        className={RegisterStyle.socialIcon}
                      />
                      <span className={RegisterStyle.useSocialTitle}>
                        Login with Google
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
                  <div className="d-flex justify-content-center">
                    <div className="w-50"></div>
                  </div>
                  <div className="d-flex justify-content-center my-2">
                    <Button onClick={handleSubmit} type="primary">
                      Login
                    </Button>
                  </div>
                </Form>
              </div>
              <h6 className="text-center my-3">
                Don't have an account ?{" "}
                <Link to="/signup" className="text-decoration-none">
                  Sign up.
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
