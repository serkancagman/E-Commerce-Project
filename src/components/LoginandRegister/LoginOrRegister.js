import React from "react";
import LoginStyle from "./style/loginorregister.module.css";
import { Login } from "./Login";
import { Register } from "./Register";
import HeaderContext from "context/HeaderContext";
import { LoginFormContext } from "context/LoginFormContext";

export const LoginOrRegister = () => {

  const { login } = React.useContext(LoginFormContext);
  const {userForm} = React.useContext(HeaderContext);
  
  return (
    <>
      
        <section className={`${LoginStyle.loginMain}  ${userForm === false ? " " : ` ${LoginStyle.offLoginFormBg}`  }`}>
            {login && <Login/>}
            {login === false && <Register/>}
        </section>
        
    </>
  );
};
