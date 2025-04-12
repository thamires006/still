import './opcoes.css'
function Opcoes({label , valor , obrigatorio , aoAlterado}) {
    return (
        <div className='opcoesGeral'>
            <label className='labelOpcoes'>{label}</label>
            <select className='selectPertence' onChange={evento => aoAlterado(evento.target.value)}
                value={valor}
                required={obrigatorio}>
                    <option defaultValue="" disabled selected>Selecione</option>
                <option>Família</option>
                <option>Amigos</option>
            </select>
        </div>
    )
}

export default Opcoes;