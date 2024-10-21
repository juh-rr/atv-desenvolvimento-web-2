import React, {useState} from "react";
import './CadastroVeiculo.css'

function CadastroVeiculo() {
    const [dados, setDados] = useState(
        {
        nome: "",
        placa: "",
        modelo: "",
        cor: "",
        apto: "",
        bloco: "",
        vaga: ""
    }
) 


    return (
        <div className="formulario">
            <label className="margens">Nome do proprietário</label>
            <input className="margens" type='text' placeholder="Digite o nome completo"
            value ={dados.nome} />

            <label className="margens">Placa do veículo</label>
            <input className="margens" type='text' placeholder="DDD0D00" 
            value ={dados.placa}/>

            <label className="margens">Modelo do veículo</label>
            <input className="margens" type='text' placeholder="Uno"
            value ={dados.modelo} />

            <label className="margens">Cor do veículo</label>
            <input className="margens" type='text' placeholder="Branco"
            value={dados.cor} />

            <label className="margens">Número do apartamento</label>
            <input className="margens" type='text' placeholder="01"
            value ={dados.apto} />

            <label className="margens">Bloco do apartamento</label>
            <input className="margens" type='text' placeholder="A"
            value={dados.bloco} />

            <label className="margens">Número da vaga de estacionamento</label>
            <input className="margens" type='text' placeholder="10"
            value={dados.vaga} />

            <button>Salvar</button>
            <button>Limpar</button>

        </div>
    )
}

export default CadastroVeiculo