import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string().email("This is not a email address.").required("Email is a required field."),
    password: yup.string().required("Password is a required field.").min(8, "Password must be at least 8 characters."),
    passwordConfirm: yup.string().required("Confirm Password is a required field.").oneOf([yup.ref("password"), null], "Passwords must match."),
})

export default validationSchema;