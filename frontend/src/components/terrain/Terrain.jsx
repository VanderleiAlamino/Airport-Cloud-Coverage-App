import './Terrain.scss'
import React, { useState } from 'react'

export default (props) => {    

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

            for (const numGerado of props.numeros) {
                if (numGerado === numberGrid) {
                    terrainGrid.pop()

                    if (indexArray % 2 === 0) {
                        terrainGrid.push(<div className="grid cloud"></div>)
                    } else {
                        terrainGrid.push(<div className="grid airport"></div>)
                    }
                    indexArray++
                }
            }
        }
    }


    return (

        <div>
            <section className={`terrain ${props.activeInterfaceUi ? "ui" : ""} ${props.activeInterfaceLine ? "lines" : ""} `} id="terrain">
                {terrainGrid}
            </section>
        </div>


    )
}