import React from "react";

export const ToOrderContext = React.createContext();

export const ToOrderProvider = ({ children }) => {
    const [orderAddress, setOrderAddress] = React.useState({})
    console.log(orderAddress)
    let stepStatus = {
        checkout: "process",
        address: "wait",
        payment: "wait",
        confirm: "wait",
      };
      const localStep = localStorage.getItem("step");
      const [step, setStep] = React.useState(stepStatus);
      const [getStep, setGetStep] = React.useState(localStep ? localStep : 0);
      console.log(getStep);
    
      
      


      React.useEffect(() => {
        const handleSteps = (getStep) => {
          if (getStep === 1) {
            stepStatus.checkout = "finish";
            stepStatus.address = "process";
            setStep(stepStatus);
          } else if (getStep === 2) {
            stepStatus.checkout = "finish";
            stepStatus.address = "finish";
            stepStatus.payment = "process";
            setStep(stepStatus);
            
          } else if (getStep === 3) {
            stepStatus.payment = "finish";
            stepStatus.confirm = "finish";
          }else{
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
            localStep    

    }

    return <ToOrderContext.Provider value={values}>{children}</ToOrderContext.Provider>;

}