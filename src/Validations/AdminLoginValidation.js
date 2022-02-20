import * as Yup from 'yup';
 
export const validationSchema = Yup.object({
    email: Yup.string().email("This is not a email address.").required("Email is required."),
    password: Yup.string().min(8).required("Password is required."),
})