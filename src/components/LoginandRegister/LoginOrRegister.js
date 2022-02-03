import React from "react";
import LoginStyle from "./style/loginorregister.module.css";
import { Login } from "./Login";
import { Register } from "./Register";
import HeaderContext from "context/HeaderContext";


export const LoginOrRegister = () => {

  const [login, setLogin] = React.useState(true)
  const {userForm} = React.useContext(HeaderContext);
  
  return (
    <>
      
        <section className={`${LoginStyle.loginMain}  ${userForm === false ? " " : ` ${LoginStyle.offLoginFormBg}`  }`}>
            {login && <Login login={login} setLogin={setLogin} />}
            {login === false && <Register login={login} setLogin={setLogin} />}
        </section>
        
    </>
  );
};
