import './styleEdit.css'
export default function EditVision({close}) {
  return (
    <>
  
    <div class="contenedorEditar">
      
      <button class="CerrarPestaña" onClick={close}>
        X
      </button>
   
      <p class="contendido">Contenido de Vison</p>
     <form>
      <input placeholder='Ingrese Mision' type='textera' />
      <div class="UbicacionBotonesEditar">
      <button type='submit' class="subir">Subir</button>
      <button type='reset' class="borrar">Borar</button>
      </div>
     </form>
    </div>
    </>
  )
}
