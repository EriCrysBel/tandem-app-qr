import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

import LeerMas from '../components/LeerMas';
import NavbarInicio from "../components/NavbarInicio";
import FooterInicio from "../components/FooterInicio";


function InfoInstitucional(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
    <NavbarInicio/>
    <div className='container'>
        {/* <div className='imagenprincipal'>
            <StaticImage  src='../images/palacio.jpg' className={infoStyle.imagenprincipal}/>
        </div> */}
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Bienvenida de la Presidenta</AccordionHeader>
          <AccordionBody accordionId="1">
            <div className='row '>
            <div className='col-12 col-md-6 mt-5'>
              <StaticImage src='../images/bienvenida.jpeg' width={500}/>
            </div>
            <div className='col-12 col-md-6'>
            <h4>
              Bienvenidos a Patrimonio Nacional.
            </h4>
            <p style={{
      fontSize:'15px'
    }}>
            <br></br>
            Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.
            <br></br>
            Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones. 
            <br></br>
            Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad. 
            <br></br>
            Ana de la Cueva
            <br></br>
            Presidenta de Patrimonio Nacional
          </p>
            </div>
            </div>
            
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Conoce nuestra historia</AccordionHeader>
          <AccordionBody accordionId="2">
          <p>SOBRE PATRIMONIO NACIONAL</p>
          <h5>CONOCE NUESTRA HISTORIA</h5>
          <StaticImage src='../images/nuestrahistoria.jpg'/>
          <div style={{
            fontSize: '15px',
          }}>
          <p  style={{
      fontSize:'15px'
    }} className='mt-5'>
            Patrimonio Nacional es un organismo público regulado por una Ley específica de 1982, Ley 23/1982, de 16 de junio, heredera de una larga serie de disposiciones entre las cuales cabe destacar las leyes de 1865, 1869, 1876, 1932 y 1940, aparte de las ordenanzas anteriores al siglo XIX. En definitiva, esta entidad estatal constituye el núcleo esencial y más importante del antiguo Real Patrimonio, o Patrimonio de la Corona, denominado Patrimonio de la República por la Ley de 1932, y con su nombre actual por las leyes de 1940 y 1982.<br></br>
            DOBLE FUNCIÓN: CONSTITUCIONAL Y CULTURAL
            La función de este organismo público, dependiente del Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática es doble: el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, y la puesta a disposición de los ciudadanos del patrimonio histórico-artístico a través de su uso con fines culturales, científicos y docentes.<br></br>

            Es importante destacar la unidad de sus bienes, ligados por un proceso de creación continuo, especialmente intenso entre el siglo XVI y el XIX, y que ha dado lugar a conjuntos donde las piezas muebles y obras de arte están ligadas a los inmuebles, y todo a la historia política y cultural de España. La coherencia de este conjunto, y las interrelaciones entre espacios, objetos y memoria que en él se producen, otorgan a este Patrimonio su primordial valor cultural e histórico<br></br>
          </p>
          <LeerMas/>

          </div>
          
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Consejo de Administración</AccordionHeader>
          <AccordionBody accordionId="3">
          <p>SOBRE PATRIMONIO NACIONAL</p>
          <h4>CONSEJO DE ADMINISTRACIÓN</h4>
          <h5 style={{color:'gold'}}> MIEMBROS NATOS</h5>
          <h6 style={{fontWeight:'bolder'}}>ANA DE LA CUEVA FERNÁNDEZ</h6>
          <h6>PRESIDENTA DE PATRIMONIO NACIONAL</h6>
          <div className='row'>
            <div className='col-12'>
              <StaticImage src='../images/ana.jpg' className='img-fluid'/>
            </div>
            <div className='col-12'>
              <p  style={{
      fontSize:'15px'
    }} className='mt-4'>Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.

            Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.

            Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos

            Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.

            Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.</p>
            </div>
            
          </div>
          
            <h6 style={{fontWeight:'bolder'}}>MARÍA DOLORES MENÉNDEZ COMPANY</h6>
          <h6>GERENTE DE PATRIMONIO NACIONAL</h6>
          <div className='row'>
            <div className='col-12'>
              <StaticImage src='../images/per.jpg' className='img-fluid'/>
            </div>
          <div className='col-12'>
            <p  style={{
      fontSize:'15px'
    }} className='mt-4'>
          Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. Funcionaria en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad, Executive Master in Public Administration (EMPA). ESADE.

          Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.

          Miembro del Consejo de Administración del Centro para el Desarrollo Tecnológico Industrial E.P.E. (CDTI).
          </p>
          </div>
          
          </div>
          <h5 style={{color:'gold'}}> Consejeros</h5>
            
            <div className='col-12'>
            <h6 style={{fontWeight:'bolder'}}>ANA MARÍA ARIAS DE COSSÍO</h6>
              <div className='col-12'>
                <StaticImage src='../images/par.jpg' className='img-fluid'/>
              </div>
            <div className='col-12'>
              <p  style={{
      fontSize:'15px'
    }} className='mt-4'>
              Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.

  Ha desempeñado una amplia actividad investigadora, con 6 sexenios de investigación reconocidos por la Comisión Nacional Evaluadora. Cuenta en su haber con publicaciones sobre estudios de pintura y sobre historia intelectual referida a la Institución Libre de Enseñanza y a Manuel B. Cossío. También ha realizado estudios sobre escenografía teatral, ha publicado 14 libros individuales y 10 con otros autores, numerosos artículos en revistas especializadas y participado en ponencias a congresos.

  Cuenta con una reconocida trayectoria vinculada a los organismos de conservación del arte. Es académica de la Real Academia de Bellas Artes de Santa Isabel de Hungría de Sevilla y de la Real Academia Canaria de Bellas Artes de San Miguel Arcángel.

  Es presidenta de la Fundación Jiménez-Cossío.
            </p>
            </div>
            
            </div>
            <div className='col-12'>
            <h6 style={{fontWeight:'bolder'}}>FRANCISCO BELIL CREIXELL</h6>
            
              <div className='col-12 '>
                <StaticImage src='../images/por.jpg' className='img-fluid'/>
              </div>
            <div className='col-12'>
              <p className='mt-4' style={{
      fontSize:'15px'
    }}>
              Ingeniero Superior en la Universidad Politécnica de Cataluña.

  Amplió sus estudios de ingeniería en la Universidad de Pittsburgh (EE.UU.) e INSEAD, en Fontainebleau (Francia). En julio de 1972 ingresó en Bayer AG, desempeñando diversas funciones en las fábricas alemanas de Leverkusen, Dormagen y Uerdingen. En 1978 fue destinado a Mobay en USA, donde trabajó en la central de Pittsburgh y la fábrica de New Martinsville. En 1981, fue nombrado Director en el Grupo Bayer de México hasta julio de 1987.

  El 1 de abril de 1996 fue nombrado Consejero Delegado de Bayer Hispania, S.A., máximo responsable del Grupo España y en 1997 del Grupo Bayer en la Región Iberia (España y Portugal). El 1 de agosto de 2006, se incorporó a Siemens, S.A. como Vicepresidente y Consejero Delegado. En abril de 2008 fue nombrado CEO de la Región Suroeste de Europa, formada por 15 países. En junio de 2013 fue nombrado Vicepresidente de la Fundación Bertelsmann. En julio de 2015, Presidente de la Fundación Princesa de Girona.

  Otros cargos que ha desempeñado: 2000-2006 Presidente de FEIQUE; 2005-2010 Presidente de la Cámara de Comercio alemana para España · Vicepresidente de la Fundación CEDE · Vicepresidente Alumni UPC; Consejos de Administración/ Consejos Asesores: Naturgy, Linde, Uriach, KPMG, Caixabank Banca Privada, APD, Foment, CEOE; 2010 Cruz de Caballero de la Orden del Mérito de la República Federal de Alemania · 1999 "Directivo del año" AED; 2011 Premio a la Excelencia Empresarial por la Cámara Alemana de Comercio; 2017 Encomienda con placa de la Orden Civil de Alfonso X el Sabio en el ámbito de educación.
            </p>
            </div>
            
            </div>

          

          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Actos oficiales e institucionales</AccordionHeader>
          <AccordionBody accordionId="4">
          <p>SOBRE PATRIMONIO NACIONAL</p>
            <h5>ACTOS OFICIALES E INTITUCIONALES</h5>
            <p  style={{
      fontSize:'15px'
    }} className='mt-4'>Cada año los Palacios y Monasterios del Patrimonio Nacional acogen actos oficiales presididos por S.M. el Rey de España. Las Ceremonias de Estado conservan su carácter histórico y el protocolo tradicional. Entre las más importantes se encuentran las recepciones de gala a los Jefes de Estado que visitan nuestro país, o la presentación de cartas credenciales ante S.M. el Rey por los nuevos Embajadores extranjeros acreditados en España. En el Palacio Real de Madrid, residencia oficial del monarca, también se celebran las Audiencias Militares, el Acto del Relevo Solemne de la Guardia Real, las recepciones al Cuerpo Diplomático acreditado en España, la Pascua Militar o la Recepción del 12 de octubre, día de la Fiesta Nacional.

            Además, los Reyes presiden, en el Palacio Real de Madrid, encuentros con el mundo de la cultura y las letras, y en el Palacio Real de Aranjuez la reunión anual del Patronato del Instituto Cervantes. Por su parte, la entrega de los Premios Nacionales del Deporte, el concurso "¿Qué es un rey para ti?" y los Premios Internacionales de Investigación tienen lugar en el Palacio Real de El Pardo; en la Iglesia del Monasterio de Yuste se celebra, a su vez, el acto de entrega del premio internacional europeo Carlos V, el 9 de mayo, con ocasión del Día de Europa. A estos actos se suman las reuniones anuales de los diferentes Patronatos de las Fundaciones Princesa de Asturias, Princesa de Girona, Cotec y Elcano.

            A lo largo de los años, Patrimonio Nacional y la Casa de S.M. El Rey han colaborado en actos de gran relevancia histórica, como la recepción extraordinaria que tuvo lugar en el Palacio Real de Madrid con motivo de la Proclamación del Rey Don Felipe VI (19 de junio de 2014) o la Abdicación de S.M. El Rey Don Juan Carlos I (18 de junio de 2014). Otros actos de importancia internacional en este lugar fueron la Presidencia de España en la Conferencia de Paz, celebrada en Madrid en 1991, el Consejo de la Unión Europea (1989, 1995, 2001 y 2010), la firma del Acta de Adhesión a la UE (1985), y la segunda Cumbre Iberoamericana de Jefes de Estado y de Gobierno (1992).

 

            Dirección de Actos Oficiales y Culturales

            Relevos de la Guardia Real en el Palacio Real de Madrid</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5" ><a href="https://www.casareal.es/ES/Paginas/home.aspx">Casa de S.M el Rey</a></AccordionHeader>
          <AccordionBody accordionId="5">

          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6"><a href='https://www.patrimonionacional.es/sobre-patrimonio/retratos-ssmm'>
            Retratos oficiales</a></AccordionHeader>

        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7"><a href='https://www.mpr.gob.es/Paginas/index.aspx'>
            Ministerio de la Presidencia</a></AccordionHeader>
        </AccordionItem>
      </Accordion>
    </div>
    <FooterInicio/>
    </>
  );
}

export default InfoInstitucional