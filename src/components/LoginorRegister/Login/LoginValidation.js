import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('This is not a email address.').required('Email is required.'),
    password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
})

export default validationSchema;