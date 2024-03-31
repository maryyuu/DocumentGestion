"use client"  
import { useState } from "react"
import './StylePrincipalEm.css'
import Image from 'next/image'
import Problematica from "./ComponentesEm/problematica/Problematica"
import Seccion3 from "./ComponentesEm/seccione/Seccion3"
import Seccion4 from "./ComponentesEm/seccione/Seccion4"
export default function Empleado() {
  const [verProblematica, setProblematica]= useState('empleado')
  const cerrar = () =>{
    setProblematica(!verProblematica)
  }
  // const [verProblematica, setVerProblematica] = useState('empleado')
  const abrir =()=>{
    setProblematica(verProblematica === 'empleado'? 'problematica': 'problematica')
  }
  return (
    <div class="ContenedorPrincipalEmpleado">
      <span class="botones"> 
      <div class="imagen-logo">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="gestiarch-img"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" /></svg>
      <p class='textGestiarsch'>Gestiarch</p>

      </div>
      <div class="containerBoton">
      <button>Comenzemos Ahora</button>
      </div>
       
      </span>
     <div>
        <section class="seccion1">  
          <div class="Imagen">
          <Image class="img" src='/Image/gestión-documental.jpg' width={510} height={510}></Image>
          </div>
          <div class="problematica">
          <p class="TextoFacilidad" >FACILIDAD PARA GESTIONAR TUS ARCHIVOS</p>
           <p class="justificacion">Sin necesidad de informacion repetitiva Gestiarch le brinda una mejor organizacion para diversos roles.</p>
         <span class="vermas">
            <svg onClick={abrir}  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
            <div class="verProblem">
              {
                  verProblematica=== 'problematica' &&
                  <Problematica
                  onClose={cerrar}
                  />
              }
            </div>
         </span>
          </div>
          
        </section>
        <section class="seccion2ImgFavebook">
          <div class="DireccionLogos">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
          <p class="textLogos">Facebook</p>
          </div>
        <div class="DireccionLogos">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
        <p class="textLogos">Instagram</p>
        </div>
        <div class="DireccionLogos">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
        <p class="textLogos">Youtube</p>
        </div>
        <div class="DireccionLogos">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icons"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
         <p class="textLogos">Twitter</p>
        </div>
        
        </section>
        <Seccion3/>
        <Seccion4/>

     </div>

    </div>
  )
}
