import React from "react";

export const PaymentFormContext = React.createContext();

export const PaymentFormProvider = ({ children }) => {
  const [cardType, setCardType] = React.useState("");
  const [paymentFormItem, setPaymentFormItem] = React.useState({
    paymentForm: {
      firstName: "",
      lastName: "",
      cardNumber: "",
      expireDate: "",
      cvv: "",
    },
  });

  const values = {
    paymentFormItem,
    setPaymentFormItem,
    cardType,
    setCardType,
  };

  return (
    <PaymentFormContext.Provider value={values}>
      {children}
    </PaymentFormContext.Provider>
  );
};
