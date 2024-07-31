import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FooterModalCompartir from "./FooterModalCompartir"

const FooterInicio = () => {
  const footerStyles = {
    backgroundColor: "#333",
    padding: "0.5em",
    textAlign: "center",
  }
  const footerInnerStyles = {
    display: "grid",
    gridTemplateAreas: `"s1 s2 s3 s4 s5"`,
    columnGap: "5px",
    rowGap: "5px",
    padding: "0.5em",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
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
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontWeight: "normal",
    margin: "0.5em",
  }
  return (
    <footer style={footerStyles} >
      <div style={footerInnerStyles} className="footerin">
        <div style={{ gridArea: "s1" }}>
          <StaticImage src="../images/ministerio.png" style={logoStyles} alt="Ministerio" />
        </div>
        <div style={{ gridArea: "s2" }}>
          <StaticImage src="../images/logoblanco.png" style={smallerLogoStyles} alt="Logo Blanco" className="logoblanco" />
        </div>
        <div className="row" style={{ gridArea: "s3", alignSelf: "center" }}>
          <div className="col-3 col-md-2">
          <a href="https://www.instagram.com/"><StaticImage src="../images/inst.png" style={iconStyles} alt="Instagram" className="logo" /></a>
          </div>
          <div className="col-3 col-md-2">
          <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"><StaticImage src="../images/tiktok.png" style={iconStyles} alt="TikTok" className="logo" /></a>
          </div>
            <div className="col-3 col-md-2">
              <a href="https://x.com/?lang=es"><StaticImage src="../images/twitter.png" style={iconStyles} alt="Twitter" className="logo" /></a>
            </div>
          <div className="col-3 col-md-2" >
          <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA/videos?view=0"><StaticImage src="../images/youtube.png" style={iconStyles} alt="YouTube" className="logo" /></a>
        </div>
        </div>
        <div style={{ gridArea: "s4" }}>
          <a href="./Politica" style={linkStyles}>Política de Privacidad</a>
          <a href="./Cookies" style={linkStyles}>Cookies</a>
          <a href="./Accesibilidad" style={linkStyles}>Accesibilidad</a>
          <a href="./AvisoLegal" style={linkStyles}>Aviso legal</a>
        </div>
        <div style={{ gridArea: "s5" }}>
          <div style={{ display: "inline-block" }}>
            <FooterModalCompartir />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default FooterInicio