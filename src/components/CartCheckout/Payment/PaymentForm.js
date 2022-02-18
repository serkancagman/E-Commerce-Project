import { Button, Form, Input } from "antd";
import React from "react";
import { useFormik } from "formik";
import { PaymentFormContext } from "context/PaymentFormContext";
import validationSchema from "./PaymentValidation";
const PaymentForm = () => {
  const { paymentFormItem, setPaymentFormItem } =
    React.useContext(PaymentFormContext);

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        cardNumber: "",
        firstName: "",
        lastName: "",
        cardHolderName: "",
        expireDate: "",
        cvv: "",
      },
        validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  React.useEffect(() => {
    let formattedCardNumber = values.cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(" ");
    }
    let formattedExpireDate = values.expireDate.replace(/[^\d]/g, "");
    formattedExpireDate = formattedExpireDate.substring(0, 4);
    let expireDateSections = formattedExpireDate.match(/\d{1,2}/g);
    if (expireDateSections !== null) {
        formattedExpireDate = expireDateSections.join("/");
    }
    if (values.cardNumber !== formattedCardNumber) {
        values.cardNumber = formattedCardNumber;
      }
    setPaymentFormItem({
      paymentForm: {
        cardNumber: formattedCardNumber,
        fullName:
          values.firstName.toUpperCase() + " " + values.lastName.toUpperCase(),
        expireDate: formattedExpireDate,
        cvv: values.cvv,
      },
    });
  }, [values]);

  return (
    <Form>
      <div className="d-flex justify-content-between">
        <Form.Item  help={errors.firstName && touched.firstName && errors.firstName} validateStatus={errors.firstName && touched.firstName && "error"} label="First Name">
          <Input
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item  help={errors.lastName && touched.lastName && errors.lastName} validateStatus={errors.lastName && touched.lastName && "error"} label="Last Name ">
          <Input
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
      </div>
      <Form.Item  help={errors.cardNumber && touched.cardNumber && errors.cardNumber} validateStatus={errors.cardNumber && touched.cardNumber && "error"} label="Card Number">
        <Input
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          name="cardNumber"
          placeholder="**** **** **** ****"
          type="text"
          onChange={handleChange}
          value={paymentFormItem.paymentForm.cardNumber}
          onBlur={handleBlur}
        />
      </Form.Item>
      <div className="d-flex justify-content-between align-items-center">
        <Form.Item  help={errors.expireDate && touched.expireDate && errors.expireDate} validateStatus={errors.expireDate && touched.expireDate && "error"} label="Expiry Date">
          <Input
            value={paymentFormItem.paymentForm.expireDate}
            name="expireDate"
            placeholder="MM/YY"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item  help={errors.cvv && touched.cvv && errors.cvv} validateStatus={errors.cvv && touched.cvv && "error"} label="CVV">
          <Input
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            name="cvv"
            maxLength={3}
            placeholder="***"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
      </div>
      <Button type="primary" htmlType="submit" onClick={handleSubmit}>submit</Button>
    </Form>
  );
};

export default PaymentForm;
