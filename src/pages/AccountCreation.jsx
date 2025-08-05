import { useFormik } from 'formik';
import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'
import { step3Schema } from '../schemas';

const initialValues = {
    username: '',
    password: '',
}

export default function AccountCreation({ prevStep }) {

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: step3Schema,
        validateOnMount: true,
        onSubmit: (values) => {
            console.log("submit", values);
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
                <Button type='button' onClick={handleBack}>Back</Button>
                <Button type="submit" disabled={!(isValid)}>
                    submit
                </Button>
            </div>
        </form>
    )
}
