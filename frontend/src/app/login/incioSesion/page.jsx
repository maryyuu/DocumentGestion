import "./inicio.css"
import Link from 'next/link'
import { useState } from "react"

export default function InicioSesio() {
  const path= '/login'
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('Seleccione Opcion');

  const handleLogin = () => {
    if (rol === 'Administrador') {
 
      window.location.href = '/admin';
    } else if (rol === 'Secretaria') {

      window.location.href ='secretaria';
    } else if (rol === 'Empleado') {
      window.location.href ='empleado';
    }
    
  };

  return (
    <>
      <div className="containerPrincipalInicio">
        <div className="ContenedorImagen">
          <p>Gestion Documental</p>
        </div>
        <div className="ContendorForm">
          <form className="formularioIncio">
            <input className="inputIncio" type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <input className="inputIncio" type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
            <select required className="selector" value={rol} onChange={(e) => setRol(e.target.value)}>
              <option defaultValue="Seleccione Opcion">Seleccione Opcion</option>
              <option>Administrador</option>
              <option>Secretaria</option>
              <option>Empleado</option>
            </select>
            <button className="botonIncio" type="button" onClick={handleLogin}>Inciar Sesion</button>
            <span>
       
        <p>
        <Link href={`${path}/recuperarContrasena`} >¿Olvido su contraseña?
        </Link></p>
        
        </span>
        <span>
          <p>
            <Link href={`${path}/registro`}>
            ¿No tiene Cuenta? Registrarse
            </Link>
            </p></span>
        </form>
        
        
    </div>
    </div>
    <span class="LogoIncio">
       <svg xmlns="http://www.w3.org/2000/svg"  width=""  height=""  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="imagen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
       </span>
    </>
  )
}
