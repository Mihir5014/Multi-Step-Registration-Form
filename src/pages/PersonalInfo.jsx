import { useFormik } from 'formik';
import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'
import { step1Schema } from '../schemas'
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalInfo } from '../features/form/formSlice';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
}

export default function PersonalInfo({ nextStep }) {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state) => state.form.personalInfo);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = useFormik({
        initialValues: personalInfo || initialValues,
        validationSchema: step1Schema,
        validateOnMount: true,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log("submit", values);
            dispatch(addPersonalInfo(values));
            nextStep();
        }
    });



    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Enter Personal Details
            </h1>
            <div className='space-y-4'>
                <InputField
                    id="firstName"
                    placeholder='Enter First Name'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    touched={touched.firstName}
                />
                <InputField
                    id="lastName"
                    placeholder='Enter Last Name'
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={errors.lastName}
                    touched={touched.lastName}
                />
                <InputField
                    id="email"
                    placeholder='Enter Email Address'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                />

                <Button type="submit" disabled={!isValid}>
                    Next
                </Button>

            </div>

        </form>

    )
}
