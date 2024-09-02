import React from 'react';

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <h3>Selecciona el color de tu QR</h3>
            <label>Color:</label>
            <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;