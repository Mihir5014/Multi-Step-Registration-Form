import { useFormik } from 'formik';
import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'
import { step2Schema } from '../schemas';

const initialValues = {
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
}

export default function AddressInfo({ nextStep, prevStep }) {

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: step2Schema,
        validateOnMount: true,
        onSubmit: (values) => {
            console.log("address ", values);
            nextStep();
        }
    });

    const handleBack = () => {
        prevStep();
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Enter Address Details
            </h1>
            <div className='space-y-4'>
                <InputField
                    id="streetAddress"
                    placeholder='Enter Street Address'
                    name='streetAddress'
                    value={values.streetAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.streetAddress}
                    touched={touched.streetAddress}
                />
                <InputField
                    id="city"
                    placeholder='Enter City'
                    name='city'
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city}
                    touched={touched.city}
                />
                <InputField
                    id="state"
                    placeholder='Enter State'
                    name='state'
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.state}
                    touched={touched.state}
                />
                <InputField
                    id="zipcode"
                    placeholder='Enter zipcode'
                    name='zipcode'
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.zipcode}
                    touched={touched.zipcode}
                />
                <Button type='button' onClick={handleBack}>Back</Button>
                <Button type="submit" disabled={!(isValid)}>
                    Next
                </Button>
            </div>
        </form>
    )
}
