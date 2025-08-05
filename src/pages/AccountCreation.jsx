import Button from '../component/UI/Button';
import InputField from '../component/UI/InputField'

export default function AccountCreation({ prevStep }) {
    const handleBack = () => {
        prevStep();
    }
    return (
        <form
            className="w-full max-w-md p-6 m-5 bg-white rounded-md shadow-md space-y-6"
        >
            <h1 className='text-center p-4 text-xl font-bold'>
                Account Creation
            </h1>
            <div className='space-y-4'>
                <InputField placeholder='Enter Username' name='username' />
                <InputField type='password' placeholder='Enter Password' name='password' />
                <Button onClick={handleBack}>Back</Button>
                <Button>Submit</Button>
            </div>
        </form>
    )
}
