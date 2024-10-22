import React from "react";

function CustomInput(props) {
    return (
        <div>
            <label className={props.classe}>{props.label}</label>
            <input className={props.classe} type={props.tipo} 
            placeholder={props.preenchimento}
            value ={props.valor} 
            onChange={props.handleInput} 
            name={props.nome}/>
        </div>
    )
}

export default CustomInput