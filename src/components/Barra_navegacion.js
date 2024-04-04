import React from 'react';


function BarraNavegacion(props){
    return(
        <div className='contenedor-barra-navegacion'>
       <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Chopper</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Volver a Casa
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Crear Insumo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Crear Interaccion</a>
        </li>       
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default BarraNavegacion;