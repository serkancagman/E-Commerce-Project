import React from "react";

export const PaymentFormContext = React.createContext();

export const PaymentFormProvider = ({ children }) => {

const [paymentFormItem, setPaymentFormItem] = React.useState({
    paymentForm: {
        firstName: "",
        lastName: "",
        cardNumber: "",
        expireDate: "",
        cvv: "",
    }})

    console.log(paymentFormItem)




    const values = {
        paymentFormItem,
        setPaymentFormItem
    }

    return <PaymentFormContext.Provider value={values}>{children}</PaymentFormContext.Provider>;



}