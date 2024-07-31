import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import "./QrComponent.css"
import CodigoQrNuevo from './CodigoQrNuevo';


function QRComponent({ onColorChange, onSizeChange }) {
    const [selectedColor, setSelectedColor] = useState('negro');
    const [selectedSize, setSelectedSize] = useState('pequeño');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        onColorChange(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        onSizeChange(event.target.value);
    };

    const getBorderColor = (color) => {
        switch(color) {
            case 'black':
                return 'black';
            case 'blue':
                return 'blue';
            case 'red':
                return 'red';
            default:
                return 'transparent';
        }
    };

    return (
        <div style={{
            textAlign:'center',
        }}>
            <h4 className='colorqr'>Selecciona el color de tu QR</h4>
            <br></br>
            <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr 1fr',
                columnGap: '15px',
            }}>

                    <label 
                        className='form-check-label' 
                        style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'
                        }}
                    >
                        <StaticImage 
                            src='../images/qrnegro.png' 
                            alt='qr negro' 
                            style={{
                                transition: 'all 0.3s',
                                padding: selectedColor === 'black' ? '10px' : '0',
                                border: selectedColor === 'black' ? `2px solid ${getBorderColor('black')}` : 'none'
                            }}
                        />
                        <input className='form-check-input'
                            type="radio"
                            value="black"
                            checked={selectedColor === 'black'}
                            onChange={handleColorChange}
                        />
                    </label>

                <label 
                    className='form-check-label' 
                    style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center'
                    }}
                >
                    <StaticImage 
                        src='../images/qrazul.png' 
                        alt='qr azul' 
                        style={{
                            transition: 'all 0.3s',
                            padding: selectedColor === 'blue' ? '10px' : '0',
                            border: selectedColor === 'blue' ? `2px solid ${getBorderColor('blue')}` : 'none'
                        }}
                    />
                    <input className='form-check-input'
                        type="radio"
                        value="blue"
                        checked={selectedColor === 'blue'}
                        onChange={handleColorChange}
                    />
                </label>
                <label 
                    className='form-check-label' 
                    style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center'
                    }}
                >
                    <StaticImage 
                        src='../images/qrrojo.png' 
                        alt='qr rojo' 
                        style={{
                            transition: 'all 0.3s',
                            padding: selectedColor === 'red' ? '10px' : '0',
                            border: selectedColor === 'red' ? `2px solid ${getBorderColor('red')}` : 'none'
                        }}
                    />
                    <input className='form-check-input'
                        type="radio"
                        value="red"
                        checked={selectedColor === 'red'}
                        onChange={handleColorChange}
                    />
                </label>
            </div>
            <h4 className='colorqr'>Selecciona el tamaño de tu QR</h4>
            <div className='colorqrr'>
                <label className='form-check-label'>
                    <input className='form-check-input'
                        type="radio"
                        value="100"
                        checked={selectedSize === '100'}
                        onChange={handleSizeChange}
                    />
                    Pequeño
                </label>
                <label className='form-check-label'>
                    <input className='form-check-input'
                        type="radio"
                        value="200"
                        checked={selectedSize === '200'}
                        onChange={handleSizeChange}
                    />
                    Mediano
                </label>
                <label className='form-check-label'>
                    <input className='form-check-input'
                        type="radio"
                        value="300"
                        checked={selectedSize === '300'}
                        onChange={handleSizeChange}
                    />
                    Grande
                </label>
            </div>
            <style jsx="true">
                {`
                    label {
                        display: block;
                        margin-bottom: 5px;
                    }
                    div {
                        margin-bottom: 10px;
                    }
                    input[type="radio"] {
                        margin-right: 5px;
                    }
                    .form-check-label:hover img {
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    );
}

export default QRComponent;