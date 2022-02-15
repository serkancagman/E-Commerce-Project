
import AdminHeader from 'components/Admin/Header/AdminHeader'
import AdminNav from 'components/Admin/Nav/AdminNav'
import AddProduct from 'components/Admin/AdminComponents/AdminAddProduct/AddProduct'
import React from 'react'

const AdminAddProductPage = () => {
  return (
    <main className='adminMain'>
      <AdminHeader header="Product" />
      <div className="container-fluid">

        <div className="row justify-content-center">
  
        <AdminNav/>
    <AddProduct/>
        </div>
      </div>
  
    
    </main>
  )
}

export default AdminAddProductPage