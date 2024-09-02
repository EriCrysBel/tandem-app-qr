import React from 'react';
import TabsInput from './TabsInput/TabsInput';

const Step1 = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Introducción de la Data</h2>
            <label>Nombre:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label>Descripcion:</label>
            <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <TabsInput/>
            <label>Data:</label>
            <input
                type="text"
                value={formData.data}
                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            />
            
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;