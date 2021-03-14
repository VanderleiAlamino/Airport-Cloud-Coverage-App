import './Variables.scss'
import './App.scss'
import React, { useState } from 'react'
import Terrain from './components/terrain/Terrain'
import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

export default (props) => {

    const [interfaceUi, setInterfaceUi] = useState(false)
    const [interfaceLine, setInterfaceLine] = useState(false)    
    const [numeros, setNumeros] = useState([3,15,33,49,66,72,93])

    function quandoClicar(interfaceUi) {
        setInterfaceUi(interfaceUi)
    }

    function whenClickLines(interfaceLine) {
        setInterfaceLine(interfaceLine)
    }

    function whenClickElements(numeros){        
        setNumeros(numeros)        
    }    

    return (
        <div className="app-airport">

            <Display
                onClicar={quandoClicar}
                onClickLines={whenClickLines}
                onClickElements={whenClickElements}                
            />

            <Terrain
                activeInterfaceUi={interfaceUi}
                activeInterfaceLine={interfaceLine}                
                numeros={numeros}
            />

            <Dashboard />
        </div>
    )
}
