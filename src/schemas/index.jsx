import * as yup from 'yup';

export const step1Schema = yup.object({
    firstName: yup.string().min(2).max(10).required('Please enter First Name'),
    lastName: yup.string().min(2).max(10).required('Please enter Last Name'),
    email: yup.string().email('invalid email').required('email required'),
});

export const step2Schema = yup.object({
    streetAddress: yup.string().required('Street address is required'),
    city: yup.string().required('city is required'),
    state: yup.string().required('state is required'),
    zipcode: yup.string().matches(/^\d{6}$/, 'Zip code must be exactly 6 digits').required('Zip code is required'),
})

export const step3Schema = yup.object({
    username: yup.string().min(5).max(10).required('User Name is required'),
    password: yup.string().min(8).max(15).required('Password is required'),
})