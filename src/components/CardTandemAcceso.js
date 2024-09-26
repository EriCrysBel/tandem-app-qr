import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./CardAcceso.css";
import { withPrefix } from "gatsby";

const CardTandemAcceso = () => {
  return (
    <Card inverse className="cardi">
        <CardSubtitle >
          <p className="eslogani">Acceso solo para empleados registrados</p>
          <Button color="warning" href={withPrefix('/Login')} className="buttonacceso">
            <p className="h6" >ACCEDE AQUI</p>
          </Button>
        </CardSubtitle>

    </Card>
  );
};

export default CardTandemAcceso;