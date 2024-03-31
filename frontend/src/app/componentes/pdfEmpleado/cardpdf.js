import './pdfEmpleado.css'
import Image from 'next/image'
export default function Cardpdf({nombrespdf,pdfArchivo}) {
  return (
    <div class="cardPdf">
          <p class="nombrePdf">{nombrespdf}</p>
        <span class="">
          <Image src={pdfArchivo} width={150} height={150}></Image>
        </span>
    </div>
  )
}
