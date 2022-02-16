import AdminEditProduct from 'components/Admin/AdminComponents/AdminEditProduct/AdminEditProduct'
import AdminHeader from 'components/Admin/Header/AdminHeader'
import AdminNav from 'components/Admin/Nav/AdminNav'
import React from 'react'

const AdminEditProductPage = () => {
  return (
    <main className='adminMain'>
      <div className="container-fluid">
        <AdminHeader header="Product" />
        <div className="row">
        <AdminNav/>
        <AdminEditProduct/>
        </div>
       
        </div>
    </main>

  )
}

export default AdminEditProductPage