import React from "react";
import Checkout from "./Checkout";
import { Steps} from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { MdOutlineHomeWork} from "react-icons/md";
import checkoutStyle from "./style/checkout.module.css";
import { BsCart3 } from "react-icons/bs";
import { Header } from "components/Header/Header";
import AddressInformation from "./AddressInformation";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FooterMain } from "components/Footer/FooterMain";
const GetOrderProcess = () => {
    const stepStatus = {
        "checkout": false,
        "address": false,
        "payment": false,
        "confirm": false,
      }
      const [step, setStep] = React.useState(stepStatus);
  return (
    <>
      <Header />
      <section className="checkoutMain">
        <div className="container-xxl">
          <div className={checkoutStyle.checkoutWrapper}>
            <div className={checkoutStyle.stepWrapper}>
              <Steps className="mb-5">
                <Steps.Step
                  status={step.checkout === true ? "finish" : "process"}
                  title="Check Products"
                  style={{ color: "#000" }}
                  icon={<BsCart3 />}
                />
                <Steps.Step
                  status={step.address === true ? "finish" : "process"}
                  title="Order Address"
                  icon={<MdOutlineHomeWork />}
                />
                <Steps.Step
                  status="wait"
                  title="Payment"
                  icon={<RiSecurePaymentLine />}
                />
                <Steps.Step
                  status="wait"
                  title="Done"
                  icon={<SmileOutlined />}
                />
              </Steps>
            </div>
            {step.checkout !== true && <Checkout setStep={setStep}/>}
            {step.address !== true && <AddressInformation setStep={setStep}/>}
            
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
};

export default GetOrderProcess;
