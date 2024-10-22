import React from "react";
import {Routes, Route} from 'react-router-dom'
import './tela.css'
import CadastroVeiculo from "./CadastroVeiculo";
import ListaVagas from "./ListaVagas";

function Tela() {
    return (
        <div>
            <h1> Tela inicial</h1>
            <Routes>
                <Route path='/cadastro' element={<CadastroVeiculo />} />
                <Route path='/lista' element={<ListaVagas />} />                 
            </Routes>
        </div>
    )
}

export default Tela