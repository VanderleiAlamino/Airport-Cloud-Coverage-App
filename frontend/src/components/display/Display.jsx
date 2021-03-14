import './Display.scss'
import React, { useState } from 'react'

import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default (props) => {    
    
    const [numeros, setNumeros] = useState(Array(7).fill(0))
    function gerarNumerosNaoContido(array) {
        const novoNumero = parseInt(Math.random() * 100)
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }
    function gerarNumeros() {
        const novoArray = Array(7)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
            .sort((a, b) => a - b)
        setNumeros(novoArray);

        props.onClickElements(numeros)
    }

    function toggleInterface(e){        
        props.onClicar(e.target.checked)
    }

    function toggleLines(e){        
        props.onClickLines(e.target.checked)
    }    

    return (
        <div className="sidebar">        

            <div className="nav-header">
                Airport Cloud Coverage
                <small>Developed with <span><FontAwesomeIcon icon={faHeart} /></span> by <strong>GFT</strong></small>
            </div>

            <div className="items-display ui">
                Graphic interface

                <label className="switch">
                    <input type="checkbox" onChange={toggleInterface} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="items-display ui">
                Lines

                <label className="switch">
                    <input type="checkbox" onChange={toggleLines} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="items-display ui">
                Create Airports & Clouds

                <button className="btn btn-light btn-sm" onClick={gerarNumeros}>
                    <FontAwesomeIcon icon={faPlane} />
                </button>
            </div>

            <div className="items-display ui">
                Terrain

                <div className="square terrain">
                </div>                
            </div>

            <div className="items-display ui">
                Clouds

                <div className="square cloud">
                </div>                
            </div>

            <div className="items-display ui">
                Airports

                <div className="square airport">
                </div>                
            </div>
        </div>
    )
}