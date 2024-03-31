import Image from 'next/image'
import './styleSecciones.css'
export default function Seccion3() {
  return (
    <section class="BeneficiosSeccion">
        <p class="TextoPrincipal">Beneficios</p>
        <p class="justificacion">¡Conoce los increibles privilegios que optines al usar nuestro aplicativo Gestiarch para tu empresa!</p>
        <div class="DireccionBeneficios">
            <div class="ContenedorBeneficio">
              <p class="TextBeneficios">Facilidad al momento de Gestionar tus archivos</p>
                <Image class="ImagenBeneficio" src="/Image/Gestion.png" width={200} height={200}/>
            </div>
            <div class="ContenedorBeneficio">
            <p class="TextBeneficios">Mejor organizacion de entrega de documentos devido a que la informacion es mejor controlada por sus diversos roles.</p>
                <Image class="ImagenBeneficio" src="/Image/organizacion1.webp" width={200} height={200}/>
            </div>
            <div class="ContenedorBeneficio">
            <p class="TextBeneficios">Reduce en un gran porcentaje la informacion repetitiva por los empleados debido a su organizacion</p>
                <Image class="ImagenBeneficio" src="/Image/reducir.png" width={200} height={200}/>
            </div>
        </div>
        
    </section>
  )
}
