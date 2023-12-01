import React, { useState } from 'react';

function IngresoTareas(){
  const [tarea, agregarTarea] = useState('');
  const [arrayTareas, agregarTareas] = useState([]);
  const [arrayTareasMarcadas, agregarTareasMarcadas] = useState([]);

  const handlerVerificarInput = (event) => {
    agregarTarea(event.target.value);
  };

  const handleAgregarTarea = (event) => {
    event.preventDefault();
    listado.classList.remove("d-none")
    if (tarea.trim() !== '') {
      agregarTareas([...arrayTareas, tarea]);
      agregarTarea('');
    }
  };

  const handlerMarcarTarea = (index) => {;
    agregarTareasMarcadas((prev) => {
        const nuevasMarcadas = [...prev];
        nuevasMarcadas[index] = !nuevasMarcadas[index];
        return nuevasMarcadas;
      });
  };

  const handleBorrarTarea = (index) => {
    const arrayTareasActualizadas = [...arrayTareas];
    arrayTareasActualizadas.splice(index, 1);
    agregarTareas(arrayTareasActualizadas);
    if(arrayTareasActualizadas.length == 0){
        listado.classList.add("d-none")
    }
  };

  return (
    <div className="container">
        <form onSubmit={handleAgregarTarea}>
            <div className="row">
                
                    <div className="col-md-6 mt-3">
                        <label className="form-label fw-bold fs-4" htmlFor="tarea-nombre">Ingrese una tarea:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Nombre de la tarea"
                            value={tarea}
                            onChange={handlerVerificarInput}
                            id="tarea-nombre"
                        />
                    </div>
                    <div className="col-md-2 mt-5">
                        <button type="submit" className="btn btn-primary btn-lg">Agregar Tarea</button>
                    </div>
                
            </div>
        </form>
      
      <div className="row mt-3 d-none" id="listado">
        {arrayTareas.map((t, index) => (
          <p 
          className={`border border-black border-3 p-3 m-0 ${arrayTareasMarcadas[index] ? 'bg-success text-white' : ''}`}
          key={index}
          onClick={() => handlerMarcarTarea(index)}>
            <b>{`Tarea ${index + 1} ${arrayTareasMarcadas[index] ? 'COMPLETADA!' : ''}`}
            </b> <hr />{t}
            <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => handleBorrarTarea(index)}>
                    Borrar
                </button>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default IngresoTareas;
