import React from 'react'
import {QRCodeSVG} from 'qrcode.react';


const CodigoQrNuevo = ({datos,size,fgColor}) => {

  return (
    <div>
      <QRCodeSVG
      className='qrimage'
  value={datos}
  size={156}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "https://static.arteinformado.com/resources/app/docs/organizacion/19/102219/9xbs0s31.jpeg",
    x: undefined,
    y: undefined,
    height: 30,
    width: 30,
    excavate: true,
  }}
/>
    </div>
  )
}

export default CodigoQrNuevo

