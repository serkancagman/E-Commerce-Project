import React from "react";
import { Steps,Button } from "antd";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import { MdOutlineHomeWork } from "react-icons/md";
import checkoutStyle from "./style/checkout.module.css";
import { BsCart3 } from "react-icons/bs";
import { Header } from "components/Header/Header";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FooterMain } from "components/Footer/FooterMain";
import { ToOrderContext } from "context/ToOrderContext";
import successIcon from "images/paySuccess.png";
import { BsPersonLinesFill } from "react-icons/bs";
const OrderSuccess = () => {
  const { totalProducts, orderID, orderAddress } =
    React.useContext(ToOrderContext);
    const orderTotal = totalProducts.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <>
      <Header />
      <section className="checkoutMain">
        <div className="container-xxl">
          <div className={checkoutStyle.checkoutWrapper}>
            <div className={checkoutStyle.stepWrapper}>
              <Steps className="mb-5">
                <Steps.Step
                  status="finish"
                  title="Check Products"
                  icon={<BsCart3 />}
                />
                <Steps.Step
                  status="finish"
                  title="Order Address"
                  icon={<MdOutlineHomeWork />}
                />
                <Steps.Step
                  status="finish"
                  title="Payment"
                  icon={<RiSecurePaymentLine />}
                />
                <Steps.Step
                  status="finish"
                  title="Done"
                  icon={<SmileOutlined />}
                />
              </Steps>
            </div>
            <div className={checkoutStyle.orderSuccessWrapper}>
              <div className={checkoutStyle.orderSuccessInner}>
                <div className={checkoutStyle.orderSuccessHeader}>
                  <div className={checkoutStyle.successIcon}>
                    <img
                      src={successIcon}
                      alt="success"
                      className="img-fluid"
                    />
                  </div>
                  <div className={checkoutStyle.successText}>
                    <h3 className={checkoutStyle.successTitle}>
                      Thank you for your order!
                    </h3>
                    <p className={checkoutStyle.successOrderIDTitle}>
                      <span className={checkoutStyle.orderID}>Order ID:</span> #
                      {orderID}
                    </p>
                  </div>
                </div>
                <div className={checkoutStyle.orderSuccessBody}>
                  <div className="row g-3">
                    <div className="col-md-12 col-lg-6">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className={checkoutStyle.orderSuccessAddress}>
                            <h4
                              className={checkoutStyle.orderSuccessAddressTitle}
                            >
                              <MdOutlineHomeWork size={30} /> Order Address
                            </h4>
                            <div
                              className={checkoutStyle.orderSuccessAddressInner}
                            >
                              <ul
                                className={
                                  checkoutStyle.orderSuccessAddressList
                                }
                              >
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Country:{" "}
                                  </span>
                                  {orderAddress.country}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    City:{" "}
                                  </span>
                                  {orderAddress.city}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    State:{" "}
                                  </span>
                                  {orderAddress.stateName}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Address:{" "}
                                  </span>
                                  {orderAddress.address}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Zip Code:{" "}
                                  </span>
                                  {orderAddress.zipCode}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 h-100">
                          <div className={checkoutStyle.orderSuccessAddress}>
                            <h4
                              className={checkoutStyle.orderSuccessAddressTitle}
                            >
                              <BsPersonLinesFill size={30} /> Personal
                              Informations
                            </h4>
                            <div
                              className={checkoutStyle.orderSuccessAddressInner}
                            >
                              <ul
                                className={
                                  checkoutStyle.orderSuccessAddressList
                                }
                              >
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Name:{" "}
                                  </span>
                                  {orderAddress.firstName}{" "}
                                  {orderAddress.lastName}{" "}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Phone:{" "}
                                  </span>
                                  {orderAddress.phone}
                                </li>
                                <li className={checkoutStyle.orderAddressList}>
                                  <span className={checkoutStyle.addressTitle}>
                                    Email:{" "}
                                  </span>
                                  {orderAddress.email}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className={checkoutStyle.orderSuccessProducts}>
                        <h4 className={checkoutStyle.orderSuccessProductsTitle}>
                          <BsCart3 size={30} /> Order Products
                        </h4>
                        <div className={checkoutStyle.orderSuccessProductsInner}>
                          <ul className={checkoutStyle.orderSuccesProductList}>
                            {totalProducts.map((product, index) => (
                              <li key={index} className={checkoutStyle.orderSuccessProductListItem}>
                                    <div className="d-flex justify-content-start">
                                        <div className={checkoutStyle.orderSuccessProductImage}>
                                        <img src={product.photos[0]} alt="product" className="img-fluid" />
                                        </div>
                                        <div className={checkoutStyle.orderSuccessProductTitle}>
                                            <h6>{product.title}</h6>
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                          </ul>
                          <div className={checkoutStyle.orderSuccessTotal}>
                   
                                <h6 className={checkoutStyle.orderSuccessTotalTitle}>Total: <span className={checkoutStyle.orderProductTotal}>${orderTotal}</span></h6>
                       
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    <div className={checkoutStyle.orderSuccessButton}>
                        <Link to="/">
                            <Button className={checkoutStyle.orderSuccessButtonInner}>
                                <span className={checkoutStyle.orderSuccessButtonText}>Continue Shopping</span>
                            </Button>
                        </Link>
                    </div>
            </div>
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
};

export default OrderSuccess;
