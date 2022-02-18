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
import { ToOrderContext } from "context/ToOrderContext";
import Payment from "./Payment";
const GetOrderProcess = () => {
  const {step} = React.useContext(ToOrderContext)
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
            {step.checkout === "process" && <Checkout/>}
            {step.address === "process" && <AddressInformation/>}
            {step.payment === "process" && <Payment/>}
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
};

export default GetOrderProcess;
