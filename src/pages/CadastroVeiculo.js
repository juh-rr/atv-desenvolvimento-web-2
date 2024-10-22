import React, {useState} from "react";
import './CadastroVeiculo.css'
import CustomInput from "../components/CustomInput";

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

const handleInput = (event) => {
    const {name, value} = event.target 
    setDados({...dados, [name]: value})
}

const salvar = () => {
    console.log(dados)
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
    cadastros.push(dados)
    localStorage.setItem("cadastros", JSON.stringify(cadastros))
    alert("Cadastro de vaga realizado com sucesso.")
    limpar()
}

const limpar = () => {
    setDados (
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
}

    return (
        <div className="formulario">
            <CustomInput label="Nome completo"
                         tipo="text"
                         preenchimento="Digite o seu nome"  
                         valor={dados.nome} 
                         handleInput={handleInput}
                         nome="nome"
                         classe="margens"/>


            <CustomInput label="Placa do veículo"
                         tipo="text"
                         preenchimento="DDD0D00"  
                         valor={dados.placa} 
                         handleInput={handleInput}
                         nome="placa"
                         classe="margens"/>  
    
            <CustomInput label="Modelo do veículo"
                         tipo="text"
                         preenchimento="Uno"  
                         valor={dados.modelo} 
                         handleInput={handleInput}
                         nome="modelo"
                         classe="margens"/> 

            <CustomInput label="Cor do veículo"
                         tipo="text"
                         preenchimento="Branco"  
                         valor={dados.cor} 
                         handleInput={handleInput}
                         nome="cor"
                         classe="margens"/>
            
            <CustomInput label="Número do apartamento"
                         tipo="text"
                         preenchimento="01"  
                         valor={dados.apto} 
                         handleInput={handleInput}
                         nome="apto"
                         classe="margens"/>
            
            <CustomInput label="Bloco do apartamento"
                         tipo="text"
                         preenchimento="A"  
                         valor={dados.bloco} 
                         handleInput={handleInput}
                         nome="bloco"
                         classe="margens"/>
    
            <CustomInput label="Número da vaga de estacionamento"
                         tipo="text"
                         preenchimento="10"  
                         valor={dados.vaga} 
                         handleInput={handleInput}
                         nome="vaga"
                         classe="margens"/>

            <button onClick={salvar}>Salvar</button>
            <button onClick={limpar}>Limpar</button>

        </div>
    )
}

export default CadastroVeiculo