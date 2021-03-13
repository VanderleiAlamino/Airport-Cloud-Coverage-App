import './Fundamentos.scss'
import React from 'react'

import Primeiro from './components-fundamentos/basics/Primeiro'
import ComParametro from './components-fundamentos/basics/ComParametro'
import ComFilhos from './components-fundamentos/basics/ComFilhos'
import Card from './components-fundamentos/layout/Card'
import Repeticao from './components-fundamentos/basics/Repeticao'
import Condicional from './components-fundamentos/basics/Condicional'
import CondicionalComIf from './components-fundamentos/basics/CondicionalComIf'
import Pai from './components-fundamentos/comunicacao/direta/Pai'
import Super from './components-fundamentos/comunicacao/indireta/Super'
import Input from './components-fundamentos/forms/Input'
import Contador from './components-fundamentos/contador/Contador'
import Mega from './components-fundamentos/mega/Mega'

export default (props) =>
(
    <div className="App container">

        <h1 className="py-3">Fundamentos do React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro componente" color="#FA6900">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Componente com parâmetro" color="#E94C6F">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>

            <Card titulo="#03 - Componente com filhos" color="#008BBA">
                <ComFilhos>
                    <ul>
                        <li>Jota</li>
                        <li>Giovanna</li>
                        <li>Fernanda</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Repetição" color="#D96459">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#05 - Condicional" color="#FF85CB">
                <Condicional numero={11}></Condicional>
            </Card>

            <Card titulo="#06 - Condicional com If" color="#92B06A">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>

            <Card titulo="#07 - Comunicação direta" color="#4298B5">
                <Pai sobrenome="José Alamino"></Pai>
            </Card>

            <Card titulo="#08 - Comunicação indireta" color="#009966">
                <Super></Super>
            </Card>

            <Card titulo="#09 - Formulários" color="#9C0F5F">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#11 - Mega" color="#EF9950">
                <Mega qtdNumeros={8}></Mega>
            </Card>
        </div>


    </div>
);