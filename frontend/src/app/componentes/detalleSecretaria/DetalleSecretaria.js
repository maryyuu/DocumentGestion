
import Image from 'next/image'
import './DetalleSecretaria.css'
import Link from 'next/link'
import { useState } from 'react';

export default function DetalleSecretaria({nombre,nameManual, tipoDeInformesQueentrega, direccion, telefonoPersonal, telefonoAcudiente, correoElectronico}) {
  const [mostrarDetalle, setMostrarDetalle] = useState(true);
  const path = "/admin";

  const cerrarDetalle = () => {
    setMostrarDetalle(false);
  };

  return (
    <>
      {mostrarDetalle && (
        <div className="DetalleBorrosoSecretaria">
          <div className="ContenedorSecretariaDetalle">
            <Link href={`${path}`}> 
              <button class="CerrarPestaña" onClick={cerrarDetalle}>X</button>
            </Link>
            <div class="ContenedorUbicacionDetalle">
            <span>
              <Image class="ImagenDetalle" width={250} height={250} src="/Image/usuario.jpeg"/>
            </span>
            <span class="DatosUsuarioDetalle">
              <p className="NombreDetalle">{nombre}</p>
              <span className="spanDatosUbicacion">
                <div className="UbicacionTipoInforme">
                  <p className="rolDetalle">Tipo de Informe que entrega:</p>
                  <div class="">
                  <p className="letraMenos">{tipoDeInformesQueentrega}</p>
                  <p>{nameManual}</p>
                  </div>
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
