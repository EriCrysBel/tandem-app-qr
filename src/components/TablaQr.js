import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {Table} from 'reactstrap';
import CodigoQrNuevo from '../components/CodigoQrNuevo';


function TablaQr({ url }) {
    const [qrCodes, setQrCodes] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchQrCodes = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setQrCodes(data.qr_codes);
                setMessage(data.message);
            } catch (error) {
                console.log('Error al buscar la lista de QR', error);
                console.error('Stack trace:', error.stack);
            }
        };
        fetchQrCodes();
    }, [url]);

    return (
        <>
        <div className='container'>
            <Table
            bordered
            borderless
            hover
            responsive>
                <thead>
                    <tr>
                      <th>Imagen</th>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Nombre_ref</th>
                        <th>Descripcion</th>
                        <th>Creado por</th>
                        <th>Fecha y hora de creación</th>
                    </tr>
                </thead>
                <tbody>
                    {qrCodes.map((qrCode) => (
                        <tr key={qrCode.id}>
                            <td><CodigoQrNuevo
                            datos={qrCode.data}/></td>
                            <td>{qrCode.id}</td>
                            <td>{qrCode.data}</td>
                            <td>{qrCode.nombre_ref}</td>
                            <td>{qrCode.description}</td>
                            <td>{qrCode.created_by}</td>
                            <td>{qrCode.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
            
        </>
    );
}

export default TablaQr;
