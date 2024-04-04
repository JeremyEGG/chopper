import React from 'react';
import CreateNewItem from './create-new-items';

function CrearNuevaInsicencia(props){
    return(
        <div>
        <div>
  <fieldset disabled="">
    <label class="form-label" for="disabledInput">Nombre insumo</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="coloca el nombre del insumo aqui" disabled="" />
  </fieldset>
</div>

<div>
  <fieldset disabled="">
    <label class="form-label" for="disabledInput">Tipo</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="coloca el tipo del insumo aqui" disabled="" />
  </fieldset>
</div>
    <div>
    <legend class="mt-4">Salida/Entrada</legend>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Entrada/Salida</label>
      </div>
    </div>

      <div>
  <fieldset disabled="">
    <label class="form-label" for="disabledInput">Tipo</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="coloca el tipo del insumo aqui" disabled="" />
  </fieldset>
</div>


    </div>
    );
}

export default CrearNuevaInsicencia;