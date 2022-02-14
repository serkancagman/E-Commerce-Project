import AdminFooter from "components/Admin/Footer/AdminFooter";
import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { MinusCircleOutlined} from '@ant-design/icons';
import addStyle from "./adminaddproduct.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useFormik } from "formik";
const AddProduct = () => {

  const{handleSubmit,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues:{
      title:"",
      price:"",
      description:"",
      photos:[],
    },
    onSubmit:(values)=>{
      console.log(values);
    }
  })



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
        <Form {...formItemLayout} onSubmit={handleSubmit} >
          <Form.Item label="Product Name" name="title">
            <Input onChange={handleChange} onBlur={handleBlur}  />
          </Form.Item>
          <Form.Item label="Product Description" name="description">
            <Input onChange={handleChange} onBlur={handleBlur} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                type: "number",
              },
            ]}
          >
            <InputNumber onChange={handleChange} onBlur={handleBlur} />
          </Form.Item>
          <Form.List
        name="names"
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                
                label={"Product Image"}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  name={fields.length > 1 ? [field.name, "photos"] : "photos"}
                  noStyle
                >
                  <Input onChange={handleChange} onBlur={handleBlur} placeholder="Enter a image url..." style={{ width: '60%' }} />
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
                onClick={() => add()}
              
                
              >
               <IoIosAddCircleOutline className="me-1" />  Add Picture
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
