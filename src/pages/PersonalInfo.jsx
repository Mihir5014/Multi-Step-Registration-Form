import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'

export default function PersonalInfo({ nextStep }) {
    const handleNext = () => {
        nextStep();
    }
    return (
        <form
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Enter Personal Details
            </h1>
            <div className='space-y-4'>
                <InputField placeholder='Enter First Name' name='firstName' />
                <InputField placeholder='Enter Last Name' name='lastName' />
                <InputField type='text' placeholder='Enter Email Address' name='email' />
                <Button onClick={handleNext}>Next</Button>
            </div>

        </form>

    )
}
