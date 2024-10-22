import React from "react";
import "./Card.css"

function Card(props) {

    const excluir = () => {
        console.log('Liberando a vaga')
        const cadastros = JSON.parse(localStorage.getItem("cadastros"))
        const LiberarVaga = cadastros.filter((v) => v.vaga !== props.cadastro.vaga)
        localStorage.setItem("cadastros", JSON.stringify(LiberarVaga))
        window.dispatchEvent(new Event("atualizacaovagas"))
    }

    return (
        <div className= "background">
            <h3 className="nomePessoa">{props.cadastro.nome}</h3>
            <p className="content">Placa: {props.cadastro.placa}</p>
            <p className="content">Carro: {props.cadastro.modelo} {props.cadastro.cor}</p>
            <p className="content">Apartamento: {props.cadastro.apto} {props.cadastro.bloco}</p>
            <p className="content">Vaga: {props.cadastro.vaga}</p>
                <div class="botoes">
                    <button>Editar</button>
                    <button onClick={excluir}>Excluir</button>
                 </div>
        </div>
    )
}

export default Card