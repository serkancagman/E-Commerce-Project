import { getProductDetail, updateProduct } from "API/trendProductAPI";
import AdminFooter from "components/Admin/AdminComponents/Footer/AdminFooter";
import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import addStyle from "../AdminAddProduct/style/adminaddproduct.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Formik } from "formik";
import validationSchema from "./EditProductValidation";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AiOutlineEdit } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
const AdminEditProduct = () => {
  const { product_id } = useParams();
  const { data, isLoading, error } = useQuery(
    ["admin:product", product_id],
    () => getProductDetail(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  console.log(data);

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

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const updateData = await updateProduct(
        {
          title: values.title,
          price: values.price,
          description: values.description,
          photos: values.photos,
        },
        product_id
      );
      console.log(updateData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        title: data.title,
        price: data.price,
        description: data.description,
        photos: data.photos,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <section id="editProduct" className="col-md-12 col-lg-10">
          <div className={addStyle.newProductHeader}>
            <span className={addStyle.addTitle}>Edit Product</span>
            <AiOutlineEdit className={addStyle.addIcon} />
          </div>
          <div className={addStyle.newProductForm}>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item
                help={errors.title && touched.title && errors.title}
                validateStatus={errors.title && touched.title && "error"}
                label="Product Name"
              >
                <Input
                  disabled={isSubmitting}
                  onChange={handleChange}
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={
                  errors.description &&
                  touched.description &&
                  errors.description
                }
                validateStatus={
                  errors.description && touched.description && "error"
                }
                label="Product Description"
              >
                <Input
                  disabled={isSubmitting}
                  onChange={handleChange}
                  name="description"
                  value={values.description}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={errors.price && touched.price && errors.price}
                validateStatus={errors.price && touched.price && "error"}
                label="Price"
              >
                <Input
                  disabled={isSubmitting}
                  name="price"
                  value={values.price}
                  style={{ width: "30%" }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.List name="names">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {values.photos.map((field, index) => (
                      <Form.Item
                        label="Product Image"
                        required={false}
                        key={index}
                      >
                        <Form.Item noStyle {...field}>
                          <Input
                            value={field}
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
                            onClick={() => remove(index)}
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
                  Update Product{" "}
                  <GrDocumentUpdate style={{color:"#fff"}} className="text-light ms-2" />
                </Button>
              </div>
            </Form>
          </div>

          <AdminFooter />
        </section>
      )}
    </Formik>
  );
};

export default AdminEditProduct;
