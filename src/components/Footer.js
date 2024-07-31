import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const footerStyles = {
    width: "100%",
    maxHeight:"70px",
    backgroundColor: "#333",
    padding: "0.5em",
    display: "grid",
    gridTemplateAreas: `"s1 s2 s22 s3 s31 s32 s33 s34 s4 s5"`,
    columnGap: "20px",
    padding: "0.5em",

    textAlign:"center",
    justifyContent: "center",
    alignItems: "center",
    fontSize:'12px',
  }
  const footerInnerStyles = {

  }
  const logoStyles = {
    width: "150px",
  }
  const smallerLogoStyles = {
    width: "100px",
    marginRight: "0.5em",
  }
  const iconStyles = {
    height: "30px",
    width: "30px",
    marginRight: "2em",
  }
  const linkStyles = {
    color: "#E9E9E9",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "Georgia, serif",
    fontWeight: "normal",
    margin: "0.5em",
  }
  return (
    <footer style={footerStyles} >
          <StaticImage style={{ gridArea: "s1", width:"200px", height:"50px" }} src="../images/ministerio.svg" alt="Ministerio" />
          <StaticImage src="../images/logoblanco.svg" style={{ gridArea: "s2", width:"200px", height:"50px" }} alt="Logo Blanco" className="logoblanco" />
          
          <a href="https://www.instagram.com/" style={{
            gridArea:'s22',width:"100%"
          }}>
          <StaticImage src="../images/inst.png" style={{width:'20px'}} alt="Instagram" className="logo" /></a>

          <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"  style={{
            gridArea:'s3',width:"100%"
          }} ><StaticImage src="../images/tiktok.png"alt="TikTok" style={{width:'20px'}} /></a>

          <a href="https://x.com/?lang=es"  style={{
            gridArea:'s31',width:"100%"
          }} ><StaticImage src="../images/twitter.png" style={{width:'20px'}} alt="Twitter" className="logo" /></a>

          <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA/videos?view=0"  style={{
            gridArea:'s32',width:"100%"
          }} ><StaticImage src="../images/youtube.png" style={{width:'20px'}} alt="YouTube" className="logo" /></a>

          <a href="../Politica" style={{ 
            gridArea: "s33",
            width:"100%",   
            color: "#E9E9E9",
            textDecoration: "none",
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
            margin: "0.5em", }}>Política de Privacidad</a>
          <a href="../Cookies" style={{ 
            gridArea: "s34",
            width:"100%",     
            color: "#E9E9E9",
            textDecoration: "none",
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
            margin: "0.5em", }}>Cookies</a>
          <a href="../Accesibilidad" style={{ 
            gridArea: "s4",
            width:"100%",     
            color: "#E9E9E9",
            textDecoration: "none",
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
            margin: "0.5em", }}>Accesibilidad</a>
          <a href="../AvisoLegal" style={{ 
            gridArea: "s5", 
            width:"100%",
            color: "#E9E9E9",
            textDecoration: "none",
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
            margin: "0.5em", }}>Aviso legal</a>
    </footer>
  )
}

export default Footer