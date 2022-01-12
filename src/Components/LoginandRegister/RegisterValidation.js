import * as yup from 'yup';

const loginValidate = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordConfirm: yup.string().min(8,"Password must be at least 8 characters").required("Password confirm is a required field").oneOf([yup.ref("password")],"passwords are not the same")
});

export default loginValidate;