import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) =>
(
    <div className="App">

        <Card titulo="#01 - Primeiro componente">
            <Primeiro />
        </Card>

        <Card titulo="#02 - Componente com parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Jota</li>
                    <li>Giovanna</li>
                    <li>Fernanda</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo="#06 - Condicional com If">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
    </div>
);