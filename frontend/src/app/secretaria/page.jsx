"use client"
import ManualEdit from "./componenteSecretaria/Documentos/ManualEdit";
import FomatoEdit from "./componenteSecretaria/Documentos/ManualEdit";
import EditMision from "./componenteSecretaria/editarLanding/EditMision";
import EditVision from "./componenteSecretaria/editarLanding/EditVision";
import Mision from "./componenteSecretaria/misionVision/Mision";
import Vision from "./componenteSecretaria/misionVision/Vision";
import SubirManual from "./componenteSecretaria/subirArchivo/SubirManual";
import SubirFormato from "./componenteSecretaria/subirArchivo/subirFormato";
import './styleSecretariaPrincipal.css'
import { useState } from "react";

export default function Secretaria() {
  const[formularioManual, setformularioManual]=useState('secretaria')
  const handleFormularioSecretaria=()=>{
    setformularioManual(formularioManual==='secretaria'?'subirArchivo':'secretaria')
  }

  const [subirFormato, setSubirFormato]= useState(true) 
  const handleSubirFormato = () => {
    setSubirFormato(subirFormato === 'secretaria'? 'subirArchivo': 'secretaria')
  }

 

 
  return (
    <>
    

    <div class="Principal">
      {subirFormato=== 'subirArchivo'&& <SubirFormato/>}
      {formularioManual === 'subirArchivo' && <SubirManual/>}
      <p class="bienvenidaText">¡Bienvenido a tu gestion de Documentos! </p>
      <div class="FormYManu">

      
      <div class="ContenedorManualesFormatoPrincipal">
      <p class="textMF">MANUALES</p>
        <div class="ContenedorManualesFormatos">
        <ManualEdit
        nombre='Mejora de vision'
        archivo='/Image/pdf.png'
        />
         <ManualEdit
        nombre='Mejora de vision'
        archivo='/Image/pdf.png'
        />
        <ManualEdit
        nombre='Mejora de vision'
        archivo='/Image/pdf.png'
        />
        <div onClick={handleFormularioSecretaria} class="MasDocumento">
        <svg   xmlns="http://www.w3.org/2000/svg"  width="800"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
        
        </svg>
        </div>
        </div>
       
       
      </div>
      <div class="ContenedorManualesFormatoPrincipal">
      <p class="textMF">FORMATOS</p>
        <div class="ContenedorManualesFormatos">
        <FomatoEdit
        nombre='Inventario '
        archivo='/Image/pdf.png'
        />
        <FomatoEdit
        nombre='Ultimos pagos'
        archivo='/Image/pdf.png'
        />
        <FomatoEdit
        nombre='Mejora de vision'
        archivo='/Image/pdf.png'
        />
        <div onClick={handleSubirFormato } class="MasDocumento">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="800"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
        
        </svg>
        </div>
        </div>
      </div>
      </div>

      <div class="FormYManu">
        <p class="bienvenidaText">EDICION DE INFORMACION PARA EMPLEADOS</p>
        <section class="UbicacionMisionVision">
        <Vision
        vision='Nuestra vision es que en un futuro cercano, trabajar con nostoros se vuelva facil y agradable, que se facilite totalmente la entrega de informe a un 100%'

        />
        <Mision
        mision='Nuestra Mision es que por ahora mejore un 50% la entrega de Documentos, facilitando para todos los coformantes de la empresa, la entrega de los mismo, con dedicaion todo se puede.'
       
        />
        </section>
      
      </div>
    </div>
    </>
  )
}
