import React from "react";
import securePay from "images/securePay.png";
import payStyle from "../style/checkout.module.css";
import cardChip from "images/creditCardChip.png";
import contacless from "images/contactless.png";
import PaymentForm from "./PaymentForm";
import masterCardSVG from "images/mastercard.svg";
import maestroCardSVG from "images/maestro.svg";
import Lottie from "lottie-react";
import dinersCardSVG from "images/diners.svg";
import { ToOrderContext } from "context/ToOrderContext";
import visaCardSVG from "images/visa.svg";
import paymentSuccess from "../Progress/paymentSuccess.json";
import paymentProcess from "../Progress/payProcess.json";
import { PaymentFormContext } from "context/PaymentFormContext";
const Payment = () => {
  const { paymentFormItem, cardType } = React.useContext(PaymentFormContext);
  const {paymentStatus, payProcess} = React.useContext(ToOrderContext)
  const [cardIcon, setCardIcon] = React.useState();


  React.useEffect(() => {
    if (cardType === "Mastercard") {
      setCardIcon(masterCardSVG);
    } else if (cardType === "Visa") {
      setCardIcon(visaCardSVG);
    } else if (cardType === "Maestro") {
      setCardIcon(maestroCardSVG);
    } else if (cardType === "Diners Club") {
      setCardIcon(dinersCardSVG);
    } else if (cardType === "") {
      setCardIcon("");
    }
  }, [cardType]);

  return (
    <div className={payStyle.paymentWrapper}>
      {paymentStatus && (
          <div className={payStyle.payTimeOut}>
            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
              <div className={payStyle.paymentAnimation}>
                <Lottie
                  width="100%"
                  delay={1000}
                  loop="false"
                  animationData={paymentSuccess}
                />
              </div>
            </div>
          </div>
        )}
        {payProcess && (
          <div className={payStyle.payStatus}>
            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
              <div className={payStyle.paymentAnimation}>
                <Lottie
                  width="100"
                  delay={1000}
                  loop="false"
                  animationData={paymentProcess}
                />
              </div>
            </div>
          </div>
        )}
      <div className="container-xxl">
        <div className="d-flex justify-content-center mb-4 align-items-center">
          <div className={payStyle.paymentHeader}>
            <img className="img-fluid" src={securePay} alt="..." />
          </div>
        
          
        </div>
        <div className="row justify-content-center g-3">
          <div className="col-lg-6 col-md-12 text-center">
            <div className={payStyle.paymentCard}>
              <div className={payStyle.paymentCardInner}>
                <div className={payStyle.paymentCardArea}>
                  <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-between m-2 align-items-center">
                      <div className={payStyle.paymentCardChip}>
                        <div className="d-flex  align-items-center">
                          <img className="img-fluid" src={cardChip} alt=".." />
                          <img
                            className={payStyle.contactlessIcon}
                            alt="..."
                            src={contacless}
                          />
                        </div>
                      </div>

                      {cardType && (
                        <img
                          className={payStyle.cardBrandIcon}
                          src={cardIcon}
                          alt="..."
                        />
                      )}
                    </div>
                    <div className={payStyle.cardNumberArea}>
                      <label
                        className={payStyle.cardTitles}
                        htmlFor="cardNumberShow"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        className={payStyle.cardNumberShow}
                        id="cardNumberShow"
                        placeholder="**** **** **** ****"
                        value={paymentFormItem.paymentForm.cardNumber}
                        disabled
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-column justify-content-center text-start">
                        <label
                          className={payStyle.cardTitles}
                          htmlFor="cardNameShow"
                        >
                          Card Holder
                        </label>
                        <input
                          type="text"
                          className={payStyle.cardNameShow}
                          id="cardNameShow"
                          placeholder="NAME SURNAME"
                          disabled
                          value={
                            paymentFormItem.paymentForm.fullName === " "
                              ? ""
                              : paymentFormItem.paymentForm.fullName
                          }
                        />
                      </div>

                      <div className="d-flex flex-column justify-content-center text-start">
                        <label
                          className={payStyle.cardTitles}
                          htmlFor="cardNameShow"
                        >
                          Expires
                        </label>
                        <input
                          type="text"
                          className={payStyle.cardExpireShow}
                          id="cardNameShow"
                          placeholder="MM/YY"
                          disabled
                          value={paymentFormItem.paymentForm.expireDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={payStyle.paymentCardBack}>
                  <div className={payStyle.paymentCardBackInner}>
                    <div className={payStyle.paymentCardCVVArea}>
                      <div className={payStyle.paymentCardCVVFlex}>
                        <label
                          className={payStyle.cardTitles}
                          htmlFor="cardCVV"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          className={payStyle.cardCVV}
                          id="cardCVV"
                          placeholder="* * *"
                          disabled
                          value={paymentFormItem.paymentForm.cvv}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
