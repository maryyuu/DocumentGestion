
import './pdfSecretaria.css'
import Image from 'next/image'

export default function Formato({ formato, formatoSecretaria}) {
  return (
            <div class="cardPdfSecretaria">
             <p class="nombrePdfSecretaria">{formato}</p>
             <span class="">
           <Image src={formatoSecretaria} width={150} height={150}></Image>
              </span>
              </div>
  )
}
