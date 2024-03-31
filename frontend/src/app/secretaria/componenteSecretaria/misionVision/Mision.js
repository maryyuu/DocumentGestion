import { useState } from 'react'
import EditMision from '../editarLanding/EditMision'
import './styleMV.css'
export default function Mision({mision}) {
  const [editMision,setEditMision] = useState('secretaria')
  const handleCerarEdit = () => {
    setEditMision(!editMision);
  };
  const handleEditarMision=()=>{
    setEditMision(editMision==='secretaria'? 'editarLanding':'editarLanding')
  }
  return (
    <>
     <div class="MisionVision" >
      <div class="ContenedorViMi">
    <p class="textMF">Mision</p>
    <span class="direccion">
      <p class="textMisVis">{mision}</p>
      <button onClick={handleEditarMision} class="BotonEditar">Editar</button>
    </span>
    </div>
    <div class="contenedorEdit">
    {
      editMision === 'editarLanding' && <EditMision
      onClose={handleCerarEdit}/>
    }
    </div>
  
  </div>
  
  </>

  )
}
