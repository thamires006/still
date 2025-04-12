import "./formulario.css"
import { useState } from "react"
import Campo from "../Campo"
import Mostruario from "../Mostruario"
import Opcoes from "../Opcoes"
import CriarMesa from "../CriarMesa"

function Formulario() {

    const [nome, setNome] = useState('')
    const [familia, setFamilia] = useState('')
    const [addmesa, setAddmesa] = useState(false)

    let pertence = familia

    if (familia === "Amigos") {
        pertence = "amigos"
    } else {
        pertence = "familia"
    }

    return (
        <div className="formulario">
            <div className="cadastro">
                <Campo
                    label="Nome"
                    valor={nome}
                    aoAlterado={setNome}
                    obrigatorio={true}
                    placeholder="Nome do convidado"
                />
                <Opcoes
                    obrigatorio={true}
                    label="Convidado pertencente a:"
                    valor={familia}
                    aoAlterado={setFamilia}
                />
                <button className="buttonCadastrar" onClick={() => {
                    fetch(`https://67af9706dffcd88a67871a39.mockapi.io/casamento/tst/${pertence}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nome,
                            familia,
                        }),
                    })
                }}>Cadastrar convidado</button>
                <div className="adicionarMesa">
                        <button onClick={() => setAddmesa(true)}>Adicionar Mesa</button>
                        {addmesa && <CriarMesa />}
                </div>
            </div>
            <Mostruario />
        </div>
    )


}

export default Formulario