import { getOrder } from "API/trendProductAPI";
import checkoutStyle from "./style/checkout.module.css";
import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
import { ShopCartContext } from "context/ShopCartContext";
import React from "react";
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import { ShoppingCartOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { MdOutlineHomeWork } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
const Checkout = () => {
  const { cartItems, setCartItems } = React.useContext(ShopCartContext);

  

  return (
    <>
      <Header />
      <section className="checkoutMain">
        <div className="container">
          <div className={checkoutStyle.checkoutWrapper}>
            <div className={checkoutStyle.checkoutHeader}>
              <h3 className={checkoutStyle.checkoutTitle}>Check Your Basket.</h3>
                </div>
                <div className={checkoutStyle.stepWrapper}>
                <Steps>
    <Steps.Step status="finish" title="Check Products" style={{color:"#000"}} icon={<BsCart3 />} />
    <Steps.Step status="finish" title="Order Address" icon={<MdOutlineHomeWork />} />
    <Steps.Step status="finish" title="Pay" icon={<RiSecurePaymentLine />} />
    <Steps.Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>
                </div>
          </div>
        </div>
      </section>

      <FooterMain />
    </>
  );
};

export default Checkout;
