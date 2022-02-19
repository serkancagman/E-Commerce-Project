import React from "react";
import adminStyle from "./style/adminlogin.module.css";
import adminLogo from "images/adminlogo.png";
import { useFormik } from "formik";
import { loginUser } from "API/trendProductAPI";

import { validationSchema } from "./AdminLoginValidation";
import { AuthLoginContext } from "context/AuthLoginContext";
const AdminLogin = () => {
  const { loggedUser} =
    React.useContext(AuthLoginContext);
  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        try {
          const sendLoginUser = await loginUser({
            email: values.email,
            password: values.password,
          });

          loggedUser(sendLoginUser);
          
         
        } catch (err) {
          bag.setErrors({ wrongInputItem: err.response.data.message });
        }
      },
    }
  );

  return (
    <section className="">
      <div className="container-fluid">
        <div className={adminStyle.adminLoginWrapper}>
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Admin Panel
                </h5>
              </div>

              <form onSubmit={handleSubmit}>
                {errors.wrongInputItem && (
                  <div class="alert alert-danger" role="alert">
                    {errors.wrongInputItem}
                  </div>
                )}
                <div className="text-center">
                  <img
                    src={adminLogo}
                    alt="admin-logo"
                    className={adminStyle.adminLogo}
                  />
                </div>

                <div className="input-group px-3 d-flex flex-column align-items-center justify-content-center mb-3">
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control w-100 my-2 ${adminStyle.adminLoginInput}`}
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  {errors.email && touched.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                    placeholder="Password"
                    className={`form-control w-100 my-2 ${adminStyle.adminLoginInput}`}
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  {errors.password && touched.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>

                <div className="text-center my-2">
                  <button
                    type="submit"
                    className={`btn ${adminStyle.adminLoginSubmitBtn}`}
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ,
    </section>
  );
};

export default AdminLogin;
