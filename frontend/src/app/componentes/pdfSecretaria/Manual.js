import Image from 'next/image'
import './pdfSecretaria.css'
export default function Manual({manual,manualSecretaria}) {
  return (
    <div class="cardPdfSecretaria">
    <p class="nombrePdfSecretaria">{ manual }</p>
    <span class="">
    <Image src={manualSecretaria} width={150} height={150}></Image>
   </span>
   </div>
  )
}
