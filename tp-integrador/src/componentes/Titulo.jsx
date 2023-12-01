import React from "react"

function Titulo(){
    return (
        <>
        <header className="p-5 bg-warning">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="fw-bold">
                        Lista de tareas
                        <img className="float-end" src="/public/arg_programa.png" alt="logotipo argentina programa" />  
                    </h1>
                </div>
            </div>
        </header>
        </>    
    )
}

export default Titulo;