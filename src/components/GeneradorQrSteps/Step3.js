import React from 'react';

const Step3 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <h3>Selecciona el tamaño de tu QR</h3>
            <label>Size:</label>
            <input
                type="number"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            />
            <label>Logotipo:</label>
            <input
                type="checkbox"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step3;