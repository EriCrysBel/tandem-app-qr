import React, { useState } from 'react';
import { Collapse, Button, CloseButton } from 'reactstrap';

function LeerMas(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Leer más
      </Button>
      <Collapse isOpen={isOpen} {...args}>
      <CloseButton onClick={()=>{setIsOpen(false)}}/><br></br>
      <h5>PALACIOS Y ESTACIONES DEL AÑO</h5>
      <p>
        Los reyes, como en la inmensa mayoría de las diferentes cortes europeas de la Edad Moderna, vivían mucho tiempo fuera de la capital. Cada parte del año la pasaban en uno de los Reales Sitios en torno a Madrid: primavera en Aranjuez, verano en Valsaín y La Granja, otoño en El Escorial, invierno en El Pardo y en Madrid. Esta villa era sede oficial de la corte, pero realmente la vida del poder transcurría al ritmo de las estaciones en todos estos escenarios donde a su servicio se aunaban bosques y cazaderos, parques y jardines, palacios, colecciones y urbanismo.
      </p><br></br>
            
            
            <h5>DESDE LA EDAD MEDIA HASTA HOY</h5>
            <p>El proceso creativo de este patrimonio se produce desde el principio de la Edad Media y arranca de la definición de los reinos que se fueron definiendo en la Península: una larga serie tanto de palacios como de edificios religiosos vinculados a la respectiva monarquía de cada reino -los reales patronatos, como las Huelgas- jalonan la representatividad de la monarquía en cada uno de los territorios que, como resultado de un largo proceso de uniones dinásticas, terminó por concretarse al inicio de la Edad Moderna en la Monarquía de España. Algunos palacios medievales han subsistido, bien como conventos -Tordesillas-, bien como sedes de la soberanía en la respectiva ciudad capital de cada antiguo reino -la Almudaina en Mallorca-.</p>
            <br></br>

            <p>Sobre ese sustrato medieval, la configuración definitiva de los Reales Sitios se produce bajo los Austrias y los Borbones, a partir de la instalación de la capital en Madrid por Felipe II en 1561 y su fundación de El Escorial en 1563. Los bosques, jardines y cultivos, sobre todo en Aranjuez fueron perfeccionados por Felipe V, creador de La Granja de San Ildefonso, y por Fernando VI y Carlos III, que hizo de cada Real Sitio una pequeña ciudad modelo, a la par que ampliaba los palacios. La perfección ornamental de las residencias y de las colecciones reales alcanzó su grado máximo bajo Carlos IV, con aportaciones importantes en el siglo XIX.</p><br></br>

            <p>Bajo el reinado de Fernando VII y el fin del antiguo régimen se distingue por primera vez de manera clara entre bienes del Estado y bienes de este conjunto vinculado a la Corona llamado Real Patrimonio.</p><br></br>

            <p>Será en 1865, con la primera ley que lo regula, cuando nazca oficialmente la institución "Patrimonio de la Corona" bajo el reinado de Isabel II. Este nuevo régimen jurídico tratará de ajustar todo ese conjunto de bienes patrimoniales, vinculados a la Corona, a la nueva realidad económica, política y social. Diferenciando así entre bienes vinculados a la Corona, que sirven para la representación del poder y para la vida cotidiana de sus majestades, que tienen que seguir unidos, que son del Estado, y entre el patrimonio privado de los monarcas, que procede de los bienes que previamente se consideraban libres, o de su lista civil.</p><br></br>
            <p>La Ley de 1932 defendió la unidad de este conjunto de bienes y definió por primera vez la doble función, cultural y representativa, de este "Patrimonio de la República", nombre que se transformó en "Nacional" por la de 1940, que esencialmente sigue el patrón de la anterior. Por tanto, el uso de los palacios para la representación oficial del Jefe del Estado se produjo tanto bajo la Segunda República como durante la dictadura franquista, a la par que se desarrollaba su función cultural.</p>
            <br></br>

            <p>La Ley 23/1982, de 16 de junio, del Patrimonio Nacional, norma jurídica que en la actualidad regula esta entidad, reconoce a la institución como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española, y gestor de los derechos de las Reales Fundaciones y Patronatos, y tiene como fines principales el servicio a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, así como la puesta a disposición de los ciudadanos del patrimonio histórico-artístico que gestiona, a través de su uso con fines culturales, científicos y docentes.</p><br></br>

            <p>La naturaleza diversa de los bienes y la compatibilidad de usos de los mismos hace que la labor de servicio público a la que se debe Patrimonio Nacional sea amplia y compleja. Este singular conjunto integrado de bienes históricos es uno de los más importantes entre los de las antiguas cortes de Europa, y su actual doble uso público, cultural y representativo, es el resultado de un largo proceso histórico, que hace de Patrimonio Nacional una institución única en el mundo.</p>

      </Collapse>
    </React.StrictMode>
  );
}

export default LeerMas;