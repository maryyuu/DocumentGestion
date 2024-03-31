"use client"
import Card from "../componentes/UsuariosEmpleado/CardEmpleado"
import './styleAdmin.css'
import { useState } from "react"
import Detalle from "../componentes/detalleEmpleado/Detalle"
import UserSecretaria from "../componentes/UsuarioSecretaria/page"
import DetalleSecretaria from "../componentes/detalleSecretaria/DetalleSecretaria"
import PdfEmpleado from "../componentes/pdfEmpleado/PdfEmpleado"
import PdfSecretaria from "../componentes/pdfSecretaria/PdfSecretaria"

export default function Admin() {
  
//Animaciones

    const[verDetalle, setverDetalle]= useState('admin')

    const handleverDetalle=()=>{
      setverDetalle(verDetalle==='admin'? 'detalle': 'admin')
    }

    const [verDetelleSecretaria, setDetalleSecretaria]= useState('admin')
    const handleSecretaria = () =>{
      setDetalleSecretaria(verDetelleSecretaria=== 'admin'? 'detalleSecretaria': 'admin')
    }
    
    const [verPdfEmpleado, setverPdfEmpleado] = useState('admin')
    const handleVerPdfEmpleado = () => {
      setverPdfEmpleado(verPdfEmpleado==='admin'? 'pdfEmpleado': 'admin')
    }
    const [verPdfSecretaria, setverPdfSecretaria] = useState('admin')
    const handlePdfSecretaria = () => {
      setverPdfSecretaria(verPdfSecretaria==='admin'? 'pdfSecretaria': 'admin')
    }
    
    
    return (
  <>
    <div class="PrincipalAdmin" >
    
    {verDetalle=== 'detalle'&& <Detalle
    rol="Anlista de datos"
    nombre="Maryuri Charigd Lopez"
    tipoDeInformesQueentrega="Soporte 2 Base De Datos"
    telefonoPersonal="31054633"
    telefonoAcudiente="3002246"
    correoElectronico="maryuLopex1003656@gmail.com"
    direccion="cllae 26 # 56 5"
      foto='/Image/usuario.jpeg'
    />}

    {verPdfEmpleado=== 'pdfEmpleado' && <PdfEmpleado
    />}

    {verDetelleSecretaria=== 'detalleSecretaria' && <DetalleSecretaria
    nombre="Nelly Esperanza Lopez"
    nameManual='Manual de Vision Desarrollo Software'
    tipoDeInformesQueentrega='Formato Contabilidad'
    direccion='Popayan'
    telefonoAcudiente='315445464'
    telefonoPersonal='36451202025'
    correoElectronico="nellyLopez@gmail.com"
    />}

{verPdfSecretaria=== 'pdfSecretaria' && <PdfSecretaria
    />}

      <p class="Titulo">GESTION DE USURIOS</p>
      <p class="textBienvenida">Bienvenida Maryuri Lopez</p>
      <div class="salir">
        
    <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="imgSalir"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
    </div>
      <div class="ContenedorCardseEmpleado">
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
      onClickdetalle={handleverDetalle}
      onClickpdf={handleVerPdfEmpleado}
      />
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
      
      />
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
   
      />
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
  
      />
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
   
      />
      <Card
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
  
      />
      </div>
      <div class="CardsSecretaria">
      <UserSecretaria
       foto='/Image/usuario.jpeg'
       nombre='Escobar Anzisar Lopez Dorado'
       onClickDetalle={handleSecretaria}
       onClickPdf={handlePdfSecretaria}

      />
       <UserSecretaria
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
      
      />
      <UserSecretaria
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
   
      />
      <UserSecretaria
      foto='/Image/usuario.jpeg'
      nombre='Escobar Anzisar Lopez Dorado'
  
      />
    </div>
    
     
    </div>
    
    
      
  
    
    </>
  )
}
