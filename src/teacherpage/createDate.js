import React from "react";
import Header from "../bars/headerBar";
import LateralBar from "../bars/lateralBar";
import Calendario from "./calendar";
import ClockSelector from "./clockElement";

const studentInfo = {
    nombre: "Juan Perez Perez",
    telefono: "65144565",
    correo: "juanperez@gmail.com",
    domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
    carnet: "889380",
    codigo: '56197'
}

const divAbsolute = {
backgroundColor: "#DFDFDF"
}

const divStyle = {
    display: 'flex',       
};


const CreateDate = () =>{
    return(
    <div style={divAbsolute}>
        <div>
            <Header nombreApellido = {studentInfo.nombre}/>
        </div>
        <div style={divStyle}> 
            <LateralBar/>
            <ClockSelector/>
            
        </div>
    </div>
    )
}

export default CreateDate;
