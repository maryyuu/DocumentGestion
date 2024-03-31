import Image from 'next/image'
export default function Seccion4() {
  return (
   <section class="seccion4">
    <div class="VisionMision">
        <div class="imagenMV">
        <Image class="img2"  src='/Image/vision.avif' width={210} height={210}/>
        </div>
   
    <span class="textMV">
        <p class="TitleVisionMision">Vision</p>
        <p>
        Nuestra vision es que en un futuro cercano, trabajar con nostoros se vuelva facil y agradable, que se facilite totalmente la entrega de informe a un 100%
        </p>
       </span>
    </div>
    <div class="VisionMision">
        <div class="imagenMV">
        <Image class="img2" src="/Image/entregaDocumentos.webp" width={350} height={350}/>
        </div>
    <div class="textMV">
        <p class="TitleVisionMision">Mison</p>
        <p>
    Nuestra Mision es que por ahora mejore un 50% la entrega de Documentos, facilitando para todos los coformantes de la empresa, la entrega de los mismo, con dedicaion todo se puede.
    </p>
    </div>
    </div>
   </section>
  )
}
