"use client"
import './styleproblem.css'
export default function Problematica({onClose}) {
  return (
    <div class="contenedorProblem">
        <button class="CerrarPestaña" onClick={onClose}>X</button>
      <p>Se ha observado una problematica para gestionar documentos administrativos de la empresa SoftwareAlians, se planteo un sistema que facilita la gestion de diferentes roles de la empresa.</p>
    </div>
  )
}
