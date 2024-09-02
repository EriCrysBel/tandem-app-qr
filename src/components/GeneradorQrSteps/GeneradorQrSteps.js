import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';


const GeneradorQrSteps= () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        data: '',
        color: '',
        logo:'',
        size: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const submitForm = () => {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Formulario enviado', formData);
    };

    switch (step) {
        case 1:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 4:
            return <Step4 formData={formData} prevStep={prevStep} submitForm={submitForm} />;
        default:
            return <div>Error: paso no válido</div>;
    }
};

export default GeneradorQrSteps;