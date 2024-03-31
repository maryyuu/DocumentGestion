'use client'
import { useState } from "react"
import Link from 'next/link'
import './pdfEmpleado.css'
import Cardpdf from "./cardpdf"
export default function PdfEmpleado() {
  const [mostrarPdf, seMostrarPdf]= useState(true)
  const path = '/admin'

  const cerrarPdf= () => {
    seMostrarPdf(false)
  }
  return (
    <>
    {mostrarPdf && (
      <div class="contenedorBorroso">
         {/* <p>Historial de Archivos Entregados</p> */}
         <div class="ContenedorPdf">
          <p class="titulo">Archivos Entregados</p>
         <Link href={`${path}`}>
         <button class="cerrarPdf" onClick={cerrarPdf}>X</button>
           </Link>
         <div class="Ubicacionpdf">

       
           <Cardpdf 
           nombrespdf="Entrega de Analisis II"
           pdfArchivo="/Image/pdf.png"
           />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
          <Cardpdf 
         nombrespdf="Entrega de Analisis II"
         pdfArchivo="/Image/pdf.png"
         />
       </div>

         </div>
        
      </div>
    )}
    </>
  )
}
