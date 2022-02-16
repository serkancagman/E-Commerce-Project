import React from "react";
import Checkout from "./Checkout";
import { Steps } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { MdOutlineHomeWork } from "react-icons/md";
import checkoutStyle from "./style/checkout.module.css";
import { BsCart3 } from "react-icons/bs";
import { Header } from "components/Header/Header";
import AddressInformation from "./AddressInformation";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FooterMain } from "components/Footer/FooterMain";
const GetOrderProcess = () => {
  let stepStatus = {
    checkout: "process",
    address: "wait",
    payment: "wait",
    confirm: "wait",
  };
  const [step, setStep] = React.useState(stepStatus);
  const [getStep, setGetStep] = React.useState(0);
  console.log(step);

  React.useEffect(() => {
    const handleSteps = (getStep) => {
      if (getStep === 1) {
        stepStatus.checkout = "finish";
        stepStatus.address = "process";
        setStep(stepStatus);
      } else if (getStep === 2) {
        stepStatus.address = "finish";
        stepStatus.payment = "process";
        setStep(stepStatus);
      } else if (getStep === 3) {
        stepStatus.payment = "finish";
        stepStatus.confirm = "finish";
      }
    };
    handleSteps(getStep);
  }, [getStep]);
  return (
    <>
      <Header />
      <section className="checkoutMain">
        <div className="container-xxl">
          <div className={checkoutStyle.checkoutWrapper}>
            <div className={checkoutStyle.stepWrapper}>
              <Steps className="mb-5">
                <Steps.Step
                  status={step.checkout}
                  title="Check Products"
                  icon={<BsCart3 />}
                />
                <Steps.Step
                  status={step.address}
                  title="Order Address"
                  icon={<MdOutlineHomeWork />}
                />
                <Steps.Step
                  status={step.payment}
                  title="Payment"
                  icon={<RiSecurePaymentLine />}
                />
                <Steps.Step
                  status={step.confirm}
                  title="Done"
                  icon={<SmileOutlined />}
                />
              </Steps>
            </div>
            {step.checkout === "process" && <Checkout setStep={setGetStep} />}
            {step.address === "process" && <AddressInformation setStep={setGetStep} />}
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
};

export default GetOrderProcess;
