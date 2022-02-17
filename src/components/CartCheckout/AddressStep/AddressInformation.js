import React from "react";
import { Button, Form, Input, Select } from "antd";
import addressStyle from "../style/checkout.module.css";
import { countryCode } from "components/Helpers/PhoneCountryCode";
import Checkbox from "antd/lib/checkbox/Checkbox";
const AdressInformation = ({ setStep }) => {
  const { Option } = Select;

  const [selectValue, setSelectValue] = React.useState("");
  const [checkedBill, setCheckedBill] = React.useState(false);

  const handleCheckbox = (value) => {
    value === true ? setCheckedBill(true) : setCheckedBill(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        placeholder="Select Code"
        showSearch
        onChange={(value) => setSelectValue(value)}
        value={countryCode[0].dial_code}
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
      <Form>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <Form.Item label="First Name">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="Email">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="Phone Number">
              <Input
                name="phone"
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="Country">
              <Select showSearch style={{ width: "100%" }}>
                {countryCode.map((code, index) => {
                  return (
                    <Option
                      selected={code.dial_code === "+90"}
                      key={index}
                      value={code.name}
                    >{` ${code.flag} ${code.name}`}</Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-6">
            <Form.Item label="City">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12 col-lg-12">
            <Form.Item label="Address">
              <Input.TextArea name="address" showCount maxLength={200} />
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
              <Form.Item label="Bill Address">
                <Input.TextArea name="address" showCount maxLength={200} />
              </Form.Item>
            </div>
          )}
          <div className="col-lg-12">
            <div className={addressStyle.addressButtons}>
              <Button
                onClick={() => setStep(0)}
                className={addressStyle.checkoutBackBtn}
              >
                Back to Check Products
              </Button>
              <Button
                onClick={() => setStep(2)}
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
