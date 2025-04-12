import './campo.css'


function Campo({ label, type = "text", valor, obrigatorio, placeholder, aoAlterado, props }) {

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className='campoNome'>
            <label className='labelNome'>{label}</label>
            <input 
                className='campoTexto'
                type={type}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
                onChange={aoDigitar}
            ></input>
        </div>
    )
};

export default Campo