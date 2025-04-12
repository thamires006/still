import { useState } from "react";

function CriarMesa() {
    const [nomeDaMesa, setNomeDaMesa] = useState("");
    const [qAssentos, setQAssentos] = useState("");
    const [mesas, setMesas] = useState([]);

    const addMesa = (event) => {
        event.preventDefault();

        if (nomeDaMesa && qAssentos) {
            let novaMesa = {
                nome: nomeDaMesa,
                assentos: qAssentos
            };
            setMesas([...mesas, novaMesa]);

            setNomeDaMesa("");
            setQAssentos("");
        } else {
            alert("Preencha todos os campos.")
        }
    };
    return (
        <div>
            <form onSubmit={addMesa}>

                <label>Nome da mesa</label>
                <input value={nomeDaMesa} onChange={(e) => setNomeDaMesa(e.target.value)} placeholder="Exemplo: Mesa 1" type="text"></input>

                <label>Quantidade de assentos</label>
                <input value={qAssentos} onChange={(e) => setQAssentos(e.target.value)} type="number"></input>

                <button type="submit" >Cadastrar mesa</button>

                <h2>Lista de mesas</h2>
                <ul>{mesas.map((mesa, index) => (<li key={index}>{mesa.nome} = {mesa.assentos} assentos</li>))}

                </ul>
            </form>
        </div>
    )

}

export default CriarMesa