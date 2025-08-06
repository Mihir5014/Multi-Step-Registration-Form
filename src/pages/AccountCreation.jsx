import { useFormik } from 'formik';
import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'
import { step3Schema } from '../schemas';
import { useDispatch, useSelector } from 'react-redux';
import { addAccountInfo, resetForm } from '../features/form/formSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    password: '',
}

export default function AccountCreation({ prevStep, lastStep }) {
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const accountInfo = useSelector((state) => state.form.accountInfo);
    const reduxData = useSelector((state) => state.form);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues: accountInfo || initialValues,
        validationSchema: step3Schema,
        validateOnMount: true,
        onSubmit: (values) => {
            dispatch(addAccountInfo(values));

            const data = {
                ...reduxData.personalInfo,
                ...reduxData.addressInfo,
                ...values,
            }
            console.log("user data : ", data);

            setSubmit(true);
        }
    });

    useEffect(() => {
        if (submit) {
            dispatch(resetForm());
            alert('form submitted')
            lastStep();
        }
    }, [submit, navigate, lastStep]);

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Account Creation
            </h1>
            <div className='space-y-4'>
                <InputField
                    id="username"
                    placeholder='Enter UserName'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.username}
                    touched={touched.username}
                />
                <InputField
                    type='password'
                    id="password"
                    placeholder='Enter Password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                />
                <Button type='button' onClick={prevStep}>Back</Button>
                <Button type="submit" disabled={!isValid}>
                    submit
                </Button>
            </div>
        </form>
    )
}
