import React from 'react';

function CreateNewItem(props){
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
   
   




    </div>);
}

export default CreateNewItem;