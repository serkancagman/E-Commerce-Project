import React from "react";

export const LoginFormContext = React.createContext();

export const LoginFormProvider = ({ children }) => {

    const [login, setLogin] = React.useState(true)







    

const values = {
    login,
    setLogin




}



    return <LoginFormContext.Provider value={values}>{children}</LoginFormContext.Provider>;
}