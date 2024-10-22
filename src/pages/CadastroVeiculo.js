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
}


    return (
        <div className="formulario">
            <CustomInput label="Nome completo"
                         tipo="text"
                         preenchimento="Digite o seu nome"  
                         valor={dados.nome} 
                         handleInput={handleInput}
                         name="nome"/>


            <CustomInput label="Placa do veículo"
                         tipo="text"
                         preenchimento="DDD0D00"  
                         valor={dados.placa} 
                         handleInput={handleInput}
                         name="placa"/>  
    
            <CustomInput label="Modelo do veículo"
                         tipo="text"
                         preenchimento="Uno"  
                         valor={dados.modelo} 
                         handleInput={handleInput}
                         name="modelo"/> 

            <CustomInput label="Cor do veículo"
                         tipo="text"
                         preenchimento="Branco"  
                         valor={dados.cor} 
                         handleInput={handleInput}
                         name="cor"/>
            
            <CustomInput label="Número do apartamento"
                         tipo="text"
                         preenchimento="01"  
                         valor={dados.apto} 
                         handleInput={handleInput}
                         name="apto"/>
            
            <CustomInput label="Bloco do apartamento"
                         tipo="text"
                         preenchimento="A"  
                         valor={dados.bloco} 
                         handleInput={handleInput}
                         name="bloco"/>
    
            <CustomInput label="Número da vaga de estacionamento"
                         tipo="text"
                         preenchimento="10"  
                         valor={dados.vaga} 
                         handleInput={handleInput}
                         name="vaga"/>

            <button onClick={salvar}>Salvar</button>
            <button>Limpar</button>

        </div>
    )
}

export default CadastroVeiculo