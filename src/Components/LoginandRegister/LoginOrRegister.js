import React from "react";
import LoginStyle from "./loginorregister.module.css";
import { Login } from "./Login";
import { Register } from "./Register";

export const LoginOrRegister = ({onForm, updateForm}) => {
  const [login, setLogin] = React.useState(true)
  
  return (
    <>
      
        <section className={`${LoginStyle.loginMain}  ${onForm === false ? " " : ` ${LoginStyle.offLoginFormBg}`  }`}>
          <div className={LoginStyle.loginMainArea}>
          <div className={LoginStyle.loginRegisterWrapper}>
            {login && <Login onForm={updateForm} toRegister={setLogin} toBack={login} />}
            {login === false && <Register onForm={updateForm} toBack={login} toRegister={setLogin} />}
          </div>


          <div onClick={() => updateForm(!onForm)}  className={`loginFormBack  ${onForm === false ? " " : ` ${LoginStyle.offLoginFormBg}`  }`}></div>
          </div>
          
        </section>
        
    </>
  );
};
