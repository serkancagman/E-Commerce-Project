import * as Yup from 'yup';

const PaymentValidation = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    cardNumber: Yup.string().required('Card Number is required').min(19, 'Card Number must be 16 characters'),
    expireDate: Yup.string().required('Expire Date is required').min(5, 'Expire Date must be 4 characters'),
    cvv: Yup.string().required('CVV is required').min(3, 'CVV must be 3 characters')
})

export default PaymentValidation;