import './Terrain.scss'
import React from 'react'

export default (props) => {    

    const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let terrainGrid = []
    let numberGrid = 0;

    for (let j = 0; j < verticalAxis.length; j++) {
        for (let i = 0; i < horizontalAxis.length; i++) {                     
            numberGrid++;   
            terrainGrid.push( <div className="grid"> [ {numberGrid} ] </div> )            
        }
    }

    

    return (        


        <section className={`terrain ${props.activeInterfaceUi ? "ui" : ""} ${props.activeInterfaceLine ? "lines" : ""} `} id="terrain">
        
            {terrainGrid}


        </section>
    )
}