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
            <p className="content">{props.cadastro.placa}</p>
            <p className="content">{props.cadastro.modelo}</p>
            <p className="content">{props.cadastro.cor}</p>
            <p className="content">{props.cadastro.apto}</p>
            <p className="content">{props.cadastro.bloco}</p>
            <p className="content">{props.cadastro.vaga}</p>
                <div class="botoes">
                    <button>Editar</button>
                    <button onClick={excluir}>Excluir</button>
                 </div>
        </div>
    )
}

export default Card