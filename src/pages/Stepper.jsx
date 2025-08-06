import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import AccountCreation from "./AccountCreation";

const steps = ['Personal Information', 'Address Information', 'Account Creation'];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const lastStep = () => {
        setCurrentStep(1);
    }

    return <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
            <div className='mb-4 flex justify-around text-sm text-gray-600'>
                {steps.map((s, i) => (
                    <div key={i} className={`text-center ${i + 1 === currentStep ? 'text-blue-600 font-semibold' : 'border-gray-300'}`}>
                        Step {i + 1}: {s}
                    </div>
                ))}
            </div>

            <div className='max-w-2xl mx-auto flex justify-center items-center'>
                {currentStep === 1 && <PersonalInfo nextStep={nextStep} />}
                {currentStep === 2 && <AddressInfo nextStep={nextStep} prevStep={prevStep} />}
                {currentStep === 3 && <AccountCreation prevStep={prevStep} lastStep={lastStep} />}
            </div>
        </div>
    </div>

}
