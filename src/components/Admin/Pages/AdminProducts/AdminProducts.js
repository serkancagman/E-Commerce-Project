import React from "react";
import productStyle from "./style/adminproducts.module.css";
import "antd/dist/antd.min.css";
import { Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteProduct, getProductByCategory } from "API/trendProductAPI";

const AdminProducts = () => {
  const { data, isError, isLoading, error } = useQuery(
    "admin:products",
    getProductByCategory
  );
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = React.useMemo(() => {
    return [
      {
        title: "ID",
        dataIndex: "_id",
        key: "_id",
        render: (idTitle) => <a href={idTitle}>Go Product</a>,
      },
      {
        title: "Picture",
        dataIndex:"photos",
        key:"photos",
        render:(photo,_id) => <Link to={_id} > <img style={{width:"50px"}} src={photo[0]} alt="..."/></Link>,
        
      },
      {
        title: "Name",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price) => <span>$ {price}</span>,
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              placement="left"
              okText="Delete"
              cancelText="Close"
              title="Are you sure delete this product?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("delete success");
                  },
                });
              }}
            >
              <Link style={{ marginLeft: "10px" }} to="#">
                Delete
              </Link>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <section id="adminProducts" className={productStyle.mainSection}>
      <Table columns={columns} dataSource={data} rowKey="_id" />
    </section>
  );
};

export default AdminProducts;
