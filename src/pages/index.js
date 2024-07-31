import * as React from "react"
import NavbarInicio from "../components/NavbarInicio"
import CardTandemAcceso from "../components/CardTandemAcceso"
import CardTandemUsos from "../components/CardTandemUsos"
import FooterInicio from "../components/FooterInicio"

import Login from './Login';
import AreaPersonal from './AreaPersonal';
const Index = () => {
  
    return (
    <>
      <NavbarInicio/>
      
      <div className="row text-center" style={{
        minHeight:'40vh',
      }}>
        <div className="col-12 col-sm-12 col-md-6 " style={{
        
        
      }}>
          <CardTandemUsos/>
        </div>
        <div className="col-12 col-sm-12 col-md-6 mt-3">
          <CardTandemAcceso/>
        </div>
      </div>
      <FooterInicio/>
    </>
    )
  }



export default Index