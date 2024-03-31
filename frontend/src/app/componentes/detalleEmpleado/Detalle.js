
import Image from 'next/image'
import './Detalle.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Detalle({nombre, rol, tipoDeInformesQueentrega, direccion, telefonoPersonal, telefonoAcudiente, correoElectronico,foto}) {
  const [mostrarDetalle, setMostrarDetalle] = useState(true);
  const path = "/admin";

  const cerrarDetalle = () => {
    setMostrarDetalle(false);
  }

  return (
    <>
      {mostrarDetalle && (
        <div className="DetalleBorroso">
          <div class="ContenedorDetalle">
          <Link href={`${path}`}> 
              <button className="CerrarPestaña" onClick={cerrarDetalle}>X</button>
            </Link>
          <div className="ContenedorUbicacionDetalle">
            
            <span>
              <Image className="ImagenDetalle" width={250} height={250} src={foto}/>
            </span>
            <span className="DatosUsuarioDetalle">
              <p className="NombreDetalle">{nombre}</p>
              <p className="rolDetalle">{rol}</p>
              <span className="spanDatosUbicacion">
                <div className="UbicacionTipoInforme">
                  <p className="rolDetalle">Tipo de Informe que entrega:</p>
                  <p className="letraMenos">{tipoDeInformesQueentrega}</p>
                </div>
                <span className="ubicaionHorizontalDatosGrande">
                  <p className="rolDetalle">Contactos</p>
                  <div>
                    <div className="ubicaionHorizontalDatos">
                      <p className="rolDetalle">Telefono Personal: </p>
                      <p className="letraMenos">{telefonoPersonal}</p> 
                    </div>
                    <div className="ubicaionHorizontalDatos">
                      <p className="rolDetalle">telefono Acudiente:</p>
                      <p className="letraMenos">{telefonoAcudiente}</p>
                    </div>
                  </div>
                </span>
                <div className="UbicacionTipoInforme">
                  <p className="rolDetalle">Correo correoElectronico: </p>
                  <p className="letraMenos">{correoElectronico}</p>
                </div>
                <div className="UbicacionTipoInforme">
                  <p className="rolDetalle">Direccion:</p>
                  <p className="letraMenos">{direccion}</p>
                </div>
              </span>
            </span>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
