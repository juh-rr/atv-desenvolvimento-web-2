import React from "react";
import {Routes, Route} from 'react-router-dom'
import './tela.css'
import CadastroVeiculo from "./CadastroVeiculo";
import ListaVagas from "./ListaVagas";
import ButtonLink from "../components/ButtonLink";

function Tela() {
    

    return (
        <div>
            <h1> Tela inicial</h1>
            <div className="botoes">
                <ButtonLink to ="/cadastro">Cadastro de vagas</ButtonLink>
                <ButtonLink to ="/lista">Lista de vagas </ButtonLink>
            </div>
            <Routes>
                <Route path='/cadastro' element={<CadastroVeiculo />} />
                <Route path='/lista' element={<ListaVagas />} />                 
            </Routes>
        </div>
    )
}

export default Tela