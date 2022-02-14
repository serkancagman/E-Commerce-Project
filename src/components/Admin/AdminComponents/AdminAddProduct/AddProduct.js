import AdminFooter from "components/Admin/Footer/AdminFooter";
import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import addStyle from "./style/adminaddproduct.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useFormik } from "formik";
import { addProduct } from "API/trendProductAPI";
import validationSchema from "./AddProductValidation";
const AddProduct = () => {
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        title: "",
        price: "",
        description: "",
        photos: [""],
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          const addProductData = await addProduct({
            title: values.title,
            price: values.price,
            description: values.description,
            photos: JSON.stringify(values.photos),
          });
          console.log(addProduct);
        } catch (err) {
          console.log(err);
        }
        console.log(values);
      },
    });

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  return (
    <section className={addStyle.newProduct}>
      <div className={addStyle.newProductHeader}>
        <span className={addStyle.addTitle}>Add a new product</span>
        <IoIosAddCircleOutline className={addStyle.addIcon} />
      </div>
      <div className={addStyle.newProductForm}>
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item
            help={errors.title && touched.title && errors.title}
            validateStatus={errors.title && touched.title && "error"}
            label="Product Name"
            name="title"
          >
            <Input onChange={handleChange} onBlur={handleBlur} />
          </Form.Item>
          <Form.Item
            help={
              errors.description && touched.description && errors.description
            }
            validateStatus={
              errors.description && touched.description && "error"
            }
            label="Product Description"
            name="description"
          >
            <Input onChange={handleChange} onBlur={handleBlur} />
          </Form.Item>
          <Form.Item
            help={errors.price && touched.price && errors.price}
            validateStatus={errors.price && touched.price && "error"}
            label="Price"
            name="price"
          >
            <Input
              style={{ width: "30%" }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.List  name="names">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    label="Product Image"
                    
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      
                      noStyle
                      {...field}
                      
                    >
                      <Input
                      
                        value={values.photos}
                        name={`photos.${index}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter a image url..."
                        style={{ width: "70%" }}
                        
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="ms-1 dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item className="text-center">
                  <Button
                    type="dashed"
                    onClick={fields.length < 5 ? () => add() : null}
                  >
                    <IoIosAddCircleOutline className="me-1" /> Add Picture
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <div className="text-center w-100">
            <Button onClick={handleSubmit} type="primary">
              Add a new product{" "}
              <IoIosAddCircleOutline className={addStyle.addIconBtn} />{" "}
            </Button>
          </div>
        </Form>
      </div>

      <AdminFooter />
    </section>
  );
};

export default AddProduct;
