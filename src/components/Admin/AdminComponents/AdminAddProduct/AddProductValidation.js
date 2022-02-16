import * as Yup from 'yup';


 const validationSchema = Yup.object({
    title: Yup.string().required('Product Name is required'),
    description: Yup.string().required('Product Description is required'),
    price: Yup.number().required('Product Price is required'),
    photos: Yup.array().required('Product Image is required'),
    

})
export default validationSchema;