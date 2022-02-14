
import AdminHeader from 'components/Admin/Header/AdminHeader'
import AdminNav from 'components/Admin/Nav/AdminNav'
import AddProduct from 'components/Admin/Pages/AdminAddProduct/AddProduct'
import React from 'react'

const AdminAddProductPage = () => {
  return (
    <main className='adminMain'>
    <AdminHeader header="Product" />
    <AdminNav/>
    <AddProduct/>
    
    </main>
  )
}

export default AdminAddProductPage