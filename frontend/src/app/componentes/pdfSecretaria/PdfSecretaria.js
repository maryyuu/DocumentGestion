import { useState } from "react"
import Link from 'next/link'
import CardPdfSe from "./CardPdfSe"
import './pdfSecretaria.css'
export default function PdfSecretaria() {
  const [mostrarPdf, seMostrarPdf]= useState(true)
  const path = '/admin'

  const cerrarPdf= () => {
    seMostrarPdf(false)
  }
  return (
    <>
    {mostrarPdf && (
      <div class="contenedorBorrosoSe">
         {/* <p>Historial de Archivos Entregados</p> */}
         <div class="ContenedorPdfSe">
          <p class="tituloSe">Archivos Entregados</p>
         <Link href={`${path}`}>
         <button class="cerrarPdfSe" onClick={cerrarPdf}>X</button>
           </Link>
         <div class="UbicacionpdfSe">

       
           <CardPdfSe  />
       </div>

         </div>
        
      </div>
    )}
    </>
  )
}
