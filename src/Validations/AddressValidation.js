import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().min(2,"First name must be more than 2 characters").required('First name is required'),
    lastName: Yup.string().min(2,"Last name must be more than 2 characters").required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().min(8,"Phone number must be more than 10 characters").required('Phone number is required'),
    country: Yup.string(),
    address: Yup.string().min(10,"Address must be more than 10 characters").required('Address is required'),
    city: Yup.string().min(2,"City must be more than 2 characters").required('City is required'),
    stateName: Yup.string().min(2,"State must be more than 2 characters").required('State is required'),
    zipCode: Yup.string().min(2,"Zip code must be more than 2 characters").required('Zip code is required'),
    billAddress: Yup.string().min(10,"Address must be more than 10 characters"),


})

export default validationSchema;    