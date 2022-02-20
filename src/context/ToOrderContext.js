import React from "react";

const ToOrderContext = React.createContext();

export const ToOrderProvider = ({ children }) => {
  const [orderAddress, setOrderAddress] = React.useState({});
  const [orderIsSuccess, setOrderIsSuccess] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = React.useState(false);
  const [payProcess, setPayProcess] = React.useState(false);
  const [orderID, setOrderID] = React.useState("");
  const [totalProducts, setTotalProducts] = React.useState([]);
  const [step, setStep] = React.useState({
    checkout: "process",
    address: "wait",
    payment: "wait",
    confirm: "wait",
  });
  const [getStep, setGetStep] = React.useState(0);

  React.useEffect(() => {
    const handleSteps = (getStep) => {
      if (getStep === 0) {
        setStep({
          checkout: "process",
          address: "wait",
          payment: "wait",
          confirm: "wait",
        });
      }
      if (getStep === 1) {
        setStep({
          checkout: "finish",
          address: "process",
          payment: "wait",
          confirm: "wait",
        });
      } else if (getStep === 2) {
        setStep({
          checkout: "finish",
          address: "finish",
          payment: "process",
          confirm: "wait",
        });
      } else if (getStep === 3) {
        setStep({
          checkout: "finish",
          address: "finish",
          payment: "finish",
          confirm: "process",
        });
      } else {
        return;
      }
    };
    handleSteps(getStep);
  }, [getStep]);

  const values = {
    step,
    setGetStep,
    orderAddress,
    setOrderAddress,
    getStep,
    paymentStatus,
    setPaymentStatus,
    payProcess,
    setPayProcess,
    setOrderIsSuccess,
    orderIsSuccess,
    totalProducts,
    setTotalProducts,
    orderID,
    setOrderID,
  };

  return (
    <ToOrderContext.Provider value={values}>{children}</ToOrderContext.Provider>
  );
};
export default ToOrderContext;
