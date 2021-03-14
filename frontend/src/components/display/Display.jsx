import './Display.scss'
import React from 'react'


export default (props) => {

    

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
                <small>Developed with by <strong>GFT</strong></small>
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
        </div>
    )
}