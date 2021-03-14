import './Terrain.scss'
import React, { useState } from 'react'

export default (props) => {

    /* GERAR NÚMEROS ALEATÓRIOS NÃO REPETITIVOS */
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

    /* GERAR GRID NO TERRAIN */
    const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let terrainGrid = []
    let numberGrid = 0;
    let indexArray = 0;
    

    for (let j = 0; j < verticalAxis.length; j++) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            numberGrid++;
            terrainGrid.push(<div className="grid"></div>)   

            for (const numGerado of numeros) {                
                if(numGerado === numberGrid){                    
                    terrainGrid.pop()
                    
                    if(indexArray % 2 === 0){
                        terrainGrid.push(<div className="grid cloud"></div>)
                    }else{
                        terrainGrid.push(<div className="grid airport"></div>)
                    }
                    indexArray++
                }
            }

            // for(const item of numeros){
            //     if(item === numberGrid){
            //         terrainGrid.push(<div className="grid cloud"></div>)
            //     }
            // }
        }
    }   

       


    return (

        <div>
        <button className="btn btn-success" onClick={gerarNumeros}>Gerar números</button>

        <section className={`terrain ${props.activeInterfaceUi ? "ui" : ""} ${props.activeInterfaceLine ? "lines" : ""} `} id="terrain">            
            {terrainGrid}
        </section>
        </div>

        
    )
}