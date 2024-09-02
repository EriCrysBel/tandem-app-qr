import React from 'react';
import CodigoQrNuevo from '../CodigoQrNuevo';

const GenStep4 = ({ formData, prevStep, submitForm }) => {
    return (
        <div>
            <h2>Step 4</h2>
            <h3>Revisión y confirmación de los datos</h3>
            <CodigoQrNuevo 
            datos={formData.data} 
            size={formData.size} 
            fgColor={formData.color}
            className="qrimage" />
            <ul>
                <li><strong>Nombre:</strong> {formData.name}</li>
                <li><strong>Descripcion:</strong> {formData.description}</li>
                <li><strong>Data:</strong> {formData.data}</li>
                <li><strong>Tamaño:</strong> {formData.size}</li>
                <li><strong>Color:</strong> {formData.color}</li>
            </ul>
            <button onClick={prevStep}>Back</button>
        </div>
    );
};

export default GenStep4;