import React from "react";
import LoginStyle from "./style/loginorregister.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import { FaApple, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import validationSchema from "./LoginValidation";
import HeaderContext from "context/HeaderContext";
import { loginUser } from "API/trendProductAPI";
import { AuthLoginContext } from "context/AuthLoginContext";

export const Login = ({ setLogin }) => {
  const { loggedUser } = React.useContext(AuthLoginContext);

  const { setUserForm } = React.useContext(HeaderContext);

  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        rememberMe: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        try {
          const sendLoginUser = await loginUser({
            email: values.email,
            password: values.password,
          });

          loggedUser(sendLoginUser);
          setUserForm(false)
        } catch (err) {
          bag.setErrors({ wrongInputItem: err.response.data.message });
        }
      },
    }
  );

  return (
    <>
      {errors.wrongInputItem && (
        <div className={LoginStyle.registerError}>
          <div className="alert alert-danger" role="alert">
            {errors.wrongInputItem}
          </div>
        </div>
      )}
      <div className={`bg-light ${LoginStyle.LoginRegister}`}>
        <div className={LoginStyle.loginWrapper}>
          <div className={LoginStyle.socialMedia}>
            <span className={LoginStyle.socialIconWrapper}>
              <FcGoogle
                className={` ${LoginStyle.googleLogin} ${LoginStyle.SocialIcon} `}
              />
            </span>
            <span className={LoginStyle.socialIconWrapper}>
              <FaFacebookF
                className={` ${LoginStyle.facebookLogin} ${LoginStyle.SocialIcon} `}
              />
            </span>
            <span className={LoginStyle.socialIconWrapper}>
              <FaTwitter
                className={` ${LoginStyle.twitterLogin} ${LoginStyle.SocialIcon} `}
              />
            </span>
            <span className={LoginStyle.socialIconWrapper}>
              <FaApple
                className={` ${LoginStyle.appleLogin} ${LoginStyle.SocialIcon} `}
              />
            </span>
            <span className={LoginStyle.socialIconWrapper}>
              <FaLinkedin
                className={` ${LoginStyle.facebookLogin} ${LoginStyle.SocialIcon} `}
              />
            </span>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center ${LoginStyle.orLine}`}
          >
            <span className={LoginStyle.horizontalLine}></span>
            <span className={LoginStyle.orText}>OR</span>
            <span className={LoginStyle.horizontalLine}></span>
          </div>
          <span
            className={LoginStyle.closeLoginArea}
            onClick={() => setUserForm(false)}
          >
            <GrFormClose size={25} />
          </span>
          <form className={LoginStyle.userForm} onSubmit={handleSubmit}>
            <div className={LoginStyle.inputWrapper}>
              <label htmlFor="email" className={LoginStyle.formLabel}>
                E-mail
              </label>
              <input
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your e-mail"
                type="text"
                name="email"
                className={`${LoginStyle.formInput} ${
                  errors.email && touched.email
                    ? `${LoginStyle.errorInput}`
                    : " "
                }`}
              />
              <div className={LoginStyle.errorMessage}>
                {errors.email && touched.email && (
                  <span> * {errors.email}</span>
                )}
              </div>
            </div>
            <div className={LoginStyle.inputWrapper}>
              <label htmlFor="password" className={LoginStyle.formLabel}>
                Password
              </label>
              <input
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                type="password"
                name="password"
                className={`${LoginStyle.formInput} ${
                  errors.password && touched.password
                    ? `${LoginStyle.errorInput}`
                    : " "
                }`}
              />
              <div className={LoginStyle.errorMessage}>
                {errors.password && touched.password && (
                  <span> * {errors.password}</span>
                )}
              </div>
            </div>
            <div className={LoginStyle.inputWrapper}>
              <input
                id="remember"
                onChange={handleChange}
                type="checkbox"
                name="rememberMe"
                className={LoginStyle.formInput}
              />
              <span className={LoginStyle.rememberText}>
                Remember me for one week.
              </span>
            </div>
            <div className={LoginStyle.submitButton}>
              <button className={LoginStyle.inputSubmit} type="submit">
                Login
              </button>
            </div>
            <div className={LoginStyle.forgotArea}>
              <span className={LoginStyle.forgotText}>
                Did you forgot your password ?
              </span>
              <a href="/" className={LoginStyle.resetPassword}>
                Reset Password
              </a>
            </div>
            <div className={LoginStyle.createAccount}>
            <div className="orText my-1">OR</div>
              <span
                onClick={() => setLogin(false)}
                className={LoginStyle.createAccountText}
              >
                Create Account
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
