import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'

export default function AddressInfo({ nextStep, prevStep }) {
    const handleNext = () => {
        nextStep();
    }
    const handleBack = () => {
        prevStep();
    }
    return (
        <form
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Enter Address Details
            </h1>
            <div className='space-y-4'>
                <InputField placeholder='Enter Street Address' name='streetAddress' />
                <InputField placeholder='Enter City' name='city' />
                <InputField placeholder='Enter State' name='state' />
                <InputField placeholder='Enter Zip Code' name='zipcode' />
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </form>
    )
}
