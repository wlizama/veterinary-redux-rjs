import React from 'react'
import { useSelector } from "react-redux";

const ListadoCitas = () => {

    const citas = useSelector(state => state.citas)
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas' : ''

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Admin</h2>
                {Object.keys(citas.citas).length !== 0 ?
                    <div className="lista-citas">
                        {citas.citas.map((cita) => (
                            <div key={cita.uuid} className="media mt-3">
                                <div className="media-body">
                                    <h3 className="mt-0">{cita.mascota}</h3>
                                    <p className="card-text"><span>Nombre Dueño:</span> {cita.propietario}</p>
                                    <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
                                    <p className="card-text"><span>Hora:</span> {cita.hora}</p>
                                    <p className="card-text"><span>Sintomas:</span> {cita.sintomas}<br /></p>
                                    <button 
                                        className="btn btn-danger">Borrar &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="alert alert-warning text-center p2">No hay citas</div>
                }
            </div>
        </div>
    )
}

export default ListadoCitas
