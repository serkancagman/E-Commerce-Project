import React from "react";
import securePay from "images/securePay.png";
import payStyle from "../style/checkout.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import cardChip from "images/creditCardChip.png";
import contacless from "images/contactless.png";
import PaymentForm from "./PaymentForm";
import { PaymentFormContext } from "context/PaymentFormContext";
const Payment = () => {
  const {paymentFormItem, setPaymentFormItem} = React.useContext(PaymentFormContext)
  const [payTime, setPayTime] = React.useState(false);

  const formatRemainingTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${minutes}:${String(seconds)}`;
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">end</div>;
    }
    return formatRemainingTime(remainingTime);
  };
  return (
    <div className={payStyle.paymentWrapper}>
      <div className="container-xxl">
        <div className="d-flex justify-content-center mb-4 align-items-center">
          <div className={payStyle.paymentHeader}>
            <img className="img-fluid" src={securePay} alt="..." />
          </div>
          <div className={payStyle.payCounter}>
          <CountdownCircleTimer
    isPlaying
    duration={300}
    size={80}
    strokeWidth={5}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {renderTime}
  </CountdownCircleTimer>
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
                        <img className="img-fluid" src={cardChip} alt=".." />
                      </div>

                      <img
                        className={payStyle.contactlessIcon}
                        alt="..."
                        src={contacless}
                      />
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
                          value={paymentFormItem.paymentForm.fullName ? paymentFormItem.paymentForm.fullName : ""}
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
            <PaymentForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
