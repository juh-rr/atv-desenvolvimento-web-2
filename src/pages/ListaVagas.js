import React, {useState, useEffect} from "react";
import "./ListaVagas.css"
import Card from "../components/Card"

function ListaVagas() {

    const [cadastros, setCadastros] = useState([])

    const carregarVagas = () => {
        const vagasCadastradas = JSON.parse(localStorage.getItem("cadastros"))
        setCadastros(vagasCadastradas)
    }

    useEffect(() => {
carregarVagas()
        window.addEventListener("atualizacaovagas", carregarVagas)
        return () => {
            window.removeEventListener("atualizacaovagas", carregarVagas)
        }
    }, [])

    return (
        <div>
            <h1>Lista de vagas ocupadas</h1>
            {
                cadastros.map((vaga) => <Card cadastro={vaga} />)
            }
        </div>
        
    )
}

export default ListaVagas