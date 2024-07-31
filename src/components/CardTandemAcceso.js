import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./CardAcceso.css";
import image from "../images/acceso5.png";



const CardTandemAcceso = () => {
  return (
    <Card inverse className="cardi">
      <CardImg
        alt="Card image cap"
        src={image}
        className="imagenacceso"
      />
      <CardImgOverlay className="overlay">
        <CardSubtitle tag="h6"  className="cardsubtitule">
          <p className="eslogani">Acceso solo para empleados registrados</p>
          <Button color="warning" href='../Login' className="buttonacceso" style={{ position: 'absolute', bottom: '0',}}>
            <p className="text-center h3" >ACCEDE AQUI</p>
          </Button>
        </CardSubtitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CardTandemAcceso;