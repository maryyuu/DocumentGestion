import React from 'react'
import './pdfSecretaria.css'
import Formato from './formato'
import Manual from './Manual'
export default function CardPdfSe() {
  return (
  <>
        <div class="ubicacionCardSe1">
            <p>Manuales</p>
            <div class="FormatoOrganizacion">
         
         <Manual 
           manual="vision"
           manualSecretaria="/Image/pdf.png"
           />
            <Manual 
           manual="vision"
           manualSecretaria="/Image/pdf.png"
         
           />
            <Manual 
           manual="vision"
           manualSecretaria="/Image/pdf.png"
         
           />
         </div>
         </div>

         <div class="ubicacionCardSe2">
            <p>Formatos</p>
            <div class="FormatoOrganizacion">
            <Formato
         formato='Pago de cartera'
         formatoSecretaria="/Image/pdf.png"
         />
          <Formato
         formato='Pago de cartera'
         formatoSecretaria="/Image/pdf.png"
         />
          <Formato
         formato='Pago de cartera'
         formatoSecretaria="/Image/pdf.png"
         />
          <Formato
         formato='Pago de cartera'
         formatoSecretaria="/Image/pdf.png"
         />
          <Formato
         formato='Pago de cartera'
         formatoSecretaria="/Image/pdf.png"
         />

          </div>
          </div>
</>
  )
}
