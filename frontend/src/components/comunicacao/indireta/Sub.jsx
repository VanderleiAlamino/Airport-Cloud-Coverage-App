import React from 'react'

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), "Gerado")
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={acao}>Alterar</button>
        </div>
    );
};
