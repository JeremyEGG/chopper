import React from 'react';
import TablaInsidenciasBody from './table_body_insidence';

function TablaInsidencias(props){
    return(
        <div>
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">S/E</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
       <tbody>
       <TablaInsidenciasBody></TablaInsidenciasBody>
       </tbody>
    </table>
        </div>
    );
};

export default TablaInsidencias;