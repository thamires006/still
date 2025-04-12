import { useState } from "react"
import './mostruario.css'

function Mostruario() {

    const [friends, setFriends] = useState([]);
    const [family, setFamily] = useState([]);
    const [moverParaMesa, setMoverParaMesa] = useState([]);


    const buscarConvidados = () => {
        fetch(`https://67af9706dffcd88a67871a39.mockapi.io/casamento/tst/amigos`)
            .then(response => response.json())
            .then(data => setFriends(data))
            .catch(error => console.error("erro ao buscar amigos", error));

        fetch(`https://67af9706dffcd88a67871a39.mockapi.io/casamento/tst/familia`)
            .then(response => response.json())
            .then(data => setFamily(data))
            .catch(error => console.error("erro ao buscar família", error));
    }
    const transferir = (movido, origem) => {
        let convidadoSelecionado;

        if (origem === "friends") {
            convidadoSelecionado = friends.find(friend => friend.id === movido)
            setFriends(friends.filter(friend => friend.id !== movido))
        } else if (origem === "family") {
            convidadoSelecionado = family.find(familiar => familiar.id === movido)
            setFamily(family.filter(familiar => familiar.id !== movido))

        }

        if(convidadoSelecionado) {
            setMoverParaMesa([...moverParaMesa, convidadoSelecionado])
        }



    }

    return (
        <div className="mostruarioGeral">

            <h2>Amigos do casal</h2>
            <ul>{friends.map(friend => (
                <li key={friend.id}>{friend.nome}<button onClick={() => transferir(friend.id, "friends")}>Mover</button></li>
            ))}</ul>

            <h2>Familia do casal</h2>
            <ul>{family.map(familiar => (
                <li key={familiar.id}>{familiar.nome}<button onClick={() => transferir(familiar.id, "family")}>Mover</button></li>
            ))}</ul>
            <h2>Lista de Transferidos</h2>
            <ul>
                {moverParaMesa.map(person => (
                    <li key={person.id}>{person.nome}</li>
                ))}
            </ul>

            <button className="buttonAtualizar" onClick={buscarConvidados}>Atualizar lista</button>

        </div>
    )
}

export default Mostruario