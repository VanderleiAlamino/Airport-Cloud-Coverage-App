import './Variables.scss'
import './App.scss'
import React, { useState } from 'react'
import Terrain from './components/terrain/Terrain'
import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

export default (props) => {

    const [interfaceUi, setInterfaceUi] = useState(false)
    const [interfaceLine, setInterfaceLine] = useState(false)

    function quandoClicar(interfaceUi) {
        setInterfaceUi(interfaceUi)
    }

    function whenClickLines(interfaceLine) {
        setInterfaceLine(interfaceLine)
    }

    return (
        <div className="app-airport">

            <Display
                onClicar={quandoClicar}
                onClickLines={whenClickLines}
            />

            <Terrain
                activeInterfaceUi={interfaceUi}
                activeInterfaceLine={interfaceLine}
                qtdNumeros={7}
            />

            <Dashboard />
        </div>
    )
}
