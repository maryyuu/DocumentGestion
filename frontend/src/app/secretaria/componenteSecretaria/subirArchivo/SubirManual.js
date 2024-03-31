import { useState } from 'react'
import './subir.css'
import Link from 'next/link'
export default function SubirManual() {
    const [cerrar,setCerrar]= useState(true)
    const handlecerar = () =>{
        setCerrar(false)
    }
    const path= '/secretaria'
  return (
    <>
    { cerrar &&( 
        <div class="ContenedorBorroso">
        <div class="UbicacionFormulario">
            <Link href={`${path }`}>
            <button class="cerrar" onClick={handlecerar} >X</button>
            </Link>
            <p class="textoSubir">Subir nuevo archivo</p>
        <form class="formulario">
            <input required type="text" placeholder="Ingrese nombre del manual"/>
            <input  type="file" placeholder="archivo"/>
            <div class="direccionBoton">
            <button class="subir" type='submit'>Subir</button>
            <button class="borrar" type='reset'>Borar</button>
            </div>
           
        </form>
        </div>    
    </div>)}
    </>
  )
}
