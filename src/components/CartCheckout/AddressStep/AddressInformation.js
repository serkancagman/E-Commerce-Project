import React from "react";
import { Button, Form, Input, Select } from "antd";
import addressStyle from "../style/checkout.module.css";
import { countryCode } from "components/Helpers/PhoneCountryCode";
import Checkbox from "antd/lib/checkbox/Checkbox";
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
import { useFormik } from "formik";
import validationSchema from "./AddressValidation";
import Lottie from "lottie-react";
import checkoutAnimation from "./Progress/checkoutAnimation.json";
import { ToOrderContext } from "context/ToOrderContext";
const AdressInformation = () => {
=======
const AdressInformation = ({ setStep }) => {
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
  const { Option } = Select;
  const [livePhoneCode, setLivePhoneCode] = React.useState("");
  const [liveCountryName, setLiveCountryName] = React.useState("");
  const [checkedBill, setCheckedBill] = React.useState(false);
  const [checkedShip, setCheckedShip] = React.useState(false);
  const [checkoutLoader, setCheckoutLoader] = React.useState(false);
  const { orderAddress, setOrderAddress,setGetStep } = React.useContext(ToOrderContext);

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        countryCode: livePhoneCode,
        phone: "",
        country: liveCountryName,
        stateName: "",
        zipCode: "",
        address: "",
        city: "",
        billAddress: "",
      },
      validationSchema,
      onSubmit: (values) => {
        values.phone = values.countryCode + values.phone;
        values.country = liveCountryName;
        
        setOrderAddress(values);
        setCheckedBill(true);
        setCheckoutLoader(true)
        setTimeout(() => {
          setCheckoutLoader(false)
          setGetStep(2)}, 2000);
      
      },
    });

<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js

     
  React.useEffect(() => {
    const getCountryName = countryCode.filter(
      (country) => country.dial_code === livePhoneCode
    );

    setLiveCountryName(getCountryName.length > 0 && getCountryName[0].name);
  }, [livePhoneCode]);

=======
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
  const handleCheckbox = (value) => {
    value === true ? setCheckedBill(true) : setCheckedBill(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
      name="countryCode"
        placeholder="Select Code"
        showSearch
        onChange={(value) => setLivePhoneCode((values.countryCode = value))}
        onBlur={handleBlur}
        
        value={values.countryCode}
        style={{
          width: 120,
        }}
      >
        {countryCode.map((code, index) => {
          return (
            <Option
            
              key={index}
              value={code.dial_code}
            >{` ${code.flag} ${code.dial_code}`}</Option>
          );
        })}
      </Select>
    </Form.Item>
  );
  return (
    <div className={addressStyle.addressWrapper}>
      {checkoutLoader && 
      <div className={addressStyle.checkoutLoader}>
      <div className="d-flex justify-content-center align-items-center h-100 flex-column">
      <div className={addressStyle.checkoutAnimation}>
      <Lottie width="100" loop="true" animationData={checkoutAnimation} />
      </div>
      </div>
      </div>}
      <Form onSubmitCapture={handleSubmit}>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <Form.Item help={errors.firstName && touched.firstName && errors.firstName} validateStatus={errors.firstName && touched.firstName && "error"} label="First Name">
              <Input name="firstName" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item help={errors.lastName && touched.lastName && errors.lastName} validateStatus={errors.lastName && touched.lastName && "error"} label="Last Name">
              <Input name="lastName" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item help={errors.email && touched.email && errors.email} validateStatus={errors.email && touched.email && "error"} label="Email">
              <Input name="email" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
            <Form.Item help={errors.phone && touched.phone && errors.phone} validateStatus={errors.phone && touched.phone && "error"} label="Phone Number">
              <Input
                name="phone"
                onChange={handleChange}
=======
            <Form.Item label="Phone Number">
              <Input
                name="phone"
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="Country">
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
              <Select
                name="country"
                onChange={(value) => setLiveCountryName(value)}
                value={liveCountryName}
                showSearch
                style={{ width: "100%" }}
              >
                {countryCode.map((code, index) => {
                  return (
                    <Option
=======
              <Select showSearch style={{ width: "100%" }}>
                {countryCode.map((code, index) => {
                  return (
                    <Option
                      selected={code.dial_code === "+90"}
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
                      key={index}
                      value={code.name}
                    >{` ${code.flag} ${code.name}`}</Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
            <Form.Item help={errors.city && touched.city && errors.city} validateStatus={errors.city && touched.city && "error"} label="City">
              <Input name="city" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item help={errors.stateName && touched.stateName && errors.stateName} validateStatus={errors.stateName && touched.stateName && "error"} label="State / Province">
              <Input name="stateName" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item help={errors.zipCode && touched.zipCode && errors.zipCode} validateStatus={errors.zipCode && touched.zipCode && "error"} label="Postal / Zip Code">
              <Input name="zipCode" onChange={handleChange} />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-12">
            <Form.Item help={errors.address && touched.address && errors.address} validateStatus={errors.address && touched.address && "error"} label="Address">
              <Input.TextArea
                onChange={handleChange}
                name="address"
                showCount
                maxLength={200}
              />
=======
            <Form.Item label="City">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-12">
            <Form.Item label="Address">
              <Input.TextArea name="address" showCount maxLength={200} />
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
            </Form.Item>
          </div>
          <div className="col-lg-12">
            <div className={addressStyle.billAddressCheckBox}>
              <Form.Item>
                <Checkbox
                  name="billCheckbox"
                  onChange={(value) => handleCheckbox(value.target.checked)}
                >
                  {" "}
                  Send my bill to another address.
                </Checkbox>
              </Form.Item>
            </div>
          </div>
          {checkedBill && (
            <div className="col-md-12 col-lg-12">
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
              <Form.Item help={errors.billAddress && touched.billAddress && errors.billAddress} validateStatus={errors.billAddress && touched.billAddress && "error"} label="Bill Address">
                <Input.TextArea
                  name="billAddress"
                  onChange={handleChange}
                  showCount
                  maxLength={200}
                />
=======
              <Form.Item label="Bill Address">
                <Input.TextArea name="address" showCount maxLength={200} />
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
              </Form.Item>
            </div>
          )}
          <div className="col-lg-12">
            <div className={addressStyle.addressButtons}>
<<<<<<< HEAD:src/components/CartCheckout/AddressInformation.js
              <Button className={addressStyle.checkoutBackBtn}>
                Back to Check Products
              </Button>
              <Button
              type="submit"
                onClick={handleSubmit}
=======
              <Button
                onClick={() => setStep(0)}
                className={addressStyle.checkoutBackBtn}
              >
                Back to Check Products
              </Button>
              <Button
                onClick={() => setStep(2)}
>>>>>>> product-slider:src/components/CartCheckout/AddressStep/AddressInformation.js
                className={`mx-1 ${addressStyle.continueBtn}`}
              >
                Save Address & Continue
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AdressInformation;
