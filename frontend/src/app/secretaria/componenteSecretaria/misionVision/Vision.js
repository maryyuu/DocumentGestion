import EditVision from '../editarLanding/EditVision';
import './styleMV.css'
import { useState } from 'react';
export default function Vision({vision}) {
  const [editVision,setEditVision] = useState('secretaria')
  const handleCerarEdit = () => {
    setEditVision(!editVision);
  };
  const handleEditarVision=()=>{
    setEditVision(editVision==='secretaria'? 'editarLanding':'editarLanding')
  }
  return (
    <>
     <div class="MisionVision" >
      <div class="ContenedorViMi">
    <p class="textMF">Vision</p>
    <span class="direccion">
      <p class="textMisVis">{vision}</p>
      <button onClick={handleEditarVision} class="BotonEditar">Editar</button>
    </span>
    </div>
    <div class="contenedorEdit">
    {
      editVision === 'editarLanding' && <EditVision
      close={handleCerarEdit}/>
    }
    </div>
  
  </div>
  
    </>
  )
}
