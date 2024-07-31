import React from "react"
import  { Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import ButtonModalTandem from "./ButtonModalTandem"
import "./CardUsos.css"

import CarruselButtonTandem from "./CarruselButtonTandem"

const CardTandemUsos = ()=>{

return (
<Card >
  <CarruselButtonTandem/>
  <CardBody className="card">
    <CardTitle tag="h5" className='eslogan '>
    <h3><strong>Vive una experiencia única</strong> visita Aranjuez</h3>
    </CardTitle>
    
    <CardSubtitle
      className="text-muted " tag="h6">
      <h2 className='eslogan2'>GENERADOR DE CÓDIGOS QR</h2>
    </CardSubtitle>
    {/* <ButtonModalTandem className='buttondeps'/> */}
  </CardBody>
</Card>
)
}
export default CardTandemUsos