import React, { useState } from 'react'

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0))

    function gerarNumerosNaoContido(array) {
        const novoNumero = parseInt(Math.random() * 100)
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros() {

        const novoArray =  Array(props.qtdNumeros)
        .fill(0)
        .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
        .sort((a, b) => a - b)
        setNumeros(novoArray);
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>

            <button className="btn btn-success" onClick={gerarNumeros}>Gerar números</button>
        </div>
    )
}