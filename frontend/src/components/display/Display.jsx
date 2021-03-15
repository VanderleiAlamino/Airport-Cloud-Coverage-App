import './Display.scss'
import React from 'react'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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